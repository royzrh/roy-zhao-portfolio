// @jsquash/webp 1.5.0 / libwebp, Apache-2.0; see LICENSE and README.md.
import createEncoder from './webp_enc.js'
import {defaultOptions} from './meta.js'
let ready
export default async function encode(image,quality){
 if(!ready)ready=createEncoder({locateFile:name=>new URL(name,import.meta.url).href}).catch(error=>{ready=undefined;throw error})
 const codec=await ready
 const bytes=codec.encode(image.data,image.width,image.height,{...defaultOptions,quality})
 if(!bytes||bytes.byteLength<12)throw Error('photo-webp')
 const header=String.fromCharCode(...bytes.subarray(0,12))
 if(!header.startsWith('RIFF')||header.slice(8)!=='WEBP')throw Error('photo-webp')
 return new Blob([bytes],{type:'image/webp'})
}
