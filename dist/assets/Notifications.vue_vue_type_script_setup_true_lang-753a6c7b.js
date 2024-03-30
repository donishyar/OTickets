import{d as P,e as Q,s as D,b as B,f as W,q as X,z as Z,r as ee,o,c,m as f,A as R,g as r,h as e,C as b,t as w,a as t,i as s,T as L,F as U,x as ae,D as te,w as se}from"./index-28d7808a.js";import{T as re,a as z,b as oe,_ as le}from"./TableSkeleton-b5bcf82c.js";import{_ as ne}from"./SectionHeader.vue_vue_type_script_setup_true_lang-7b13873f.js";import{r as ie}from"./CalendarIcon-956603cd.js";import{r as E}from"./EllipsisHorizontalIcon-f2ab61ca.js";import{u as ce,E as de}from"./emptyNotifications-8587fe08.js";import{S as V,b as j,M as C,g as q}from"./menu-880c2858.js";const ue={class:"mb-2"},fe={key:0,class:"h-5 w-60 max-w-full animate-pulse rounded bg-gray-200"},me={key:1,class:"flex flex-wrap items-center justify-between gap-3"},pe={class:"flex gap-3 divide-x divide-dashed text-sm text-gray-500"},ge={key:0},_e=r("p",{class:"p-6 text-center text-xl"},"No unread notifications",-1),ve=["onClick"],ye={class:"flex items-center gap-1 text-xs"},he={class:"flex items-center gap-2"},ke=["onClick"],xe=["onClick"],be=["onClick"],we={key:0,class:"h-3 w-3 rounded-full bg-teal-500"},Ce=r("p",{class:"mb-6 text-center text-gray-500"},"You have no notifications yet",-1),Be=P({__name:"Notifications",props:{customClass:null,showHeader:{type:Boolean,default:!0}},setup(A){const F=Q(),{isManager:H}=D(F),u=ce(),{isLoading:S,message:m,notifications:d,isSuccess:p,notificationsCounts:h}=D(u),k=B(!0),l=B(!1),i=async(n=!0,x=!1,N=1)=>{await u.getNotifications(n,x,N)},Y=async()=>{k.value||(await i(),k.value=!0,l.value=!1)},G=async()=>{l.value||(await i(!0,!0),k.value=!1,l.value=!0)},g=W(),I=["Message"],M=async n=>{await u.markAsRead(n),p.value?await i(!1,l.value):g.error(m.value)},J=async()=>{h.value.total!==0&&(await u.markAllAsRead(),p.value?await i(!1,l.value):g.error(m.value))},K=async n=>{await u.markAsUnread(n),p.value?await i(!1,l.value):g.error(m.value)},O=async n=>{await u.deleteNotification(n),p.value?await i(!1,l.value):g.error(m.value)};return X(async()=>{await i(),p.value||g.error(m.value)}),Z(async n=>{await i(!1,l.value,Number(n.query.page??1))}),(n,x)=>{const N=ee("LottieAnimation");return o(),c("section",{class:b(A.customClass)},[A.showHeader?(o(),f(ne,{key:0,title:"Notifications",class:"mb-6"})):R("",!0),r("div",ue,[e(S)?(o(),c("div",fe)):(o(),c("div",me,[r("div",pe,[r("button",{class:b({"font-semibold":k.value}),onClick:Y}," All ("+w(e(h).total??0)+") ",3),r("div",{class:b(["pl-3",{"font-semibold":l.value}])},[r("button",{onClick:G}," Unread Notifications ("+w(e(h).unread??0)+") ",1)],2)]),t(e(q),{as:"div",class:"relative flex"},{default:s(()=>[t(e(V),null,{default:s(()=>[t(e(E),{class:"h-5 w-5 text-gray-700 hover:text-gray-800"})]),_:1}),t(L,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:s(()=>[t(e(j),{class:"absolute right-0 z-10 mt-5 w-36 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:s(()=>[t(e(C),{class:"w-full cursor-pointer"},{default:s(()=>[r("div",{onClick:J,class:"block w-fit px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"}," Mark all as read ")]),_:1})]),_:1})]),_:1})]),_:1})]))]),e(S)?(o(),f(re,{key:1})):e(h).total?(o(),f(le,{key:2,headers:I},{default:s(()=>{var _;return[l.value?(o(),c("tr",ge,[t(z,{colspan:"2"},{default:s(()=>[_e]),_:1})])):(o(!0),c(U,{key:1},ae((_=e(d))==null?void 0:_.data,a=>(o(),c("tr",{key:a.id},[t(z,{"no-padding":""},{default:s(()=>{var v;return[(o(),f(te((v=a.data)!=null&&v.reference?"router-link":"span"),{to:{name:e(H)?"DashboardSingleTicket":"ClientSingleTicket",params:{reference:a.data.reference}}},{default:s(()=>[r("div",{onClick:()=>a.data.reference&&!a.read_at&&M(a.id),class:"group flex items-center justify-between gap-12 px-3 py-4 hover:bg-gray-50"},[r("div",null,[r("div",{class:b([{"text-gray-500":a.read_at,"font-semibold text-teal-600":!a.read_at},"text-base"])},w(a.data.message),3),r("div",ye,[t(e(ie),{class:"h-4 w-4 text-gray-400"}),r("span",null,w(a.created_at),1)])]),r("div",he,[t(e(q),{onClick:x[0]||(x[0]=se(()=>{},["prevent","stop"])),as:"div",class:"relative shrink-0 rounded-full border bg-white shadow hover:bg-gray-100 lg:hidden lg:group-hover:flex"},{default:s(()=>[t(e(V),{class:"p-2"},{default:s(()=>[t(e(E),{class:"h-5 w-5"})]),_:1}),t(L,{"enter-active-class":"transition ease-out duration-100","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:s(()=>[t(e(j),{class:"absolute right-0 z-10 mt-10 w-fit origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"},{default:s(()=>[a.read_at?(o(),f(e(C),{key:1,class:"cursor-pointer"},{default:s(()=>[r("div",{onClick:y=>K(a.id),class:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"}," Mark as unread ",8,xe)]),_:2},1024)):(o(),f(e(C),{key:0,class:"cursor-pointer"},{default:s(()=>[r("div",{onClick:y=>M(a.id),class:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"}," Mark as read ",8,ke)]),_:2},1024)),t(e(C),{class:"cursor-pointer"},{default:s(()=>[r("div",{onClick:y=>O(a.id),class:"block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"}," Delete ",8,be)]),_:2},1024)]),_:2},1024)]),_:2},1024)]),_:2},1024),a.read_at?R("",!0):(o(),c("div",we))])],8,ve)]),_:2},1032,["to"]))]}),_:2},1024)]))),128))]}),pagination:s(()=>{var _,a,v,y,T,$;return[t(oe,{class:"border-t bg-gray-50 py-2 px-3",from:(_=e(d))==null?void 0:_.from,to:(a=e(d))==null?void 0:a.to,total:(v=e(d))==null?void 0:v.total,prev_page_url:(y=e(d))==null?void 0:y.prev_page_url,next_page_url:(T=e(d))==null?void 0:T.next_page_url,links:($=e(d))==null?void 0:$.links,"route-name":"ClientNotifications"},null,8,["from","to","total","prev_page_url","next_page_url","links"])]}),_:1})):(o(),c(U,{key:3},[t(N,{animationData:e(de),class:"-mt-10 w-60 max-w-full"},null,8,["animationData"]),Ce],64))],2)}}});export{Be as _};
