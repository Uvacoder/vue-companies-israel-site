var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,n=Object.prototype.propertyIsEnumerable,s=Object.assign;import{p as o,a as r,r as l,b as i,w as c,o as d,D as u,m as h,c as p,d as f,e as v,f as m,g,F as y,h as b,i as w,t as k,j as S,k as _,u as x,l as C,v as T,n as E,q as I,s as $,x as L,G as M,y as j,z as H,A as B,B as z,C as A,E as D,H as O}from"./vendor.8aff3121.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const n=new URL(e,location),s=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,o)=>{const r=new URL(e,n);if(self[t].moduleMap[r])return a(self[t].moduleMap[r]);const l=new Blob([`import * as m from '${r}';`,`${t}.moduleMap['${r}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(l),onerror(){o(new Error(`Failed to import: ${e}`)),s(i)},onload(){a(self[t].moduleMap[r]),s(i)}});document.head.appendChild(i)})),self[t].moduleMap={}}}("assets/");var G={name:"@vue-companies-israel-site/site",version:"0.0.0",license:"MIT",repository:{url:"https://github.com/JonathanDn/vue-companies-israel"},scripts:{dev:"vite",build:"vite build",serve:"vite preview",prerelease2:"yarn && yarn version --patch --no-git-tag-version && yarn build",prerelease:"yarn build",release:"node ./scripts/gh-pages",postrelease2:"node ./scripts/post-release"},dependencies:{"animate.css":"^4.1.1",axios:"^0.21.1",marked:"^2.0.1","prism-themes":"^1.5.0",prismjs:"^1.23.0",vue:"^3.0.5","vue-github-button":"^3.0.0","vue-gtag-next":"^1.14.0","vue-toggles":"^1.1.0","vue-use-web":"^1.0.1"},devDependencies:{"@vitejs/plugin-vue":"^1.1.4","@vue/compiler-sfc":"^3.0.5","gh-pages":"^3.1.0",sass:"^1.32.8",vite:"^2.0.1","vite-plugin-markdown":"^2.0.0"}};function J(e){const t=[];return Array.from(e.rows).reduce(((a,n)=>{const o=[];return Array.from(n.children).map(R).forEach(((r,l)=>{"th"===r.tagName.toLowerCase()?(a.thead.push(r),l===N(e).length-1&&t.push(...function(e){return N(e).map((e=>R(e).innerText))}(e))):0===e.tHead.rows.length?a.tbody.push(r):(o.push(r),o.length===n.children.length&&(a.tbody.push(function(e,t){return e.reduce(((e,a,n)=>s(s({},e),{[a]:t[n]})),{})}(t,o)),o.length=0))})),a}),{thead:[],tbody:[]})}function N(e){return Array.from(e.tHead.rows[0].children)}function R(e){const{tagName:t,innerText:a,innerHTML:n}=e,s=a.trim();return{tagName:t.toLowerCase(),innerHTML:n,innerText:s,innerTextLowerCase:s.toLowerCase()}}function U(e){return`${G.name}-${e}`}function q(e,t,a=864e5){const n=U(e),s=new Date,o={date:s.getTime(),value:t,expiry:s.getTime()+a};return localStorage.setItem(n,JSON.stringify(o)),o.date}function F(e){const t=U(e),a=localStorage.getItem(t);if(!a)return null;const n=JSON.parse(a);return(new Date).getTime()>n.expiry?(localStorage.removeItem(t),null):n}function V(e,o=0,r={}){if(Array.isArray(e))return e.reduce(((e,l)=>{const{name:i,path:c,children:d}=l,u=((e,s)=>{var o={};for(var r in e)t.call(e,r)&&s.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&a)for(var r of a(e))s.indexOf(r)<0&&n.call(e,r)&&(o[r]=e[r]);return o})(l,["name","path","children"]),h=0===o,p=!h;return e.push(s(s({},u),{name:i,path:c,level:o,isRoot:h,nested:p,parent:s(s({},r),{name:h?void 0:r.name})})),Array.isArray(d)&&d.length&&(e=e.concat(V(d,o+1,l))),e}),[])}function P(e){const t=new Date(e),a=t.getFullYear();return`${t.toLocaleString("default",{month:"long"})} ${new Date(a,t.getMonth(),0).getDate()}, ${a}`}function Y(e){return function(t){return console.error(t),e(t),{error:t}}}const W={emits:["ready"],props:{keyword:{type:String}},setup(e,{emit:t}){const a=l(null),n=l(null),s=i({head:[],rows:[],index:[],lastUpdated:"",sortColumn:null,ascending:!1}),o=Y((e=>s.error=e)),r=()=>new Promise((async e=>{const t=F("table");if(t)e({table:t.value,date:t.date});else{const{error:t,data:a}=await(async()=>await u.get("https://raw.githubusercontent.com/JonathanDn/vue-companies-israel/main/README.md").catch(o))();if(t)e({error:t});else{const t=h(a),n=await function(e){return new Promise((t=>{const a=document.createElement("template");a.innerHTML=e,window.requestAnimationFrame((()=>t(a.content)))}))}(t),s=J(n.querySelector("table"));e({table:s,date:q("table",s)})}}})),f=(e,{ascending:t=!0}={})=>{s.sortColumn===e?s.ascending=!s.ascending:(s.ascending=t,s.sortColumn=e),s.rows=s.rows.sort(v(s.ascending,(t=>t[e].innerText)))},v=(e=!0,t=(e=>e))=>(a,n)=>{const s=t(a),o=t(n);return s>o?e?1:-1:s<o?e?-1:1:0};c((()=>e.keyword),(e=>s.rows=(e=>{const t=new Set;return s.index.forEach((([a,n])=>{a.match(new RegExp(e))&&t.add(n)})),Array.from(t)})(e))),d((async()=>{const{table:e,date:a,error:n}=await r().catch(o);var l,i;n||(s.index=function(e){return e.map((e=>Object.entries(e).map((([,t])=>[t.innerTextLowerCase,e])))).flat()}(e.tbody),s.head=e.thead,s.rows=e.tbody,s.lastUpdated=a,l=1,i={ascending:!1},f(s.head[l].innerText,i),t("ready",{length:s.rows.length}))}));const m=p((()=>({width:100/s.head.length+"%"})));return{root:a,state:s,getRef:()=>a.value,tdStyle:m,sortTable:f,getDisplayDate:P,scrollContainer:n}}},K=_("data-v-f99d63a6");o("data-v-f99d63a6");const X={ref:"root",class:"table"},Z={class:"scroll-container"},Q={key:0},ee={key:0,class:"no-results"},te={key:1,class:"error"},ae=w(" An error has occurred while retrieving the table. "),ne=g("a",{href:"/"},"Try again?",-1),se=w(" 🥵 "),oe={key:0,class:"last-updated"};r();const re=K(((e,t,a,n,s,o)=>{const r=f("Small");return v(),m("div",X,[g("div",Z,[g("table",null,[g("thead",null,[g("tr",null,[(v(!0),m(y,null,b(n.state.head,((e,t)=>(v(),m("th",{key:t,style:n.tdStyle,onClick:t=>n.sortTable(e.innerText)},[w(k(e.innerText)+" ",1),e.innerText===n.state.sortColumn?(v(),m("span",Q,k(n.state.ascending?"↑":"↓"),1)):S("",!0)],12,["onClick"])))),128))])]),g("tbody",null,[(v(!0),m(y,null,b(n.state.rows,((e,t)=>(v(),m("tr",{key:t},[(v(!0),m(y,null,b(e,((e,t)=>(v(),m("td",{innerHTML:e.innerHTML,style:n.tdStyle,key:t},null,12,["innerHTML"])))),128))])))),128)),a.keyword&&0===n.state.rows.length?(v(),m("tr",ee,[g("td",{colspan:n.state.head.length},"Nope, can't find that. 😪",8,["colspan"])])):S("",!0),n.state.error?(v(),m("tr",te,[g("td",{colspan:n.state.head.length},[ae,ne,se],8,["colspan"])])):S("",!0)])])]),n.state.lastUpdated?(v(),m("div",oe,[g(r,null,{default:K((()=>[w("Last updated: "+k(n.getDisplayDate(n.state.lastUpdated)),1)])),_:1})])):S("",!0)],512)}));W.render=re,W.__scopeId="data-v-f99d63a6";const le=_("data-v-28516b05");o("data-v-28516b05");const ie={class:"links-container"},ce={class:"links"},de=g("li",null,[g("a",{href:"https://github.com/JonathanDn/vue-companies-israel/graphs/contributors"},"Contributors")],-1),ue=g("li",null,[g("a",{href:"https://github.com/JonathanDn/vue-companies-israel"},"GitHub")],-1);r();const he={expose:[],setup:e=>le(((e,t)=>{const a=f("GitHubStars");return v(),m("div",ie,[g("ul",ce,[de,ue,g("li",null,[g(a,{packageJson:x(G)},null,8,["packageJson"])])])])})),__scopeId:"data-v-28516b05"};const pe=_("data-v-3e7294bd");o("data-v-3e7294bd");const fe={class:"search"};r();const ve={expose:[],setup(e){const t=l("");return pe(((e,a)=>(v(),m("div",fe,[C(g("input",{type:"text","onUpdate:modelValue":a[1]||(a[1]=e=>t.value=e),placeholder:"Search... 🔎",onInput:a[2]||(a[2]=a=>e.$emit("change",t.value))},null,544),[[T,t.value]])]))))},__scopeId:"data-v-3e7294bd"};const me=Symbol(),ge=()=>document.getElementsByTagName("nav")[0].getBoundingClientRect().height.toFixed(2),ye={setup(){const{y:e}=E(),t=p((()=>e.value>0));return I(me,{isSticky:t}),{isSticky:t}}},be=_("data-v-bc3d837a")(((e,t,a,n,s,o)=>(v(),m("nav",{class:["nav",{"is-sticky":n.isSticky,static:!n.isSticky}]},[$(e.$slots,"default",{isSticky:n.isSticky})],2))));ye.render=be,ye.__scopeId="data-v-bc3d837a";const we=_("data-v-75589fc0");o("data-v-75589fc0");const ke={class:"button"},Se={class:"icon"};r();const _e={expose:[],props:{icon:String},setup:e=>we(((t,a)=>(v(),m("button",ke,[g("span",Se,k(e.icon),1),$(t.$slots,"default")])))),__scopeId:"data-v-75589fc0"};const xe={},Ce=_("data-v-02ead0d7");o("data-v-02ead0d7");const Te={href:"#",class:"animate__animated animate__fadeInDown"},Ee=g("svg",{class:"logo",version:"1.1",viewBox:"0 0 261.76 226.69",xmlns:"http://www.w3.org/2000/svg"},[g("defs",null,[g("linearGradient",{id:"Gradient1",x1:"0",x2:"0",y1:"0",y2:"1"},[g("stop",{offset:"0%","stop-color":"#2d805b"}),g("stop",{offset:"80%","stop-color":"#ffffff"})]),g("linearGradient",{id:"Gradient2",x1:"0",x2:"0",y1:"0",y2:"1"},[g("stop",{offset:"0%","stop-color":"#ffffff"}),g("stop",{offset:"120%","stop-color":"#2d805b"})])]),g("g",{transform:"matrix(1.3333 0 0 -1.3333 -76.311 313.34)"},[g("g",{transform:"translate(178.06 235.01)"},[g("path",{fill:"url(#Gradient1)",d:"m0 0-22.669-39.264-22.669 39.264h-75.491l98.16-170.02 98.16 170.02z"})]),g("g",{transform:"translate(178.06 235.01)"},[g("path",{fill:"url(#Gradient2)",d:"m0 0-22.669-39.264-22.669 39.264h-36.227l58.896-102.01 58.896 102.01z"})])])],-1);r();const Ie=Ce(((e,t)=>(v(),m("a",Te,[Ee]))));xe.render=Ie,xe.__scopeId="data-v-02ead0d7";const $e=_("data-v-6cebcb0a"),Le={expose:[],props:{level:{type:String,required:!0},href:{type:String}},setup:e=>$e(((t,a)=>(v(),m(L(`h${e.level}`),{class:"heading"},{default:$e((()=>[e.href?(v(),m("a",{key:0,class:"anchor",href:e.href,"aria-hidden":"true"},"#",8,["href"])):S("",!0),$(t.$slots,"default")])),_:3})))),__scopeId:"data-v-6cebcb0a"};const Me=_("data-v-591f43de"),je={expose:[],props:{content:Boolean},setup:e=>Me(((t,a)=>(v(),m("div",{class:["container",{"has-content":e.content}]},[$(t.$slots,"default")],2)))),__scopeId:"data-v-591f43de"};const He={setup:(e,t)=>({style:p((()=>({"grid-template-columns":`repeat(${t.slots.default().length}, minmax(0, 1fr))`})))})},Be=_("data-v-d61bc90e")(((e,t,a,n,s,o)=>(v(),m("div",{class:"button-group",style:n.style},[$(e.$slots,"default")],4))));He.render=Be,He.__scopeId="data-v-d61bc90e";const ze=_("data-v-40dabd91");o("data-v-40dabd91");const Ae={class:"header animate__animated animate__fadeIn"},De=g("div",{class:"stars"},null,-1),Oe=g("a",{href:"https://vuejs.org/"},"Vue.js",-1),Ge={href:"#get-started"},Je=w("Get Started"),Ne={href:"https://github.com/JonathanDn/vue-companies-israel/pulls"},Re=w("Add Company");r();const Ue={expose:[],setup:e=>ze(((e,t)=>(v(),m("header",Ae,[De,g(je,{class:"container"},{default:ze((()=>[g(xe),g(Le,{level:"1",style:{color:"var(--color-body)"}},{default:ze((()=>[w(" A curated list of "+k(e.$attrs.companies)+" companies who hire Israelis - that work with ",1),Oe])),_:1},8,["style"]),g(He,null,{default:ze((()=>[g("a",Ge,[g(_e,{icon:"🙋🏻‍♀️",onClick:t[1]||(t[1]=t=>e.$emit("get-started"))},{default:ze((()=>[Je])),_:1})]),g("a",Ne,[g(_e,{icon:"👨🏻‍🌾"},{default:ze((()=>[Re])),_:1})])])),_:1})])),_:1})])))),__scopeId:"data-v-40dabd91"},qe={expose:[],props:{color:{type:String,default:"#1da1f2"},size:{type:Number,default:32},unit:{type:String,default:"rem"}},setup(e){const t=e,a=p((()=>({width:t.size+t.unit,height:t.size+t.unit})));return(t,n)=>(v(),m("svg",{style:x(a),viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[g("path",{fill:e.color,d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z"},null,8,["fill"])],4))}};const Fe=_("data-v-ed1c1a4e");o("data-v-ed1c1a4e");const Ve=g("path",{d:"M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z"},null,-1);r();const Pe={expose:[],props:{size:{type:Number,default:32}},setup(e){const t=e,a=p((()=>({width:`${t.size+4}rem`})));return Fe(((e,t)=>(v(),m("svg",{style:x(a),"fill-rule":"evenodd","clip-rule":"evenodd",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[Ve],4))))},__scopeId:"data-v-ed1c1a4e"},Ye={expose:[],props:{color:{type:String,default:"#4267b2"},size:{type:Number,default:32},unit:{type:String,default:"rem"}},setup(e){const t=e,a=p((()=>({width:t.size+t.unit,height:t.size+t.unit})));return(t,n)=>(v(),m("svg",{style:x(a),viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[g("path",{fill:e.color,d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"},null,8,["fill"])],4))}};const We=_("data-v-534bb102");o("data-v-534bb102");const Ke={class:"community"},Xe={href:"https://www.facebook.com/groups/1062801280495598"},Ze={href:"https://twitter.com/vuejsisrael"},Qe={href:"https://discord.gg/vue"};r();const et={expose:[],setup:e=>We(((e,t)=>(v(),m("div",Ke,[g("a",Xe,[g(Ye,{color:"white"})]),g("a",Ze,[g(qe)]),g("a",Qe,[g(Pe)])])))),__scopeId:"data-v-534bb102"};var tt={name:"ScrollToTopScope",setup(){const e=l(!1),{y:t}=E();return c((()=>t.value),(async()=>e.value=await new Promise((e=>window.requestAnimationFrame((()=>{e(window.innerHeight+t.value>=.667*document.body.scrollHeight)})))))),{isScrollEndRef:e,scrollToTop:()=>window.scrollTo({top:0,behavior:"smooth"})}},render(){var e,t;const{isScrollEndRef:a,scrollToTop:n}=this;return null==(t=(e=this.$slots).default)?void 0:t.call(e,{isScrollEnd:a,scrollToTop:n})}};const at=_("data-v-714451fe"),nt={expose:[],setup:e=>at(((e,t)=>(v(),m(x(tt),null,{default:at((e=>[g("div",{class:["scroll-to-top",{"is-visible":e.isScrollEnd}],onClick:e.scrollToTop}," ↑ ",10,["onClick"])])),_:1})))),__scopeId:"data-v-714451fe"};const st={},ot=_("data-v-49cb73a8");o("data-v-49cb73a8");const rt={class:"error"};r();const lt=ot(((e,t)=>(v(),m("div",rt,[g("small",null,[$(e.$slots,"default")])]))));st.render=lt,st.__scopeId="data-v-49cb73a8";const it=_("data-v-7a635324");o("data-v-7a635324");const ct={class:"contributors"};r();const dt={expose:[],props:{owner:{type:String,required:!0},repository:{type:String,required:!0}},setup(e){const t=e,a=i({value:null}),n=Y((e=>a.value=e.message)),s=i([]);return d((async()=>{const e=await(async()=>{const e=F("contributors");if(e)return e.value;const{error:a,data:s}=await u.get((o=t.owner,r=t.repository,`https://api.github.com/repos/${o}/${r}/contributors`)).catch(n);var o,r;return a?[]:(q("contributors",s),s)})().catch(n);s.push(...e.slice(0,10))})),it(((e,t)=>(v(),m("div",ct,[(v(!0),m(y,null,b(x(s),((e,t)=>(v(),m("img",{key:t,src:e.avatar_url,title:e.login,alt:e.login},null,8,["src","title","alt"])))),128)),x(a).value?(v(),m(st,{key:0},{default:it((()=>[w(k(x(a).value?x(a).value:x(a)),1)])),_:1})):S("",!0)]))))},__scopeId:"data-v-7a635324"};const ut=_("data-v-19897e78");o("data-v-19897e78");const ht={class:"github-anchor",href:"https://github.com/JonathanDn/vue-companies-israel"},pt=g("path",{"fill-rule":"evenodd","clip-rule":"evenodd",transform:"scale(64)",d:"M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"},null,-1);r();const ft={expose:[],props:{href:{type:String,required:!0},style:{type:Object,default:()=>({width:"32rem"})}},setup:e=>ut(((t,a)=>(v(),m("a",ht,[(v(),m("svg",{style:e.style,viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},[pt],4))])))),__scopeId:"data-v-19897e78"};const vt=_("data-v-2605e9b2");o("data-v-2605e9b2");const mt=w("Star ");r();const gt={expose:[],props:{packageJson:{type:Object,required:!0}},setup:e=>vt(((t,a)=>{var n;return v(),m(x(M),{class:"github-stars","data-show-count":"true","data-icon":"octicon-star",href:null==(n=e.packageJson.repository)?void 0:n.url,"aria-label":`Star ${e.packageJson.author}/${e.packageJson.name} on GitHub`},{default:vt((()=>[mt])),_:1},8,["href","aria-label"])})),__scopeId:"data-v-2605e9b2"},yt={expose:[],props:{markdown:{type:String}},setup:e=>(d((()=>{setTimeout(j.highlightAll)})),(t,a)=>(v(),m("div",{class:"markdown",innerHTML:e.markdown},null,8,["innerHTML"])))};const bt={},wt=_("data-v-2137b4a6");o("data-v-2137b4a6");const kt={class:"small"};r();const St=wt(((e,t)=>(v(),m("small",kt,[$(e.$slots,"default")]))));bt.render=St,bt.__scopeId="data-v-2137b4a6";const _t=_("data-v-5bd2b688");o("data-v-5bd2b688");const xt={class:"footer"},Ct={class:"fixed"},Tt=g("a",{href:"https://github.com/adi518/vue-companies-israel-site"}," GitHub ",-1);r();const Et={expose:[],setup:e=>_t(((e,t)=>(v(),m("footer",xt,[g("div",Ct,[g(bt,null,{default:_t((()=>[w(k(x(G).version),1)])),_:1}),g(bt,null,{default:_t((()=>[Tt])),_:1})])])))),__scopeId:"data-v-5bd2b688"};const It={},$t=_("data-v-e4919030");o("data-v-e4919030");const Lt={class:"social"};r();const Mt=$t(((e,t)=>(v(),m("div",Lt,[$(e.$slots,"default")]))));It.render=Mt,It.__scopeId="data-v-e4919030";const jt={name:"VueToggles",emits:["click"],props:{value:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},reverse:{type:Boolean,default:!1},checkedText:{type:String,default:null},uncheckedText:{type:String,default:null},width:{type:[Number,String],default:75},height:{type:[Number,String],default:25},uncheckedBg:{type:String,default:"#939393"},checkedBg:{type:String,default:"#5850ec"},dotColor:{type:String,default:"#fff"},dotClass:{type:String,default:""},fontSize:{type:[Number,String],default:"12"},checkedColor:{type:String,default:"#fff"},uncheckedColor:{type:String,default:"#fff"},fontWeight:{type:[Number,String],default:"normal"},unit:{type:String,default:"px"}},computed:{bgStyle(){return{width:this.width+this.unit,height:this.height+this.unit,background:this.value&&!this.disabled?this.checkedBg:this.uncheckedBg}},dotStyle(){const e={background:this.dotColor,width:this.height-8+this.unit,height:this.height-8+this.unit,"min-width":this.height-8+this.unit,"min-height":this.height-8+this.unit,"margin-left":this.value?this.width-(this.height-3)+this.unit:"5px"};return(!this.value&&this.reverse||this.value&&!this.reverse)&&(e.marginLeft=this.width-(this.height-3)+this.unit),(this.value&&this.reverse||!this.value&&!this.reverse)&&(e.marginLeft="5px"),e},textStyle(){const e={"font-weight":this.fontWeight,"font-size":this.fontSize+this.unit,color:this.value&&!this.disabled?this.checkedColor:this.uncheckedColor,right:this.value?this.height-3+this.unit:"auto",left:this.value?"auto":this.height-3+this.unit};return!this.value&&this.reverse&&(e.right=this.height-3+this.unit,e.left="auto"),this.value&&this.reverse&&(e.left=this.height-3+this.unit,e.right="auto"),e}}};jt.render=function(e,t,a,n,s,o){return v(),m("span",{class:"vue-toggles",style:o.bgStyle,role:"switch",tabindex:"0","aria-checked":a.value?"true":"false","aria-readonly":a.disabled?"true":"false",onClick:t[1]||(t[1]=t=>a.disabled?null:e.$emit("click",a.value)),onKeyup:[t[2]||(t[2]=B(z((t=>a.disabled?null:e.$emit("click",a.value)),["prevent"]),["enter"])),t[3]||(t[3]=B(z((t=>a.disabled?null:e.$emit("click",a.value)),["prevent"]),["space"]))]},[g("span",{"aria-hidden":"true",style:o.dotStyle,class:["dot",a.dotClass]},[C(g("span",{style:o.textStyle,class:"text"},k(a.checkedText),5),[[H,a.checkedText&&a.value]]),C(g("span",{style:o.textStyle,class:"text"},k(a.uncheckedText),5),[[H,a.uncheckedText&&!a.value]])],6)],44,["aria-checked","aria-readonly"])};var Ht=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Nav:ye,Header:Ue,Button:_e,Community:et,ButtonGroup:He,ScrollToTop:nt,Contributors:dt,ScrollToTopScope:tt,GitHubAnchor:ft,GitHubStars:gt,Container:je,Markdown:yt,VueLogo:xe,Heading:Le,Footer:Et,Social:It,Small:bt,Error:st,Toggle:jt});const Bt=(e,t,a)=>{if(e.matched.length)return a();a({path:`${t.path}?a=${e.path.substr(1)}`})},zt=(e,{offsetY:t=(async()=>0),offsetMultiplier:a=2}={})=>{if(zt.Component)return zt.Component;const n=[];if(e&&(n.concat((e=>V(e.options.routes).reduce(((e,t)=>s(s({},e),{[t.path]:1})),{}))(e)),e.beforeEach(Bt)),a){const e=t;t=()=>e()*a}const o=new Ot(n,t);return zt.Component={data:()=>({isMounted:!1}),mounted(){this.isMounted=!0,this.scrollToLocalAnchor(),o.add()},beforeUnmount(){this.isMounted=!1,o.remove()},methods:{async scrollToLocalAnchor(){if(!this.isMounted)return;const e=new URLSearchParams(window.location.hash.substr(2)).get("a");e&&(await this.$nextTick(),At(e,t))}},render:()=>null},zt.Component};zt.Component=null;const At=(e,t=(()=>0))=>new Promise((a=>{window.requestAnimationFrame((()=>{let n;if(e instanceof HTMLAnchorElement){const t=e.getAttribute("href").substr(1);n=document.getElementById(t)?document.getElementById(t):e}else n=document.getElementById(e)||document.querySelector(`[href='#${e}'`);!function(e,t=(()=>{})){const a=function(){window.pageYOffset===Math.floor(e)&&(window.removeEventListener("scroll",a),t())};window.addEventListener("scroll",a),a(),window.scrollTo({top:e,behavior:"smooth"})}(n.getBoundingClientRect().top+window.pageYOffset-t()),a()}))})),Dt=class{constructor(e,t){const a=Dt.createClickHandler(e,t);this.add=()=>document.addEventListener("click",a,!0),this.remove=()=>document.removeEventListener("click",a)}};let Ot=Dt;var Gt,Jt,Nt;Nt=(e,t=(()=>0))=>async a=>{var n;const s=a.target.closest("a")||a.target;if(!(s instanceof HTMLAnchorElement&&/^#/.test(s.hash)))return;const o=null==(n=s.hash)?void 0:n.substr(1);e[o]||window.location.host!==s.host||(a.preventDefault(),await At(s,t),window.location.hash=`?a=${o}`)},"symbol"!=typeof(Jt="createClickHandler")&&(Jt+=""),Jt in(Gt=Ot)?e(Gt,Jt,{enumerable:!0,configurable:!0,writable:!0,value:Nt}):Gt[Jt]=Nt,Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null});const Rt={install(e){Object.keys(Ht).forEach((t=>e.component(t,Ht[t])))}};const Ut=w("What is Vue.js?"),qt=g("p",null,[g("a",{href:"https://vuejs.org/"},"Vue.js"),w(" is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members. "),g("a",{href:"https://en.wikipedia.org/wiki/Vue.js"},"Wikipedia")],-1),Ft=w(" * Table does NOT contain freelancers, consultancies, software contractors or open source projects working with "),Vt=g("a",{href:"https://vuejs.org/"},"Vue.js",-1),Pt=w(". "),Yt=w("Explore Resources"),Wt=g("p",null,"Coming soon.",-1),Kt=w("Made by"),Xt=w("Contributing"),Zt=g("p",null,[w(" If your company is currently working with "),g("a",{href:"https://vuejs.org/"},"Vue.js"),w(", open a "),g("a",{href:"https://github.com/JonathanDn/vue-companies-israel/pulls"}," pull request"),w(" to add it to the table above. If it's also currently recruiting, make sure to check the "),g("b",null,"Recruiting"),w(" column. ")],-1),Qt=w("Community"),ea=w("Links"),ta=D({expose:[],setup(e){const t=zt(null,{offsetY:ge}),a=l(""),n=l(null),s=l(!0),o=e=>a.value=e.target.value,r=({length:e})=>n.value=e;return(e,l)=>{const i=f("Toggle"),c=f("GitHubAnchor"),d=f("Social"),u=f("Nav"),h=f("Header"),p=f("Heading"),b=f("Container"),w=f("Small"),k=f("Contributors"),S=f("Community"),_=f("Footer"),C=f("ScrollToTop");return v(),m(y,null,[g(u,null,{default:A((e=>[g(i,{disabled:"",unit:"rem",width:"50",height:"25",fontSize:"14",checkedText:"🌜",uncheckedText:"🌞",dotClass:"toggle-dot",dotColor:"currentColor",checkedBg:"var(--color-secondary2)",uncheckedBg:"var(--color-secondary2)",value:s.value,onClick:l[1]||(l[1]=e=>s.value=!s.value)},null,8,["value"]),g(d,null,{default:A((()=>[g(c,{class:{"is-sticky":e.isSticky},href:"https://github.com/JonathanDn/vue-companies-israel"},null,8,["class"])])),_:2},1024)])),_:1}),g(h,{companies:n.value},null,8,["companies"]),g(b,{content:""},{default:A((()=>[g(p,{level:"3",href:"#what-is-vuejs"},{default:A((()=>[Ut])),_:1}),qt])),_:1}),g(b,{content:"",id:"get-started"},{default:A((()=>[g(ve,{onInput:o}),g(W,{keyword:a.value,onReady:r},null,8,["keyword"]),g("p",null,[g(w,null,{default:A((()=>[Ft,Vt,Pt])),_:1})])])),_:1}),g(b,{content:""},{default:A((()=>[g(p,{level:"3",href:"#explore-resources"},{default:A((()=>[Yt])),_:1}),Wt,g(p,{level:"3",href:"#made-by"},{default:A((()=>[Kt])),_:1}),g(k,{owner:"JonathanDn",repository:"vue-companies-israel"}),g(p,{level:"3",href:"#contributing"},{default:A((()=>[Xt])),_:1}),Zt,g(p,{level:"3",href:"#links"},{default:A((()=>[Qt])),_:1}),g(S),g(p,{level:"3",href:"#links"},{default:A((()=>[ea])),_:1}),g(he)])),_:1}),g(_),g(C),g(x(t))],64)}}});ta.use(Rt),ta.use(O,{config:{id:"G-BKK301VXEG"}}),ta.mount("#app");
