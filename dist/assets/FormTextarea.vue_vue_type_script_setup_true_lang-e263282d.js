import{d as g,b as x,E as s,o,c as u,a as m,g as h,n as b,v as k,C as p,h as y,A as f,m as w}from"./index-28d7808a.js";import{E as B,b as C}from"./PrimaryButton.vue_vue_type_script_setup_true_lang-a98f89af.js";import{_ as E}from"./FormLabel.vue_vue_type_script_setup_true_lang-7c85f56e.js";const N={class:"relative shadow-sm"},V=["id","placeholder"],I={key:0,class:"pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3"},A=g({__name:"FormTextarea",props:{value:null,label:null,placeholder:null,id:null,errors:null,Icon:null,reset:{type:Boolean}},emits:["change","reset"],setup(e,{emit:t}){const a=e,r=x(a.value??"");return s(()=>a.value,l=>{t("change",l??""),r.value=l??""}),s(r,l=>{t("change",l??"")}),s(()=>a.reset,()=>{a.reset&&(r.value="",t("reset"))}),(l,n)=>{var c,d,i;return o(),u("div",null,[m(E,{id:e.id,text:e.label},null,8,["id","text"]),h("div",N,[b(h("textarea",{id:e.id,"onUpdate:modelValue":n[0]||(n[0]=v=>r.value=v),rows:"3",placeholder:e.placeholder,class:p(["mt-1 block w-full rounded-md focus:outline-none sm:text-sm",(c=e.errors)!=null&&c.length?"border-red-300 pr-10 text-red-900 placeholder-red-300 focus:border-red-300 focus:ring-red-500":"border-gray-300 placeholder-gray-400 focus:border-teal-300 focus:ring-teal-500"])},`
      `,10,V),[[k,r.value]]),(d=e.errors)!=null&&d.length?(o(),u("div",I,[m(y(B),{class:"h-5 w-5 text-red-500"})])):f("",!0)]),(i=e.errors)!=null&&i.length?(o(),w(C,{key:0,errors:e.errors},null,8,["errors"])):f("",!0)])}}});export{A as _};
