var S=Object.defineProperty,O=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,J=Object.prototype.propertyIsEnumerable;var N=(n,s,t)=>s in n?S(n,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[s]=t,k=(n,s)=>{for(var t in s||(s={}))D.call(s,t)&&N(n,t,s[t]);if(y)for(var t of y(s))J.call(s,t)&&N(n,t,s[t]);return n},x=(n,s)=>O(n,E(s));import{b as f,c as b,d,a as e,K as T,j as o}from"./vendor.057b80fe.js";import{c as I}from"./pengiriman-action.bbd84ffc.js";import{S as v}from"./react-select.esm.ee56aae7.js";import{r as B}from"./customer-action.358be791.js";import{r as F}from"./pengangkutan-action.6750642a.js";import{r as K}from"./user-action.686f2f03.js";import{r as A}from"./kendaraan-action.49f2b318.js";import{t as L}from"./index.f71ab816.js";import"./http-common.c2a35339.js";import"./constants.091680d7.js";import"./setPrototypeOf.08579ea5.js";const V=({onChange:n=null})=>{const s=f(),t=b(l=>l.customers.list).map(l=>({value:l.id,label:l.customer})),m=l=>{n({target:{name:"customer",value:l.value}})};return d.exports.useEffect(()=>{s(B())},[]),e(v,{onChange:m,type:"text",id:"customer",name:"customer",className:"mt-1 block w-full border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm",placeholder:"Choose Customer",options:t})},U=({onChange:n=null,value:s=null})=>{const t=f(),[m,l]=d.exports.useState(null),p=b(a=>a.pengangkutans.list).map(a=>({value:a.id,label:a.pengangkutan})),i=a=>{n({target:{name:"pengangkutan",value:a.value}})},c=()=>{const a=p.find(h=>h.value===s);l(a||null)};return d.exports.useEffect(()=>{c()},[s]),d.exports.useEffect(()=>{t(F())},[]),e(v,{onChange:i,type:"text",id:"pengangkutan",name:"pengangkutan",value:m,className:"mt-1 block w-full border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm",placeholder:"Choose Pengangkutan",options:p,isClearable:!0})},q=({onChange:n=null,value:s=null,disabled:t=!1,clearable:m=!0})=>{const l=f(),p=b(c=>c.users.list).filter(c=>(c==null?void 0:c.role)==="driver").map(c=>({value:c.id,label:c.fullName})),i=c=>{n({target:{name:"driver",value:c.value}})};return d.exports.useEffect(()=>{l(K())},[]),e(v,{onChange:i,type:"text",id:"driver",name:"driver",className:"mt-1 block w-full border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm",placeholder:"Choose Driver",options:p,isDisabled:t,isClearable:m,defaultValue:!0})},z=({onChange:n=null,value:s=null,disabled:t=!1})=>{const m=f(),l=b(i=>i.kendaraans.list).map(i=>({value:i.id,label:i.kendaraan})),p=i=>{n({target:{name:"kendaraan",value:i.value}})};return d.exports.useEffect(()=>{m(A())},[]),e(v,{onChange:p,type:"text",id:"kendaraan",name:"kendaraan",className:"mt-1 block w-full border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm",placeholder:"Choose Kendaraan",options:l,isDisabled:t})};function G(){const n=T(),s=f(),[t,m]=d.exports.useState(null),[l,p]=d.exports.useState(null),i=b(r=>r.customers.list),c=b(r=>r.pengangkutans.list),[a,h]=d.exports.useState({customer:0,suratJalan:"",pengangkutan:0,address:"",note:"",tonase:"",driver:0,kendaraan:0,status:""}),w=()=>{let r="";t==="toko"?(h(u=>x(k({},u),{pengangkutan:""})),a.customer&&(r=i.find(u=>u.id===a.customer).address)):t==="po"&&a.pengangkutan&&(r=c.find(u=>u.id===a.pengangkutan).address),h(u=>x(k({},u),{address:r}))},g=r=>{const{name:u,value:P}=r.target;h(j=>x(k({},j),{[u]:P}))},C=r=>{r.preventDefault(),s(I(a)).then(()=>{window.alert("Pengiriman created successfully"),n("/listpengiriman")}).catch(u=>{window.alert(u)})};return d.exports.useEffect(()=>{},[a]),d.exports.useEffect(()=>{w()},[t,a.customer,a.pengangkutan]),e("div",{className:"mt-10 sm:mt-0",children:e("div",{className:"md:grid md:grid-cols-3 md:gap-6",children:e("div",{className:"mt-5 md:mt-0 md:col-span-4",children:e("form",{onSubmit:C,children:o("div",{className:"shadow overflow-hidden sm:rounded-md",children:[o("div",{className:"px-4 py-5 bg-white sm:p-6",children:[e("header",{className:"px-0 mt-2 mb-6",children:e("h2",{className:"font-semibold text-slate-800 uppercase",children:"Pengiriman Baru"})}),o("div",{className:"grid grid-cols-6 gap-6",children:[o("div",{className:"col-span-6 sm:col-span-3",children:[e("label",{for:"customer",className:"block text-sm font-medium text-gray-700",children:"Customer"}),e(V,{onChange:g})]}),o("div",{className:"col-span-6 sm:col-span-3",children:[e("label",{for:"suratJalan",className:"block text-sm font-medium text-gray-700",children:"Surat Jalan"}),e("input",{onChange:g,type:"text",name:"suratJalan",id:"suratJalan",placeholder:"No Surat Jalan",className:"mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",value:a==null?void 0:a.suratJalan})]}),o("div",{className:"col-span-6 sm:col-span-3",children:[e("label",{for:"pengangkutan",className:"block text-sm font-medium text-gray-700",children:"Pengangkutan"}),e(U,{onChange:g,value:a.pengangkutan})]}),o("div",{className:"col-span-6 sm:col-span-3",children:[o("div",{className:"form-check form-check-inline mr-3",children:[e("input",{onChange:r=>m(r.target.value),className:"form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer",type:"radio",name:"tipetoko",id:"tipeToko",value:"toko",disabled:a.customer===""}),e("label",{className:"form-check-label inline-block text-sm font-medium text-gray-500",htmlFor:"tipeToko",children:"Toko"})]}),o("div",{className:"form-check form-check-inline mr-3",children:[e("input",{onChange:r=>m(r.target.value),className:"form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer",type:"radio",name:"tipetoko",id:"tipePO",value:"po",disabled:a.customer===""}),e("label",{className:"form-check-label inline-block text-sm font-medium text-gray-500",htmlFor:"tipePO",children:"PO"})]}),o("div",{className:"form-check form-check-inline mr-3",children:[e("input",{onChange:r=>m(r.target.value),className:"form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer",type:"radio",name:"tipetoko",id:"tipeLainnya",value:"lain-lain",disabled:a.customer===""}),e("label",{className:"form-check-label inline-block text-sm font-medium text-gray-500",htmlFor:"tipeLainnya",children:"Lain-lain"})]})]}),o("div",{className:"col-span-6 sm:col-span-5",children:[e("label",{for:"address",className:"block text-sm font-medium text-gray-700",children:"Alamat Pengiriman"}),e("textarea",{onChange:g,type:"text",name:"address",id:"address",rows:"4",placeholder:"Alamat Lengkap Pengiriman",value:a==null?void 0:a.address,className:"mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"})]}),o("div",{className:"col-span-6 sm:col-span-5",children:[e("label",{for:"note",className:"block text-sm font-medium text-gray-700",children:"Note Pengiriman"}),e("textarea",{onChange:g,type:"text",name:"note",id:"note",rows:"4",className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",placeholder:"Note Pengiriman",value:a.note})]}),o("div",{className:"col-span-6 sm:col-span-3",children:[e("label",{for:"tonase",className:"block text-sm font-medium text-gray-700",children:"Total Berat"}),e("input",{onChange:g,type:"text",name:"tonase",id:"tonase",className:"mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md",placeholder:"Total Berat dalam Ons"})]}),o("div",{className:"col-span-6 sm:col-span-3",children:[e("label",{for:"driver",className:"block text-sm font-medium text-gray-700",children:"Driver"}),e(q,{onChange:g})]}),o("div",{className:"col-span-6 sm:col-span-3",children:[e("label",{for:"kendaraan",className:"block text-sm font-medium text-gray-700",children:"Kendaraan"}),e(z,{onChange:g,disabled:l})]})]})]}),o("div",{className:"px-4 py-4 space-x-3 bg-gray-50 text-right sm:px-6",children:[e("button",{type:"submit",className:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",children:"Submit"}),e("button",{type:"button",onClick:()=>n("/listpengiriman"),className:"inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500",children:"Cancel"})]})]})})})})})}function ne(){const n=f();return d.exports.useEffect(()=>{setTimeout(()=>{n(L(!1))},500)},[]),e(G,{})}export{ne as default};
