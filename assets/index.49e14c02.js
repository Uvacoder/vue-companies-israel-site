var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,s=Object.prototype.propertyIsEnumerable,n=Object.assign;import{c as o,o as r,a as l,u as i,w as c,m as u,p as d,b as h,r as p,d as v,v as m,e as f,f as g,g as y,h as w,F as b,l as k,D as S,i as _,j as C,k as x,n as T,t as L,q as I,s as M,x as $,y as j,z as E,A as z,G as H,B,C as A,E as D,H as O,S as R,N,P as J,I as G,J as V,K as F,L as P,M as U,O as q,Q as Y,R as K}from"./vendor.2b240a27.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const s=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,o)=>{const r=new URL(e,s);if(self[t].moduleMap[r])return a(self[t].moduleMap[r]);const l=new Blob([`import * as m from '${r}';`,`${t}.moduleMap['${r}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(l),onerror(){o(new Error(`Failed to import: ${e}`)),n(i)},onload(){a(self[t].moduleMap[r]),n(i)}});document.head.appendChild(i)})),self[t].moduleMap={}}}("assets/");const W=c("data-v-954310c4"),Q={expose:[],props:{size:{type:String,default:"32rem"}},setup(e){const t=e,a=o((()=>({width:t.size,height:t.size})));return W(((e,t)=>(r(),l("div",{class:"loader",style:i(a)},null,4))))},__scopeId:"data-v-954310c4"};var X={name:"@vue-companies-israel-site/site",version:"0.0.0",license:"MIT",repository:{url:"https://github.com/JonathanDn/vue-companies-israel"},scripts:{dev:"vite",build:"vite build",serve:"vite preview",prerelease2:"yarn && yarn version --patch --no-git-tag-version && yarn build",prerelease:"yarn build",release:"node ./scripts/gh-pages",postrelease2:"node ./scripts/post-release"},dependencies:{"animate.css":"^4.1.1",axios:"^0.21.1","fuse.js":"^6.4.6",lodash:"^4.17.21","mark.js":"^8.11.1",marked:"^2.0.1","prism-themes":"^1.5.0",prismjs:"^1.23.0","ranges-merge":"^7.0.7",swiper:"^6.5.0",vue:"^3.0.5","vue-github-button":"^3.0.0","vue-gtag-next":"^1.14.0","vue-toggles":"^1.1.0","vue-use-web":"^1.0.1"},devDependencies:{"@vitejs/plugin-vue":"^1.1.4","@vue/compiler-sfc":"^3.0.5","gh-pages":"^3.1.0",sass:"^1.32.8",vite:"^2.0.1","vite-plugin-markdown":"^2.0.0"}};const Z="td",ee="th";function te(e,t=(e=>e)){const a=[];return Array.from(e.rows).reduce(((s,o)=>{const r=[];return Array.from(o.children).map(((e,s)=>t(function(e,t){const{tagName:a,innerText:s,innerHTML:o}=e,r=s.trim().replace(ae," "),l=a.toLowerCase(),i=r.toLowerCase();return n(n({},l===Z&&{header:t}),{value:i,tagName:l,innerHTML:o,innerHTMLCopy:o,innerText:r})}(e,a[s])))).forEach(((t,l)=>{t.tagName===ee?(s.thead.push(t),l===function(e){return Array.from(e.tHead.rows[0].children)}(e).length-1&&a.push(...s.thead.map((e=>e.value)))):0===e.tHead.rows.length?s.tbody.push(t):(r.push(t),r.length===o.children.length&&(s.tbody.push(function(e,t){return e.reduce(((e,a,s)=>n(n({},e),{[a]:t[s]})),{})}(a,r)),r.length=0))})),s}),{thead:[],tbody:[]})}const ae=/ {2,}/g;function se(e){return`${X.name}-${e}`}function ne(e,t,a=432e5){const s=se(e),n=new Date,o={date:n.getTime(),value:t,expiry:n.getTime()+a};return localStorage.setItem(s,JSON.stringify(o)),o.date}function oe(e){const t=se(e),a=localStorage.getItem(t);if(!a)return null;const s=JSON.parse(a);return(new Date).getTime()>s.expiry?(localStorage.removeItem(t),null):s}function re(e){const t=new Date(e),a=t.getDate(),s=t.getFullYear();return`${t.toLocaleString("default",{month:"long"})} ${a}, ${s}`}function le(e){return function(t){return console.error(t),e(t),{error:t}}}function ie(e){return new Promise((t=>{const a=document.createElement("template");a.innerHTML=e,window.requestAnimationFrame((()=>t(a)))}))}const ce=c("data-v-b75d7cf6");d("data-v-b75d7cf6");const ue={class:"search"};h();const de={expose:[],props:{disabled:{type:Boolean,default:!1}},setup(e){const t=p("");return ce(((a,s)=>(r(),l("div",ue,[v(f("input",{class:"input",type:"search","onUpdate:modelValue":s[1]||(s[1]=e=>t.value=e),disabled:e.disabled,placeholder:"Search... 🔎",onInput:s[2]||(s[2]=e=>a.$emit("change",t.value))},null,40,["disabled"]),[[m,t.value]])]))))},__scopeId:"data-v-b75d7cf6"},he=f("path",{d:"M22.906 2.841c1.104-2.412-7.833-2.841-10.907-2.841-2.934 0-12.01.429-10.906 2.841.508 1.11 8.907 12.916 8.907 12.916v5.246l4 2.997v-8.243s8.398-11.806 8.906-12.916zm-10.901-.902c4.243 0 8.144.575 8.144 1.226s-3.9 1.18-8.144 1.18-8.042-.528-8.042-1.18 3.799-1.226 8.042-1.226z"},null,-1),pe={expose:[],setup(e){const t=o((()=>({fill:"currentColor",width:"12rem"})));return(e,a)=>(r(),l("svg",{style:i(t),viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[he],4))}};const ve={value:"recruiting devs",replaceValue:"recruiting",values:{unchecked:"❌"}},me={emits:["ready"],setup(e,{emit:t}){const a=g({fuse:{},rows:[],search:[],headers:[],allRows:[],keyword:"",lastUpdated:"",sortColumn:null,isFetching:!1,ascending:!1}),s=le((e=>a.error=e)),r=((e,t,{delay:a}={})=>async s=>{e(!0);const n=await s().catch(t),o=new Promise((e=>setTimeout(e,a))),[,r]=await Promise.all([o,n]);return e(!1),r})((e=>a.isFetching=e),s,{delay:500}),l=async()=>await S.get("https://raw.githubusercontent.com/JonathanDn/vue-companies-israel/main/README.md").catch(s),i=(e,{ascending:t=!0}={})=>{const s=e.toLowerCase();a.sortColumn===s?a.ascending=!a.ascending:(a.ascending=t,a.sortColumn=s),a.rows=a.rows.sort(c(a.ascending,(e=>e[s].innerText)))},c=(e=!0,t=(e=>e))=>(a,s)=>{const n=t(a),o=t(s);return n>o?e?1:-1:n<o?e?-1:1:0},d=async e=>{let t=a.fuse.search(e);return a.search=t,e?(t=t.map((async({item:{row:e,column:t},matches:a,matches:[s]})=>(a.length&&(t.innerHTML=await async function(e,t,a){const s=await ie(e);return new u(s.content,a).markRanges(t.map((([e,t])=>({start:e,length:t})))),s.innerHTML}(t.innerHTMLCopy,s.indices,{className:""})),e))),t=await Promise.all(t),[...new Set(t)]):a.allRows},h=o((()=>({width:100/a.headers.length+"%"}))),p=e=>{if(e.tagName===ee&&e.value===ve.value){const a=ve.replaceValue;return n(n({},e),{value:a,innerText:(t=a,t[0].toUpperCase()+t.slice(1))})}if(e.header===ve.replaceValue&&!e.value){const t=ve.values.unchecked;return n(n({},e),{value:t.toLowerCase(),innerHTML:t})}var t;return e};return y((async()=>{const{table:e,date:n,error:o}=await(c=p,new Promise((async e=>{const t=oe("table");if(t)e({table:t.value,date:t.date});else{const{error:t,data:a}=await r(l);if(t)e({error:t});else{const t=w(a),s=te((await ie(t)).content.querySelector("table"),c);e({table:s,date:ne("table",s)})}}}))).catch(s);var c;if(o)return;const u=e.thead,d=e.tbody,h=(e=>e.map((e=>Object.entries(e).map((([,t])=>({row:e,column:t,value:t.value}))))).flat())(d);var v,m;a.fuse=new b(h,{keys:["value"],includeMatches:!0,minMatchCharLength:2}),a.lastUpdated=n,a.rows=d,a.headers=u,a.allRows=k.merge([],d),v=1,m={ascending:!1},i(a.headers[v].innerText,m),t("ready",{length:a.rows.length})})),{state:a,Search:de,Filter:pe,tdStyle:h,onSearch:async e=>{const t=e.target.value;a.keyword=t,a.rows=await d(t)},sortTable:i,getDisplayDate:re}}},fe=c("data-v-341b5fee");d("data-v-341b5fee");const ge={class:"table-container"},ye={class:"scroll-container"},we={class:"table"},be={key:0},ke={key:0,class:"no-results"},Se={key:1,class:"error"},_e=T(" An error has occurred while retrieving the table. "),Ce=f("a",{href:"/"},"Try again?",-1),xe=T(" 🥵 "),Te={style:{display:"flex","align-items":"center","padding-top":"16rem"}},Le={key:1,class:"last-updated"};h();const Ie=fe(((e,t,a,s,n,o)=>{const i=_("Loader"),c=_("Small");return r(),l(C,null,[f(s.Search,{onInput:s.onSearch,disabled:s.state.error},null,8,["onInput","disabled"]),f("div",ge,[f("div",ye,[f("table",we,[f("thead",null,[f("tr",null,[(r(!0),l(C,null,x(s.state.headers,((e,t)=>(r(),l("th",{key:t,style:s.tdStyle,onClick:t=>s.sortTable(e.value)},[T(L(e.innerText)+" ",1),e.value===s.state.sortColumn?(r(),l("span",be,L(s.state.ascending?"↑":"↓"),1)):I("",!0)],12,["onClick"])))),128))])]),f("tbody",null,[(r(!0),l(C,null,x(s.state.rows,((e,t)=>(r(),l("tr",{key:t},[(r(!0),l(C,null,x(e,((e,t)=>(r(),l("td",{innerHTML:e.innerHTML,style:s.tdStyle,key:t},null,12,["innerHTML"])))),128))])))),128)),s.state.keyword&&0===s.state.rows.length?(r(),l("tr",ke,[f("td",{colspan:s.state.headers.length},"Nope, can't find that. 😪",8,["colspan"])])):I("",!0),s.state.error?(r(),l("tr",Se,[f("td",{colspan:s.state.headers.length},[_e,Ce,xe],8,["colspan"])])):I("",!0)])])]),f("div",Te,[s.state.isFetching?(r(),l(i,{key:0,size:"24rem"})):I("",!0),s.state.lastUpdated?(r(),l("div",Le,[f(c,null,{default:fe((()=>[T("Last updated: "+L(s.getDisplayDate(s.state.lastUpdated)),1)])),_:1})])):I("",!0)])])],64)}));me.render=Ie,me.__scopeId="data-v-341b5fee";const Me=c("data-v-3bb2e069"),$e={expose:[],props:{src:{type:String},size:{type:String},color:{type:String},cover:{type:Boolean}},setup(e){const t=e,a=o((()=>({backgroundColor:t.color,padding:t.cover?"0":"16rem",backgroundImage:`url(${t.src})`,backgroundSize:t.size?t.size:t.cover?"cover":"86%"})));return Me(((e,t)=>(r(),l("div",{class:"slide",style:i(a)},[M(e.$slots,"default")],4))))},__scopeId:"data-v-3bb2e069"};const je=c("data-v-28516b05");d("data-v-28516b05");const Ee={class:"links-container"},ze={class:"links"},He=f("li",null,[f("a",{href:"https://github.com/JonathanDn/vue-companies-israel/graphs/contributors"},"Contributors")],-1),Be=f("li",null,[f("a",{href:"https://github.com/JonathanDn/vue-companies-israel"},"GitHub")],-1);h();const Ae={expose:[],setup:e=>je(((e,t)=>{const a=_("GitHubStars");return r(),l("div",Ee,[f("ul",ze,[He,Be,f("li",null,[f(a,{packageJson:i(X)},null,8,["packageJson"])])])])})),__scopeId:"data-v-28516b05"};const De=Symbol(),Oe=()=>document.getElementsByTagName("nav")[0].getBoundingClientRect().height.toFixed(2),Re={setup(){const{y:e}=$(),t=o((()=>e.value>0));return j(De,{isSticky:t}),{isSticky:t}}},Ne=c("data-v-45753434")(((e,t,a,s,n,o)=>(r(),l("nav",{class:["nav",{"is-sticky":s.isSticky,static:!s.isSticky}]},[M(e.$slots,"default",{isSticky:s.isSticky})],2))));Re.render=Ne,Re.__scopeId="data-v-45753434";const Je=c("data-v-75589fc0");d("data-v-75589fc0");const Ge={class:"button"},Ve={class:"icon"};h();const Fe={expose:[],props:{icon:String},setup:e=>Je(((t,a)=>(r(),l("button",Ge,[f("span",Ve,L(e.icon),1),M(t.$slots,"default")])))),__scopeId:"data-v-75589fc0"};const Pe={},Ue=c("data-v-02ead0d7");d("data-v-02ead0d7");const qe={href:"#",class:"animate__animated animate__fadeInDown"},Ye=f("svg",{class:"logo",version:"1.1",viewBox:"0 0 261.76 226.69",xmlns:"http://www.w3.org/2000/svg"},[f("defs",null,[f("linearGradient",{id:"Gradient1",x1:"0",x2:"0",y1:"0",y2:"1"},[f("stop",{offset:"0%","stop-color":"#2d805b"}),f("stop",{offset:"80%","stop-color":"#ffffff"})]),f("linearGradient",{id:"Gradient2",x1:"0",x2:"0",y1:"0",y2:"1"},[f("stop",{offset:"0%","stop-color":"#ffffff"}),f("stop",{offset:"120%","stop-color":"#2d805b"})])]),f("g",{transform:"matrix(1.3333 0 0 -1.3333 -76.311 313.34)"},[f("g",{transform:"translate(178.06 235.01)"},[f("path",{fill:"url(#Gradient1)",d:"m0 0-22.669-39.264-22.669 39.264h-75.491l98.16-170.02 98.16 170.02z"})]),f("g",{transform:"translate(178.06 235.01)"},[f("path",{fill:"url(#Gradient2)",d:"m0 0-22.669-39.264-22.669 39.264h-36.227l58.896-102.01 58.896 102.01z"})])])],-1);h();const Ke=Ue(((e,t)=>(r(),l("a",qe,[Ye]))));Pe.render=Ke,Pe.__scopeId="data-v-02ead0d7";const We=c("data-v-6cebcb0a"),Qe={expose:[],props:{level:{type:String,required:!0},href:{type:String}},setup:e=>We(((t,a)=>(r(),l(E(`h${e.level}`),{class:"heading"},{default:We((()=>[e.href?(r(),l("a",{key:0,class:"anchor",href:e.href,"aria-hidden":"true"},"#",8,["href"])):I("",!0),M(t.$slots,"default")])),_:3})))),__scopeId:"data-v-6cebcb0a"};const Xe=c("data-v-591f43de"),Ze={expose:[],props:{content:Boolean},setup:e=>Xe(((t,a)=>(r(),l("div",{class:["container",{"has-content":e.content}]},[M(t.$slots,"default")],2)))),__scopeId:"data-v-591f43de"};const et={setup:(e,t)=>({style:o((()=>({"grid-template-columns":`repeat(${t.slots.default().length}, minmax(0, 1fr))`})))})},tt=c("data-v-d61bc90e")(((e,t,a,s,n,o)=>(r(),l("div",{class:"button-group",style:s.style},[M(e.$slots,"default")],4))));et.render=tt,et.__scopeId="data-v-d61bc90e";const at=c("data-v-40dabd91");d("data-v-40dabd91");const st={class:"header animate__animated animate__fadeIn"},nt=f("div",{class:"stars"},null,-1),ot=f("a",{href:"https://vuejs.org/"},"Vue.js",-1),rt={href:"#get-started"},lt=T("Get Started"),it={href:"https://github.com/JonathanDn/vue-companies-israel/pulls"},ct=T("Add Company");h();const ut={expose:[],setup:e=>at(((e,t)=>(r(),l("header",st,[nt,f(Ze,{class:"container"},{default:at((()=>[f(Pe),f(Qe,{level:"1",style:{color:"var(--color-body)"}},{default:at((()=>[T(" A curated list of "+L(e.$attrs.companies)+" companies who hire Israelis - that work with ",1),ot])),_:1},8,["style"]),f(et,null,{default:at((()=>[f("a",rt,[f(Fe,{icon:"🙋🏻‍♀️",onClick:t[1]||(t[1]=t=>e.$emit("get-started"))},{default:at((()=>[lt])),_:1})]),f("a",it,[f(Fe,{icon:"👨🏻‍🌾"},{default:at((()=>[ct])),_:1})])])),_:1})])),_:1})])))),__scopeId:"data-v-40dabd91"},dt={expose:[],props:{color:{type:String,default:"#1da1f2"},size:{type:Number,default:32},unit:{type:String,default:"rem"}},setup(e){const t=e,a=o((()=>({width:t.size+t.unit,height:t.size+t.unit})));return(t,s)=>(r(),l("svg",{style:i(a),viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[f("path",{fill:e.color,d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z"},null,8,["fill"])],4))}};const ht=c("data-v-ed1c1a4e");d("data-v-ed1c1a4e");const pt=f("path",{d:"M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z"},null,-1);h();const vt={expose:[],props:{size:{type:Number,default:32}},setup(e){const t=e,a=o((()=>({width:`${t.size+4}rem`})));return ht(((e,t)=>(r(),l("svg",{style:i(a),"fill-rule":"evenodd","clip-rule":"evenodd",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[pt],4))))},__scopeId:"data-v-ed1c1a4e"},mt={expose:[],props:{color:{type:String,default:"#4267b2"},size:{type:Number,default:32},unit:{type:String,default:"rem"}},setup(e){const t=e,a=o((()=>({width:t.size+t.unit,height:t.size+t.unit})));return(t,s)=>(r(),l("svg",{style:i(a),viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[f("path",{fill:e.color,d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"},null,8,["fill"])],4))}};const ft=c("data-v-534bb102");d("data-v-534bb102");const gt={class:"community"},yt={href:"https://www.facebook.com/groups/1062801280495598"},wt={href:"https://twitter.com/vuejsisrael"},bt={href:"https://discord.gg/vue"};h();const kt={expose:[],setup:e=>ft(((e,t)=>(r(),l("div",gt,[f("a",yt,[f(mt,{color:"white"})]),f("a",wt,[f(dt)]),f("a",bt,[f(vt)])])))),__scopeId:"data-v-534bb102"};var St={name:"ScrollToTopScope",setup(){const e=p(!1),{y:t}=$();return z((()=>t.value),(async()=>e.value=await new Promise((e=>window.requestAnimationFrame((()=>{e(window.innerHeight+t.value>=.667*document.body.scrollHeight)})))))),{isScrollEndRef:e,scrollToTop:()=>window.scrollTo({top:0,behavior:"smooth"})}},render(){var e,t;const{isScrollEndRef:a,scrollToTop:s}=this;return null==(t=(e=this.$slots).default)?void 0:t.call(e,{isScrollEnd:a,scrollToTop:s})}};const _t=c("data-v-75aa715c"),Ct={expose:[],setup:e=>_t(((e,t)=>(r(),l(i(St),null,{default:_t((e=>[f("div",{class:["scroll-to-top",{"is-visible":e.isScrollEnd}],onClick:e.scrollToTop}," ↑ ",10,["onClick"])])),_:1})))),__scopeId:"data-v-75aa715c"};const xt={},Tt=c("data-v-49cb73a8");d("data-v-49cb73a8");const Lt={class:"error"};h();const It=Tt(((e,t)=>(r(),l("div",Lt,[f("small",null,[M(e.$slots,"default")])]))));xt.render=It,xt.__scopeId="data-v-49cb73a8";const Mt=c("data-v-2ef84217");d("data-v-2ef84217");const $t={class:"contributors"};h();const jt={expose:[],props:{owner:{type:String,required:!0},repository:{type:String,required:!0}},setup(e){const t=e,a=g({value:null}),s=le((e=>a.value=e.message)),n=g([]);return y((async()=>{const e=await(async()=>{const e=oe("contributors");if(e)return e.value;const{error:a,data:n}=await S.get((o=t.owner,r=t.repository,`https://api.github.com/repos/${o}/${r}/contributors`)).catch(s);var o,r;return a?[]:(ne("contributors",n),n)})().catch(s);n.push(...e.slice(0,10))})),Mt(((e,t)=>(r(),l("div",$t,[(r(!0),l(C,null,x(i(n),((e,t)=>(r(),l("img",{key:t,src:e.avatar_url,title:e.login,alt:e.login},null,8,["src","title","alt"])))),128)),i(a).value?(r(),l(xt,{key:0},{default:Mt((()=>[T(L(i(a).value?i(a).value:i(a)),1)])),_:1})):I("",!0)]))))},__scopeId:"data-v-2ef84217"};const Et=c("data-v-19897e78");d("data-v-19897e78");const zt={class:"github-anchor",href:"https://github.com/JonathanDn/vue-companies-israel"},Ht=f("path",{"fill-rule":"evenodd","clip-rule":"evenodd",transform:"scale(64)",d:"M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"},null,-1);h();const Bt={expose:[],props:{href:{type:String,required:!0},style:{type:Object,default:()=>({width:"32rem"})}},setup:e=>Et(((t,a)=>(r(),l("a",zt,[(r(),l("svg",{style:e.style,viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},[Ht],4))])))),__scopeId:"data-v-19897e78"};const At=c("data-v-2605e9b2");d("data-v-2605e9b2");const Dt=T("Star ");h();const Ot={expose:[],props:{packageJson:{type:Object,required:!0}},setup:e=>At(((t,a)=>{var s;return r(),l(i(H),{class:"github-stars","data-show-count":"true","data-icon":"octicon-star",href:null==(s=e.packageJson.repository)?void 0:s.url,"aria-label":`Star ${e.packageJson.author}/${e.packageJson.name} on GitHub`},{default:At((()=>[Dt])),_:1},8,["href","aria-label"])})),__scopeId:"data-v-2605e9b2"},Rt={expose:[],props:{markdown:{type:String}},setup:e=>(y((()=>{setTimeout(B.highlightAll)})),(t,a)=>(r(),l("div",{class:"markdown",innerHTML:e.markdown},null,8,["innerHTML"])))};const Nt={},Jt=c("data-v-2137b4a6");d("data-v-2137b4a6");const Gt={class:"small"};h();const Vt=Jt(((e,t)=>(r(),l("small",Gt,[M(e.$slots,"default")]))));Nt.render=Vt,Nt.__scopeId="data-v-2137b4a6";const Ft=c("data-v-5bd2b688");d("data-v-5bd2b688");const Pt={class:"footer"},Ut={class:"fixed"},qt=f("a",{href:"https://github.com/adi518/vue-companies-israel-site"}," GitHub ",-1);h();const Yt={expose:[],setup:e=>Ft(((e,t)=>(r(),l("footer",Pt,[f("div",Ut,[f(Nt,null,{default:Ft((()=>[T(L(i(X).version),1)])),_:1}),f(Nt,null,{default:Ft((()=>[qt])),_:1})])])))),__scopeId:"data-v-5bd2b688"};const Kt={},Wt=c("data-v-e4919030");d("data-v-e4919030");const Qt={class:"social"};h();const Xt=Wt(((e,t)=>(r(),l("div",Qt,[M(e.$slots,"default")]))));Kt.render=Xt,Kt.__scopeId="data-v-e4919030";const Zt={name:"VueToggles",emits:["click"],props:{value:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},reverse:{type:Boolean,default:!1},checkedText:{type:String,default:null},uncheckedText:{type:String,default:null},width:{type:[Number,String],default:75},height:{type:[Number,String],default:25},uncheckedBg:{type:String,default:"#939393"},checkedBg:{type:String,default:"#5850ec"},dotColor:{type:String,default:"#fff"},dotClass:{type:String,default:""},fontSize:{type:[Number,String],default:"12"},checkedColor:{type:String,default:"#fff"},uncheckedColor:{type:String,default:"#fff"},fontWeight:{type:[Number,String],default:"normal"},unit:{type:String,default:"px"}},computed:{bgStyle(){return{width:this.width+this.unit,height:this.height+this.unit,background:this.value&&!this.disabled?this.checkedBg:this.uncheckedBg}},dotStyle(){const e={background:this.dotColor,width:this.height-8+this.unit,height:this.height-8+this.unit,"min-width":this.height-8+this.unit,"min-height":this.height-8+this.unit,"margin-left":this.value?this.width-(this.height-3)+this.unit:"5px"};return(!this.value&&this.reverse||this.value&&!this.reverse)&&(e.marginLeft=this.width-(this.height-3)+this.unit),(this.value&&this.reverse||!this.value&&!this.reverse)&&(e.marginLeft="5px"),e},textStyle(){const e={"font-weight":this.fontWeight,"font-size":this.fontSize+this.unit,color:this.value&&!this.disabled?this.checkedColor:this.uncheckedColor,right:this.value?this.height-3+this.unit:"auto",left:this.value?"auto":this.height-3+this.unit};return!this.value&&this.reverse&&(e.right=this.height-3+this.unit,e.left="auto"),this.value&&this.reverse&&(e.left=this.height-3+this.unit,e.right="auto"),e}}};Zt.render=function(e,t,a,s,n,o){return r(),l("span",{class:"vue-toggles",style:o.bgStyle,role:"switch",tabindex:"0","aria-checked":a.value?"true":"false","aria-readonly":a.disabled?"true":"false",onClick:t[1]||(t[1]=t=>a.disabled?null:e.$emit("click",a.value)),onKeyup:[t[2]||(t[2]=D(O((t=>a.disabled?null:e.$emit("click",a.value)),["prevent"]),["enter"])),t[3]||(t[3]=D(O((t=>a.disabled?null:e.$emit("click",a.value)),["prevent"]),["space"]))]},[f("span",{"aria-hidden":"true",style:o.dotStyle,class:["dot",a.dotClass]},[v(f("span",{style:o.textStyle,class:"text"},L(a.checkedText),5),[[A,a.checkedText&&a.value]]),v(f("span",{style:o.textStyle,class:"text"},L(a.uncheckedText),5),[[A,a.uncheckedText&&!a.value]])],6)],44,["aria-checked","aria-readonly"])};var ea=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Nav:Re,Header:ut,Button:Fe,Community:kt,ButtonGroup:et,ScrollToTop:Ct,Contributors:jt,ScrollToTopScope:St,GitHubAnchor:Bt,GitHubStars:Ot,Container:Ze,Markdown:Rt,VueLogo:Pe,Heading:Qe,Footer:Yt,Social:Kt,Small:Nt,Error:xt,Toggle:Zt,Loader:Q});function ta(e,o=0,r={}){if(Array.isArray(e))return e.reduce(((e,l)=>{const{name:i,path:c,children:u}=l,d=((e,n)=>{var o={};for(var r in e)t.call(e,r)&&n.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&a)for(var r of a(e))n.indexOf(r)<0&&s.call(e,r)&&(o[r]=e[r]);return o})(l,["name","path","children"]),h=0===o,p=!h;return e.push(n(n({},d),{name:i,path:c,level:o,isRoot:h,nested:p,parent:n(n({},r),{name:h?void 0:r.name})})),Array.isArray(u)&&u.length&&(e=e.concat(ta(u,o+1,l))),e}),[])}const aa=(e,t,a)=>{if(e.matched.length)return a();a({path:`${t.path}?a=${e.path.substr(1)}`})},sa=(e,{offsetY:t=(async()=>0),offsetMultiplier:a=2,onLoad:s=!1}={})=>{if(sa.Component)return sa.Component;const o=[];if(e&&(o.push(...(e=>ta(e.options.routes).reduce(((e,t)=>n(n({},e),{[t.path]:1})),{}))(e)),e.beforeEach(aa)),a){const e=t;t=()=>e()*a}const r=new la(o,t);return sa.Component={data:()=>({isMounted:!1}),mounted(){this.isMounted=!0,this.scrollToLocalAnchor(),r.add()},beforeUnmount(){this.isMounted=!1,r.remove()},methods:{async scrollToLocalAnchor(){if(!this.isMounted||!s)return;const e=new URLSearchParams(window.location.hash.substr(2)).get("a");e&&(await this.$nextTick(),na(e,t))}},render:()=>null},sa.Component};sa.Component=null;const na=(e,t=(()=>0))=>new Promise((a=>{window.requestAnimationFrame((()=>{let s;if(e instanceof HTMLAnchorElement){const t=e.getAttribute("href").substr(1);s=document.getElementById(t)?document.getElementById(t):e}else s=document.getElementById(e)||document.querySelector(`[href='#${e}'`);!function(e,t=(()=>{})){const a=function(){window.pageYOffset===Math.floor(e)&&(window.removeEventListener("scroll",a),t())};window.addEventListener("scroll",a),a(),window.scrollTo({top:e,behavior:"smooth"})}(s.getBoundingClientRect().top+window.pageYOffset-t()),a()}))})),oa=/^#/,ra=class{constructor(e,t){const a=ra.createClickHandler(e,t);this.add=()=>document.addEventListener("click",a,!0),this.remove=()=>document.removeEventListener("click",a)}};let la=ra;var ia,ca,ua;ua=(e,t=(()=>0))=>async a=>{var s;const n=a.target.closest("a")||a.target;if(!(n instanceof HTMLAnchorElement&&oa.test(n.hash)))return;const o=null==(s=n.hash)?void 0:s.substr(1);e[o]||window.location.host!==n.host||(a.preventDefault(),await na(n,t),window.location.hash=`?a=${o}`)},"symbol"!=typeof(ca="createClickHandler")&&(ca+=""),ca in(ia=la)?e(ia,ca,{enumerable:!0,configurable:!0,writable:!0,value:ua}):ia[ca]=ua,Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null});const da={install(e){Object.keys(ea).forEach((t=>e.component(t,ea[t])))}};const ha=T(" * Table does "),pa=f("b",null,"not",-1),va=T(" contain freelancers, consultancies, software contractors or open source projects working with "),ma=f("a",{href:"https://vuejs.org/"},"Vue.js",-1),fa=T(". "),ga=T("What is Vue.js?"),ya=f("p",null,[f("a",{href:"https://vuejs.org/"},"Vue.js"),T(" is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members. "),f("a",{href:"https://en.wikipedia.org/wiki/Vue.js"},"Wikipedia")],-1),wa=T("Explore Resources"),ba={href:"https://madewithvuejs.com/"},ka={href:"https://github.com/vuejs/awesome-vue"},Sa={href:"https://www.vuemastery.com/"},_a={href:"https://daily.dev/"},Ca={href:"https://www.udemy.com/course/vuejs-2-the-complete-guide/"},xa={href:"https://www.vuemastery.com/pdf/Vue-3-Cheat-Sheet.pdf"},Ta=T("Made by"),La=T("Contributing"),Ia=f("p",null,[T(" If your company is currently working with "),f("a",{href:"https://vuejs.org/"},"Vue.js"),T(", open a "),f("a",{href:"https://github.com/JonathanDn/vue-companies-israel/pulls"}," pull request"),T(" to add it to the table above. If it's also currently recruiting, make sure to check the "),f("b",null,"Recruiting"),T(" column. ")],-1),Ma=T("Community"),$a=T("Links"),ja=Y({expose:[],setup(e){R.use([N,J,G,V]);const t=sa(null,{offsetY:Oe}),a=p(null),s=p(!0);g({value:[]});const n={0:{slidesPerView:3},991.98:{slidesPerView:6}},o=({length:e})=>a.value=e,c=e=>{e.ctrlKey&&"F5"===e.key&&localStorage.clear()};return y((()=>{document.addEventListener("keydown",c)})),F((()=>{document.removeEventListener("keydown",c)})),(e,c)=>{const u=_("Toggle"),d=_("GitHubAnchor"),h=_("Social"),p=_("Nav"),v=_("Header"),m=_("Small"),g=_("Container"),y=_("Heading"),w=_("Contributors"),b=_("Community"),k=_("Footer"),S=_("ScrollToTop");return r(),l(C,null,[f(p,null,{default:P((e=>[f(u,{disabled:"",unit:"rem",width:"50",height:"25",fontSize:"14",checkedText:"🌜",uncheckedText:"🌞",dotClass:"toggle-dot",dotColor:"currentColor",checkedBg:"var(--color-secondary2)",uncheckedBg:"var(--color-secondary2)",value:s.value,onClick:c[1]||(c[1]=e=>s.value=!s.value)},null,8,["value"]),f(h,null,{default:P((()=>[f(d,{class:{"is-sticky":e.isSticky},href:"https://github.com/JonathanDn/vue-companies-israel"},null,8,["class"])])),_:2},1024)])),_:1}),f(v,{companies:a.value},null,8,["companies"]),f(g,{content:"",id:"get-started"},{default:P((()=>[f(me,{onReady:o}),f("p",null,[f(m,null,{default:P((()=>[ha,pa,va,ma,fa])),_:1})])])),_:1}),f(g,{content:""},{default:P((()=>[f(y,{level:"3",href:"#what-is-vuejs"},{default:P((()=>[ga])),_:1}),ya,f(y,{level:"3",href:"#explore-resources"},{default:P((()=>[wa])),_:1}),f(i(U),{"space-between":16,breakpoints:n},{default:P((()=>[f(i(q),null,{default:P((()=>[f("a",ba,[f($e,{src:"resources/made-with-vuejs.png"})])])),_:1}),f(i(q),null,{default:P((()=>[f("a",ka,[f($e,{src:"resources/awesome-vue.svg"})])])),_:1}),f(i(q),null,{default:P((()=>[f("a",Sa,[f($e,{src:"resources/vue-mastery.svg"})])])),_:1}),f(i(q),null,{default:P((()=>[f("a",_a,[f($e,{src:"resources/daily-dev.svg"})])])),_:1}),f(i(q),null,{default:P((()=>[f("a",Ca,[f($e,{src:"resources/udemy.svg"})])])),_:1}),f(i(q),null,{default:P((()=>[f("a",xa,[f($e,{cover:"",src:"resources/vue-composition-api-cheatsheet.png"})])])),_:1})])),_:1}),f(y,{level:"3",href:"#made-by"},{default:P((()=>[Ta])),_:1}),f(w,{owner:"JonathanDn",repository:"vue-companies-israel"}),f(y,{level:"3",href:"#contributing"},{default:P((()=>[La])),_:1}),Ia,f(y,{level:"3",href:"#links"},{default:P((()=>[Ma])),_:1}),f(b),f(y,{level:"3",href:"#links"},{default:P((()=>[$a])),_:1}),f(Ae)])),_:1}),f(k),f(S),f(i(t))],64)}}});ja.use(da),ja.use(K,{config:{id:"G-BKK301VXEG"}}),ja.mount("#app");
