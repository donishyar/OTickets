import{b as a,y as l}from"./index-28d7808a.js";const u=(s=a({}))=>{const n=a({}),t=a([]),o=a(!1),e=a(!1);return{load:async()=>{e.value=!0,await l.get("/canned-responses",{params:s.value}).then(d=>{s.value.paginate?n.value=d.data.data:t.value=d.data.data}).catch(()=>o.value=!0).then(()=>e.value=!1)},cannedResponses:t,paginatedCannedResponses:n,error:o,isLoading:e}};export{u as g};
