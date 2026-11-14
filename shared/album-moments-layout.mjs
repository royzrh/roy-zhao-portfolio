// Transpose a three-column photo waterfall into three independently packed horizontal rows.
export function horizontalWaterfall(ratios,{rows=3,height=180,gap=8}={}){
 const count=Math.min(rows,ratios.length),ends=Array(count).fill(0)
 const positions=ratios.map(value=>{
  const ratio=Number.isFinite(value)&&value>0?value:1,row=ends.indexOf(Math.min(...ends)),width=height*ratio,x=ends[row]
  ends[row]=x+width+gap
  return {x,y:row*(height+gap),width,height,row}
 })
 return {positions,width:Math.max(0,...ends.map(x=>x-gap)),height:count?count*height+(count-1)*gap:0}
}
