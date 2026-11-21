import {activityLayout,validateActivity} from './github-calendar.mjs'

const maxAge=60*60*1000
function snapshot(value,username){
 if(value?.username!==username||!Number.isFinite(Date.parse(value.updatedAt)))throw Error('Invalid activity snapshot')
 return {...value,data:validateActivity(value.data)}
}
export async function latestActivity(username,{fetchImpl=fetch,storage,now=Date.now}={}){
 if(!/^[a-z\d][a-z\d-]{0,38}$/i.test(username))throw Error('Invalid GitHub username')
 const key='roy-github-activity:'+username;let saved
 try{saved=snapshot(JSON.parse(storage?.getItem(key)||'null'),username)}catch{}
 const fresh=value=>value&&now()-Date.parse(value.updatedAt)>=0&&now()-Date.parse(value.updatedAt)<maxAge
 if(fresh(saved))return saved
 try{
  const response=await fetchImpl(`/github-activity/${encodeURIComponent(username)}.json`,{cache:'no-store',signal:AbortSignal.timeout(6000)})
  if(response.ok){
   const local=snapshot(await response.json(),username)
   if(!saved||(
    local.data.contributions.at(-1).date>=saved.data.contributions.at(-1).date&&
    Date.parse(local.updatedAt)>Date.parse(saved.updatedAt)
   ))saved=local
  }
 }catch{}
 if(!fresh(saved))try{
  const response=await fetchImpl(`https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(username)}?y=last`,{cache:'no-store',signal:AbortSignal.timeout(10000)})
  if(!response.ok)throw Error('Activity request failed')
  const data=validateActivity(await response.json()),last=data.contributions.at(-1).date
  if(Date.parse(last+'T00:00:00Z')<now()-3*86400000||saved&&last<saved.data.contributions.at(-1).date)throw Error('Stale activity response')
  saved={username,updatedAt:new Date(now()).toISOString(),source:'contributions-api',data}
 }catch{}
 if(saved)try{storage?.setItem(key,JSON.stringify(saved))}catch{}
 return saved||null
}
const colors=['fill-[#ebedf0] dark:fill-[#161b22]','fill-[#c6e48b] dark:fill-[#0e4429]','fill-[#7bc96f] dark:fill-[#006d32]','fill-[#239a3b] dark:fill-[#26a641]','fill-[#196127] dark:fill-[#39d353]']
export function renderCalendar(root,value){
 const svg=root.querySelector('[data-calendar-svg]'),summary=root.querySelector('[data-calendar-summary]')
 if(!svg||!summary)return
 const {weeks,months,width,height,period,data}=activityLayout(value),doc=root.ownerDocument
 const node=(tag,attrs={},text)=>{const el=doc.createElementNS('http://www.w3.org/2000/svg',tag);for(const [key,value] of Object.entries(attrs))el.setAttribute(key,String(value));if(text!==undefined)el.textContent=text;return el}
 const fragment=doc.createDocumentFragment(),labels=node('g')
 for(const {weekIndex,label} of months)labels.append(node('text',{x:16*weekIndex,y:0,'dominant-baseline':'hanging',fill:'currentColor'},label))
 fragment.append(labels)
 weeks.forEach((week,wi)=>{const group=node('g',{transform:`translate(${wi*16}, 0)`});week.forEach((day,di)=>{if(!day)return;const rect=node('rect',{class:'stroke-foreground/10 hover:opacity-80 '+colors[day.level],x:0,y:22+16*di,width:12,height:12,rx:2,ry:2,'data-date':day.date,'data-level':day.level});rect.append(node('title',{},`${day.count} contributions on ${day.date}`));group.append(rect)});fragment.append(group)})
 svg.replaceChildren(fragment);svg.setAttribute('width',width);svg.setAttribute('height',height);svg.setAttribute('viewBox',`0 0 ${width} ${height}`)
 summary.textContent=`${data.total.lastYear} contributions · ${period}`
 root.dataset.lastDate=data.contributions.at(-1).date
}
async function refreshCalendars(){
 for(const root of document.querySelectorAll('[data-github-calendar]')){
  if(root.dataset.refreshing)continue;root.dataset.refreshing='true'
  try{
   let storage;try{storage=localStorage}catch{}
   const value=await latestActivity(root.dataset.username,{storage})
   if(value&&root.isConnected&&value.data.contributions.at(-1).date>=root.dataset.lastDate&&Date.parse(value.updatedAt)>Date.parse(root.dataset.updatedAt)){
    renderCalendar(root,value.data);root.dataset.updatedAt=value.updatedAt
   }
  }catch{}finally{delete root.dataset.refreshing}
 }
}
if(typeof document!=='undefined'){
 void refreshCalendars()
 document.addEventListener('astro:page-load',refreshCalendars)
 const refreshWhenVisible=()=>{if(document.visibilityState==='visible')void refreshCalendars()}
 document.addEventListener('visibilitychange',refreshWhenVisible)
 window.setInterval(refreshWhenVisible,maxAge)
}
