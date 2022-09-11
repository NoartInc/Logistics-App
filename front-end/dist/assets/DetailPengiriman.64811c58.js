var H=Object.defineProperty,P=Object.defineProperties;var B=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable;var b=(l,a,n)=>a in l?H(l,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):l[a]=n,o=(l,a)=>{for(var n in a||(a={}))S.call(a,n)&&b(l,n,a[n]);if(y)for(var n of y(a))Y.call(a,n)&&b(l,n,a[n]);return l},j=(l,a)=>P(l,B(a));import{a as t,X as A,b as I,K as T,s as d,j as s}from"./vendor.057b80fe.js";import{e as E}from"./pengiriman-action.bbd84ffc.js";import{h as C}from"./moment.d3763ddf.js";import{_ as J}from"./lodash.f4dea939.js";import"./index.f71ab816.js";import"./http-common.c2a35339.js";import"./constants.091680d7.js";const K=({status:l})=>l==="cancel"?t("span",{className:"flex absolute -left-3 justify-center items-center w-6 h-6 bg-red-200 rounded-full ring-8 ring-white",children:t("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 text-red-500",viewBox:"0 0 20 20",fill:"currentColor",children:t("path",{fillRule:"evenodd",d:"M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",clipRule:"evenodd"})})}):l==="pending"?t("span",{className:"flex absolute -left-3 justify-center items-center w-6 h-6 bg-orange-200 rounded-full ring-8 ring-white",children:t("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 text-orange-500",viewBox:"0 0 20 20",fill:"currentColor",children:t("path",{fillRule:"evenodd",d:"M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z",clipRule:"evenodd"})})}):l==="terkirim"?t("span",{className:"flex absolute -left-3 justify-center items-center w-6 h-6 bg-green-200 rounded-full ring-8 ring-white",children:t("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 text-green-600",viewBox:"0 0 20 20",fill:"currentColor",children:t("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})})}):t("span",{className:"flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white",children:t("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4 text-blue-600",viewBox:"0 0 20 20",fill:"currentColor",children:t("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",clipRule:"evenodd"})})});function U({proses_by:l,status:a,createdAt:n,note:e}){return s("li",{className:"mb-6 ml-6",children:[t(K,{status:a}),s("h3",{className:"flex items-center mb-1 text-lg font-semibold text-gray-900",children:[a," by ",l==null?void 0:l.fullName,s("span",{className:"bg-gray-100 text-gray-500 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3",children:["[",l==null?void 0:l.jabatan,"]"]})]}),t("date",{className:"block mb-2 text-sm font-normal leading-none text-gray-400",children:C(n).format("DD MMMM YYYY")}),t("time",{className:"block mb-2 text-sm font-normal leading-none text-gray-400",children:C(n).format("HH:mm:ss")}),t("p",{className:"text-base font-normal text-gray-500",children:e})]})}function O(){var c,g,x,h,f,u,p,N;const{id:l}=A(),a=I(),n=T(),[e,R]=d.useState(null),[k,L]=d.useState(""),M=()=>{a(E(l)).then(m=>{let i=j(o({},m.data),{history:J.sortBy(m.data.history,["id"])});R(i)}).then(()=>{})},z=()=>{var i,v;let m=(v=(i=e==null?void 0:e.history)==null?void 0:i.find(r=>r.status==="dimuat"))==null?void 0:v.teli.map(r=>{var w;return(w=r==null?void 0:r.teliPerson)==null?void 0:w.fullName}).join(",");L(m)};return d.useEffect(()=>{M()},[l]),d.useEffect(()=>{z()},[e==null?void 0:e.history]),t("div",{className:"mt-10 sm:mt-0",children:s("div",{className:"md:grid md:grid-cols-3 md:gap-6 bg-white p-5 rounded-xl",children:[s("div",{className:"md:col-span-1 mb-6",children:[t("button",{onClick:()=>n("/listpengiriman"),type:"button",className:"mb-3 text-gray-700 border border-gray-100 hover:bg-gray-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2",children:t("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor",children:t("path",{fillRule:"evenodd",d:"M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z",clipRule:"evenodd"})})}),t("div",{className:"px-4 sm:px-0 border-2 rounded-xl",children:s("div",{className:"px-2 mt-2 mb-2",children:[t("h3",{className:"text-lg font-bold leading-6 text-gray-900",children:"Informasi Pengiriman"}),s("p",{className:"mt-1 text-sm font-medium text-gray-700",children:["No Surat Jalan :",t("span",{className:"ml-1 text-sm text-gray-500",children:e==null?void 0:e.suratJalan})]}),s("p",{className:"mt-1 text-sm font-medium text-gray-700",children:["Driver :",t("span",{className:"ml-1 text-sm text-gray-500",children:(c=e==null?void 0:e.drivers)==null?void 0:c.fullName})]}),s("p",{className:"mt-1 text-sm font-medium text-gray-700",children:["Kendaraan :",t("span",{className:"ml-1 text-sm text-gray-500",children:(g=e==null?void 0:e.kendaraans)==null?void 0:g.kendaraan})]}),s("p",{className:"mt-1 text-sm font-medium text-gray-700",children:["Teli :",t("span",{className:"ml-1 text-sm text-gray-500",children:k})]}),s("p",{className:"mt-1 text-sm font-medium text-gray-700",children:["Date of Shipment :",t("span",{className:"ml-1 text-sm text-gray-500",children:e==null?void 0:e.createdAt})]}),s("p",{className:"mt-1 text-sm font-medium text-gray-700",children:["Customer :",t("span",{className:"ml-1 text-sm text-gray-500",children:(x=e==null?void 0:e.customers)==null?void 0:x.customer})]}),s("p",{className:"mt-1 text-sm font-medium text-gray-700",children:["Sales :",t("span",{className:"ml-1 text-sm text-gray-500",children:(f=(h=e==null?void 0:e.customers)==null?void 0:h.salesUser)==null?void 0:f.fullName})]}),s("p",{className:"mt-1 text-sm font-medium text-gray-700",children:["Alamat :",t("span",{className:"ml-1 text-sm text-gray-500",children:e==null?void 0:e.address})]}),s("p",{className:"mt-1 text-sm font-medium text-gray-700",children:["PO :",t("span",{className:"ml-1 text-sm text-gray-500",children:(u=e==null?void 0:e.pengangkutans)==null?void 0:u.pengangkutan})]}),s("p",{className:"mt-1 text-sm font-medium text-gray-700",children:["Note :",t("span",{className:"ml-1 text-sm text-gray-500",children:e==null?void 0:e.note})]}),s("p",{className:"mt-1 text-sm font-medium text-gray-700",children:["Driver Contact :",t("span",{className:"ml-1 text-sm font-bold text-gray-500",children:(p=e==null?void 0:e.drivers)==null?void 0:p.contact})]})]})})]}),t("ol",{className:"relative border-l border-gray-200 ml-10",children:(N=e==null?void 0:e.history)==null?void 0:N.map((m,i)=>t(U,o({},m),i))})]})})}function $(){return t(O,{})}export{$ as default};
