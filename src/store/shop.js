import {create} from 'zustand';
import {persist} from 'zustand/middleware';
import {BASE_FEES,BRANCHES,PRODUCTS} from '../data/catalog.js';
import {clampQty,branchForCity} from '../lib/calc.js';
const uid=p=>`${p}-${globalThis.crypto?.randomUUID?.()||Math.random().toString(36).slice(2)+Date.now().toString(36)}`;
const initialPrices=Object.fromEntries(PRODUCTS.map(p=>[p.id,p.price]));
const defaultFees=()=>structuredClone(BASE_FEES);
export const useShop=create(persist((set,get)=>({
 cart:[],drawer:false,city:'cbba',branch:'cbba-centro',mode:'delivery',zone:'',address:'',reference:'',prices:initialPrices,fees:defaultFees(),orders:[],sessions:[],inbox:[],
 openDrawer:v=>set({drawer:v}),
 add:(id,qty=1)=>set(s=>{if(!PRODUCTS.some(p=>p.id===id))return s;const n=clampQty(qty);if(!n)return s;const old=s.cart.find(l=>l.id===id);return {cart:old?s.cart.map(l=>l.id===id?{...l,qty:clampQty(l.qty+n)}:l):[...s.cart,{id,qty:n}]}}),
 qty:(id,n)=>set(s=>({cart:clampQty(n)?s.cart.map(l=>l.id===id?{...l,qty:clampQty(n)}:l):s.cart.filter(l=>l.id!==id)})),
 remove:id=>set(s=>({cart:s.cart.filter(l=>l.id!==id)})),
 clear:()=>set({cart:[]}),
 location:p=>set(s=>{const city=p.city??s.city;const branch=branchForCity(city,p.branch??s.branch);return {...p,city,branch,zone:p.city&&p.city!==s.city?'':p.zone??s.zone}}),
 createOrder:data=>{const order={...data,id:uid('WIS'),createdAt:Date.now(),step:0};set(s=>({orders:[order,...s.orders]}));return order},
 updateOrder:(id,patch)=>set(s=>({orders:s.orders.map(o=>o.id===id?{...o,...patch}:o)})),
 createSession:(orderId)=>{const order=get().orders.find(o=>o.id===orderId);if(!order)return null;const session={id:uid('QR'),orderId,amount:order.total,expiresAt:Date.now()+15*60*1000,status:'pendiente'};set(s=>({sessions:[session,...s.sessions],orders:s.orders.map(o=>o.id===orderId?{...o,payStatus:'qr_pendiente'}:o)}));return session},
 confirmSession:(sessionId)=>{const s=get().sessions.find(x=>x.id===sessionId);if(!s||s.status!=='pendiente'||s.expiresAt<=Date.now())return false;set(old=>({sessions:old.sessions.map(x=>x.id===sessionId?{...x,status:'pagado_prueba'}:x),orders:old.orders.map(o=>o.id===s.orderId?{...o,payStatus:'pagado_prueba'}:o)}));return true},
 editPrice:(id,price)=>set(s=>({prices:{...s.prices,[id]:Math.max(0,Number(price)||0)}})),
 editFee:(city,zone,fee)=>set(s=>({fees:{...s.fees,[city]:{...s.fees[city],[zone]:Math.max(0,Number(fee)||0)}}})),
 addInbox:(type,data)=>set(s=>({inbox:[{id:uid('MSG'),type,createdAt:Date.now(),data},...s.inbox]})),
} ),{name:'wistupiku-endgame-v1',partialize:({drawer,...s})=>Object.fromEntries(Object.entries(s).filter(([,v])=>typeof v!=='function'))}));
