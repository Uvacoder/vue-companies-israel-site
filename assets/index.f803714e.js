var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,s=Object.prototype.propertyIsEnumerable,n=Object.assign;import{p as o,a as r,r as l,b as i,w as c,o as d,D as u,m as h,c as p,d as v,e as f,f as m,g,F as y,h as w,i as b,t as k,j as _,k as S,l as x,u as C,n as T,v as I,q as $,s as E,x as j,G as L,y as M,z as H,A as B,B as z,S as A,N as D,P as O,C as J,E as N,H as G,I as R,J as V,K as P,L as U}from"./vendor.a86ecf7e.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const s=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,o)=>{const r=new URL(e,s);if(self[t].moduleMap[r])return a(self[t].moduleMap[r]);const l=new Blob([`import * as m from '${r}';`,`${t}.moduleMap['${r}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(l),onerror(){o(new Error(`Failed to import: ${e}`)),n(i)},onload(){a(self[t].moduleMap[r]),n(i)}});document.head.appendChild(i)})),self[t].moduleMap={}}}("assets/");var q={name:"@vue-companies-israel-site/site",version:"0.0.0",license:"MIT",repository:{url:"https://github.com/JonathanDn/vue-companies-israel"},scripts:{dev:"vite",build:"vite build",serve:"vite preview",prerelease2:"yarn && yarn version --patch --no-git-tag-version && yarn build",prerelease:"yarn build",release:"node ./scripts/gh-pages",postrelease2:"node ./scripts/post-release"},dependencies:{"animate.css":"^4.1.1",axios:"^0.21.1",marked:"^2.0.1","prism-themes":"^1.5.0",prismjs:"^1.23.0",swiper:"^6.5.0",vue:"^3.0.5","vue-github-button":"^3.0.0","vue-gtag-next":"^1.14.0","vue-toggles":"^1.1.0","vue-use-web":"^1.0.1"},devDependencies:{"@vitejs/plugin-vue":"^1.1.4","@vue/compiler-sfc":"^3.0.5","gh-pages":"^3.1.0",sass:"^1.32.8",vite:"^2.0.1","vite-plugin-markdown":"^2.0.0"}};function F(e){const t=[];return Array.from(e.rows).reduce(((a,s)=>{const o=[];return Array.from(s.children).map(K).forEach(((r,l)=>{"th"===r.tagName.toLowerCase()?(a.thead.push(r),l===Y(e).length-1&&t.push(...function(e){return Y(e).map((e=>K(e).innerText))}(e))):0===e.tHead.rows.length?a.tbody.push(r):(o.push(r),o.length===s.children.length&&(a.tbody.push(function(e,t){return e.reduce(((e,a,s)=>n(n({},e),{[a]:t[s]})),{})}(t,o)),o.length=0))})),a}),{thead:[],tbody:[]})}function Y(e){return Array.from(e.tHead.rows[0].children)}function K(e){const{tagName:t,innerText:a,innerHTML:s}=e,n=a.trim();return{tagName:t.toLowerCase(),innerHTML:s,innerText:n,innerTextLowerCase:n.toLowerCase()}}function W(e){return`${q.name}-${e}`}function X(e,t,a=864e5){const s=W(e),n=new Date,o={date:n.getTime(),value:t,expiry:n.getTime()+a};return localStorage.setItem(s,JSON.stringify(o)),o.date}function Z(e){const t=W(e),a=localStorage.getItem(t);if(!a)return null;const s=JSON.parse(a);return(new Date).getTime()>s.expiry?(localStorage.removeItem(t),null):s}function Q(e,o=0,r={}){if(Array.isArray(e))return e.reduce(((e,l)=>{const{name:i,path:c,children:d}=l,u=((e,n)=>{var o={};for(var r in e)t.call(e,r)&&n.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&a)for(var r of a(e))n.indexOf(r)<0&&s.call(e,r)&&(o[r]=e[r]);return o})(l,["name","path","children"]),h=0===o,p=!h;return e.push(n(n({},u),{name:i,path:c,level:o,isRoot:h,nested:p,parent:n(n({},r),{name:h?void 0:r.name})})),Array.isArray(d)&&d.length&&(e=e.concat(Q(d,o+1,l))),e}),[])}function ee(e){const t=new Date(e),a=t.getFullYear();return`${t.toLocaleString("default",{month:"long"})} ${new Date(a,t.getMonth(),0).getDate()}, ${a}`}function te(e){return function(t){return console.error(t),e(t),{error:t}}}const ae={emits:["ready"],props:{keyword:{type:String}},setup(e,{emit:t}){const a=l(null),s=l(null),n=i({head:[],rows:[],index:[],lastUpdated:"",sortColumn:null,ascending:!1}),o=te((e=>n.error=e)),r=()=>new Promise((async e=>{const t=Z("table");if(t)e({table:t.value,date:t.date});else{const{error:t,data:a}=await(async()=>await u.get("https://raw.githubusercontent.com/JonathanDn/vue-companies-israel/main/README.md").catch(o))();if(t)e({error:t});else{const t=h(a),s=await function(e){return new Promise((t=>{const a=document.createElement("template");a.innerHTML=e,window.requestAnimationFrame((()=>t(a.content)))}))}(t),n=F(s.querySelector("table"));e({table:n,date:X("table",n)})}}})),v=(e,{ascending:t=!0}={})=>{n.sortColumn===e?n.ascending=!n.ascending:(n.ascending=t,n.sortColumn=e),n.rows=n.rows.sort(f(n.ascending,(t=>t[e].innerText)))},f=(e=!0,t=(e=>e))=>(a,s)=>{const n=t(a),o=t(s);return n>o?e?1:-1:n<o?e?-1:1:0};c((()=>e.keyword),(e=>n.rows=(e=>{const t=new Set;return n.index.forEach((([a,s])=>{a.match(new RegExp(e))&&t.add(s)})),Array.from(t)})(e))),d((async()=>{const{table:e,date:a,error:s}=await r().catch(o);var l,i;s||(n.index=function(e){return e.map((e=>Object.entries(e).map((([,t])=>[t.innerTextLowerCase,e])))).flat()}(e.tbody),n.head=e.thead,n.rows=e.tbody,n.lastUpdated=a,l=1,i={ascending:!1},v(n.head[l].innerText,i),t("ready",{length:n.rows.length}))}));const m=p((()=>({width:100/n.head.length+"%"})));return{root:a,state:n,getRef:()=>a.value,tdStyle:m,sortTable:v,getDisplayDate:ee,scrollContainer:s}}},se=S("data-v-f99d63a6");o("data-v-f99d63a6");const ne={ref:"root",class:"table"},oe={class:"scroll-container"},re={key:0},le={key:0,class:"no-results"},ie={key:1,class:"error"},ce=b(" An error has occurred while retrieving the table. "),de=g("a",{href:"/"},"Try again?",-1),ue=b(" 🥵 "),he={key:0,class:"last-updated"};r();const pe=se(((e,t,a,s,n,o)=>{const r=v("Small");return f(),m("div",ne,[g("div",oe,[g("table",null,[g("thead",null,[g("tr",null,[(f(!0),m(y,null,w(s.state.head,((e,t)=>(f(),m("th",{key:t,style:s.tdStyle,onClick:t=>s.sortTable(e.innerText)},[b(k(e.innerText)+" ",1),e.innerText===s.state.sortColumn?(f(),m("span",re,k(s.state.ascending?"↑":"↓"),1)):_("",!0)],12,["onClick"])))),128))])]),g("tbody",null,[(f(!0),m(y,null,w(s.state.rows,((e,t)=>(f(),m("tr",{key:t},[(f(!0),m(y,null,w(e,((e,t)=>(f(),m("td",{innerHTML:e.innerHTML,style:s.tdStyle,key:t},null,12,["innerHTML"])))),128))])))),128)),a.keyword&&0===s.state.rows.length?(f(),m("tr",le,[g("td",{colspan:s.state.head.length},"Nope, can't find that. 😪",8,["colspan"])])):_("",!0),s.state.error?(f(),m("tr",ie,[g("td",{colspan:s.state.head.length},[ce,de,ue],8,["colspan"])])):_("",!0)])])]),s.state.lastUpdated?(f(),m("div",he,[g(r,null,{default:se((()=>[b("Last updated: "+k(s.getDisplayDate(s.state.lastUpdated)),1)])),_:1})])):_("",!0)],512)}));ae.render=pe,ae.__scopeId="data-v-f99d63a6";const ve=S("data-v-70e069fe"),fe={expose:[],props:{src:{type:String},color:{type:String},cover:{type:Boolean}},setup(e){const t=e,a=p((()=>({padding:t.cover?"0":"16rem",backgroundImage:`url(${t.src})`,backgroundSize:t.cover?"cover":"90%",backgroundColor:t.color||"var(--color-secondary2)"})));return ve(((e,t)=>(f(),m("div",{class:"slide",style:C(a)},[x(e.$slots,"default")],4))))},__scopeId:"data-v-70e069fe"};const me=S("data-v-28516b05");o("data-v-28516b05");const ge={class:"links-container"},ye={class:"links"},we=g("li",null,[g("a",{href:"https://github.com/JonathanDn/vue-companies-israel/graphs/contributors"},"Contributors")],-1),be=g("li",null,[g("a",{href:"https://github.com/JonathanDn/vue-companies-israel"},"GitHub")],-1);r();const ke={expose:[],setup:e=>me(((e,t)=>{const a=v("GitHubStars");return f(),m("div",ge,[g("ul",ye,[we,be,g("li",null,[g(a,{packageJson:C(q)},null,8,["packageJson"])])])])})),__scopeId:"data-v-28516b05"};const _e=S("data-v-3e7294bd");o("data-v-3e7294bd");const Se={class:"search"};r();const xe={expose:[],setup(e){const t=l("");return _e(((e,a)=>(f(),m("div",Se,[T(g("input",{type:"text","onUpdate:modelValue":a[1]||(a[1]=e=>t.value=e),placeholder:"Search... 🔎",onInput:a[2]||(a[2]=a=>e.$emit("change",t.value))},null,544),[[I,t.value]])]))))},__scopeId:"data-v-3e7294bd"};const Ce=Symbol(),Te=()=>document.getElementsByTagName("nav")[0].getBoundingClientRect().height.toFixed(2),Ie={setup(){const{y:e}=$(),t=p((()=>e.value>0));return E(Ce,{isSticky:t}),{isSticky:t}}},$e=S("data-v-bc3d837a")(((e,t,a,s,n,o)=>(f(),m("nav",{class:["nav",{"is-sticky":s.isSticky,static:!s.isSticky}]},[x(e.$slots,"default",{isSticky:s.isSticky})],2))));Ie.render=$e,Ie.__scopeId="data-v-bc3d837a";const Ee=S("data-v-75589fc0");o("data-v-75589fc0");const je={class:"button"},Le={class:"icon"};r();const Me={expose:[],props:{icon:String},setup:e=>Ee(((t,a)=>(f(),m("button",je,[g("span",Le,k(e.icon),1),x(t.$slots,"default")])))),__scopeId:"data-v-75589fc0"};const He={},Be=S("data-v-02ead0d7");o("data-v-02ead0d7");const ze={href:"#",class:"animate__animated animate__fadeInDown"},Ae=g("svg",{class:"logo",version:"1.1",viewBox:"0 0 261.76 226.69",xmlns:"http://www.w3.org/2000/svg"},[g("defs",null,[g("linearGradient",{id:"Gradient1",x1:"0",x2:"0",y1:"0",y2:"1"},[g("stop",{offset:"0%","stop-color":"#2d805b"}),g("stop",{offset:"80%","stop-color":"#ffffff"})]),g("linearGradient",{id:"Gradient2",x1:"0",x2:"0",y1:"0",y2:"1"},[g("stop",{offset:"0%","stop-color":"#ffffff"}),g("stop",{offset:"120%","stop-color":"#2d805b"})])]),g("g",{transform:"matrix(1.3333 0 0 -1.3333 -76.311 313.34)"},[g("g",{transform:"translate(178.06 235.01)"},[g("path",{fill:"url(#Gradient1)",d:"m0 0-22.669-39.264-22.669 39.264h-75.491l98.16-170.02 98.16 170.02z"})]),g("g",{transform:"translate(178.06 235.01)"},[g("path",{fill:"url(#Gradient2)",d:"m0 0-22.669-39.264-22.669 39.264h-36.227l58.896-102.01 58.896 102.01z"})])])],-1);r();const De=Be(((e,t)=>(f(),m("a",ze,[Ae]))));He.render=De,He.__scopeId="data-v-02ead0d7";const Oe=S("data-v-6cebcb0a"),Je={expose:[],props:{level:{type:String,required:!0},href:{type:String}},setup:e=>Oe(((t,a)=>(f(),m(j(`h${e.level}`),{class:"heading"},{default:Oe((()=>[e.href?(f(),m("a",{key:0,class:"anchor",href:e.href,"aria-hidden":"true"},"#",8,["href"])):_("",!0),x(t.$slots,"default")])),_:3})))),__scopeId:"data-v-6cebcb0a"};const Ne=S("data-v-591f43de"),Ge={expose:[],props:{content:Boolean},setup:e=>Ne(((t,a)=>(f(),m("div",{class:["container",{"has-content":e.content}]},[x(t.$slots,"default")],2)))),__scopeId:"data-v-591f43de"};const Re={setup:(e,t)=>({style:p((()=>({"grid-template-columns":`repeat(${t.slots.default().length}, minmax(0, 1fr))`})))})},Ve=S("data-v-d61bc90e")(((e,t,a,s,n,o)=>(f(),m("div",{class:"button-group",style:s.style},[x(e.$slots,"default")],4))));Re.render=Ve,Re.__scopeId="data-v-d61bc90e";const Pe=S("data-v-40dabd91");o("data-v-40dabd91");const Ue={class:"header animate__animated animate__fadeIn"},qe=g("div",{class:"stars"},null,-1),Fe=g("a",{href:"https://vuejs.org/"},"Vue.js",-1),Ye={href:"#get-started"},Ke=b("Get Started"),We={href:"https://github.com/JonathanDn/vue-companies-israel/pulls"},Xe=b("Add Company");r();const Ze={expose:[],setup:e=>Pe(((e,t)=>(f(),m("header",Ue,[qe,g(Ge,{class:"container"},{default:Pe((()=>[g(He),g(Je,{level:"1",style:{color:"var(--color-body)"}},{default:Pe((()=>[b(" A curated list of "+k(e.$attrs.companies)+" companies who hire Israelis - that work with ",1),Fe])),_:1},8,["style"]),g(Re,null,{default:Pe((()=>[g("a",Ye,[g(Me,{icon:"🙋🏻‍♀️",onClick:t[1]||(t[1]=t=>e.$emit("get-started"))},{default:Pe((()=>[Ke])),_:1})]),g("a",We,[g(Me,{icon:"👨🏻‍🌾"},{default:Pe((()=>[Xe])),_:1})])])),_:1})])),_:1})])))),__scopeId:"data-v-40dabd91"},Qe={expose:[],props:{color:{type:String,default:"#1da1f2"},size:{type:Number,default:32},unit:{type:String,default:"rem"}},setup(e){const t=e,a=p((()=>({width:t.size+t.unit,height:t.size+t.unit})));return(t,s)=>(f(),m("svg",{style:C(a),viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[g("path",{fill:e.color,d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z"},null,8,["fill"])],4))}};const et=S("data-v-ed1c1a4e");o("data-v-ed1c1a4e");const tt=g("path",{d:"M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z"},null,-1);r();const at={expose:[],props:{size:{type:Number,default:32}},setup(e){const t=e,a=p((()=>({width:`${t.size+4}rem`})));return et(((e,t)=>(f(),m("svg",{style:C(a),"fill-rule":"evenodd","clip-rule":"evenodd",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[tt],4))))},__scopeId:"data-v-ed1c1a4e"},st={expose:[],props:{color:{type:String,default:"#4267b2"},size:{type:Number,default:32},unit:{type:String,default:"rem"}},setup(e){const t=e,a=p((()=>({width:t.size+t.unit,height:t.size+t.unit})));return(t,s)=>(f(),m("svg",{style:C(a),viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[g("path",{fill:e.color,d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"},null,8,["fill"])],4))}};const nt=S("data-v-534bb102");o("data-v-534bb102");const ot={class:"community"},rt={href:"https://www.facebook.com/groups/1062801280495598"},lt={href:"https://twitter.com/vuejsisrael"},it={href:"https://discord.gg/vue"};r();const ct={expose:[],setup:e=>nt(((e,t)=>(f(),m("div",ot,[g("a",rt,[g(st,{color:"white"})]),g("a",lt,[g(Qe)]),g("a",it,[g(at)])])))),__scopeId:"data-v-534bb102"};var dt={name:"ScrollToTopScope",setup(){const e=l(!1),{y:t}=$();return c((()=>t.value),(async()=>e.value=await new Promise((e=>window.requestAnimationFrame((()=>{e(window.innerHeight+t.value>=.667*document.body.scrollHeight)})))))),{isScrollEndRef:e,scrollToTop:()=>window.scrollTo({top:0,behavior:"smooth"})}},render(){var e,t;const{isScrollEndRef:a,scrollToTop:s}=this;return null==(t=(e=this.$slots).default)?void 0:t.call(e,{isScrollEnd:a,scrollToTop:s})}};const ut=S("data-v-714451fe"),ht={expose:[],setup:e=>ut(((e,t)=>(f(),m(C(dt),null,{default:ut((e=>[g("div",{class:["scroll-to-top",{"is-visible":e.isScrollEnd}],onClick:e.scrollToTop}," ↑ ",10,["onClick"])])),_:1})))),__scopeId:"data-v-714451fe"};const pt={},vt=S("data-v-49cb73a8");o("data-v-49cb73a8");const ft={class:"error"};r();const mt=vt(((e,t)=>(f(),m("div",ft,[g("small",null,[x(e.$slots,"default")])]))));pt.render=mt,pt.__scopeId="data-v-49cb73a8";const gt=S("data-v-7a635324");o("data-v-7a635324");const yt={class:"contributors"};r();const wt={expose:[],props:{owner:{type:String,required:!0},repository:{type:String,required:!0}},setup(e){const t=e,a=i({value:null}),s=te((e=>a.value=e.message)),n=i([]);return d((async()=>{const e=await(async()=>{const e=Z("contributors");if(e)return e.value;const{error:a,data:n}=await u.get((o=t.owner,r=t.repository,`https://api.github.com/repos/${o}/${r}/contributors`)).catch(s);var o,r;return a?[]:(X("contributors",n),n)})().catch(s);n.push(...e.slice(0,10))})),gt(((e,t)=>(f(),m("div",yt,[(f(!0),m(y,null,w(C(n),((e,t)=>(f(),m("img",{key:t,src:e.avatar_url,title:e.login,alt:e.login},null,8,["src","title","alt"])))),128)),C(a).value?(f(),m(pt,{key:0},{default:gt((()=>[b(k(C(a).value?C(a).value:C(a)),1)])),_:1})):_("",!0)]))))},__scopeId:"data-v-7a635324"};const bt=S("data-v-19897e78");o("data-v-19897e78");const kt={class:"github-anchor",href:"https://github.com/JonathanDn/vue-companies-israel"},_t=g("path",{"fill-rule":"evenodd","clip-rule":"evenodd",transform:"scale(64)",d:"M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"},null,-1);r();const St={expose:[],props:{href:{type:String,required:!0},style:{type:Object,default:()=>({width:"32rem"})}},setup:e=>bt(((t,a)=>(f(),m("a",kt,[(f(),m("svg",{style:e.style,viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},[_t],4))])))),__scopeId:"data-v-19897e78"};const xt=S("data-v-2605e9b2");o("data-v-2605e9b2");const Ct=b("Star ");r();const Tt={expose:[],props:{packageJson:{type:Object,required:!0}},setup:e=>xt(((t,a)=>{var s;return f(),m(C(L),{class:"github-stars","data-show-count":"true","data-icon":"octicon-star",href:null==(s=e.packageJson.repository)?void 0:s.url,"aria-label":`Star ${e.packageJson.author}/${e.packageJson.name} on GitHub`},{default:xt((()=>[Ct])),_:1},8,["href","aria-label"])})),__scopeId:"data-v-2605e9b2"},It={expose:[],props:{markdown:{type:String}},setup:e=>(d((()=>{setTimeout(M.highlightAll)})),(t,a)=>(f(),m("div",{class:"markdown",innerHTML:e.markdown},null,8,["innerHTML"])))};const $t={},Et=S("data-v-2137b4a6");o("data-v-2137b4a6");const jt={class:"small"};r();const Lt=Et(((e,t)=>(f(),m("small",jt,[x(e.$slots,"default")]))));$t.render=Lt,$t.__scopeId="data-v-2137b4a6";const Mt=S("data-v-5bd2b688");o("data-v-5bd2b688");const Ht={class:"footer"},Bt={class:"fixed"},zt=g("a",{href:"https://github.com/adi518/vue-companies-israel-site"}," GitHub ",-1);r();const At={expose:[],setup:e=>Mt(((e,t)=>(f(),m("footer",Ht,[g("div",Bt,[g($t,null,{default:Mt((()=>[b(k(C(q).version),1)])),_:1}),g($t,null,{default:Mt((()=>[zt])),_:1})])])))),__scopeId:"data-v-5bd2b688"};const Dt={},Ot=S("data-v-e4919030");o("data-v-e4919030");const Jt={class:"social"};r();const Nt=Ot(((e,t)=>(f(),m("div",Jt,[x(e.$slots,"default")]))));Dt.render=Nt,Dt.__scopeId="data-v-e4919030";const Gt={name:"VueToggles",emits:["click"],props:{value:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},reverse:{type:Boolean,default:!1},checkedText:{type:String,default:null},uncheckedText:{type:String,default:null},width:{type:[Number,String],default:75},height:{type:[Number,String],default:25},uncheckedBg:{type:String,default:"#939393"},checkedBg:{type:String,default:"#5850ec"},dotColor:{type:String,default:"#fff"},dotClass:{type:String,default:""},fontSize:{type:[Number,String],default:"12"},checkedColor:{type:String,default:"#fff"},uncheckedColor:{type:String,default:"#fff"},fontWeight:{type:[Number,String],default:"normal"},unit:{type:String,default:"px"}},computed:{bgStyle(){return{width:this.width+this.unit,height:this.height+this.unit,background:this.value&&!this.disabled?this.checkedBg:this.uncheckedBg}},dotStyle(){const e={background:this.dotColor,width:this.height-8+this.unit,height:this.height-8+this.unit,"min-width":this.height-8+this.unit,"min-height":this.height-8+this.unit,"margin-left":this.value?this.width-(this.height-3)+this.unit:"5px"};return(!this.value&&this.reverse||this.value&&!this.reverse)&&(e.marginLeft=this.width-(this.height-3)+this.unit),(this.value&&this.reverse||!this.value&&!this.reverse)&&(e.marginLeft="5px"),e},textStyle(){const e={"font-weight":this.fontWeight,"font-size":this.fontSize+this.unit,color:this.value&&!this.disabled?this.checkedColor:this.uncheckedColor,right:this.value?this.height-3+this.unit:"auto",left:this.value?"auto":this.height-3+this.unit};return!this.value&&this.reverse&&(e.right=this.height-3+this.unit,e.left="auto"),this.value&&this.reverse&&(e.left=this.height-3+this.unit,e.right="auto"),e}}};Gt.render=function(e,t,a,s,n,o){return f(),m("span",{class:"vue-toggles",style:o.bgStyle,role:"switch",tabindex:"0","aria-checked":a.value?"true":"false","aria-readonly":a.disabled?"true":"false",onClick:t[1]||(t[1]=t=>a.disabled?null:e.$emit("click",a.value)),onKeyup:[t[2]||(t[2]=B(z((t=>a.disabled?null:e.$emit("click",a.value)),["prevent"]),["enter"])),t[3]||(t[3]=B(z((t=>a.disabled?null:e.$emit("click",a.value)),["prevent"]),["space"]))]},[g("span",{"aria-hidden":"true",style:o.dotStyle,class:["dot",a.dotClass]},[T(g("span",{style:o.textStyle,class:"text"},k(a.checkedText),5),[[H,a.checkedText&&a.value]]),T(g("span",{style:o.textStyle,class:"text"},k(a.uncheckedText),5),[[H,a.uncheckedText&&!a.value]])],6)],44,["aria-checked","aria-readonly"])};var Rt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Nav:Ie,Header:Ze,Button:Me,Community:ct,ButtonGroup:Re,ScrollToTop:ht,Contributors:wt,ScrollToTopScope:dt,GitHubAnchor:St,GitHubStars:Tt,Container:Ge,Markdown:It,VueLogo:He,Heading:Je,Footer:At,Social:Dt,Small:$t,Error:pt,Toggle:Gt});const Vt=(e,t,a)=>{if(e.matched.length)return a();a({path:`${t.path}?a=${e.path.substr(1)}`})},Pt=(e,{offsetY:t=(async()=>0),offsetMultiplier:a=2}={})=>{if(Pt.Component)return Pt.Component;const s=[];if(e&&(s.concat((e=>Q(e.options.routes).reduce(((e,t)=>n(n({},e),{[t.path]:1})),{}))(e)),e.beforeEach(Vt)),a){const e=t;t=()=>e()*a}const o=new Ft(s,t);return Pt.Component={data:()=>({isMounted:!1}),mounted(){this.isMounted=!0,this.scrollToLocalAnchor(),o.add()},beforeUnmount(){this.isMounted=!1,o.remove()},methods:{async scrollToLocalAnchor(){if(!this.isMounted)return;const e=new URLSearchParams(window.location.hash.substr(2)).get("a");e&&(await this.$nextTick(),Ut(e,t))}},render:()=>null},Pt.Component};Pt.Component=null;const Ut=(e,t=(()=>0))=>new Promise((a=>{window.requestAnimationFrame((()=>{let s;if(e instanceof HTMLAnchorElement){const t=e.getAttribute("href").substr(1);s=document.getElementById(t)?document.getElementById(t):e}else s=document.getElementById(e)||document.querySelector(`[href='#${e}'`);!function(e,t=(()=>{})){const a=function(){window.pageYOffset===Math.floor(e)&&(window.removeEventListener("scroll",a),t())};window.addEventListener("scroll",a),a(),window.scrollTo({top:e,behavior:"smooth"})}(s.getBoundingClientRect().top+window.pageYOffset-t()),a()}))})),qt=class{constructor(e,t){const a=qt.createClickHandler(e,t);this.add=()=>document.addEventListener("click",a,!0),this.remove=()=>document.removeEventListener("click",a)}};let Ft=qt;var Yt,Kt,Wt;Wt=(e,t=(()=>0))=>async a=>{var s;const n=a.target.closest("a")||a.target;if(!(n instanceof HTMLAnchorElement&&/^#/.test(n.hash)))return;const o=null==(s=n.hash)?void 0:s.substr(1);e[o]||window.location.host!==n.host||(a.preventDefault(),await Ut(n,t),window.location.hash=`?a=${o}`)},"symbol"!=typeof(Kt="createClickHandler")&&(Kt+=""),Kt in(Yt=Ft)?e(Yt,Kt,{enumerable:!0,configurable:!0,writable:!0,value:Wt}):Yt[Kt]=Wt,Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null});const Xt={install(e){Object.keys(Rt).forEach((t=>e.component(t,Rt[t])))}};const Zt=b("What is Vue.js?"),Qt=g("p",null,[g("a",{href:"https://vuejs.org/"},"Vue.js"),b(" is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members. "),g("a",{href:"https://en.wikipedia.org/wiki/Vue.js"},"Wikipedia")],-1),ea=b(" * Table does NOT contain freelancers, consultancies, software contractors or open source projects working with "),ta=g("a",{href:"https://vuejs.org/"},"Vue.js",-1),aa=b(". "),sa=b("Explore Resources"),na={href:"https://madewithvuejs.com/"},oa={href:"https://github.com/vuejs/awesome-vue"},ra={href:"https://www.vuemastery.com/"},la={href:"https://daily.dev/"},ia={href:"https://www.udemy.com/course/vuejs-2-the-complete-guide/"},ca={href:"https://www.vuemastery.com/pdf/Vue-3-Cheat-Sheet.pdf"},da=b("Made by"),ua=b("Contributing"),ha=g("p",null,[b(" If your company is currently working with "),g("a",{href:"https://vuejs.org/"},"Vue.js"),b(", open a "),g("a",{href:"https://github.com/JonathanDn/vue-companies-israel/pulls"}," pull request"),b(" to add it to the table above. If it's also currently recruiting, make sure to check the "),g("b",null,"Recruiting"),b(" column. ")],-1),pa=b("Community"),va=b("Links"),fa=P({expose:[],setup(e){A.use([D,O,J,N]);const t=Pt(null,{offsetY:Te}),a=l(""),s=l(null),n=l(!0),o={320:{slidesPerView:3},575.98:{slidesPerView:4},991.98:{slidesPerView:6}},r=e=>a.value=e.target.value,i=({length:e})=>s.value=e;return(e,l)=>{const c=v("Toggle"),d=v("GitHubAnchor"),u=v("Social"),h=v("Nav"),p=v("Header"),w=v("Heading"),b=v("Container"),k=v("Small"),_=v("Contributors"),S=v("Community"),x=v("Footer"),T=v("ScrollToTop");return f(),m(y,null,[g(h,null,{default:G((e=>[g(c,{disabled:"",unit:"rem",width:"50",height:"25",fontSize:"14",checkedText:"🌜",uncheckedText:"🌞",dotClass:"toggle-dot",dotColor:"currentColor",checkedBg:"var(--color-secondary2)",uncheckedBg:"var(--color-secondary2)",value:n.value,onClick:l[1]||(l[1]=e=>n.value=!n.value)},null,8,["value"]),g(u,null,{default:G((()=>[g(d,{class:{"is-sticky":e.isSticky},href:"https://github.com/JonathanDn/vue-companies-israel"},null,8,["class"])])),_:2},1024)])),_:1}),g(p,{companies:s.value},null,8,["companies"]),g(b,{content:""},{default:G((()=>[g(w,{level:"3",href:"#what-is-vuejs"},{default:G((()=>[Zt])),_:1}),Qt])),_:1}),g(b,{content:"",id:"get-started"},{default:G((()=>[g(xe,{onInput:r}),g(ae,{keyword:a.value,onReady:i},null,8,["keyword"]),g("p",null,[g(k,null,{default:G((()=>[ea,ta,aa])),_:1})])])),_:1}),g(b,{content:""},{default:G((()=>[g(w,{level:"4",href:"#explore-resources"},{default:G((()=>[sa])),_:1}),g(C(R),{"space-between":16,breakpoints:o},{default:G((()=>[g(C(V),null,{default:G((()=>[g("a",na,[g(fe,{src:"/src/assets/made-with-vuejs.png"})])])),_:1}),g(C(V),null,{default:G((()=>[g("a",oa,[g(fe,{color:"white",src:"/src/assets/awesome-vue.svg"})])])),_:1}),g(C(V),null,{default:G((()=>[g("a",ra,[g(fe,{src:"/src/assets/vue-mastery.png",cover:""})])])),_:1}),g(C(V),null,{default:G((()=>[g("a",la,[g(fe,{color:"white",src:"/src/assets/daily-dev.png"})])])),_:1}),g(C(V),null,{default:G((()=>[g("a",ia,[g(fe,{src:"/src/assets/udemy.svg"})])])),_:1}),g(C(V),null,{default:G((()=>[g("a",ca,[g(fe,{cover:"",color:"white",src:"/src/assets/vue-3-composition-api-cheatsheet.png"})])])),_:1})])),_:1}),g(w,{level:"3",href:"#made-by"},{default:G((()=>[da])),_:1}),g(_,{owner:"JonathanDn",repository:"vue-companies-israel"}),g(w,{level:"3",href:"#contributing"},{default:G((()=>[ua])),_:1}),ha,g(w,{level:"3",href:"#links"},{default:G((()=>[pa])),_:1}),g(S),g(w,{level:"3",href:"#links"},{default:G((()=>[va])),_:1}),g(ke)])),_:1}),g(x),g(T),g(C(t))],64)}}});fa.use(Xt),fa.use(U,{config:{id:"G-BKK301VXEG"}}),fa.mount("#app");
