import{b as a,y as c}from"./index-28d7808a.js";const u=(t=a({}))=>{const o=a([]),s=a({}),r=a(!1),e=a(!0);return{load:async()=>{e.value=!0,await c.get("/categories",{params:t.value}).then(n=>{t.value.paginate?s.value=n.data.data:o.value=n.data.data}).catch(()=>r.value=!0).then(()=>e.value=!1)},categories:o,paginatedCategories:s,error:r,isLoading:e}};export{u as g};
