var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,s=Object.prototype.propertyIsEnumerable,n=Object.assign;import{p as o,a as r,r as l,o as i,c,w as u,v as d,b as h,d as p,e as v,f,g as m,D as g,m as y,h as b,F as w,i as k,j as S,t as _,k as x,l as C,u as T,n as I,q as $,s as E,x as j,G as L,y as M,z,A as H,B,S as A,N as D,P as O,C as J,E as N,H as G,I as R,J as U,K as V,L as q}from"./vendor.4c4876cb.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const s=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,o)=>{const r=new URL(e,s);if(self[t].moduleMap[r])return a(self[t].moduleMap[r]);const l=new Blob([`import * as m from '${r}';`,`${t}.moduleMap['${r}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(l),onerror(){o(new Error(`Failed to import: ${e}`)),n(i)},onload(){a(self[t].moduleMap[r]),n(i)}});document.head.appendChild(i)})),self[t].moduleMap={}}}("assets/");var P={name:"@vue-companies-israel-site/site",version:"0.0.0",license:"MIT",repository:{url:"https://github.com/JonathanDn/vue-companies-israel"},scripts:{dev:"vite",build:"vite build",serve:"vite preview",prerelease2:"yarn && yarn version --patch --no-git-tag-version && yarn build",prerelease:"yarn build",release:"node ./scripts/gh-pages",postrelease2:"node ./scripts/post-release"},dependencies:{"animate.css":"^4.1.1",axios:"^0.21.1",marked:"^2.0.1","prism-themes":"^1.5.0",prismjs:"^1.23.0",swiper:"^6.5.0",vue:"^3.0.5","vue-github-button":"^3.0.0","vue-gtag-next":"^1.14.0","vue-toggles":"^1.1.0","vue-use-web":"^1.0.1"},devDependencies:{"@vitejs/plugin-vue":"^1.1.4","@vue/compiler-sfc":"^3.0.5","gh-pages":"^3.1.0",sass:"^1.32.8",vite:"^2.0.1","vite-plugin-markdown":"^2.0.0"}};function F(e){const t=[];return Array.from(e.rows).reduce(((a,s)=>{const o=[];return Array.from(s.children).map(K).forEach(((r,l)=>{"th"===r.tagName.toLowerCase()?(a.thead.push(r),l===Y(e).length-1&&t.push(...function(e){return Y(e).map((e=>K(e).innerText))}(e))):0===e.tHead.rows.length?a.tbody.push(r):(o.push(r),o.length===s.children.length&&(a.tbody.push(function(e,t){return e.reduce(((e,a,s)=>n(n({},e),{[a]:t[s]})),{})}(t,o)),o.length=0))})),a}),{thead:[],tbody:[]})}function Y(e){return Array.from(e.tHead.rows[0].children)}function K(e){const{tagName:t,innerText:a,innerHTML:s}=e,n=a.trim();return{tagName:t.toLowerCase(),innerHTML:s,innerText:n,innerTextLowerCase:n.toLowerCase()}}function W(e){return`${P.name}-${e}`}function X(e,t,a=432e5){const s=W(e),n=new Date,o={date:n.getTime(),value:t,expiry:n.getTime()+a};return localStorage.setItem(s,JSON.stringify(o)),o.date}function Z(e){const t=W(e),a=localStorage.getItem(t);if(!a)return null;const s=JSON.parse(a);return(new Date).getTime()>s.expiry?(localStorage.removeItem(t),null):s}function Q(e,o=0,r={}){if(Array.isArray(e))return e.reduce(((e,l)=>{const{name:i,path:c,children:u}=l,d=((e,n)=>{var o={};for(var r in e)t.call(e,r)&&n.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&a)for(var r of a(e))n.indexOf(r)<0&&s.call(e,r)&&(o[r]=e[r]);return o})(l,["name","path","children"]),h=0===o,p=!h;return e.push(n(n({},d),{name:i,path:c,level:o,isRoot:h,nested:p,parent:n(n({},r),{name:h?void 0:r.name})})),Array.isArray(u)&&u.length&&(e=e.concat(Q(u,o+1,l))),e}),[])}function ee(e){const t=new Date(e),a=t.getDate(),s=t.getFullYear();return`${t.toLocaleString("default",{month:"long"})} ${a}, ${s}`}function te(e){return function(t){return console.error(t),e(t),{error:t}}}const ae=p("data-v-3e7294bd");o("data-v-3e7294bd");const se={class:"search"};r();const ne={expose:[],setup(e){const t=l("");return ae(((e,a)=>(i(),c("div",se,[u(h("input",{type:"text","onUpdate:modelValue":a[1]||(a[1]=e=>t.value=e),placeholder:"Search... 🔎",onInput:a[2]||(a[2]=a=>e.$emit("change",t.value))},null,544),[[d,t.value]])]))))},__scopeId:"data-v-3e7294bd"};const oe={emits:["ready"],setup(e,{emit:t}){const a=l(null),s=l(null),n=v({head:[],rows:[],index:[],keyword:"",lastUpdated:"",sortColumn:null,ascending:!1}),o=te((e=>n.error=e)),r=()=>new Promise((async e=>{const t=Z("table");if(t)e({table:t.value,date:t.date});else{const{error:t,data:a}=await(async()=>await g.get("https://raw.githubusercontent.com/JonathanDn/vue-companies-israel/main/README.md").catch(o))();if(t)e({error:t});else{const t=y(a),s=await function(e){return new Promise((t=>{const a=document.createElement("template");a.innerHTML=e,window.requestAnimationFrame((()=>t(a.content)))}))}(t),n=F(s.querySelector("table"));e({table:n,date:X("table",n)})}}})),i=(e,{ascending:t=!0}={})=>{n.sortColumn===e?n.ascending=!n.ascending:(n.ascending=t,n.sortColumn=e),n.rows=n.rows.sort(c(n.ascending,(t=>t[e].innerText)))},c=(e=!0,t=(e=>e))=>(a,s)=>{const n=t(a),o=t(s);return n>o?e?1:-1:n<o?e?-1:1:0},u=f((()=>({width:100/n.head.length+"%"})));return m((async()=>{const{table:e,date:a,error:s}=await r().catch(o);var l,c;s||(n.index=function(e){return e.map((e=>Object.entries(e).map((([,t])=>[t.innerTextLowerCase,e])))).flat()}(e.tbody),n.head=e.thead,n.rows=e.tbody,n.lastUpdated=a,l=1,c={ascending:!1},i(n.head[l].innerText,c),t("ready",{length:n.rows.length}))})),{root:a,state:n,Search:ne,getRef:()=>a.value,tdStyle:u,onSearch:e=>{const t=e.target.value;n.keyword=t,n.rows=(e=>{const t=new Set,a=new RegExp(e);return n.index.forEach((([e,s])=>e.match(a)?t.add(s):null)),Array.from(t)})(t)},sortTable:i,getDisplayDate:ee,scrollContainer:s}}},re=p("data-v-2a85de68");o("data-v-2a85de68");const le={ref:"root",class:"table"},ie={class:"scroll-container"},ce={key:0},ue={key:0,class:"no-results"},de={key:1,class:"error"},he=S(" An error has occurred while retrieving the table. "),pe=h("a",{href:"/"},"Try again?",-1),ve=S(" 🥵 "),fe={key:0,class:"last-updated"};r();const me=re(((e,t,a,s,n,o)=>{const r=b("Small");return i(),c(w,null,[h(s.Search,{onInput:s.onSearch},null,8,["onInput"]),h("div",le,[h("div",ie,[h("table",null,[h("thead",null,[h("tr",null,[(i(!0),c(w,null,k(s.state.head,((e,t)=>(i(),c("th",{key:t,style:s.tdStyle,onClick:t=>s.sortTable(e.innerText)},[S(_(e.innerText)+" ",1),e.innerText===s.state.sortColumn?(i(),c("span",ce,_(s.state.ascending?"↑":"↓"),1)):x("",!0)],12,["onClick"])))),128))])]),h("tbody",null,[(i(!0),c(w,null,k(s.state.rows,((e,t)=>(i(),c("tr",{key:t},[(i(!0),c(w,null,k(e,((e,t)=>(i(),c("td",{innerHTML:e.innerHTML,style:s.tdStyle,key:t},null,12,["innerHTML"])))),128))])))),128)),s.state.keyword&&0===s.state.rows.length?(i(),c("tr",ue,[h("td",{colspan:s.state.head.length},"Nope, can't find that. 😪",8,["colspan"])])):x("",!0),s.state.error?(i(),c("tr",de,[h("td",{colspan:s.state.head.length},[he,pe,ve],8,["colspan"])])):x("",!0)])])]),s.state.lastUpdated?(i(),c("div",fe,[h(r,null,{default:re((()=>[S("Last updated: "+_(s.getDisplayDate(s.state.lastUpdated)),1)])),_:1})])):x("",!0)],512)],64)}));oe.render=me,oe.__scopeId="data-v-2a85de68";const ge=p("data-v-3bb2e069"),ye={expose:[],props:{src:{type:String},size:{type:String},color:{type:String},cover:{type:Boolean}},setup(e){const t=e,a=f((()=>({backgroundColor:t.color,padding:t.cover?"0":"16rem",backgroundImage:`url(${t.src})`,backgroundSize:t.size?t.size:t.cover?"cover":"86%"})));return ge(((e,t)=>(i(),c("div",{class:"slide",style:T(a)},[C(e.$slots,"default")],4))))},__scopeId:"data-v-3bb2e069"};const be=p("data-v-28516b05");o("data-v-28516b05");const we={class:"links-container"},ke={class:"links"},Se=h("li",null,[h("a",{href:"https://github.com/JonathanDn/vue-companies-israel/graphs/contributors"},"Contributors")],-1),_e=h("li",null,[h("a",{href:"https://github.com/JonathanDn/vue-companies-israel"},"GitHub")],-1);r();const xe={expose:[],setup:e=>be(((e,t)=>{const a=b("GitHubStars");return i(),c("div",we,[h("ul",ke,[Se,_e,h("li",null,[h(a,{packageJson:T(P)},null,8,["packageJson"])])])])})),__scopeId:"data-v-28516b05"};const Ce=Symbol(),Te=()=>document.getElementsByTagName("nav")[0].getBoundingClientRect().height.toFixed(2),Ie={setup(){const{y:e}=I(),t=f((()=>e.value>0));return $(Ce,{isSticky:t}),{isSticky:t}}},$e=p("data-v-bc3d837a")(((e,t,a,s,n,o)=>(i(),c("nav",{class:["nav",{"is-sticky":s.isSticky,static:!s.isSticky}]},[C(e.$slots,"default",{isSticky:s.isSticky})],2))));Ie.render=$e,Ie.__scopeId="data-v-bc3d837a";const Ee=p("data-v-75589fc0");o("data-v-75589fc0");const je={class:"button"},Le={class:"icon"};r();const Me={expose:[],props:{icon:String},setup:e=>Ee(((t,a)=>(i(),c("button",je,[h("span",Le,_(e.icon),1),C(t.$slots,"default")])))),__scopeId:"data-v-75589fc0"};const ze={},He=p("data-v-02ead0d7");o("data-v-02ead0d7");const Be={href:"#",class:"animate__animated animate__fadeInDown"},Ae=h("svg",{class:"logo",version:"1.1",viewBox:"0 0 261.76 226.69",xmlns:"http://www.w3.org/2000/svg"},[h("defs",null,[h("linearGradient",{id:"Gradient1",x1:"0",x2:"0",y1:"0",y2:"1"},[h("stop",{offset:"0%","stop-color":"#2d805b"}),h("stop",{offset:"80%","stop-color":"#ffffff"})]),h("linearGradient",{id:"Gradient2",x1:"0",x2:"0",y1:"0",y2:"1"},[h("stop",{offset:"0%","stop-color":"#ffffff"}),h("stop",{offset:"120%","stop-color":"#2d805b"})])]),h("g",{transform:"matrix(1.3333 0 0 -1.3333 -76.311 313.34)"},[h("g",{transform:"translate(178.06 235.01)"},[h("path",{fill:"url(#Gradient1)",d:"m0 0-22.669-39.264-22.669 39.264h-75.491l98.16-170.02 98.16 170.02z"})]),h("g",{transform:"translate(178.06 235.01)"},[h("path",{fill:"url(#Gradient2)",d:"m0 0-22.669-39.264-22.669 39.264h-36.227l58.896-102.01 58.896 102.01z"})])])],-1);r();const De=He(((e,t)=>(i(),c("a",Be,[Ae]))));ze.render=De,ze.__scopeId="data-v-02ead0d7";const Oe=p("data-v-6cebcb0a"),Je={expose:[],props:{level:{type:String,required:!0},href:{type:String}},setup:e=>Oe(((t,a)=>(i(),c(E(`h${e.level}`),{class:"heading"},{default:Oe((()=>[e.href?(i(),c("a",{key:0,class:"anchor",href:e.href,"aria-hidden":"true"},"#",8,["href"])):x("",!0),C(t.$slots,"default")])),_:3})))),__scopeId:"data-v-6cebcb0a"};const Ne=p("data-v-591f43de"),Ge={expose:[],props:{content:Boolean},setup:e=>Ne(((t,a)=>(i(),c("div",{class:["container",{"has-content":e.content}]},[C(t.$slots,"default")],2)))),__scopeId:"data-v-591f43de"};const Re={setup:(e,t)=>({style:f((()=>({"grid-template-columns":`repeat(${t.slots.default().length}, minmax(0, 1fr))`})))})},Ue=p("data-v-d61bc90e")(((e,t,a,s,n,o)=>(i(),c("div",{class:"button-group",style:s.style},[C(e.$slots,"default")],4))));Re.render=Ue,Re.__scopeId="data-v-d61bc90e";const Ve=p("data-v-40dabd91");o("data-v-40dabd91");const qe={class:"header animate__animated animate__fadeIn"},Pe=h("div",{class:"stars"},null,-1),Fe=h("a",{href:"https://vuejs.org/"},"Vue.js",-1),Ye={href:"#get-started"},Ke=S("Get Started"),We={href:"https://github.com/JonathanDn/vue-companies-israel/pulls"},Xe=S("Add Company");r();const Ze={expose:[],setup:e=>Ve(((e,t)=>(i(),c("header",qe,[Pe,h(Ge,{class:"container"},{default:Ve((()=>[h(ze),h(Je,{level:"1",style:{color:"var(--color-body)"}},{default:Ve((()=>[S(" A curated list of "+_(e.$attrs.companies)+" companies who hire Israelis - that work with ",1),Fe])),_:1},8,["style"]),h(Re,null,{default:Ve((()=>[h("a",Ye,[h(Me,{icon:"🙋🏻‍♀️",onClick:t[1]||(t[1]=t=>e.$emit("get-started"))},{default:Ve((()=>[Ke])),_:1})]),h("a",We,[h(Me,{icon:"👨🏻‍🌾"},{default:Ve((()=>[Xe])),_:1})])])),_:1})])),_:1})])))),__scopeId:"data-v-40dabd91"},Qe={expose:[],props:{color:{type:String,default:"#1da1f2"},size:{type:Number,default:32},unit:{type:String,default:"rem"}},setup(e){const t=e,a=f((()=>({width:t.size+t.unit,height:t.size+t.unit})));return(t,s)=>(i(),c("svg",{style:T(a),viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[h("path",{fill:e.color,d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z"},null,8,["fill"])],4))}};const et=p("data-v-ed1c1a4e");o("data-v-ed1c1a4e");const tt=h("path",{d:"M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z"},null,-1);r();const at={expose:[],props:{size:{type:Number,default:32}},setup(e){const t=e,a=f((()=>({width:`${t.size+4}rem`})));return et(((e,t)=>(i(),c("svg",{style:T(a),"fill-rule":"evenodd","clip-rule":"evenodd",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[tt],4))))},__scopeId:"data-v-ed1c1a4e"},st={expose:[],props:{color:{type:String,default:"#4267b2"},size:{type:Number,default:32},unit:{type:String,default:"rem"}},setup(e){const t=e,a=f((()=>({width:t.size+t.unit,height:t.size+t.unit})));return(t,s)=>(i(),c("svg",{style:T(a),viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[h("path",{fill:e.color,d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"},null,8,["fill"])],4))}};const nt=p("data-v-534bb102");o("data-v-534bb102");const ot={class:"community"},rt={href:"https://www.facebook.com/groups/1062801280495598"},lt={href:"https://twitter.com/vuejsisrael"},it={href:"https://discord.gg/vue"};r();const ct={expose:[],setup:e=>nt(((e,t)=>(i(),c("div",ot,[h("a",rt,[h(st,{color:"white"})]),h("a",lt,[h(Qe)]),h("a",it,[h(at)])])))),__scopeId:"data-v-534bb102"};var ut={name:"ScrollToTopScope",setup(){const e=l(!1),{y:t}=I();return j((()=>t.value),(async()=>e.value=await new Promise((e=>window.requestAnimationFrame((()=>{e(window.innerHeight+t.value>=.667*document.body.scrollHeight)})))))),{isScrollEndRef:e,scrollToTop:()=>window.scrollTo({top:0,behavior:"smooth"})}},render(){var e,t;const{isScrollEndRef:a,scrollToTop:s}=this;return null==(t=(e=this.$slots).default)?void 0:t.call(e,{isScrollEnd:a,scrollToTop:s})}};const dt=p("data-v-75aa715c"),ht={expose:[],setup:e=>dt(((e,t)=>(i(),c(T(ut),null,{default:dt((e=>[h("div",{class:["scroll-to-top",{"is-visible":e.isScrollEnd}],onClick:e.scrollToTop}," ↑ ",10,["onClick"])])),_:1})))),__scopeId:"data-v-75aa715c"};const pt={},vt=p("data-v-49cb73a8");o("data-v-49cb73a8");const ft={class:"error"};r();const mt=vt(((e,t)=>(i(),c("div",ft,[h("small",null,[C(e.$slots,"default")])]))));pt.render=mt,pt.__scopeId="data-v-49cb73a8";const gt=p("data-v-7a635324");o("data-v-7a635324");const yt={class:"contributors"};r();const bt={expose:[],props:{owner:{type:String,required:!0},repository:{type:String,required:!0}},setup(e){const t=e,a=v({value:null}),s=te((e=>a.value=e.message)),n=v([]);return m((async()=>{const e=await(async()=>{const e=Z("contributors");if(e)return e.value;const{error:a,data:n}=await g.get((o=t.owner,r=t.repository,`https://api.github.com/repos/${o}/${r}/contributors`)).catch(s);var o,r;return a?[]:(X("contributors",n),n)})().catch(s);n.push(...e.slice(0,10))})),gt(((e,t)=>(i(),c("div",yt,[(i(!0),c(w,null,k(T(n),((e,t)=>(i(),c("img",{key:t,src:e.avatar_url,title:e.login,alt:e.login},null,8,["src","title","alt"])))),128)),T(a).value?(i(),c(pt,{key:0},{default:gt((()=>[S(_(T(a).value?T(a).value:T(a)),1)])),_:1})):x("",!0)]))))},__scopeId:"data-v-7a635324"};const wt=p("data-v-19897e78");o("data-v-19897e78");const kt={class:"github-anchor",href:"https://github.com/JonathanDn/vue-companies-israel"},St=h("path",{"fill-rule":"evenodd","clip-rule":"evenodd",transform:"scale(64)",d:"M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"},null,-1);r();const _t={expose:[],props:{href:{type:String,required:!0},style:{type:Object,default:()=>({width:"32rem"})}},setup:e=>wt(((t,a)=>(i(),c("a",kt,[(i(),c("svg",{style:e.style,viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},[St],4))])))),__scopeId:"data-v-19897e78"};const xt=p("data-v-2605e9b2");o("data-v-2605e9b2");const Ct=S("Star ");r();const Tt={expose:[],props:{packageJson:{type:Object,required:!0}},setup:e=>xt(((t,a)=>{var s;return i(),c(T(L),{class:"github-stars","data-show-count":"true","data-icon":"octicon-star",href:null==(s=e.packageJson.repository)?void 0:s.url,"aria-label":`Star ${e.packageJson.author}/${e.packageJson.name} on GitHub`},{default:xt((()=>[Ct])),_:1},8,["href","aria-label"])})),__scopeId:"data-v-2605e9b2"},It={expose:[],props:{markdown:{type:String}},setup:e=>(m((()=>{setTimeout(M.highlightAll)})),(t,a)=>(i(),c("div",{class:"markdown",innerHTML:e.markdown},null,8,["innerHTML"])))};const $t={},Et=p("data-v-2137b4a6");o("data-v-2137b4a6");const jt={class:"small"};r();const Lt=Et(((e,t)=>(i(),c("small",jt,[C(e.$slots,"default")]))));$t.render=Lt,$t.__scopeId="data-v-2137b4a6";const Mt=p("data-v-5bd2b688");o("data-v-5bd2b688");const zt={class:"footer"},Ht={class:"fixed"},Bt=h("a",{href:"https://github.com/adi518/vue-companies-israel-site"}," GitHub ",-1);r();const At={expose:[],setup:e=>Mt(((e,t)=>(i(),c("footer",zt,[h("div",Ht,[h($t,null,{default:Mt((()=>[S(_(T(P).version),1)])),_:1}),h($t,null,{default:Mt((()=>[Bt])),_:1})])])))),__scopeId:"data-v-5bd2b688"};const Dt={},Ot=p("data-v-e4919030");o("data-v-e4919030");const Jt={class:"social"};r();const Nt=Ot(((e,t)=>(i(),c("div",Jt,[C(e.$slots,"default")]))));Dt.render=Nt,Dt.__scopeId="data-v-e4919030";const Gt={name:"VueToggles",emits:["click"],props:{value:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},reverse:{type:Boolean,default:!1},checkedText:{type:String,default:null},uncheckedText:{type:String,default:null},width:{type:[Number,String],default:75},height:{type:[Number,String],default:25},uncheckedBg:{type:String,default:"#939393"},checkedBg:{type:String,default:"#5850ec"},dotColor:{type:String,default:"#fff"},dotClass:{type:String,default:""},fontSize:{type:[Number,String],default:"12"},checkedColor:{type:String,default:"#fff"},uncheckedColor:{type:String,default:"#fff"},fontWeight:{type:[Number,String],default:"normal"},unit:{type:String,default:"px"}},computed:{bgStyle(){return{width:this.width+this.unit,height:this.height+this.unit,background:this.value&&!this.disabled?this.checkedBg:this.uncheckedBg}},dotStyle(){const e={background:this.dotColor,width:this.height-8+this.unit,height:this.height-8+this.unit,"min-width":this.height-8+this.unit,"min-height":this.height-8+this.unit,"margin-left":this.value?this.width-(this.height-3)+this.unit:"5px"};return(!this.value&&this.reverse||this.value&&!this.reverse)&&(e.marginLeft=this.width-(this.height-3)+this.unit),(this.value&&this.reverse||!this.value&&!this.reverse)&&(e.marginLeft="5px"),e},textStyle(){const e={"font-weight":this.fontWeight,"font-size":this.fontSize+this.unit,color:this.value&&!this.disabled?this.checkedColor:this.uncheckedColor,right:this.value?this.height-3+this.unit:"auto",left:this.value?"auto":this.height-3+this.unit};return!this.value&&this.reverse&&(e.right=this.height-3+this.unit,e.left="auto"),this.value&&this.reverse&&(e.left=this.height-3+this.unit,e.right="auto"),e}}};Gt.render=function(e,t,a,s,n,o){return i(),c("span",{class:"vue-toggles",style:o.bgStyle,role:"switch",tabindex:"0","aria-checked":a.value?"true":"false","aria-readonly":a.disabled?"true":"false",onClick:t[1]||(t[1]=t=>a.disabled?null:e.$emit("click",a.value)),onKeyup:[t[2]||(t[2]=H(B((t=>a.disabled?null:e.$emit("click",a.value)),["prevent"]),["enter"])),t[3]||(t[3]=H(B((t=>a.disabled?null:e.$emit("click",a.value)),["prevent"]),["space"]))]},[h("span",{"aria-hidden":"true",style:o.dotStyle,class:["dot",a.dotClass]},[u(h("span",{style:o.textStyle,class:"text"},_(a.checkedText),5),[[z,a.checkedText&&a.value]]),u(h("span",{style:o.textStyle,class:"text"},_(a.uncheckedText),5),[[z,a.uncheckedText&&!a.value]])],6)],44,["aria-checked","aria-readonly"])};var Rt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Nav:Ie,Header:Ze,Button:Me,Community:ct,ButtonGroup:Re,ScrollToTop:ht,Contributors:bt,ScrollToTopScope:ut,GitHubAnchor:_t,GitHubStars:Tt,Container:Ge,Markdown:It,VueLogo:ze,Heading:Je,Footer:At,Social:Dt,Small:$t,Error:pt,Toggle:Gt});const Ut=(e,t,a)=>{if(e.matched.length)return a();a({path:`${t.path}?a=${e.path.substr(1)}`})},Vt=(e,{offsetY:t=(async()=>0),offsetMultiplier:a=2}={})=>{if(Vt.Component)return Vt.Component;const s=[];if(e&&(s.concat((e=>Q(e.options.routes).reduce(((e,t)=>n(n({},e),{[t.path]:1})),{}))(e)),e.beforeEach(Ut)),a){const e=t;t=()=>e()*a}const o=new Ft(s,t);return Vt.Component={data:()=>({isMounted:!1}),mounted(){this.isMounted=!0,this.scrollToLocalAnchor(),o.add()},beforeUnmount(){this.isMounted=!1,o.remove()},methods:{async scrollToLocalAnchor(){if(!this.isMounted)return;const e=new URLSearchParams(window.location.hash.substr(2)).get("a");e&&(await this.$nextTick(),qt(e,t))}},render:()=>null},Vt.Component};Vt.Component=null;const qt=(e,t=(()=>0))=>new Promise((a=>{window.requestAnimationFrame((()=>{let s;if(e instanceof HTMLAnchorElement){const t=e.getAttribute("href").substr(1);s=document.getElementById(t)?document.getElementById(t):e}else s=document.getElementById(e)||document.querySelector(`[href='#${e}'`);!function(e,t=(()=>{})){const a=function(){window.pageYOffset===Math.floor(e)&&(window.removeEventListener("scroll",a),t())};window.addEventListener("scroll",a),a(),window.scrollTo({top:e,behavior:"smooth"})}(s.getBoundingClientRect().top+window.pageYOffset-t()),a()}))})),Pt=class{constructor(e,t){const a=Pt.createClickHandler(e,t);this.add=()=>document.addEventListener("click",a,!0),this.remove=()=>document.removeEventListener("click",a)}};let Ft=Pt;var Yt,Kt,Wt;Wt=(e,t=(()=>0))=>async a=>{var s;const n=a.target.closest("a")||a.target;if(!(n instanceof HTMLAnchorElement&&/^#/.test(n.hash)))return;const o=null==(s=n.hash)?void 0:s.substr(1);e[o]||window.location.host!==n.host||(a.preventDefault(),await qt(n,t),window.location.hash=`?a=${o}`)},"symbol"!=typeof(Kt="createClickHandler")&&(Kt+=""),Kt in(Yt=Ft)?e(Yt,Kt,{enumerable:!0,configurable:!0,writable:!0,value:Wt}):Yt[Kt]=Wt,Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null});const Xt={install(e){Object.keys(Rt).forEach((t=>e.component(t,Rt[t])))}};const Zt=S("What is Vue.js?"),Qt=h("p",null,[h("a",{href:"https://vuejs.org/"},"Vue.js"),S(" is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members. "),h("a",{href:"https://en.wikipedia.org/wiki/Vue.js"},"Wikipedia")],-1),ea=S(" * Table does NOT contain freelancers, consultancies, software contractors or open source projects working with "),ta=h("a",{href:"https://vuejs.org/"},"Vue.js",-1),aa=S(". "),sa=S("Explore Resources"),na={href:"https://madewithvuejs.com/"},oa={href:"https://github.com/vuejs/awesome-vue"},ra={href:"https://www.vuemastery.com/"},la={href:"https://daily.dev/"},ia={href:"https://www.udemy.com/course/vuejs-2-the-complete-guide/"},ca={href:"https://www.vuemastery.com/pdf/Vue-3-Cheat-Sheet.pdf"},ua=S("Made by"),da=S("Contributing"),ha=h("p",null,[S(" If your company is currently working with "),h("a",{href:"https://vuejs.org/"},"Vue.js"),S(", open a "),h("a",{href:"https://github.com/JonathanDn/vue-companies-israel/pulls"}," pull request"),S(" to add it to the table above. If it's also currently recruiting, make sure to check the "),h("b",null,"Recruiting"),S(" column. ")],-1),pa=S("Community"),va=S("Links"),fa=V({expose:[],setup(e){A.use([D,O,J,N]);const t=Vt(null,{offsetY:Te}),a=l(null),s=l(!0);v({value:[]});const n={0:{slidesPerView:3},991.98:{slidesPerView:6}},o=({length:e})=>a.value=e;return m((async()=>{})),(e,r)=>{const l=b("Toggle"),u=b("GitHubAnchor"),d=b("Social"),p=b("Nav"),v=b("Header"),f=b("Heading"),m=b("Container"),g=b("Small"),y=b("Contributors"),k=b("Community"),S=b("Footer"),_=b("ScrollToTop");return i(),c(w,null,[h(p,null,{default:G((e=>[h(l,{disabled:"",unit:"rem",width:"50",height:"25",fontSize:"14",checkedText:"🌜",uncheckedText:"🌞",dotClass:"toggle-dot",dotColor:"currentColor",checkedBg:"var(--color-secondary2)",uncheckedBg:"var(--color-secondary2)",value:s.value,onClick:r[1]||(r[1]=e=>s.value=!s.value)},null,8,["value"]),h(d,null,{default:G((()=>[h(u,{class:{"is-sticky":e.isSticky},href:"https://github.com/JonathanDn/vue-companies-israel"},null,8,["class"])])),_:2},1024)])),_:1}),h(v,{companies:a.value},null,8,["companies"]),h(m,{content:""},{default:G((()=>[h(f,{level:"3",href:"#what-is-vuejs"},{default:G((()=>[Zt])),_:1}),Qt])),_:1}),h(m,{content:"",id:"get-started"},{default:G((()=>[h(oe,{onReady:o}),h("p",null,[h(g,null,{default:G((()=>[ea,ta,aa])),_:1})])])),_:1}),h(m,{content:""},{default:G((()=>[h(f,{level:"3",href:"#explore-resources"},{default:G((()=>[sa])),_:1}),h(T(R),{"space-between":16,breakpoints:n},{default:G((()=>[h(T(U),null,{default:G((()=>[h("a",na,[h(ye,{src:"resources/made-with-vuejs.png"})])])),_:1}),h(T(U),null,{default:G((()=>[h("a",oa,[h(ye,{src:"resources/awesome-vue.svg"})])])),_:1}),h(T(U),null,{default:G((()=>[h("a",ra,[h(ye,{src:"resources/vue-mastery.svg"})])])),_:1}),h(T(U),null,{default:G((()=>[h("a",la,[h(ye,{src:"resources/daily-dev.png"})])])),_:1}),h(T(U),null,{default:G((()=>[h("a",ia,[h(ye,{src:"resources/udemy.svg"})])])),_:1}),h(T(U),null,{default:G((()=>[h("a",ca,[h(ye,{cover:"",src:"resources/vue-composition-api-cheatsheet.png"})])])),_:1})])),_:1}),h(f,{level:"3",href:"#made-by"},{default:G((()=>[ua])),_:1}),h(y,{owner:"JonathanDn",repository:"vue-companies-israel"}),h(f,{level:"3",href:"#contributing"},{default:G((()=>[da])),_:1}),ha,h(f,{level:"3",href:"#links"},{default:G((()=>[pa])),_:1}),h(k),h(f,{level:"3",href:"#links"},{default:G((()=>[va])),_:1}),h(xe)])),_:1}),h(S),h(_),h(T(t))],64)}}});fa.use(Xt),fa.use(q,{config:{id:"G-BKK301VXEG"}}),fa.mount("#app");