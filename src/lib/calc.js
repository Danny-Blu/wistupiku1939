import { BASE_FEES, BRANCHES, PRODUCTS } from '../data/catalog.js';
export function subtotal(cart, prices={}){return cart.reduce((sum,line)=>{const p=PRODUCTS.find(x=>x.id===line.id);return sum+(p?(prices[p.id]??p.price)*line.qty:0)},0)}
export function deliveryFee({city,mode,zone,fees=BASE_FEES}){if(mode==='retiro')return 0;if(!zone||!fees[city]||typeof fees[city][zone]!=='number')return null;return fees[city][zone]}
export function cartTotal(cart,opts){const sub=subtotal(cart,opts.prices);const fee=deliveryFee(opts);return {subtotal:sub,delivery:fee,total:fee===null?null:sub+fee}}
export function branchForCity(city,branch){return BRANCHES.some(b=>b.city===city&&b.id===branch)?branch:BRANCHES.find(b=>b.city===city)?.id||''}
export function clampQty(v){const n=Number(v);return Number.isFinite(n)?Math.max(0,Math.min(99,Math.floor(n))):0}
