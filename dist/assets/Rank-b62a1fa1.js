import{_ as P,i as R,r as i,o as t,a as x,w as a,f as o,e as c,g as k,t as l,u,b as p,F as g,d as w,n as h,p as B,h as H}from"./index-ceb4d3f9.js";const V=s=>(B("data-v-1cdef564"),s=s(),H(),s),b={style:{display:"flex","flex-direction":"column"}},A=["onClick"],N={style:{display:"flex","align-items":"center","margin-bottom":"10px"}},F={style:{flex:"20",display:"flex","flex-direction":"column"}},$={style:{flex:"2","font-size":""}},j=V(()=>o("div",{class:"overlay"},null,-1)),E={__name:"RankItem",props:["rank"],setup(s){const f=R(),n=s.rank,y=[...n.data].sort((r,S)=>r.rank-S.rank),d=r=>{switch(r){case 1:return{fontSize:"xx-large",color:"#009688"};case 2:return{fontSize:"x-large",color:"#2f2bdf"};case 3:return{fontSize:"larger",color:"#56a5c4"};case 4:return{fontSize:"large",color:"#c45656"};case 5:return{fontSize:"medium",color:"#ea4c89"}}},m=r=>f.push({name:"video",params:{id:r}});return(r,S)=>{const _=i("el-text"),D=i("ArrowRightBold"),C=i("el-icon"),I=i("el-card");return t(),x(I,{shadow:"always",style:{width:"330px"}},{header:a(()=>[o("div",b,[c(_,{size:"large",style:{"text-align":"center",width:"100%"}},{default:a(()=>[k(l(u(n).name),1)]),_:1}),c(_,{size:"small",type:"info",style:{"text-align":"end",width:"100%"}},{default:a(()=>[k(l(u(n).updateTime),1)]),_:1})])]),default:a(()=>[(t(!0),p(g,null,w(u(y),e=>(t(),p("div",{key:e.rank,class:"container",style:{width:"100%"},onClick:M=>m(e.name)},[o("div",N,[o("div",{style:h([{flex:"2"},d(e.rank)])},l(e.rank),5),o("div",F,[c(_,{size:"large",style:h([{"text-align":"start",width:"100%"},d(e.rank)])},{default:a(()=>[k(l(e.name),1)]),_:2},1032,["style"]),c(_,{type:"info",style:{"text-align":"start",width:"100%"}},{default:a(()=>[k(l(e.desc),1)]),_:2},1024)]),o("div",$,[c(C,{style:h(d(e.rank))},{default:a(()=>[c(D)]),_:2},1032,["style"])])]),j],8,A))),128))]),_:1})}}},L=P(E,[["__scopeId","data-v-1cdef564"]]),T=[{name:"电影榜",updateTime:"三天前更新",data:[{rank:4,name:"犯罪都市",desc:"HD国语"},{rank:5,name:"八角笼中",desc:"TC抢版"},{rank:1,name:"流浪地球2",desc:"1080P"},{rank:2,name:"速度与激情10",desc:"HD中字"},{rank:3,name:"变形金刚：超能勇士崛起",desc:"1080P"},{rank:6,name:"变形金刚：超能勇士崛起",desc:"1080P"},{rank:7,name:"变形金刚：超能勇士崛起",desc:"1080P"},{rank:8,name:"变形金刚：超能勇士崛起",desc:"1080P"}]},{name:"电视剧榜",updateTime:"五天前更新",data:[{rank:1,name:"长风渡",desc:"已完结"},{rank:2,name:"狂飙",desc:"已完结"},{rank:3,name:"闪耀的她",desc:"更新至33集"},{rank:4,name:"犯罪都市",desc:"HD国语"},{rank:5,name:"八角笼中",desc:"TC抢版"}]},{name:"综艺榜",updateTime:"一周前更新",data:[{rank:1,name:"密室大逃脱第五季",desc:"20230906期"},{rank:2,name:"奔跑吧第七季",desc:"2023-07-25期全"},{rank:3,name:"向往的生活第三季",desc:"期全"},{rank:4,name:"男生女生向前冲",desc:"期全"},{rank:5,name:"广西卫视综艺",desc:"实时直播"}]},{name:"动漫榜",updateTime:"刚刚更新",data:[{rank:1,name:"斗罗大陆2：绝世唐门",desc:"更新至26集"},{rank:2,name:"全职法师第六季",desc:"已完结"},{rank:3,name:"练气十万年",desc:"更新至88集"},{rank:4,name:"遮天",desc:"更新至第34集"},{rank:5,name:"沧元图",desc:"已完结"}]},{name:"电影榜",updateTime:"三天前更新",data:[{rank:4,name:"犯罪都市",desc:"HD国语"},{rank:5,name:"八角笼中",desc:"TC抢版"},{rank:1,name:"流浪地球2",desc:"1080P"},{rank:2,name:"速度与激情10",desc:"HD中字"},{rank:3,name:"变形金刚：超能勇士崛起",desc:"1080P"}]}],G={__name:"Rank",setup(s){const f=Array.from({length:Math.ceil(T.length/3)},(v,n)=>T.slice(n*3,n*3+3));return(v,n)=>{const z=i("el-space");return t(!0),p(g,null,w(u(f),(y,d)=>(t(),x(z,{key:d,wrap:"",alignment:"normal",size:33,style:{"justify-content":"center",width:"100%","margin-top":"20px"}},{default:a(()=>[(t(!0),p(g,null,w(y,m=>(t(),x(L,{key:m.name,rank:m},null,8,["rank"]))),128))]),_:2},1024))),128)}}};export{G as default};