var E=Object.defineProperty;var m=Object.getOwnPropertySymbols;var C=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var r=(o,l,s)=>l in o?E(o,l,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[l]=s,b=(o,l)=>{for(var s in l||(l={}))C.call(l,s)&&r(o,s,l[s]);if(m)for(var s of m(l))B.call(l,s)&&r(o,s,l[s]);return o};import{c as A,T as g}from"./mobile.js";import{_ as v}from"./index.js";import{m as F,a as y,A as U,r as _,e as $,j as e,k as u,o as j,g as h,t as k,l as a,B as I,C as S}from"./vendor.js";const{createDemo:G}=A("checkbox"),N=G({setup(o,l){const s=F(null),f=y({checkbox1:!0,checkbox2:!1,checkbox3:!1,checkbox4:!0,checkbox5:!1,checkbox6:!1,checkbox7:!1,checkbox8:!1,checkboxgroup1:["2","3"],checkboxgroup2:["2"],checkboxgroup3:["2"]});return b({changeBox1:(c,p)=>{console.log(c,p)},changeBox2:(c,p)=>{console.log(c,p)},changeBox3:(c,p)=>{g.text(`\u60A8${c?"\u9009\u4E2D":"\u53D6\u6D88"}\u4E86${p}`)},changeBox4:c=>{g.text(`${c.length?"\u5168\u9009":"\u53D6\u6D88\u5168\u9009"}`)},toggleAll:c=>{s.value.toggleAll(c)},group:s},U(f))}}),x=o=>(I("data-v-c7aa6f3a"),o=o(),S(),o),T={class:"demo"},w=a("\u590D\u9009\u6846"),z=a("\u590D\u9009\u6846"),R=x(()=>h("div",{class:"demo-check"},"\u5F53\u524D\u9009\u4E2D\u503C",-1)),q=a("\u672A\u9009\u65F6\u7981\u7528\u72B6\u6001"),H=a("\u9009\u4E2D\u65F6\u7981\u7528\u72B6\u6001"),J=a("\u81EA\u5B9A\u4E49\u5C3A\u5BF825"),K=a("\u81EA\u5B9A\u4E49\u5C3A\u5BF810"),L=a("\u81EA\u5B9A\u4E49\u56FE\u6807"),M=a("change\u590D\u9009\u6846"),O=a("\u7EC4\u5408\u590D\u9009\u6846"),P=a("\u7EC4\u5408\u590D\u9009\u6846"),Q=a("\u7EC4\u5408\u590D\u9009\u6846"),W=a("\u7EC4\u5408\u590D\u9009\u6846"),X=x(()=>h("div",{class:"demo-check"},"\u5F53\u524D\u9009\u4E2D\u503C",-1)),Y=a("\u7EC4\u5408\u590D\u9009\u6846"),Z=a("\u7EC4\u5408\u590D\u9009\u6846"),ee=a("\u7EC4\u5408\u590D\u9009\u6846"),ue=a("\u7EC4\u5408\u590D\u9009\u6846"),oe=a("\u7EC4\u5408\u590D\u9009\u6846"),le=a("\u7EC4\u5408\u590D\u9009\u6846"),te=a("\u5168\u9009"),ae=a("\u53D6\u6D88");function ne(o,l,s,f,V,D){const n=_("nut-checkbox"),d=_("nut-cell"),i=_("nut-cell-group"),c=_("nut-checkboxgroup"),p=_("nut-button");return j(),$("div",T,[e(i,{title:"\u57FA\u672C\u7528\u6CD5-\u5DE6\u53F3"},{default:u(()=>[e(d,null,{default:u(()=>[e(n,{modelValue:o.checkbox1,"onUpdate:modelValue":l[0]||(l[0]=t=>o.checkbox1=t),label:"\u590D\u9009\u6846",onChange:o.changeBox1},{default:u(()=>[w]),_:1},8,["modelValue","onChange"])]),_:1}),e(d,null,{default:u(()=>[e(n,{modelValue:o.checkbox1,"onUpdate:modelValue":l[1]||(l[1]=t=>o.checkbox1=t),"text-position":"left",onChange:o.changeBox1},{default:u(()=>[z]),_:1},8,["modelValue","onChange"])]),_:1}),e(d,null,{default:u(()=>[R,h("div",null,k(o.checkbox1),1)]),_:1})]),_:1}),e(i,{title:"\u7981\u7528\u72B6\u6001"},{default:u(()=>[e(d,null,{default:u(()=>[e(n,{modelValue:o.checkbox3,"onUpdate:modelValue":l[2]||(l[2]=t=>o.checkbox3=t),disabled:""},{default:u(()=>[q]),_:1},8,["modelValue"])]),_:1}),e(d,null,{default:u(()=>[e(n,{modelValue:o.checkbox4,"onUpdate:modelValue":l[3]||(l[3]=t=>o.checkbox4=t),disabled:""},{default:u(()=>[H]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(i,{title:"\u81EA\u5B9A\u4E49\u5C3A\u5BF8"},{default:u(()=>[e(d,null,{default:u(()=>[e(n,{modelValue:o.checkbox5,"onUpdate:modelValue":l[4]||(l[4]=t=>o.checkbox5=t),"icon-size":"25"},{default:u(()=>[J]),_:1},8,["modelValue"])]),_:1}),e(d,null,{default:u(()=>[e(n,{modelValue:o.checkbox6,"onUpdate:modelValue":l[5]||(l[5]=t=>o.checkbox6=t),"icon-size":"10"},{default:u(()=>[K]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(i,{title:"\u81EA\u5B9A\u4E49\u56FE\u6807"},{default:u(()=>[e(d,null,{default:u(()=>[e(n,{modelValue:o.checkbox7,"onUpdate:modelValue":l[6]||(l[6]=t=>o.checkbox7=t),"icon-name":"checklist","icon-active-name":"checklist"},{default:u(()=>[L]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(i,{title:"\u70B9\u51FB\u89E6\u53D1change\u4E8B\u4EF6"},{default:u(()=>[e(d,null,{default:u(()=>[e(n,{modelValue:o.checkbox8,"onUpdate:modelValue":l[7]||(l[7]=t=>o.checkbox8=t),onChange:o.changeBox3},{default:u(()=>[M]),_:1},8,["modelValue","onChange"])]),_:1})]),_:1}),e(i,{title:"checkboxGroup\u4F7F\u7528"},{default:u(()=>[e(d,null,{default:u(()=>[e(c,{modelValue:o.checkboxgroup1,"onUpdate:modelValue":l[8]||(l[8]=t=>o.checkboxgroup1=t)},{default:u(()=>[e(n,{label:"1",style:{margin:"2px 20px 0 0"}},{default:u(()=>[O]),_:1}),e(n,{label:"2"},{default:u(()=>[P]),_:1}),e(n,{label:"3",style:{margin:"2px 20px 0 0"}},{default:u(()=>[Q]),_:1}),e(n,{label:"4"},{default:u(()=>[W]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(d,null,{default:u(()=>[X,h("div",null,k(o.checkboxgroup1),1)]),_:1})]),_:1}),e(i,{title:"checkboxGroup\u7981\u7528"},{default:u(()=>[e(d,null,{default:u(()=>[e(c,{modelValue:o.checkboxgroup1,"onUpdate:modelValue":l[9]||(l[9]=t=>o.checkboxgroup1=t),disabled:""},{default:u(()=>[e(n,{label:"1",style:{margin:"2px 20px 0 0"}},{default:u(()=>[Y]),_:1}),e(n,{label:"2"},{default:u(()=>[Z]),_:1}),e(n,{label:"3",style:{margin:"2px 20px 0 0"}},{default:u(()=>[ee]),_:1}),e(n,{label:"4"},{default:u(()=>[ue]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1}),e(i,{title:"checkboxGroup \u5168\u9009/\u53D6\u6D88"},{default:u(()=>[e(d,null,{default:u(()=>[e(c,{modelValue:o.checkboxgroup3,"onUpdate:modelValue":l[10]||(l[10]=t=>o.checkboxgroup3=t),ref:"group",onChange:o.changeBox4},{default:u(()=>[e(n,{label:"1",style:{margin:"0 20px 0 0"}},{default:u(()=>[oe]),_:1}),e(n,{label:"2"},{default:u(()=>[le]),_:1})]),_:1},8,["modelValue","onChange"])]),_:1}),e(d,null,{default:u(()=>[e(p,{type:"primary",onClick:l[11]||(l[11]=t=>o.toggleAll(!0)),style:{margin:"0 20px 0 0"}},{default:u(()=>[te]),_:1}),e(p,{type:"info",onClick:l[12]||(l[12]=t=>o.toggleAll(!1))},{default:u(()=>[ae]),_:1})]),_:1})]),_:1})])}var pe=v(N,[["render",ne],["__scopeId","data-v-c7aa6f3a"]]);export{pe as default};