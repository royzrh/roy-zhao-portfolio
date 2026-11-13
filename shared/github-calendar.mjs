// Shared by the build snapshot loader and browser refresh; no network or DOM dependencies.
export function validateActivity(value){
 if(!value||!Array.isArray(value.contributions)||value.contributions.length<1||value.contributions.length>370)throw Error('Invalid contribution calendar')
 const seen=new Set();const contributions=value.contributions.map(day=>{
  if(!/^\d{4}-\d{2}-\d{2}$/.test(day.date)||new Date(day.date+'T00:00:00Z').toISOString().slice(0,10)!==day.date||seen.has(day.date)||!Number.isSafeInteger(day.count)||day.count<0||!Number.isInteger(day.level)||day.level<0||day.level>4)throw Error('Invalid contribution day')
  seen.add(day.date);return {date:day.date,count:day.count,level:day.level}
 }).sort((a,b)=>a.date.localeCompare(b.date))
 return {contributions,total:{lastYear:contributions.reduce((sum,day)=>sum+day.count,0)}}
}
export function activityLayout(value){
 const data=validateActivity(value),days=data.contributions,first=Date.parse(days[0].date+'T00:00:00Z'),last=Date.parse(days.at(-1).date+'T00:00:00Z')
 if(last-first>369*86400000)throw Error('Contribution date range too large')
 const byDate=new Map(days.map(day=>[day.date,day])),padded=Array(new Date(first).getUTCDay()).fill(null)
 for(let time=first;time<=last;time+=86400000){const date=new Date(time).toISOString().slice(0,10);padded.push(byDate.get(date)||{date,count:0,level:0})}
 const weeks=Array.from({length:Math.ceil(padded.length/7)},(_,i)=>padded.slice(i*7,i*7+7)),monthNames=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],months=[]
 for(const [weekIndex,week] of weeks.entries()){const day=week.find(Boolean);if(!day)continue;const label=monthNames[Number(day.date.slice(5,7))-1];if(!months.length||months.at(-1).label!==label)months.push({weekIndex,label})}
 return {data,weeks,months,width:weeks.length*16-4,height:130,period:`${days[0].date.slice(0,4)}–${days.at(-1).date.slice(0,4)}`}
}
