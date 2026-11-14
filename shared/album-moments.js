import {horizontalWaterfall} from './album-moments-layout.mjs'
const section=document.getElementById('album-moments')
if(section){
 const feed=section.querySelector('[data-feed]');let pending=false
 if(feed){feed.tabIndex=0;feed.addEventListener('dragstart',event=>event.preventDefault());feed.addEventListener('keydown',event=>{if(event.target===feed&&['ArrowLeft','ArrowRight'].includes(event.key)){event.preventDefault();feed.scrollBy({left:(event.key==='ArrowLeft'?-1:1)*feed.clientWidth*.8,behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth'})}})}
 const layout=()=>{
  pending=false;if(!feed)return
  const items=[...feed.children],imageHeight=Math.min(260,Math.max(180,innerWidth*.22)),gap=8
  const ratios=items.map(item=>{const image=item.querySelector('img');return image?(Number(image.getAttribute('width'))||image.naturalWidth||1)/(Number(image.getAttribute('height'))||image.naturalHeight||1):1})
  const {positions,height}=horizontalWaterfall(ratios,{rows:3,height:imageHeight,gap})
  items.forEach((item,i)=>{const p=positions[i];Object.assign(item.style,{left:p.x+'px',top:p.y+'px',width:p.width+'px',height:p.height+'px'})})
  feed.style.height=height+16+'px'
 }
 const schedule=()=>{if(!pending){pending=true;requestAnimationFrame(layout)}}
 section.addEventListener('roy-moments-rendered',layout)
 section.addEventListener('load',schedule,true)
 const observer=new ResizeObserver(schedule);observer.observe(section)
 schedule()
 // Mouse users can drag the horizontal waterfall; touch scrolling remains native.
 let drag
 feed?.addEventListener('pointerdown',event=>{if(event.pointerType!=='mouse'||event.button!==0)return;drag={id:event.pointerId,start:event.clientX,left:feed.scrollLeft,moved:false}})
 feed?.addEventListener('pointermove',event=>{if(!drag||event.pointerId!==drag.id)return;if(Math.abs(event.clientX-drag.start)>6){drag.moved=true;feed.setPointerCapture(event.pointerId);feed.scrollLeft=drag.left-(event.clientX-drag.start)}})
 feed?.addEventListener('click',event=>{if(drag?.moved){event.preventDefault();event.stopImmediatePropagation();drag=null}},true)
 feed?.addEventListener('pointerup',()=>{if(drag&&!drag.moved)drag=null})
 feed?.addEventListener('pointercancel',()=>{drag=null})
 if(window.__ALBUM_EDITOR_PREVIEW__){const status=section.querySelector('[data-status]');if(status){status.hidden=false;status.textContent='本地预览不连接或写入时刻数据；正式相册与主站共用同一份时刻。'}}
}
