import{c as f}from"./mobile.b88c66a4.js";import{_ as p}from"./index.5dbae174.js";import{m as n,r as m,e as F,j as l,g as C,o as v}from"./vendor.b9b5ce39.js";const{createDemo:A}=f("picker"),D=A({props:{},setup(){const u=["\u5357\u4EAC\u5E02","\u65E0\u9521\u5E02","\u6D77\u5317\u85CF\u65CF\u81EA\u6CBB\u533A","\u5317\u4EAC\u5E02","\u8FDE\u4E91\u6E2F\u5E02","\u6D59\u6C5F\u5E02","\u6C5F\u82CF\u5E02"],e=[{values:["\u5468\u4E00","\u5468\u4E8C","\u5468\u4E09","\u5468\u56DB","\u5468\u4E94"],defaultIndex:2},{values:["\u4E0A\u5348","\u4E0B\u5348","\u665A\u4E0A"],defaultIndex:1}],i=[{text:"\u6D59\u6C5F",children:[{text:"\u676D\u5DDE",children:[{text:"\u897F\u6E56\u533A"},{text:"\u4F59\u676D\u533A"}]},{text:"\u6E29\u5DDE",children:[{text:"\u9E7F\u57CE\u533A"},{text:"\u74EF\u6D77\u533A"}]}]},{text:"\u798F\u5EFA",children:[{text:"\u798F\u5DDE",children:[{text:"\u9F13\u697C\u533A"},{text:"\u53F0\u6C5F\u533A"}]},{text:"\u53A6\u95E8",children:[{text:"\u601D\u660E\u533A"},{text:"\u6D77\u6CA7\u533A"}]}]}],d=n(!1),r=n(!1),E=n(!1),a=[d,r,E],s=n(u[0]),t=n(`${e[0].values[e[0].defaultIndex]} ${e[1].values[e[1].defaultIndex]}`),c=n(`${i[0].text}
      ${i[0].children[0].text}
      ${i[0].children[0].children[0].text}`);return{listData1:u,listData2:e,listData3:i,show:d,show2:r,show3:E,desc:s,desc2:t,desc3:c,open:o=>{a[o-1].value=!0},confirm:o=>{s.value=o},confirm2:o=>{t.value=o.join(" ")},confirm3:o=>{c.value=o.join(" ")}}}}),h={class:"demo"},b=C("h2",null,"\u57FA\u7840\u7528\u6CD5",-1),$=C("h2",null,"\u591A\u5217\u6837\u5F0F",-1),w=C("h2",null,"\u591A\u7EA7\u8054\u52A8",-1);function B(u,e,i,d,r,E){const a=m("nut-cell"),s=m("nut-picker");return v(),F("div",h,[b,l(a,{title:"\u8BF7\u9009\u62E9\u57CE\u5E02",desc:u.desc,onClick:e[0]||(e[0]=t=>u.open(1))},null,8,["desc"]),$,l(a,{title:"\u8BF7\u9009\u62E9\u65F6\u95F4",desc:u.desc2,onClick:e[1]||(e[1]=t=>u.open(2))},null,8,["desc"]),w,l(a,{title:"\u8BF7\u9009\u62E9\u5730\u5740",desc:u.desc3,onClick:e[2]||(e[2]=t=>u.open(3))},null,8,["desc"]),l(s,{visible:u.show,"onUpdate:visible":e[3]||(e[3]=t=>u.show=t),"list-data":u.listData1,title:"\u57CE\u5E02\u9009\u62E9",onConfirm:u.confirm,onClose:u.close},null,8,["visible","list-data","onConfirm","onClose"]),l(s,{visible:u.show2,"onUpdate:visible":e[4]||(e[4]=t=>u.show2=t),"list-data":u.listData2,title:"\u591A\u5217\u9009\u62E9",onConfirm:u.confirm2,onClose:u.close},null,8,["visible","list-data","onConfirm","onClose"]),l(s,{visible:u.show3,"onUpdate:visible":e[5]||(e[5]=t=>u.show3=t),"list-data":u.listData3,title:"\u5730\u5740\u9009\u62E9",onConfirm:u.confirm3},null,8,["visible","list-data","onConfirm"])])}var I=p(D,[["render",B]]);export{I as default};