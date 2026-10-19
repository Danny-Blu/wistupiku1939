import hero from '../assets/hero.jpg';
import saltenas from '../assets/saltenas.jpg';
import fritas from '../assets/fritas.jpg';
import bebidas from '../assets/bebidas.jpg';
import helados from '../assets/helados.jpg';
import manos from '../assets/manos.jpg';
export const ASSETS={hero,saltenas,fritas,bebidas,helados,manos};
export const CATEGORIES=[
 {id:'horno',name:'Empanadas al horno',image:hero,blurb:'El clásico de cada mesa.'},
 {id:'fritas',name:'Empanadas fritas',image:fritas,blurb:'Doradas y crocantes.'},
 {id:'tradicionales',name:'Salteñas y tradicionales',image:saltenas,blurb:'Sabores que nos reúnen.'},
 {id:'helados',name:'Helados',image:helados,blurb:'Para el último antojo.'},
 {id:'calientes',name:'Bebidas calientes',image:bebidas,blurb:'Para acompañar el día.'},
 {id:'refrescos',name:'Jugos y refrescos',image:bebidas,blurb:'Un sorbo de tradición.'}
];
const raw={
 horno:[['Empanada Blanca',9],['Empanada Roja',9],['Empanada de Carne',11],['Empanada de Charque',13],['Empanada de Cuñape',10],['Empanada de Pollo',11]],
 fritas:[['Frita de Carne',10],['Frita de Pollo',10],['Frita de Queso',9]],
 tradicionales:[['Salteña de Carne',12],['Salteña de Pollo',12],['Huminta',10],['Pastel de Queso',10],['Pan de Arani',7]],
 helados:[['Helado de Canela',10],['Helado de Chirimoya',12],['Helado de Frutilla',11],['Helado de Leche',10]],
 calientes:[['Api Blanco',9],['Api Morado',9],['Arroz con Leche',10],['Café Destilado con Leche',9],['Café Destilado',8],['Leche Caliente',7],['Mate',6],['Tojorí',9],['Tojorí con Leche',10]],
 refrescos:[['Jugo de Durazno con Agua',9],['Jugo de Durazno con Leche',11],['Jugo de Frutilla con Agua',10],['Jugo de Frutilla con Leche',12],['Jugo de Papaya con Agua',9],['Jugo de Papaya con Leche',11],['Jugo de Plátano con Agua',9],['Jugo de Plátano con Leche',11],['Refresco de Tostada 500 ml',8],['Refresco de Tumbo 500 ml',9],['Refresco de Pepa 500 ml',9]]
};
const slug=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
export const PRODUCTS=Object.entries(raw).flatMap(([category,items])=>items.map(([name,price])=>({id:slug(name),category,name,price,image:CATEGORIES.find(c=>c.id===category)?.image,description:category==='horno'?'Empanada tradicional horneada.':category==='tradicionales'?'Un sabor tradicional para compartir.':'Un clásico de nuestro menú.'})));
export const CITIES=[{id:'cbba',name:'Cochabamba'},{id:'lpz',name:'La Paz'},{id:'scz',name:'Santa Cruz'}];
// Locales referenciales: NO son direcciones oficiales.
export const BRANCHES=[
 {id:'cbba-centro',city:'cbba',name:'Centro · referencial',area:'Centro de Cochabamba'},
 {id:'cbba-norte',city:'cbba',name:'Zona norte · referencial',area:'Norte de Cochabamba'},
 {id:'lpz-centro',city:'lpz',name:'Centro · referencial',area:'Centro de La Paz'},
 {id:'lpz-sur',city:'lpz',name:'Zona sur · referencial',area:'Zona sur de La Paz'},
 {id:'scz-centro',city:'scz',name:'Centro · referencial',area:'Centro de Santa Cruz'}
];
export const ZONES=[{id:'cercana',name:'Cercana'},{id:'intermedia',name:'Intermedia'},{id:'extendida',name:'Extendida'},{id:'periferica',name:'Periférica'}];
export const BASE_FEES={cbba:{cercana:7,intermedia:12,extendida:18,periferica:25},lpz:{cercana:9,intermedia:14,extendida:20,periferica:29},scz:{cercana:10,intermedia:15,extendida:22,periferica:30}};
export const money=n=>`Bs. ${Number(n||0).toLocaleString('es-BO',{maximumFractionDigits:2})}`;
export const cityName=id=>CITIES.find(c=>c.id===id)?.name||'Cochabamba';
