import{b as a,y as c}from"./index-28d7808a.js";const u=e=>{const s=a([]),l=a({}),n=a(!1),t=a(!1);return{load:async()=>{t.value=!0,await c.get("/clients",{params:e.value}).then(o=>{e.value.paginate?l.value=o.data.data:s.value=o.data.data}).catch(()=>n.value=!0).then(()=>t.value=!1)},paginatedClients:l,clients:s,error:n,isLoading:t}};export{u as g};
