import{r as u}from"./CalendarIcon-956603cd.js";import{r as m}from"./Squares2X2Icon-d64a4e52.js";import{o as t,c as r,g as i,d as g,n as a,j as h,t as l,a as n,h as s,C as c,B as v}from"./index-28d7808a.js";function p(e,d){return t(),r("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[i("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"})])}const x={class:"mt-1 flex space-x-2 divide-x text-xs"},y={class:"flex items-center gap-1 pl-2"},f={class:"flex items-center gap-1 pl-2"},w={class:"flex items-center gap-1 pl-2"},N=g({__name:"TicketInfo",props:{reference:null,createdAt:null,priority:null,categoryName:null,lastReplyOn:null},setup(e){return(d,b)=>{const o=v("tooltip");return t(),r("div",x,[a((t(),r("div",null,[h("#"+l(e.reference),1)])),[[o,"Reference",void 0,{bottom:!0}]]),a((t(),r("div",y,[n(s(u),{class:"h-4 w-4 text-gray-400"}),i("span",null,l(e.createdAt),1)])),[[o,"Date",void 0,{bottom:!0}]]),a((t(),r("div",{class:c([{"text-red-500":e.priority==="high","text-orange-500":e.priority==="medium"},"flex items-center gap-1 pl-2"])},[i("div",{class:c([{"bg-red-500":e.priority==="high","bg-orange-500":e.priority==="medium","bg-gray-400":e.priority==="low"},"h-3 w-3 rounded-full"])},null,2),i("span",null,l(e.priority),1)],2)),[[o,"Priority",void 0,{bottom:!0}]]),a((t(),r("div",f,[n(s(m),{class:"h-4 w-4 text-gray-400"}),i("span",null,l(e.categoryName),1)])),[[o,"Category",void 0,{bottom:!0}]]),a((t(),r("div",w,[n(s(p),{class:"h-4 w-4 text-gray-400"}),i("span",null,l(e.lastReplyOn??"--"),1)])),[[o,"Last reply",void 0,{bottom:!0}]])])}}});export{N as _};