System.register(["./mobile-legacy.47292296.js","./vendor-legacy.466e82dd.js","./index-legacy.ce3dc473.js"],(function(t){"use strict";var e,i,o,n,c,l,s,f;return{setters:[function(t){e=t.c,i=t.N},function(t){o=t.r,n=t.o,c=t.c,l=t.f,s=t.i,f=t.j},function(){}],execute:function(){const{createDemo:r}=e("notify");var u=t("default",r({setup:()=>({baseNotify:t=>{i.text(t,{onClose:()=>{console.log("close")},onClick:()=>{console.log("click")}})},primaryNotify:t=>{i.primary(t)},successNotify:t=>{i.success(t)},errorNotify:t=>{i.danger(t)},warningNotify:t=>{i.warn(t)},cusBgNotify:t=>{i.text(t,{color:"#ad0000",background:"#ffe1e1"})},timeNotify:t=>{i.text(t,{duration:1e4})}})}));const a={class:"demo"},d=f("基础用法"),y=f("主要通知"),k=f("成功通知"),N=f("危险通知"),g=f("警告通知"),_=f(" 自定义背景色和字体颜色 "),m=f(" 自定义时长 ");u.render=function(t,e,i,f,r,u){const C=o("nut-cell"),L=o("nut-cell-group");return n(),c("div",a,[l(L,{title:"基础用法"},{default:s((()=>[l(C,{"is-Link":"",onClick:e[1]||(e[1]=e=>t.baseNotify("基础用法"))},{default:s((()=>[d])),_:1})])),_:1}),l(L,{title:"通知类型"},{default:s((()=>[l(C,{"is-Link":"",onClick:e[2]||(e[2]=e=>t.primaryNotify("主要通知"))},{default:s((()=>[y])),_:1}),l(C,{"is-Link":"",onClick:e[3]||(e[3]=e=>t.successNotify("成功通知"))},{default:s((()=>[k])),_:1}),l(C,{"is-Link":"",onClick:e[4]||(e[4]=e=>t.errorNotify("危险通知"))},{default:s((()=>[N])),_:1}),l(C,{"is-Link":"",onClick:e[5]||(e[5]=e=>t.warningNotify("警告通知"))},{default:s((()=>[g])),_:1})])),_:1}),l(L,{title:"自定义样式"},{default:s((()=>[l(C,{"is-Link":"",onClick:e[6]||(e[6]=e=>t.cusBgNotify("自定义背景色和字体颜色"))},{default:s((()=>[_])),_:1})])),_:1}),l(L,{title:"自定义时长"},{default:s((()=>[l(C,{"is-Link":"",onClick:e[7]||(e[7]=e=>t.timeNotify("自定义时长"))},{default:s((()=>[m])),_:1})])),_:1})])}}}}));