import{c as t}from"./mobile.082dfdd0.js";import{x as e,y as n,r as l,o as a,c as i,f as o,s as c,j as d}from"./vendor.96954379.js";import"./index.b76f485b.js";const{createDemo:s}=t("steps");var u=s({props:{},setup:()=>({})});const r=c();e("data-v-1e8e799a");const f={class:"demo"},_=o("h2",null,"基本用法",-1),p=d("1"),h=d("2"),v=d("3"),m=d("4"),x=o("h2",null,"标题和描述信息",-1),g=d("1"),j=o("h2",null,"自定义图标",-1),b=d("1"),y=d("2"),w=d("3"),D=o("h2",null,"竖向步骤条",-1),I={style:{height:"300px"}},k=d("1"),q=d("2"),z=d("3"),A={style:{height:"300px"}},B=d("1"),C=d("2"),E=d("3");n();const F=r(((t,e,n,c,d,s)=>{const u=l("nut-step"),F=l("nut-steps");return a(),i("div",f,[_,o(F,{current:"1"},{default:r((()=>[o(u,{title:"进行中"},{default:r((()=>[p])),_:1}),o(u,{title:"未开始"},{default:r((()=>[h])),_:1}),o(u,{title:"未开始"},{default:r((()=>[v])),_:1}),o(u,{title:"未开始"},{default:r((()=>[m])),_:1})])),_:1}),x,o(F,{current:"2"},{default:r((()=>[o(u,{title:"已完成",content:"步骤描述"},{default:r((()=>[g])),_:1}),o(u,{title:"进行中",content:"步骤描述"}),o(u,{title:"未开始",content:"步骤描述"})])),_:1}),j,o(F,{current:"1"},{default:r((()=>[o(u,{title:"已完成",icon:"notice"},{default:r((()=>[b])),_:1}),o(u,{title:"进行中",icon:"notice"},{default:r((()=>[y])),_:1}),o(u,{class:"nut-step-wait",title:"未开始",icon:"notice"},{default:r((()=>[w])),_:1})])),_:1}),D,o("div",I,[o(F,{direction:"vertical",current:"2"},{default:r((()=>[o(u,{title:"已完成",icon:"nut-icon-wanshangshide",content:"您的订单已经打包完成，商品已发出"},{default:r((()=>[k])),_:1}),o(u,{title:"进行中",content:"您的订单正在配送途中"},{default:r((()=>[q])),_:1}),o(u,{title:"未开始",content:"收货地址为：北京市经济技术开发区科创十一街18号院京东大厦"},{default:r((()=>[z])),_:1})])),_:1})]),o("div",A,[o(F,{direction:"vertical","progress-dot":"",current:"2"},{default:r((()=>[o(u,{title:"已完成",content:"您的订单已经打包完成，商品已发出"},{default:r((()=>[B])),_:1}),o(u,{title:"进行中",content:"您的订单正在配送途中"},{default:r((()=>[C])),_:1}),o(u,{title:"未开始",content:"<p>收货地址为：</p><p>北京市经济技术开发区科创十一街18号院京东大厦</p>"},{default:r((()=>[E])),_:1})])),_:1})])])}));u.render=F,u.__scopeId="data-v-1e8e799a";export default u;