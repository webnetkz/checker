(function(){"use strict";var e={1100:function(e,t,n){var a=n(5130),o=n(3367),r=n(6768);function s(e,t,n,a,o,s){const c=(0,r.g2)("HeaderComponent"),i=(0,r.g2)("Intro"),u=(0,r.g2)("Comments"),l=(0,r.g2)("CreateComment");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.bF)(c),(0,r.bF)(i),(0,r.bF)(u),(0,r.bF)(l)],64)}function c(e,t,n,a,o,s){const c=(0,r.g2)("SearchInput"),i=(0,r.g2)("SearchResults");return(0,r.uX)(),(0,r.CE)("header",null,[(0,r.bF)(c),(0,r.bF)(i)])}const i={id:"searchContainer"};function u(e,t,n,a,o,s){const c=(0,r.gN)("mode");return(0,r.uX)(),(0,r.CE)("div",i,[(0,r.bo)((0,r.Lk)("input",{type:"text",onInput:t[0]||(t[0]=(...e)=>a.changeSearchInput&&a.changeSearchInput(...e)),id:"search",placeholder:"Phone",autocomplete:"off"},null,544),[[c,e.searchValue]]),a.isCreate?((0,r.uX)(),(0,r.CE)("button",{key:0,onClick:t[1]||(t[1]=e=>{a.createTable()}),class:"create-table"},"Create")):(0,r.Q3)("",!0)])}var l=n(144);const m=(0,o.nY)({id:"store",state:()=>({searchInput:(0,l.KR)("Empty"),commentsCount:(0,l.KR)(0),likes:(0,l.KR)(0),dislikes:(0,l.KR)(0),isCreate:(0,l.KR)(!1),comments:(0,l.KR)([]),newComment:"",url:"https://checker.fantamas.com/api"}),actions:{changeSearchInput(e){this.searchInput=e.target.value.trim(),""!==this.searchInput?fetch(this.url,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"search_phone",phone:this.searchInput})}).then((e=>e.json())).then((e=>{e?.data?.table?(this.isCreate=!0,this.comments=[]):this.isCreate=!1,console.log(e.data.data),this.comments=e.data.data.comments,this.commentsCount=e.data.data.table.data_of_phone[0].comments,this.likes=e.data.data.table.data_of_phone[0].likes,this.dislikes=e.data.data.table.data_of_phone[0].dislikes})).catch((e=>{console.log("Произошла ошибка:",e)})):console.log("Empty input")},createComment(e){let t=0;this.commentsCount+=1,"like-btn"==e.target.getAttribute("class")?(t=1,this.likes+=1):this.dislikes+=1,this.newComment=e.target.parentNode.previousSibling.value,e.target.parentNode.previousSibling.value="",fetch(this.url,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"create_comment",phone:this.searchInput,comment:this.newComment,rate:t})}).then((e=>(this.comments.unshift({comment:this.newComment,rate:t,create_date:this.formattedDateTime()}),e.json()))).catch((e=>{console.log("Произошла ошибка:",e)}))},createTable(){this.isCreate=!1,fetch(this.url,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({action:"search_phone",phone:this.searchInput})}).then((e=>e.json())).catch((e=>{console.log("Произошла ошибка:",e)}))},formattedDateTime(){let e=new Date;const t=e.getFullYear(),n=String(e.getMonth()+1).padStart(2,"0"),a=String(e.getDate()).padStart(2,"0"),o=String(e.getHours()).padStart(2,"0"),r=String(e.getMinutes()).padStart(2,"0"),s=String(e.getSeconds()).padStart(2,"0");return`${t}-${n}-${a} ${o}:${r}:${s}`}}});var h={name:"SearchInput",setup(){const e=m(),t=(0,r.EW)((()=>e.searchInput)),n=(0,r.EW)((()=>e.isCreate)),a=t=>{""!==t.target.value.trim()&&t.target.value.length>1?e.changeSearchInput(t):e.isCreate=!1};return{searchInput:t,isCreate:n,changeSearchInput:a,createTable:e.createTable}}},d=n(1241);const p=(0,d.A)(h,[["render",u],["__scopeId","data-v-2eb86e37"]]);var C=p,v=n(4232);const f={id:"searchResults"},g={class:"result-comments"},b={class:"result-likes"},k={class:"result-dislikes"};function I(e,t,n,a,o,s){return(0,r.uX)(),(0,r.CE)("div",f,[(0,r.Lk)("b",null,(0,v.v_)(this.searchValue),1),(0,r.Lk)("span",g,(0,v.v_)(this.commentsCount),1),(0,r.Lk)("span",b,"↑ "+(0,v.v_)(this.likes),1),(0,r.Lk)("span",k,"↓ "+(0,v.v_)(this.dislikes),1)])}var _={name:"SearchResults",setup(){const e=m(),t=(0,r.EW)((()=>e.searchInput)),n=(0,r.EW)((()=>e.commentsCount)),a=(0,r.EW)((()=>e.likes)),o=(0,r.EW)((()=>e.dislikes));return{searchValue:t,commentsCount:n,likes:a,dislikes:o}}};const S=(0,d.A)(_,[["render",I],["__scopeId","data-v-3d570aa0"]]);var y=S,E={name:"HeaderComponent",setup(){return{}},components:{SearchInput:C,SearchResults:y}};const O=(0,d.A)(E,[["render",c],["__scopeId","data-v-d7221cbc"]]);var w=O;const j=e=>((0,r.Qi)("data-v-9e6d1a4e"),e=e(),(0,r.jt)(),e),T={id:"intro"},L=j((()=>(0,r.Lk)("h1",null,"Absolutely anonymous reviews",-1))),A=j((()=>(0,r.Lk)("p",null,"service for collecting anonymous statistics and conducting surveys",-1))),F=[L,A];function R(e,t,n,a,o,s){return(0,r.uX)(),(0,r.CE)("div",T,F)}var W={name:"IntroComponent",setup(){return{}}};const X=(0,d.A)(W,[["render",R],["__scopeId","data-v-9e6d1a4e"]]);var K=X;const x={id:"commentsContainer"};function N(e,t,n,a,o,s){const c=(0,r.g2)("Comment");return(0,r.uX)(),(0,r.CE)("div",x,[(0,r.bF)(c)])}const P={class:"comment-date"};function $(e,t,n,a,o,s){return(0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(a.comments,(e=>((0,r.uX)(),(0,r.CE)("div",{class:(0,v.C4)(["comment-container",{"comment-dislike":!e.rate,"comment-like":1==e.rate}]),key:e.id},[(0,r.Lk)("p",null,(0,v.v_)(e.comment),1),(0,r.Lk)("span",P,(0,v.v_)(e.create_date),1)],2)))),128)}var D={name:"CommentComponent",setup(){const e=m(),t=(0,r.EW)((()=>e.comments));return{comments:t}}};const H=(0,d.A)(D,[["render",$],["__scopeId","data-v-7aa99386"]]);var Q=H,J={name:"CommentsComponent",components:{Comment:Q}};const M=(0,d.A)(J,[["render",N],["__scopeId","data-v-5407d58e"]]);var V=M;const Y=e=>((0,r.Qi)("data-v-0429bcce"),e=e(),(0,r.jt)(),e),q={key:0,id:"createCommentContainer"},z=Y((()=>(0,r.Lk)("textarea",{id:"comment",placeholder:"Your comment"},null,-1))),B={class:"likes-container"};function G(e,t,n,a,o,s){return!a.isCreate&&"Empty"!=a.searchInput&&a.searchInput.length>1?((0,r.uX)(),(0,r.CE)("div",q,[z,(0,r.Lk)("div",B,[(0,r.Lk)("span",{class:"like-btn",onClick:t[0]||(t[0]=(...e)=>a.createComment&&a.createComment(...e))}),(0,r.Lk)("span",{class:"dislike-btn",onClick:t[1]||(t[1]=(...e)=>a.createComment&&a.createComment(...e))})])])):(0,r.Q3)("",!0)}var U={name:"CreateComment",setup(){const e=m(),t=(0,r.EW)((()=>e.newComment)),n=(0,r.EW)((()=>e.isCreate)),a=(0,r.EW)((()=>e.searchInput)),o=t=>{e.createComment(t)};return{newComment:t,isCreate:n,searchInput:a,createComment:o}}};const Z=(0,d.A)(U,[["render",G],["__scopeId","data-v-0429bcce"]]);var ee=Z,te={name:"App",components:{HeaderComponent:w,Intro:K,Comments:V,CreateComment:ee}};const ne=(0,d.A)(te,[["render",s]]);var ae=ne;const oe=(0,o.Ey)(),re=(0,a.Ef)(ae);re.use(oe),re.mount("#app")}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={exports:{}};return e[a].call(r.exports,r,r.exports,n),r.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,r){if(!a){var s=1/0;for(l=0;l<e.length;l++){a=e[l][0],o=e[l][1],r=e[l][2];for(var c=!0,i=0;i<a.length;i++)(!1&r||s>=r)&&Object.keys(n.O).every((function(e){return n.O[e](a[i])}))?a.splice(i--,1):(c=!1,r<s&&(s=r));if(c){e.splice(l--,1);var u=o();void 0!==u&&(t=u)}}return t}r=r||0;for(var l=e.length;l>0&&e[l-1][2]>r;l--)e[l]=e[l-1];e[l]=[a,o,r]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,r,s=a[0],c=a[1],i=a[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(i)var l=i(n)}for(t&&t(a);u<s.length;u++)r=s[u],n.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return n.O(l)},a=self["webpackChunkclient"]=self["webpackChunkclient"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[504],(function(){return n(1100)}));a=n.O(a)})();
//# sourceMappingURL=app.09deeac9.js.map