import {describe,it,expect} from 'vitest';
import {subtotal,deliveryFee,cartTotal,branchForCity,clampQty} from './calc.js';
import {PRODUCTS} from '../data/catalog.js';
describe('Cálculos del pedido',()=>{
 it('suma cantidades y no redondea arbitrariamente',()=>{
  const carne=PRODUCTS.find(p=>p.name==='Empanada de Carne');const api=PRODUCTS.find(p=>p.name==='Api Morado');
  const cart=[{id:carne.id,qty:3},{id:api.id,qty:2}];
  expect(subtotal(cart)).toBe(51);
  expect(cartTotal(cart,{city:'cbba',mode:'delivery',zone:'intermedia'})).toEqual({subtotal:51,delivery:12,total:63});
 });
 it('retiro es gratis y delivery incompleto no devuelve un precio engañoso',()=>{
  expect(deliveryFee({mode:'retiro',city:'lpz'})).toBe(0);
  expect(deliveryFee({mode:'delivery',city:'lpz'})).toBeNull();
  expect(deliveryFee({mode:'delivery',city:'scz',zone:'periferica'})).toBe(30);
 });
 it('corrige sucursal fuera de la ciudad y cantidades inválidas',()=>{
  expect(branchForCity('lpz','cbba-centro')).toBe('lpz-centro');
  expect(clampQty(-2)).toBe(0);expect(clampQty(1000)).toBe(99);
 });
});
