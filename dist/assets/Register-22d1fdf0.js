import{d as S,u as N,b as r,e as T,s as B,f as P,c as V,g as a,a as t,w as j,h as o,j as w,i as A,r as E,o as L,k as D}from"./index-28d7808a.js";import{_ as n,a as F}from"./PrimaryButton.vue_vue_type_script_setup_true_lang-a98f89af.js";import{_ as H}from"./Logo.vue_vue_type_script_setup_true_lang-0ebe68a6.js";import{r as J,a as M}from"./PhoneIcon-b55f53e2.js";import{r as q}from"./EnvelopeIcon-a08726c7.js";import{r as b}from"./LockClosedIcon-d7438767.js";import{a as z}from"./global-6426d760.js";import"./FormLabel.vue_vue_type_script_setup_true_lang-7c85f56e.js";import"./vue.runtime.esm-bundler-e8cc2f2c.js";const G={class:"mx-auto max-w-md justify-center"},K={class:"rounded-md border bg-white px-6 pt-6 pb-8 shadow"},O={class:"mb-6"},Q=a("h2",{class:"text-center text-lg"},"Register for an account",-1),U=["onSubmit"],W={class:"space-y-3"},X={class:"mt-8"},Y={class:"text-center text-gray-500"},ce=S({__name:"Register",setup(Z){N({title:`Register | ${z}`});const i=r(""),m=r(""),c=r(""),d=r(""),p=r(""),u=T(),{errors:l,isLoading:f,message:x,isSuccess:y}=B(u),{register:C}=u,I=P(),$=D(),k=async()=>{console.log("-------------------------------"),!f.value&&(await C({name:i.value,email:m.value,phone:c.value,password:d.value,password_confirmation:p.value}),y.value?$.push({name:"ClientTickets"}):I.error(x.value))};return(ee,e)=>{var _,h,g,v;const R=E("router-link");return L(),V("section",G,[a("div",K,[a("header",O,[t(H),Q]),a("form",{onSubmit:j(k,["prevent"])},[a("div",W,[t(n,{id:"name",type:"text",label:"Full Name",placeholder:"John Doe",onChange:e[0]||(e[0]=s=>i.value=s),errors:(_=o(l))==null?void 0:_.name,Icon:o(J)},null,8,["errors","Icon"]),t(n,{id:"phone",type:"tel",label:"Phone Number",placeholder:"0612345678",onChange:e[1]||(e[1]=s=>c.value=s),errors:(h=o(l))==null?void 0:h.phone,Icon:o(M)},null,8,["errors","Icon"]),t(n,{id:"email",type:"email",label:"Email",placeholder:"email@example.com",onChange:e[2]||(e[2]=s=>m.value=s),errors:(g=o(l))==null?void 0:g.email,Icon:o(q)},null,8,["errors","Icon"]),t(n,{id:"password",type:"password",label:"Password",placeholder:"********",onChange:e[3]||(e[3]=s=>d.value=s),errors:(v=o(l))==null?void 0:v.password,Icon:o(b)},null,8,["errors","Icon"]),t(n,{id:"password_confirmation",type:"password",label:"Password Confirmation",placeholder:"********",onChange:e[4]||(e[4]=s=>p.value=s),Icon:o(b)},null,8,["Icon"])]),t(F,{type:"submit",text:"Register",class:"mt-8 w-full",loading:o(f)},null,8,["loading"])],40,U),a("div",X,[a("p",Y,[w(" Already have an account? "),t(R,{to:{name:"Login"},class:"text-teal-600"},{default:A(()=>[w("Sign in")]),_:1})])])])])}}});export{ce as default};