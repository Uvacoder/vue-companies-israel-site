var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,s=Object.prototype.propertyIsEnumerable,n=Object.assign;import{p as o,a as r,r as l,o as i,c,w as u,v as d,b as h,d as p,e as v,f,g as m,D as g,m as y,F as b,h as w,i as k,j as S,k as _,t as C,l as x,n as T,u as I,q as L,s as $,x as j,y as E,G as M,z,A as H,B,C as A,S as D,N as O,P as J,E as N,H as R,I as G,J as U,K as V,L as q,M as P}from"./vendor.c45c6dc5.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const s=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,o)=>{const r=new URL(e,s);if(self[t].moduleMap[r])return a(self[t].moduleMap[r]);const l=new Blob([`import * as m from '${r}';`,`${t}.moduleMap['${r}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(l),onerror(){o(new Error(`Failed to import: ${e}`)),n(i)},onload(){a(self[t].moduleMap[r]),n(i)}});document.head.appendChild(i)})),self[t].moduleMap={}}}("assets/");var F={name:"@vue-companies-israel-site/site",version:"0.0.0",license:"MIT",repository:{url:"https://github.com/JonathanDn/vue-companies-israel"},scripts:{dev:"vite",build:"vite build",serve:"vite preview",prerelease2:"yarn && yarn version --patch --no-git-tag-version && yarn build",prerelease:"yarn build",release:"node ./scripts/gh-pages",postrelease2:"node ./scripts/post-release"},dependencies:{"animate.css":"^4.1.1",axios:"^0.21.1","fuse.js":"^6.4.6",marked:"^2.0.1","prism-themes":"^1.5.0",prismjs:"^1.23.0",swiper:"^6.5.0",vue:"^3.0.5","vue-github-button":"^3.0.0","vue-gtag-next":"^1.14.0","vue-toggles":"^1.1.0","vue-use-web":"^1.0.1"},devDependencies:{"@vitejs/plugin-vue":"^1.1.4","@vue/compiler-sfc":"^3.0.5","gh-pages":"^3.1.0",sass:"^1.32.8",vite:"^2.0.1","vite-plugin-markdown":"^2.0.0"}};function Y(e){const t=[];return Array.from(e.rows).reduce(((a,s)=>{const o=[];return Array.from(s.children).map(W).forEach(((r,l)=>{"th"===r.tagName.toLowerCase()?(a.thead.push(r),l===K(e).length-1&&t.push(...function(e){return K(e).map((e=>W(e).innerText.toLowerCase()))}(e))):0===e.tHead.rows.length?a.tbody.push(r):(o.push(r),o.length===s.children.length&&(a.tbody.push(function(e,t){return e.reduce(((e,a,s)=>n(n({},e),{[a]:t[s]})),{})}(t,o)),o.length=0))})),a}),{thead:[],tbody:[]})}function K(e){return Array.from(e.tHead.rows[0].children)}function W(e){const{tagName:t,innerText:a,innerHTML:s}=e,n=a.trim();return{tagName:t.toLowerCase(),innerHTML:s,innerText:n,innerTextLowerCase:n.toLowerCase()}}function X(e){return`${F.name}-${e}`}function Z(e,t,a=432e5){const s=X(e),n=new Date,o={date:n.getTime(),value:t,expiry:n.getTime()+a};return localStorage.setItem(s,JSON.stringify(o)),o.date}function Q(e){const t=X(e),a=localStorage.getItem(t);if(!a)return null;const s=JSON.parse(a);return(new Date).getTime()>s.expiry?(localStorage.removeItem(t),null):s}function ee(e,o=0,r={}){if(Array.isArray(e))return e.reduce(((e,l)=>{const{name:i,path:c,children:u}=l,d=((e,n)=>{var o={};for(var r in e)t.call(e,r)&&n.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&a)for(var r of a(e))n.indexOf(r)<0&&s.call(e,r)&&(o[r]=e[r]);return o})(l,["name","path","children"]),h=0===o,p=!h;return e.push(n(n({},d),{name:i,path:c,level:o,isRoot:h,nested:p,parent:n(n({},r),{name:h?void 0:r.name})})),Array.isArray(u)&&u.length&&(e=e.concat(ee(u,o+1,l))),e}),[])}function te(e){const t=new Date(e),a=t.getDate(),s=t.getFullYear();return`${t.toLocaleString("default",{month:"long"})} ${a}, ${s}`}function ae(e){return function(t){return console.error(t),e(t),{error:t}}}const se=p("data-v-3e7294bd");o("data-v-3e7294bd");const ne={class:"search"};r();const oe={expose:[],setup(e){const t=l("");return se(((e,a)=>(i(),c("div",ne,[u(h("input",{type:"text","onUpdate:modelValue":a[1]||(a[1]=e=>t.value=e),placeholder:"Search... 🔎",onInput:a[2]||(a[2]=a=>e.$emit("change",t.value))},null,544),[[d,t.value]])]))))},__scopeId:"data-v-3e7294bd"};const re={emits:["ready"],setup(e,{emit:t}){const a=v({fuse:{},rows:[],headers:[],allRows:[],keyword:"",lastUpdated:"",sortColumn:null,ascending:!1}),s=ae((e=>a.error=e)),n=()=>new Promise((async e=>{const t=Q("table");if(t)e({table:t.value,date:t.date});else{const{error:t,data:a}=await(async()=>await g.get("https://raw.githubusercontent.com/JonathanDn/vue-companies-israel/main/README.md").catch(s))();if(t)e({error:t});else{const t=y(a),s=await function(e){return new Promise((t=>{const a=document.createElement("template");a.innerHTML=e,window.requestAnimationFrame((()=>t(a.content)))}))}(t),n=Y(s.querySelector("table"));e({table:n,date:Z("table",n)})}}})),o=(e,{ascending:t=!0}={})=>{const s=e.toLowerCase();a.sortColumn===s?a.ascending=!a.ascending:(a.ascending=t,a.sortColumn=s),a.rows=a.rows.sort(r(a.ascending,(e=>e[s].innerText)))},r=(e=!0,t=(e=>e))=>(a,s)=>{const n=t(a),o=t(s);return n>o?e?1:-1:n<o?e?-1:1:0},l=f((()=>({width:100/a.headers.length+"%"})));return m((async()=>{const{table:e,date:r,error:l}=await n().catch(s);if(l instanceof Error)return;const i=(e=>e.map((e=>Object.entries(e).map((([,t])=>({value:t.innerTextLowerCase,row:e}))))).flat())(e.tbody);var c,u;a.fuse=new b(i,{keys:["value"]}),a.allRows=e.tbody,a.headers=e.thead,a.rows=e.tbody,a.lastUpdated=r,c=1,u={ascending:!1},o(a.headers[c].innerText,u),t("ready",{length:a.rows.length})})),{state:a,Search:oe,tdStyle:l,onSearch:e=>{const t=e.target.value;a.keyword=t,a.rows=(e=>e?new Set(a.fuse.search(e).map((({item:e,row:t})=>t||e.row))):a.allRows)(t)},sortTable:o,getDisplayDate:te}}},le=p("data-v-36bce993");o("data-v-36bce993");const ie={class:"table"},ce={class:"scroll-container"},ue={key:0},de={key:0,class:"no-results"},he={key:1,class:"error"},pe=_(" An error has occurred while retrieving the table. "),ve=h("a",{href:"/"},"Try again?",-1),fe=_(" 🥵 "),me={key:0,class:"last-updated"};r();const ge=le(((e,t,a,s,n,o)=>{const r=w("Small");return i(),c(k,null,[h(s.Search,{onInput:s.onSearch},null,8,["onInput"]),h("div",ie,[h("div",ce,[h("table",null,[h("thead",null,[h("tr",null,[(i(!0),c(k,null,S(s.state.headers,((e,t)=>(i(),c("th",{key:t,style:s.tdStyle,onClick:t=>s.sortTable(e.innerText)},[_(C(e.innerText)+" ",1),e.innerText===s.state.sortColumn?(i(),c("span",ue,C(s.state.ascending?"↑":"↓"),1)):x("",!0)],12,["onClick"])))),128))])]),h("tbody",null,[(i(!0),c(k,null,S(s.state.rows,((e,t)=>(i(),c("tr",{key:t},[(i(!0),c(k,null,S(e,((e,t)=>(i(),c("td",{innerHTML:e.innerHTML,style:s.tdStyle,key:t},null,12,["innerHTML"])))),128))])))),128)),s.state.keyword&&0===s.state.rows.length?(i(),c("tr",de,[h("td",{colspan:s.state.headers.length},"Nope, can't find that. 😪",8,["colspan"])])):x("",!0),s.state.error?(i(),c("tr",he,[h("td",{colspan:s.state.headers.length},[pe,ve,fe],8,["colspan"])])):x("",!0)])])]),s.state.lastUpdated?(i(),c("div",me,[h(r,null,{default:le((()=>[_("Last updated: "+C(s.getDisplayDate(s.state.lastUpdated)),1)])),_:1})])):x("",!0)])],64)}));re.render=ge,re.__scopeId="data-v-36bce993";const ye=p("data-v-3bb2e069"),be={expose:[],props:{src:{type:String},size:{type:String},color:{type:String},cover:{type:Boolean}},setup(e){const t=e,a=f((()=>({backgroundColor:t.color,padding:t.cover?"0":"16rem",backgroundImage:`url(${t.src})`,backgroundSize:t.size?t.size:t.cover?"cover":"86%"})));return ye(((e,t)=>(i(),c("div",{class:"slide",style:I(a)},[T(e.$slots,"default")],4))))},__scopeId:"data-v-3bb2e069"};const we=p("data-v-28516b05");o("data-v-28516b05");const ke={class:"links-container"},Se={class:"links"},_e=h("li",null,[h("a",{href:"https://github.com/JonathanDn/vue-companies-israel/graphs/contributors"},"Contributors")],-1),Ce=h("li",null,[h("a",{href:"https://github.com/JonathanDn/vue-companies-israel"},"GitHub")],-1);r();const xe={expose:[],setup:e=>we(((e,t)=>{const a=w("GitHubStars");return i(),c("div",ke,[h("ul",Se,[_e,Ce,h("li",null,[h(a,{packageJson:I(F)},null,8,["packageJson"])])])])})),__scopeId:"data-v-28516b05"};const Te=Symbol(),Ie=()=>document.getElementsByTagName("nav")[0].getBoundingClientRect().height.toFixed(2),Le={setup(){const{y:e}=L(),t=f((()=>e.value>0));return $(Te,{isSticky:t}),{isSticky:t}}},$e=p("data-v-45753434")(((e,t,a,s,n,o)=>(i(),c("nav",{class:["nav",{"is-sticky":s.isSticky,static:!s.isSticky}]},[T(e.$slots,"default",{isSticky:s.isSticky})],2))));Le.render=$e,Le.__scopeId="data-v-45753434";const je=p("data-v-75589fc0");o("data-v-75589fc0");const Ee={class:"button"},Me={class:"icon"};r();const ze={expose:[],props:{icon:String},setup:e=>je(((t,a)=>(i(),c("button",Ee,[h("span",Me,C(e.icon),1),T(t.$slots,"default")])))),__scopeId:"data-v-75589fc0"};const He={},Be=p("data-v-02ead0d7");o("data-v-02ead0d7");const Ae={href:"#",class:"animate__animated animate__fadeInDown"},De=h("svg",{class:"logo",version:"1.1",viewBox:"0 0 261.76 226.69",xmlns:"http://www.w3.org/2000/svg"},[h("defs",null,[h("linearGradient",{id:"Gradient1",x1:"0",x2:"0",y1:"0",y2:"1"},[h("stop",{offset:"0%","stop-color":"#2d805b"}),h("stop",{offset:"80%","stop-color":"#ffffff"})]),h("linearGradient",{id:"Gradient2",x1:"0",x2:"0",y1:"0",y2:"1"},[h("stop",{offset:"0%","stop-color":"#ffffff"}),h("stop",{offset:"120%","stop-color":"#2d805b"})])]),h("g",{transform:"matrix(1.3333 0 0 -1.3333 -76.311 313.34)"},[h("g",{transform:"translate(178.06 235.01)"},[h("path",{fill:"url(#Gradient1)",d:"m0 0-22.669-39.264-22.669 39.264h-75.491l98.16-170.02 98.16 170.02z"})]),h("g",{transform:"translate(178.06 235.01)"},[h("path",{fill:"url(#Gradient2)",d:"m0 0-22.669-39.264-22.669 39.264h-36.227l58.896-102.01 58.896 102.01z"})])])],-1);r();const Oe=Be(((e,t)=>(i(),c("a",Ae,[De]))));He.render=Oe,He.__scopeId="data-v-02ead0d7";const Je=p("data-v-6cebcb0a"),Ne={expose:[],props:{level:{type:String,required:!0},href:{type:String}},setup:e=>Je(((t,a)=>(i(),c(j(`h${e.level}`),{class:"heading"},{default:Je((()=>[e.href?(i(),c("a",{key:0,class:"anchor",href:e.href,"aria-hidden":"true"},"#",8,["href"])):x("",!0),T(t.$slots,"default")])),_:3})))),__scopeId:"data-v-6cebcb0a"};const Re=p("data-v-591f43de"),Ge={expose:[],props:{content:Boolean},setup:e=>Re(((t,a)=>(i(),c("div",{class:["container",{"has-content":e.content}]},[T(t.$slots,"default")],2)))),__scopeId:"data-v-591f43de"};const Ue={setup:(e,t)=>({style:f((()=>({"grid-template-columns":`repeat(${t.slots.default().length}, minmax(0, 1fr))`})))})},Ve=p("data-v-d61bc90e")(((e,t,a,s,n,o)=>(i(),c("div",{class:"button-group",style:s.style},[T(e.$slots,"default")],4))));Ue.render=Ve,Ue.__scopeId="data-v-d61bc90e";const qe=p("data-v-40dabd91");o("data-v-40dabd91");const Pe={class:"header animate__animated animate__fadeIn"},Fe=h("div",{class:"stars"},null,-1),Ye=h("a",{href:"https://vuejs.org/"},"Vue.js",-1),Ke={href:"#get-started"},We=_("Get Started"),Xe={href:"https://github.com/JonathanDn/vue-companies-israel/pulls"},Ze=_("Add Company");r();const Qe={expose:[],setup:e=>qe(((e,t)=>(i(),c("header",Pe,[Fe,h(Ge,{class:"container"},{default:qe((()=>[h(He),h(Ne,{level:"1",style:{color:"var(--color-body)"}},{default:qe((()=>[_(" A curated list of "+C(e.$attrs.companies)+" companies who hire Israelis - that work with ",1),Ye])),_:1},8,["style"]),h(Ue,null,{default:qe((()=>[h("a",Ke,[h(ze,{icon:"🙋🏻‍♀️",onClick:t[1]||(t[1]=t=>e.$emit("get-started"))},{default:qe((()=>[We])),_:1})]),h("a",Xe,[h(ze,{icon:"👨🏻‍🌾"},{default:qe((()=>[Ze])),_:1})])])),_:1})])),_:1})])))),__scopeId:"data-v-40dabd91"},et={expose:[],props:{color:{type:String,default:"#1da1f2"},size:{type:Number,default:32},unit:{type:String,default:"rem"}},setup(e){const t=e,a=f((()=>({width:t.size+t.unit,height:t.size+t.unit})));return(t,s)=>(i(),c("svg",{style:I(a),viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[h("path",{fill:e.color,d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-.139 9.237c.209 4.617-3.234 9.765-9.33 9.765-1.854 0-3.579-.543-5.032-1.475 1.742.205 3.48-.278 4.86-1.359-1.437-.027-2.649-.976-3.066-2.28.515.098 1.021.069 1.482-.056-1.579-.317-2.668-1.739-2.633-3.26.442.246.949.394 1.486.411-1.461-.977-1.875-2.907-1.016-4.383 1.619 1.986 4.038 3.293 6.766 3.43-.479-2.053 1.08-4.03 3.199-4.03.943 0 1.797.398 2.395 1.037.748-.147 1.451-.42 2.086-.796-.246.767-.766 1.41-1.443 1.816.664-.08 1.297-.256 1.885-.517-.439.656-.996 1.234-1.639 1.697z"},null,8,["fill"])],4))}};const tt=p("data-v-ed1c1a4e");o("data-v-ed1c1a4e");const at=h("path",{d:"M19.54 0c1.356 0 2.46 1.104 2.46 2.472v21.528l-2.58-2.28-1.452-1.344-1.536-1.428.636 2.22h-13.608c-1.356 0-2.46-1.104-2.46-2.472v-16.224c0-1.368 1.104-2.472 2.46-2.472h16.08zm-4.632 15.672c2.652-.084 3.672-1.824 3.672-1.824 0-3.864-1.728-6.996-1.728-6.996-1.728-1.296-3.372-1.26-3.372-1.26l-.168.192c2.04.624 2.988 1.524 2.988 1.524-1.248-.684-2.472-1.02-3.612-1.152-.864-.096-1.692-.072-2.424.024l-.204.024c-.42.036-1.44.192-2.724.756-.444.204-.708.348-.708.348s.996-.948 3.156-1.572l-.12-.144s-1.644-.036-3.372 1.26c0 0-1.728 3.132-1.728 6.996 0 0 1.008 1.74 3.66 1.824 0 0 .444-.54.804-.996-1.524-.456-2.1-1.416-2.1-1.416l.336.204.048.036.047.027.014.006.047.027c.3.168.6.3.876.408.492.192 1.08.384 1.764.516.9.168 1.956.228 3.108.012.564-.096 1.14-.264 1.74-.516.42-.156.888-.384 1.38-.708 0 0-.6.984-2.172 1.428.36.456.792.972.792.972zm-5.58-5.604c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332.012-.732-.54-1.332-1.224-1.332zm4.38 0c-.684 0-1.224.6-1.224 1.332 0 .732.552 1.332 1.224 1.332.684 0 1.224-.6 1.224-1.332 0-.732-.54-1.332-1.224-1.332z"},null,-1);r();const st={expose:[],props:{size:{type:Number,default:32}},setup(e){const t=e,a=f((()=>({width:`${t.size+4}rem`})));return tt(((e,t)=>(i(),c("svg",{style:I(a),"fill-rule":"evenodd","clip-rule":"evenodd",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[at],4))))},__scopeId:"data-v-ed1c1a4e"},nt={expose:[],props:{color:{type:String,default:"#4267b2"},size:{type:Number,default:32},unit:{type:String,default:"rem"}},setup(e){const t=e,a=f((()=>({width:t.size+t.unit,height:t.size+t.unit})));return(t,s)=>(i(),c("svg",{style:I(a),viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},[h("path",{fill:e.color,d:"M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-3 7h-1.924c-.615 0-1.076.252-1.076.889v1.111h3l-.238 3h-2.762v8h-3v-8h-2v-3h2v-1.923c0-2.022 1.064-3.077 3.461-3.077h2.539v3z"},null,8,["fill"])],4))}};const ot=p("data-v-534bb102");o("data-v-534bb102");const rt={class:"community"},lt={href:"https://www.facebook.com/groups/1062801280495598"},it={href:"https://twitter.com/vuejsisrael"},ct={href:"https://discord.gg/vue"};r();const ut={expose:[],setup:e=>ot(((e,t)=>(i(),c("div",rt,[h("a",lt,[h(nt,{color:"white"})]),h("a",it,[h(et)]),h("a",ct,[h(st)])])))),__scopeId:"data-v-534bb102"};var dt={name:"ScrollToTopScope",setup(){const e=l(!1),{y:t}=L();return E((()=>t.value),(async()=>e.value=await new Promise((e=>window.requestAnimationFrame((()=>{e(window.innerHeight+t.value>=.667*document.body.scrollHeight)})))))),{isScrollEndRef:e,scrollToTop:()=>window.scrollTo({top:0,behavior:"smooth"})}},render(){var e,t;const{isScrollEndRef:a,scrollToTop:s}=this;return null==(t=(e=this.$slots).default)?void 0:t.call(e,{isScrollEnd:a,scrollToTop:s})}};const ht=p("data-v-75aa715c"),pt={expose:[],setup:e=>ht(((e,t)=>(i(),c(I(dt),null,{default:ht((e=>[h("div",{class:["scroll-to-top",{"is-visible":e.isScrollEnd}],onClick:e.scrollToTop}," ↑ ",10,["onClick"])])),_:1})))),__scopeId:"data-v-75aa715c"};const vt={},ft=p("data-v-49cb73a8");o("data-v-49cb73a8");const mt={class:"error"};r();const gt=ft(((e,t)=>(i(),c("div",mt,[h("small",null,[T(e.$slots,"default")])]))));vt.render=gt,vt.__scopeId="data-v-49cb73a8";const yt=p("data-v-7a635324");o("data-v-7a635324");const bt={class:"contributors"};r();const wt={expose:[],props:{owner:{type:String,required:!0},repository:{type:String,required:!0}},setup(e){const t=e,a=v({value:null}),s=ae((e=>a.value=e.message)),n=v([]);return m((async()=>{const e=await(async()=>{const e=Q("contributors");if(e)return e.value;const{error:a,data:n}=await g.get((o=t.owner,r=t.repository,`https://api.github.com/repos/${o}/${r}/contributors`)).catch(s);var o,r;return a?[]:(Z("contributors",n),n)})().catch(s);n.push(...e.slice(0,10))})),yt(((e,t)=>(i(),c("div",bt,[(i(!0),c(k,null,S(I(n),((e,t)=>(i(),c("img",{key:t,src:e.avatar_url,title:e.login,alt:e.login},null,8,["src","title","alt"])))),128)),I(a).value?(i(),c(vt,{key:0},{default:yt((()=>[_(C(I(a).value?I(a).value:I(a)),1)])),_:1})):x("",!0)]))))},__scopeId:"data-v-7a635324"};const kt=p("data-v-19897e78");o("data-v-19897e78");const St={class:"github-anchor",href:"https://github.com/JonathanDn/vue-companies-israel"},_t=h("path",{"fill-rule":"evenodd","clip-rule":"evenodd",transform:"scale(64)",d:"M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"},null,-1);r();const Ct={expose:[],props:{href:{type:String,required:!0},style:{type:Object,default:()=>({width:"32rem"})}},setup:e=>kt(((t,a)=>(i(),c("a",St,[(i(),c("svg",{style:e.style,viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},[_t],4))])))),__scopeId:"data-v-19897e78"};const xt=p("data-v-2605e9b2");o("data-v-2605e9b2");const Tt=_("Star ");r();const It={expose:[],props:{packageJson:{type:Object,required:!0}},setup:e=>xt(((t,a)=>{var s;return i(),c(I(M),{class:"github-stars","data-show-count":"true","data-icon":"octicon-star",href:null==(s=e.packageJson.repository)?void 0:s.url,"aria-label":`Star ${e.packageJson.author}/${e.packageJson.name} on GitHub`},{default:xt((()=>[Tt])),_:1},8,["href","aria-label"])})),__scopeId:"data-v-2605e9b2"},Lt={expose:[],props:{markdown:{type:String}},setup:e=>(m((()=>{setTimeout(z.highlightAll)})),(t,a)=>(i(),c("div",{class:"markdown",innerHTML:e.markdown},null,8,["innerHTML"])))};const $t={},jt=p("data-v-2137b4a6");o("data-v-2137b4a6");const Et={class:"small"};r();const Mt=jt(((e,t)=>(i(),c("small",Et,[T(e.$slots,"default")]))));$t.render=Mt,$t.__scopeId="data-v-2137b4a6";const zt=p("data-v-5bd2b688");o("data-v-5bd2b688");const Ht={class:"footer"},Bt={class:"fixed"},At=h("a",{href:"https://github.com/adi518/vue-companies-israel-site"}," GitHub ",-1);r();const Dt={expose:[],setup:e=>zt(((e,t)=>(i(),c("footer",Ht,[h("div",Bt,[h($t,null,{default:zt((()=>[_(C(I(F).version),1)])),_:1}),h($t,null,{default:zt((()=>[At])),_:1})])])))),__scopeId:"data-v-5bd2b688"};const Ot={},Jt=p("data-v-e4919030");o("data-v-e4919030");const Nt={class:"social"};r();const Rt=Jt(((e,t)=>(i(),c("div",Nt,[T(e.$slots,"default")]))));Ot.render=Rt,Ot.__scopeId="data-v-e4919030";const Gt={name:"VueToggles",emits:["click"],props:{value:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},reverse:{type:Boolean,default:!1},checkedText:{type:String,default:null},uncheckedText:{type:String,default:null},width:{type:[Number,String],default:75},height:{type:[Number,String],default:25},uncheckedBg:{type:String,default:"#939393"},checkedBg:{type:String,default:"#5850ec"},dotColor:{type:String,default:"#fff"},dotClass:{type:String,default:""},fontSize:{type:[Number,String],default:"12"},checkedColor:{type:String,default:"#fff"},uncheckedColor:{type:String,default:"#fff"},fontWeight:{type:[Number,String],default:"normal"},unit:{type:String,default:"px"}},computed:{bgStyle(){return{width:this.width+this.unit,height:this.height+this.unit,background:this.value&&!this.disabled?this.checkedBg:this.uncheckedBg}},dotStyle(){const e={background:this.dotColor,width:this.height-8+this.unit,height:this.height-8+this.unit,"min-width":this.height-8+this.unit,"min-height":this.height-8+this.unit,"margin-left":this.value?this.width-(this.height-3)+this.unit:"5px"};return(!this.value&&this.reverse||this.value&&!this.reverse)&&(e.marginLeft=this.width-(this.height-3)+this.unit),(this.value&&this.reverse||!this.value&&!this.reverse)&&(e.marginLeft="5px"),e},textStyle(){const e={"font-weight":this.fontWeight,"font-size":this.fontSize+this.unit,color:this.value&&!this.disabled?this.checkedColor:this.uncheckedColor,right:this.value?this.height-3+this.unit:"auto",left:this.value?"auto":this.height-3+this.unit};return!this.value&&this.reverse&&(e.right=this.height-3+this.unit,e.left="auto"),this.value&&this.reverse&&(e.left=this.height-3+this.unit,e.right="auto"),e}}};Gt.render=function(e,t,a,s,n,o){return i(),c("span",{class:"vue-toggles",style:o.bgStyle,role:"switch",tabindex:"0","aria-checked":a.value?"true":"false","aria-readonly":a.disabled?"true":"false",onClick:t[1]||(t[1]=t=>a.disabled?null:e.$emit("click",a.value)),onKeyup:[t[2]||(t[2]=B(A((t=>a.disabled?null:e.$emit("click",a.value)),["prevent"]),["enter"])),t[3]||(t[3]=B(A((t=>a.disabled?null:e.$emit("click",a.value)),["prevent"]),["space"]))]},[h("span",{"aria-hidden":"true",style:o.dotStyle,class:["dot",a.dotClass]},[u(h("span",{style:o.textStyle,class:"text"},C(a.checkedText),5),[[H,a.checkedText&&a.value]]),u(h("span",{style:o.textStyle,class:"text"},C(a.uncheckedText),5),[[H,a.uncheckedText&&!a.value]])],6)],44,["aria-checked","aria-readonly"])};var Ut=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",Nav:Le,Header:Qe,Button:ze,Community:ut,ButtonGroup:Ue,ScrollToTop:pt,Contributors:wt,ScrollToTopScope:dt,GitHubAnchor:Ct,GitHubStars:It,Container:Ge,Markdown:Lt,VueLogo:He,Heading:Ne,Footer:Dt,Social:Ot,Small:$t,Error:vt,Toggle:Gt});const Vt=(e,t,a)=>{if(e.matched.length)return a();a({path:`${t.path}?a=${e.path.substr(1)}`})},qt=(e,{offsetY:t=(async()=>0),offsetMultiplier:a=2,onLoad:s=!1}={})=>{if(qt.Component)return qt.Component;const o=[];if(e&&(o.push(...(e=>ee(e.options.routes).reduce(((e,t)=>n(n({},e),{[t.path]:1})),{}))(e)),e.beforeEach(Vt)),a){const e=t;t=()=>e()*a}const r=new Kt(o,t);return qt.Component={data:()=>({isMounted:!1}),mounted(){this.isMounted=!0,this.scrollToLocalAnchor(),r.add()},beforeUnmount(){this.isMounted=!1,r.remove()},methods:{async scrollToLocalAnchor(){if(!this.isMounted||!s)return;const e=new URLSearchParams(window.location.hash.substr(2)).get("a");e&&(await this.$nextTick(),Pt(e,t))}},render:()=>null},qt.Component};qt.Component=null;const Pt=(e,t=(()=>0))=>new Promise((a=>{window.requestAnimationFrame((()=>{let s;if(e instanceof HTMLAnchorElement){const t=e.getAttribute("href").substr(1);s=document.getElementById(t)?document.getElementById(t):e}else s=document.getElementById(e)||document.querySelector(`[href='#${e}'`);!function(e,t=(()=>{})){const a=function(){window.pageYOffset===Math.floor(e)&&(window.removeEventListener("scroll",a),t())};window.addEventListener("scroll",a),a(),window.scrollTo({top:e,behavior:"smooth"})}(s.getBoundingClientRect().top+window.pageYOffset-t()),a()}))})),Ft=/^#/,Yt=class{constructor(e,t){const a=Yt.createClickHandler(e,t);this.add=()=>document.addEventListener("click",a,!0),this.remove=()=>document.removeEventListener("click",a)}};let Kt=Yt;var Wt,Xt,Zt;Zt=(e,t=(()=>0))=>async a=>{var s;const n=a.target.closest("a")||a.target;if(!(n instanceof HTMLAnchorElement&&Ft.test(n.hash)))return;const o=null==(s=n.hash)?void 0:s.substr(1);e[o]||window.location.host!==n.host||(a.preventDefault(),await Pt(n,t),window.location.hash=`?a=${o}`)},"symbol"!=typeof(Xt="createClickHandler")&&(Xt+=""),Xt in(Wt=Kt)?e(Wt,Xt,{enumerable:!0,configurable:!0,writable:!0,value:Zt}):Wt[Xt]=Zt,Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null});const Qt={install(e){Object.keys(Ut).forEach((t=>e.component(t,Ut[t])))}};const ea=_("What is Vue.js?"),ta=h("p",null,[h("a",{href:"https://vuejs.org/"},"Vue.js"),_(" is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members. "),h("a",{href:"https://en.wikipedia.org/wiki/Vue.js"},"Wikipedia")],-1),aa=_(" * Table does NOT contain freelancers, consultancies, software contractors or open source projects working with "),sa=h("a",{href:"https://vuejs.org/"},"Vue.js",-1),na=_(". "),oa=_("Explore Resources"),ra={href:"https://madewithvuejs.com/"},la={href:"https://github.com/vuejs/awesome-vue"},ia={href:"https://www.vuemastery.com/"},ca={href:"https://daily.dev/"},ua={href:"https://www.udemy.com/course/vuejs-2-the-complete-guide/"},da={href:"https://www.vuemastery.com/pdf/Vue-3-Cheat-Sheet.pdf"},ha=_("Made by"),pa=_("Contributing"),va=h("p",null,[_(" If your company is currently working with "),h("a",{href:"https://vuejs.org/"},"Vue.js"),_(", open a "),h("a",{href:"https://github.com/JonathanDn/vue-companies-israel/pulls"}," pull request"),_(" to add it to the table above. If it's also currently recruiting, make sure to check the "),h("b",null,"Recruiting"),_(" column. ")],-1),fa=_("Community"),ma=_("Links"),ga=q({expose:[],setup(e){D.use([O,J,N,R]);const t=qt(null,{offsetY:Ie}),a=l(null),s=l(!0);v({value:[]});const n={0:{slidesPerView:3},991.98:{slidesPerView:6}},o=({length:e})=>a.value=e;return m((async()=>{})),(e,r)=>{const l=w("Toggle"),u=w("GitHubAnchor"),d=w("Social"),p=w("Nav"),v=w("Header"),f=w("Heading"),m=w("Container"),g=w("Small"),y=w("Contributors"),b=w("Community"),S=w("Footer"),_=w("ScrollToTop");return i(),c(k,null,[h(p,null,{default:G((e=>[h(l,{disabled:"",unit:"rem",width:"50",height:"25",fontSize:"14",checkedText:"🌜",uncheckedText:"🌞",dotClass:"toggle-dot",dotColor:"currentColor",checkedBg:"var(--color-secondary2)",uncheckedBg:"var(--color-secondary2)",value:s.value,onClick:r[1]||(r[1]=e=>s.value=!s.value)},null,8,["value"]),h(d,null,{default:G((()=>[h(u,{class:{"is-sticky":e.isSticky},href:"https://github.com/JonathanDn/vue-companies-israel"},null,8,["class"])])),_:2},1024)])),_:1}),h(v,{companies:a.value},null,8,["companies"]),h(m,{content:""},{default:G((()=>[h(f,{level:"3",href:"#what-is-vuejs"},{default:G((()=>[ea])),_:1}),ta])),_:1}),h(m,{content:"",id:"get-started"},{default:G((()=>[h(re,{onReady:o}),h("p",null,[h(g,null,{default:G((()=>[aa,sa,na])),_:1})])])),_:1}),h(m,{content:""},{default:G((()=>[h(f,{level:"3",href:"#explore-resources"},{default:G((()=>[oa])),_:1}),h(I(U),{"space-between":16,breakpoints:n},{default:G((()=>[h(I(V),null,{default:G((()=>[h("a",ra,[h(be,{src:"resources/made-with-vuejs.png"})])])),_:1}),h(I(V),null,{default:G((()=>[h("a",la,[h(be,{src:"resources/awesome-vue.svg"})])])),_:1}),h(I(V),null,{default:G((()=>[h("a",ia,[h(be,{src:"resources/vue-mastery.svg"})])])),_:1}),h(I(V),null,{default:G((()=>[h("a",ca,[h(be,{src:"resources/daily-dev.svg"})])])),_:1}),h(I(V),null,{default:G((()=>[h("a",ua,[h(be,{src:"resources/udemy.svg"})])])),_:1}),h(I(V),null,{default:G((()=>[h("a",da,[h(be,{cover:"",src:"resources/vue-composition-api-cheatsheet.png"})])])),_:1})])),_:1}),h(f,{level:"3",href:"#made-by"},{default:G((()=>[ha])),_:1}),h(y,{owner:"JonathanDn",repository:"vue-companies-israel"}),h(f,{level:"3",href:"#contributing"},{default:G((()=>[pa])),_:1}),va,h(f,{level:"3",href:"#links"},{default:G((()=>[fa])),_:1}),h(b),h(f,{level:"3",href:"#links"},{default:G((()=>[ma])),_:1}),h(xe)])),_:1}),h(S),h(_),h(I(t))],64)}}});ga.use(Qt),ga.use(P,{config:{id:"G-BKK301VXEG"}}),ga.mount("#app");