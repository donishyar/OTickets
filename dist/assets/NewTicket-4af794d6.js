import{d as V,u as M,b as l,q as R,f as E,E as H,I as U,c as d,g as n,a,h as s,F as A,x as I,A as P,w as z,o as u,m as G,i as J,j as K,t as O,k as Q,r as W}from"./index-28d7808a.js";import{_ as X}from"./SectionHeader.vue_vue_type_script_setup_true_lang-7b13873f.js";import{_ as Y}from"./ListBox.vue_vue_type_script_setup_true_lang-9258f04c.js";import{_ as Z}from"./Autocomplete.vue_vue_type_script_setup_true_lang-30be75d0.js";import{_ as ee,a as te}from"./PrimaryButton.vue_vue_type_script_setup_true_lang-a98f89af.js";import{_ as se}from"./RichText.vue_vue_type_script_setup_true_lang-e94a215b.js";import{_ as ae,u as oe}from"./useTickets-30744fb3.js";import{a as re}from"./global-6426d760.js";import{g as ie}from"./getCategories-ebf7ea6c.js";import{u as le}from"./useFaqs-6d9f2ad3.js";import"./use-tracked-pointer-3831155a.js";import"./transition-d11ecd8d.js";import"./use-controllable-fce04192.js";import"./combobox-f45cc6e0.js";import"./FormLabel.vue_vue_type_script_setup_true_lang-7c85f56e.js";import"./vue.runtime.esm-bundler-e8cc2f2c.js";const ne=["onSubmit"],ue={class:"py-6 px-4 sm:p-6 lg:pb-8"},ce={class:"space-y-6"},me={class:"grid grid-cols-1 gap-6 sm:grid-cols-2"},pe={key:0,class:"mt-2 rounded-lg border bg-gray-50 p-4"},de=n("h3",{class:"font-semibold"},"Related questions",-1),ge={class:"flex justify-end bg-gray-50 py-4 px-4 sm:px-6"},De=V({__name:"NewTicket",setup(ve){M({title:`New Ticket | ${re}`});const C=[{name:"Low",value:"low"},{name:"Medium",value:"medium"},{name:"High",value:"high"}],c=l({}),g=l([]),m=l({}),{load:j,categories:T}=ie();R(async()=>{await j(),g.value=T.value.map(i=>({name:i.name,value:i.id.toString()}))});const o=l(""),v=l(""),p=l(),{create:$,isLoading:_,isSuccess:N,ticket:B,message:f,errors:r}=oe(),q=Q(),y=E(),D=async()=>{var i,e;_.value||(await $({priority:(i=c.value)==null?void 0:i.value,category_id:(e=m.value)==null?void 0:e.value,subject:o.value,description:v.value,attachments:p.value}),N.value?(y.success(f.value),q.push({name:"ClientSingleTicket",params:{reference:B.value.reference}})):y.error(f.value))},{getSuggestions:F,faqs:b}=le();return H(o,async()=>{o.value!==""&&await F(o.value)}),U(()=>{r.value={}}),(i,e)=>{var h,k,x,w,S;const L=W("router-link");return u(),d("form",{class:"divide-y divide-gray-200",onSubmit:z(D,["prevent"])},[n("div",ue,[a(X,{title:"New Ticket",class:"mb-6"}),n("div",ce,[n("div",me,[a(Y,{onUpdate:e[0]||(e[0]=t=>c.value=t),selected:c.value,label:"Priority",options:C,errors:(h=s(r))==null?void 0:h.priority,"null-text":"Select a priority"},null,8,["selected","errors"]),a(Z,{onUpdate:e[1]||(e[1]=t=>m.value=t),selected:m.value,label:"Category",options:g.value,errors:(k=s(r))==null?void 0:k.category_id,"null-text":"Select a category"},null,8,["selected","options","errors"])]),n("div",null,[a(ee,{onChange:e[2]||(e[2]=t=>o.value=t),id:"subject",type:"text",label:"Subject",placeholder:"Subject",errors:(x=s(r))==null?void 0:x.subject},null,8,["errors"]),s(b).length&&o.value?(u(),d("div",pe,[de,(u(!0),d(A,null,I(s(b),t=>(u(),G(L,{key:t.id,target:"_blank",to:{name:"SingleFaq",params:{slug:t.slug}},class:"mt-3 block text-sm text-gray-600 hover:text-gray-900"},{default:J(()=>[K(O(t.question),1)]),_:2},1032,["to"]))),128))])):P("",!0)]),a(se,{onChange:e[3]||(e[3]=t=>v.value=t),label:"Description",placeholder:"Describe your issue...",errors:(w=s(r))==null?void 0:w.description},null,8,["errors"]),a(ae,{onChange:e[4]||(e[4]=t=>p.value=t),label:"Drop attachments here or click to browse",errors:(S=s(r))==null?void 0:S.attachments,ref:p.value,multiple:!0},null,8,["errors"])])]),n("div",ge,[a(te,{type:"submit",text:"Create",loading:s(_)},null,8,["loading"])])],40,ne)}}});export{De as default};
