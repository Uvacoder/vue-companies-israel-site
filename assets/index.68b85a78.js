var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,a=Object.getOwnPropertySymbols,n=Object.prototype.propertyIsEnumerable,s=Object.assign;import{p as o,a as r,r as l,b as i,w as c,o as d,m as u,c as h,d as p,e as f,f as m,F as v,g,h as y,i as w,j as b,t as k,k as C,l as S,n as x,v as _,q as T,s as E,u as I,G as j,x as L,y as $,z as M,A,B}from"./vendor.e347561a.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const n=new URL(e,location),s=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,o)=>{const r=new URL(e,n);if(self[t].moduleMap[r])return a(self[t].moduleMap[r]);const l=new Blob([`import * as m from '${r}';`,`${t}.moduleMap['${r}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(l),onerror(){o(new Error(`Failed to import: ${e}`)),s(i)},onload(){a(self[t].moduleMap[r]),s(i)}});document.head.appendChild(i)})),self[t].moduleMap={}}}("assets/");var R={name:"@vue-companies-israel-site/site",version:"0.0.0",license:"MIT",repository:{url:"https://github.com/JonathanDn/vue-companies-israel"},scripts:{dev:"vite",build:"vite build",serve:"vite preview",prerelease2:"yarn && yarn version --patch --no-git-tag-version && yarn build",prerelease:"yarn build",release:"node ./scripts/gh-pages",postrelease2:"node ./scripts/post-release"},dependencies:{"animate.css":"^4.1.1",marked:"^2.0.1","prism-themes":"^1.5.0",prismjs:"^1.23.0",vue:"^3.0.5","vue-github-button":"^3.0.0","vue-toggles":"^1.1.0","vue-use-web":"^1.0.1"},devDependencies:{"@vitejs/plugin-vue":"^1.1.4","@vue/compiler-sfc":"^3.0.5","gh-pages":"^3.1.0",sass:"^1.32.8",vite:"^2.0.1","vite-plugin-markdown":"^2.0.0"}};function O(e){const t=[];return Array.from(e.rows).reduce(((a,n)=>{const o=[];return Array.from(n.children).map(H).forEach(((r,l)=>{"th"===r.tagName.toLowerCase()?(a.thead.push(r),l===J(e).length-1&&t.push(...function(e){return J(e).map((e=>H(e).innerText))}(e))):0===e.tHead.rows.length?a.tbody.push(r):(o.push(r),o.length===n.children.length&&(a.tbody.push(function(e,t){return e.reduce(((e,a,n)=>s(s({},e),{[a]:t[n]})),{})}(t,o)),o.length=0))})),a}),{thead:[],tbody:[]})}function J(e){return Array.from(e.tHead.rows[0].children)}function H(e){const{tagName:t,innerText:a,innerHTML:n}=e,s=a.trim();return{tagName:t.toLowerCase(),innerHTML:n,innerText:s,innerTextLowerCase:s.toLowerCase()}}function D(e){return`${R.name}-${e}`}function N(e,o=0,r={}){if(Array.isArray(e))return e.reduce(((e,l)=>{const{name:i,path:c,children:d}=l,u=((e,s)=>{var o={};for(var r in e)t.call(e,r)&&s.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&a)for(var r of a(e))s.indexOf(r)<0&&n.call(e,r)&&(o[r]=e[r]);return o})(l,["name","path","children"]),h=0===o,p=!h;return e.push(s(s({},u),{name:i,path:c,level:o,isRoot:h,nested:p,parent:s(s({},r),{name:h?void 0:r.name})})),Array.isArray(d)&&d.length&&(e=e.concat(N(d,o+1,l))),e}),[])}const q={props:{keyword:{type:String}},emits:["ready"],setup(e,{emit:t}){const a=l(null),n=l(null),s=i({head:[],rows:[],index:[],sortColumn:null,ascending:!1}),o=()=>new Promise((async e=>{const t=function(e){const t=D(e),a=localStorage.getItem(t);if(!a)return null;const n=JSON.parse(a);return(new Date).getTime()>n.expiry?(localStorage.removeItem(t),null):n.value}("table");if(t)e(t);else{const t=await async function(...e){try{const a=await window.fetch(...e),n=(t=a.body.getReader(),{start:e=>async function a(){const{done:n,value:s}=await t.read();if(!n)return e.enqueue(s),a();e.close()}()}),s=new ReadableStream(n),o=await new Response(s).blob();return await o.text()}catch(a){console.error(a)}var t}("https://raw.githubusercontent.com/JonathanDn/vue-companies-israel/main/README.md"),a=u(t),n=O((await r(a)).querySelector("table"));!function(e,t,a=864e5){const n=D(e),s={value:t,expiry:(new Date).getTime()+a};localStorage.setItem(n,JSON.stringify(s))}("table",n),e(n)}})),r=e=>new Promise((t=>{const a=document.createElement("template");a.innerHTML=e,window.requestAnimationFrame((()=>t(a.content)))})),p=(e,{ascending:t=!0}={})=>{s.sortColumn===e?s.ascending=!s.ascending:(s.ascending=t,s.sortColumn=e),s.rows=s.rows.sort(f(s.ascending,(t=>t[e].innerText)))},f=(e=!0,t=(e=>e))=>(a,n)=>{const s=t(a),o=t(n);return s>o?e?1:-1:s<o?e?-1:1:0};c((()=>e.keyword),(e=>s.rows=(e=>{const t=new Set;return s.index.forEach((([a,n])=>{a.match(new RegExp(e))&&t.add(n)})),Array.from(t)})(e))),d((async()=>{const e=await o();var a,n;s.index=(e=>e.map((e=>Object.entries(e).map((([,t])=>[t.innerTextLowerCase,e])))).flat())(e.tbody),s.head=e.thead,s.rows=e.tbody,a=1,n={ascending:!1},p(s.head[a].innerText,n),t("ready",{length:s.rows.length})}));const m=h((()=>({width:100/s.head.length+"%"})));return{root:a,state:s,getRef:()=>a.value,tdStyle:m,sortTable:p,scrollContainer:n}}},G=w("data-v-d713872e");o("data-v-d713872e");const P={ref:"root",class:"table"},U={class:"scroll-container"},V={key:0},z={key:0,class:"no-results"};r();const F=G(((e,t,a,n,s,o)=>(p(),f("div",P,[m("div",U,[m("table",null,[m("thead",null,[m("tr",null,[(p(!0),f(v,null,g(n.state.head,((e,t)=>(p(),f("th",{key:t,style:n.tdStyle,onClick:t=>n.sortTable(e.innerText)},[b(k(e.innerText)+" ",1),e.innerText===n.state.sortColumn?(p(),f("span",V,k(n.state.ascending?"↑":"↓"),1)):y("",!0)],12,["onClick"])))),128))])]),m("tbody",null,[(p(!0),f(v,null,g(n.state.rows,((e,t)=>(p(),f("tr",{key:t},[(p(!0),f(v,null,g(e,((e,t)=>(p(),f("td",{innerHTML:e.innerHTML,style:n.tdStyle,key:t},null,12,["innerHTML"])))),128))])))),128)),a.keyword&&0===n.state.rows.length?(p(),f("tr",z,[m("td",{colspan:n.state.head.length},"Nope, can't find that. 😪",8,["colspan"])])):y("",!0)])])])],512))));q.render=F,q.__scopeId="data-v-d713872e";const Y=w("data-v-04189e2a");o("data-v-04189e2a");const W={class:"button"},K={class:"icon"};r();const Z={expose:[],props:{icon:String},setup:e=>Y(((t,a)=>(p(),f("button",W,[m("span",K,k(e.icon),1),C(t.$slots,"default")])))),__scopeId:"data-v-04189e2a"};const Q={},X=w("data-v-1add144c");o("data-v-1add144c");const ee={href:"#",class:"animate__animated animate__fadeInDown"},te=m("svg",{class:"logo",version:"1.1",viewBox:"0 0 261.76 226.69",xmlns:"http://www.w3.org/2000/svg"},[m("defs",null,[m("linearGradient",{id:"Gradient1",x1:"0",x2:"0",y1:"0",y2:"1"},[m("stop",{offset:"0%","stop-color":"#2d805b"}),m("stop",{offset:"80%","stop-color":"#ffffff"})]),m("linearGradient",{id:"Gradient2",x1:"0",x2:"0",y1:"0",y2:"1"},[m("stop",{offset:"0%","stop-color":"#ffffff"}),m("stop",{offset:"120%","stop-color":"#2d805b"})])]),m("g",{transform:"matrix(1.3333 0 0 -1.3333 -76.311 313.34)"},[m("g",{transform:"translate(178.06 235.01)"},[m("path",{fill:"url(#Gradient1)",d:"m0 0-22.669-39.264-22.669 39.264h-75.491l98.16-170.02 98.16 170.02z"})]),m("g",{transform:"translate(178.06 235.01)"},[m("path",{fill:"url(#Gradient2)",d:"m0 0-22.669-39.264-22.669 39.264h-36.227l58.896-102.01 58.896 102.01z"})])])],-1);r();const ae=X(((e,t)=>(p(),f("a",ee,[te]))));Q.render=ae,Q.__scopeId="data-v-1add144c";const ne=w("data-v-0d2d9a4c"),se={expose:[],props:{level:{type:String,required:!0},href:{type:String}},setup:e=>ne(((t,a)=>(p(),f(S(`h${e.level}`),{class:"heading"},{default:ne((()=>[e.href?(p(),f("a",{key:0,href:e.href,"aria-hidden":"true"},"#",8,["href"])):y("",!0),C(t.$slots,"default")])),_:3})))),__scopeId:"data-v-0d2d9a4c"};const oe=w("data-v-f597c568"),re={expose:[],props:{content:Boolean},setup:e=>oe(((t,a)=>(p(),f("div",{class:["container",{"has-content":e.content}]},[C(t.$slots,"default")],2)))),__scopeId:"data-v-f597c568"};const le={setup:(e,t)=>({style:h((()=>({"grid-template-columns":`repeat(${t.slots.default().length}, minmax(0, 1fr))`})))})},ie=w("data-v-10d9f9e4")(((e,t,a,n,s,o)=>(p(),f("div",{class:"button-group",style:n.style},[C(e.$slots,"default")],4))));le.render=ie,le.__scopeId="data-v-10d9f9e4";const ce=w("data-v-3b0599f8");o("data-v-3b0599f8");const de={class:"header animate__animated animate__fadeIn"},ue=m("div",{class:"stars"},null,-1),he=m("a",{href:"https://vuejs.org/"},"Vue.js",-1),pe={href:"#get-started"},fe=b("Get Started"),me={href:"https://github.com/JonathanDn/vue-companies-israel/pulls"},ve=b("Add Company");r();const ge={expose:[],setup:e=>ce(((e,t)=>(p(),f("header",de,[ue,m(re,{class:"container"},{default:ce((()=>[m(Q),m(se,{level:"1"},{default:ce((()=>[b(" A curated list of "+k(e.$attrs.companies)+" companies who hire Israelis - that work with ",1),he])),_:1}),m(le,null,{default:ce((()=>[m("a",pe,[m(Z,{icon:"🙋🏻‍♀️",onClick:t[1]||(t[1]=t=>e.$emit("get-started"))},{default:ce((()=>[fe])),_:1})]),m("a",me,[m(Z,{icon:"👨🏻‍🌾"},{default:ce((()=>[ve])),_:1})])])),_:1})])),_:1})])))),__scopeId:"data-v-3b0599f8"};const ye={},we=w("data-v-0f8d055a");o("data-v-0f8d055a");const be={class:"social"};r();const ke=we(((e,t)=>(p(),f("div",be,[C(e.$slots,"default")]))));ye.render=ke,ye.__scopeId="data-v-0f8d055a";const Ce={name:"VueToggles",props:{value:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},reverse:{type:Boolean,default:!1},checkedText:{type:String,default:null},uncheckedText:{type:String,default:null},width:{type:[Number,String],default:75},height:{type:[Number,String],default:25},uncheckedBg:{type:String,default:"#939393"},checkedBg:{type:String,default:"#5850ec"},dotColor:{type:String,default:"#fff"},dotClass:{type:String,default:""},fontSize:{type:[Number,String],default:"12"},checkedColor:{type:String,default:"#fff"},uncheckedColor:{type:String,default:"#fff"},fontWeight:{type:[Number,String],default:"normal"},unit:{type:String,default:"px"}},emits:["click"],computed:{bgStyle(){return{width:this.width+this.unit,height:this.height+this.unit,background:this.value&&!this.disabled?this.checkedBg:this.uncheckedBg}},dotStyle(){const e={background:this.dotColor,width:this.height-8+this.unit,height:this.height-8+this.unit,"min-width":this.height-8+this.unit,"min-height":this.height-8+this.unit,"margin-left":this.value?this.width-(this.height-3)+this.unit:"5px"};return(!this.value&&this.reverse||this.value&&!this.reverse)&&(e.marginLeft=this.width-(this.height-3)+this.unit),(this.value&&this.reverse||!this.value&&!this.reverse)&&(e.marginLeft="5px"),e},textStyle(){const e={"font-weight":this.fontWeight,"font-size":this.fontSize+this.unit,color:this.value&&!this.disabled?this.checkedColor:this.uncheckedColor,right:this.value?this.height-3+this.unit:"auto",left:this.value?"auto":this.height-3+this.unit};return!this.value&&this.reverse&&(e.right=this.height-3+this.unit,e.left="auto"),this.value&&this.reverse&&(e.left=this.height-3+this.unit,e.right="auto"),e}}};Ce.render=function(e,t,a,n,s,o){return p(),f("span",{class:"vue-toggles",style:o.bgStyle,role:"switch",tabindex:"0","aria-checked":a.value?"true":"false","aria-readonly":a.disabled?"true":"false",onClick:t[1]||(t[1]=t=>a.disabled?null:e.$emit("click",a.value)),onKeyup:[t[2]||(t[2]=T(E((t=>a.disabled?null:e.$emit("click",a.value)),["prevent"]),["enter"])),t[3]||(t[3]=T(E((t=>a.disabled?null:e.$emit("click",a.value)),["prevent"]),["space"]))]},[m("span",{"aria-hidden":"true",style:o.dotStyle,class:["dot",a.dotClass]},[x(m("span",{style:o.textStyle,class:"text"},k(a.checkedText),5),[[_,a.checkedText&&a.value]]),x(m("span",{style:o.textStyle,class:"text"},k(a.uncheckedText),5),[[_,a.uncheckedText&&!a.value]])],6)],44,["aria-checked","aria-readonly"])};const Se=w("data-v-17bfbb52");o("data-v-17bfbb52");const xe=b("Star ");r();const _e={expose:[],props:{packageJson:{type:Object,required:!0}},setup:e=>Se(((t,a)=>{var n;return p(),f(I(j),{class:"github-stars","data-show-count":"true","data-icon":"octicon-star",href:null==(n=e.packageJson.repository)?void 0:n.url,"aria-label":`Star ${e.packageJson.author}/${e.packageJson.name} on GitHub`},{default:Se((()=>[xe])),_:1},8,["href","aria-label"])})),__scopeId:"data-v-17bfbb52"};const Te=w("data-v-12a8c456");o("data-v-12a8c456");const Ee={class:"footer"},Ie=m("div",null,[b(" Made with 💜 by "),m("a",{href:"https://www.facebook.com/groups/1062801280495598"},"Vue.js Israel")],-1),je=m("li",null,[m("a",{href:"https://github.com/JonathanDn"},"About")],-1),Le=m("li",null,[m("a",{href:"https://github.com/JonathanDn/vue-companies-israel/graphs/contributors"},"Contributors")],-1),$e=m("li",null,[m("a",{href:"https://github.com/JonathanDn/vue-companies-israel"},"GitHub")],-1),Me={class:"version"};r();const Ae={expose:[],setup:e=>Te(((e,t)=>(p(),f("footer",Ee,[m(re,{class:"container"},{default:Te((()=>[Ie,m("ul",null,[je,Le,$e,m("li",null,[m(_e,{packageJson:I(R)},null,8,["packageJson"])])]),m("small",Me,k(I(R).version),1)])),_:1})])))),__scopeId:"data-v-12a8c456"};const Be=w("data-v-3e7294bd");o("data-v-3e7294bd");const Re={class:"search"};r();const Oe={expose:[],setup(e){const t=l("");return Be(((e,a)=>(p(),f("div",Re,[x(m("input",{type:"text","onUpdate:modelValue":a[1]||(a[1]=e=>t.value=e),placeholder:"Search... 🔎",onInput:a[2]||(a[2]=a=>e.$emit("change",t.value))},null,544),[[L,t.value]])]))))},__scopeId:"data-v-3e7294bd"};var Je={name:"ScrollToTopScope",setup(){const e=l(!1),{y:t}=$();return c((()=>t.value),(async()=>e.value=await new Promise((e=>window.requestAnimationFrame((()=>{e(window.innerHeight+t.value>=.667*document.body.scrollHeight)})))))),{isScrollEndRef:e,scrollToTop:()=>window.scrollTo({top:0,behavior:"smooth"})}},render(){var e,t;const{isScrollEndRef:a,scrollToTop:n}=this;return null==(t=(e=this.$slots).default)?void 0:t.call(e,{isScrollEnd:a,scrollToTop:n})}};const He=w("data-v-47393928"),De={expose:[],setup:e=>He(((e,t)=>(p(),f(I(Je),null,{default:He((e=>[m("div",{class:["scroll-to-top",{"is-visible":e.isScrollEnd}],onClick:e.scrollToTop}," ↑ ",10,["onClick"])])),_:1})))),__scopeId:"data-v-47393928"};const Ne={},qe=w("data-v-1df0a795");o("data-v-1df0a795");const Ge={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg",style:{width:"32rem"}},Pe=m("path",{"fill-rule":"evenodd","clip-rule":"evenodd",transform:"scale(64)",d:"M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"},null,-1);r();const Ue=qe(((e,t)=>(p(),f("svg",Ge,[Pe]))));Ne.render=Ue,Ne.__scopeId="data-v-1df0a795";const Ve=Symbol(),ze=()=>document.getElementsByTagName("nav")[0].getBoundingClientRect().height.toFixed(2),Fe={setup(){const{y:e}=$(),t=h((()=>e.value>0));return M(Ve,{isSticky:t}),{isSticky:t}}},Ye=w("data-v-ba8d7510")(((e,t,a,n,s,o)=>(p(),f("nav",{class:["nav",{"is-sticky":n.isSticky,static:!n.isSticky}]},[C(e.$slots,"default",{isSticky:n.isSticky})],2))));Fe.render=Ye,Fe.__scopeId="data-v-ba8d7510";const We=(e,t,a)=>{if(e.matched.length)return a();a({path:`${t.path}?a=${e.path.substr(1)}`})},Ke=(e,{offsetY:t=(async()=>0),offsetMultiplier:a=2}={})=>{if(Ke.Component)return Ke.Component;const n=[];if(e&&(n.concat((e=>N(e.options.routes).reduce(((e,t)=>s(s({},e),{[t.path]:1})),{}))(e)),e.beforeEach(We)),a){const e=t;t=()=>e()*a}const o=new Xe(n,t);return Ke.Component={data:()=>({isMounted:!1}),mounted(){this.isMounted=!0,this.scrollToLocalAnchor(),o.add()},beforeUnmount(){this.isMounted=!1,o.remove()},methods:{async scrollToLocalAnchor(){if(!this.isMounted)return;const e=new URLSearchParams(window.location.hash.substr(2)).get("a");e&&(await this.$nextTick(),Ze(e,t))}},render:()=>null},Ke.Component};Ke.Component=null;const Ze=(e,t=(()=>0))=>new Promise((a=>{window.requestAnimationFrame((()=>{let n;if(e instanceof HTMLAnchorElement){const t=e.getAttribute("href").substr(1);n=document.getElementById(t)?document.getElementById(t):e}else n=document.getElementById(e)||document.querySelector(`[href='#${e}'`);!function(e,t=(()=>{})){const a=function(){window.pageYOffset===Math.floor(e)&&(window.removeEventListener("scroll",a),t())};window.addEventListener("scroll",a),a(),window.scrollTo({top:e,behavior:"smooth"})}(n.getBoundingClientRect().top+window.pageYOffset-t()),a()}))})),Qe=class{constructor(e,t){const a=Qe.createClickHandler(e,t);this.add=()=>document.addEventListener("click",a,!0),this.remove=()=>document.removeEventListener("click",a)}};let Xe=Qe;var et,tt,at;at=(e,t=(()=>0))=>async a=>{var n;const s=a.target.closest("a")||a.target;if(!(s instanceof HTMLAnchorElement&&/^#/.test(s.hash)))return;const o=null==(n=s.hash)?void 0:n.substr(1);e[o]||window.location.host!==s.host||(a.preventDefault(),await Ze(s,t),window.location.hash=`?a=${o}`)},"symbol"!=typeof(tt="createClickHandler")&&(tt+=""),tt in(et=Xe)?e(et,tt,{enumerable:!0,configurable:!0,writable:!0,value:at}):et[tt]=at,Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector),Element.prototype.closest||(Element.prototype.closest=function(e){var t=this;do{if(t.matches(e))return t;t=t.parentElement||t.parentNode}while(null!==t&&1===t.nodeType);return null});const nt={class:"github-anchor",href:"https://github.com/JonathanDn/vue-companies-israel"},st=b("What is Vue.js?"),ot=m("p",null,[m("a",{href:"https://vuejs.org/"},"Vue.js"),b(" is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members. "),m("a",{href:"https://en.wikipedia.org/wiki/Vue.js"},"Wikipedia")],-1),rt=m("p",null,[m("small",{class:"opacity-50"},[b(" * Table does NOT contain freelancers, consultancies, software contractors or open source projects working with "),m("a",{href:"https://vuejs.org/"},"Vue.js"),b(". ")])],-1),lt=b("Contributing"),it=m("p",null,[b(" If your company is currently working with "),m("a",{href:"https://vuejs.org/"},"Vue.js"),b(", open a "),m("a",{href:"https://github.com/JonathanDn/vue-companies-israel/pulls"},"pull request"),b(" to add it to the table above. If it's also currently recruiting, make sure to check the "),m("b",null,"Recruiting"),b(" column. ")],-1);B({expose:[],setup(e){const t=Ke(null,{offsetY:ze}),a=l(""),n=l(null),s=l(null),o=l(!0),r=e=>a.value=e.target.value,i=({length:e})=>s.value=e;return(e,l)=>(p(),f(v,null,[m(Fe,null,{default:A((()=>[m(Ce,{disabled:"",unit:"rem",width:"50",height:"25",fontSize:"14",checkedText:"🌜",uncheckedText:"🌞",dotClass:"toggle-dot",dotColor:"currentColor",checkedBg:"var(--color-secondary2)",uncheckedBg:"var(--color-secondary2)",value:o.value,onClick:l[1]||(l[1]=e=>o.value=!o.value)},null,8,["value"]),m(ye,null,{default:A((()=>[m("a",nt,[m(Ne)])])),_:1})])),_:1}),m(ge,{companies:s.value},null,8,["companies"]),m(re,{content:""},{default:A((()=>[m(se,{level:"3",href:"#what-is-vuejs"},{default:A((()=>[st])),_:1}),ot])),_:1}),m(re,{content:"",id:"get-started"},{default:A((()=>[m(Oe,{onInput:r}),m(q,{ref:n,keyword:a.value,onReady:i},null,8,["keyword"]),rt])),_:1}),m(re,{content:""},{default:A((()=>[m(se,{level:"3",href:"#contributing"},{default:A((()=>[lt])),_:1}),it])),_:1}),m(Ae),m(De),m(I(t))],64))}}).mount("#app");