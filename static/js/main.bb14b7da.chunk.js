(this["webpackJsonpmemory-card-test"]=this["webpackJsonpmemory-card-test"]||[]).push([[0],{16:function(e,t,n){},18:function(e,t,n){},20:function(e,t,n){},21:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(9),s=n.n(a),o=n(8),i=n(4),u=n(0);function j(e){var t=e.score,n=e.bestScore;return Object(u.jsxs)("div",{className:"scoreContainer",children:[Object(u.jsxs)("span",{className:"score",children:["Current Score: ",t]}),Object(u.jsxs)("span",{className:"bestScore",children:["Best Score: ",n]})]})}n(16);function f(e){var t=e.score,n=e.bestScore;return Object(u.jsxs)("div",{className:"header",children:[Object(u.jsx)("img",{className:"logo",src:"https://fontmeme.com/permalink/210819/d63932e388d58d8b6994373a23658b4a.png",alt:"pokemon-font",border:"0"}),Object(u.jsx)(j,{score:t,bestScore:n})]})}var b=n(3),m=n.n(b),l=n(7),p=function(){var e=Object(l.a)(m.a.mark((function e(t){var n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.url,e.next=3,fetch(n);case 3:return r=e.sent,e.abrupt("return",r.json());case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=Object(l.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokeapi.co/api/v2/pokemon?limit=15");case 2:return t=e.sent,e.abrupt("return",t.json());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();n(18);function O(e){var t=e.pokemons,n=e.select;return Object(u.jsx)("div",{className:"pokemonContainer",children:t.map((function(e){return Object(u.jsxs)("div",{className:"pokemon",onClick:n,"data-pokemon":e.name,children:[Object(u.jsx)("img",{src:e.img,alt:e.name}),Object(u.jsx)("span",{className:"name",children:e.name})]},e.key)}))})}var h=n(10),v=n.n(h);n(20);function x(){return Object(u.jsx)("div",{className:"instructionContainer",children:Object(u.jsx)("span",{className:"instruction",children:"Get points by clicking on an image but don't click on any more than once!"})})}var k=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)([]),s=Object(i.a)(a,2),j=s[0],b=s[1],m=Object(r.useState)(0),l=Object(i.a)(m,2),h=l[0],k=l[1],g=Object(r.useState)(0),S=Object(i.a)(g,2),N=S[0],y=S[1];Object(r.useEffect)((function(){d().then((function(e){return e.results.forEach((function(e){p(e).then((function(e){return c((function(t){var n=e.name,r=e.sprites.front_default;return[].concat(Object(o.a)(t),[{key:v()(),name:n,img:r}])}))}))}))}))}),[]),Object(r.useEffect)((function(){h>N&&y((function(e){return e+1}))}),[h,N]);var w=function(e){var t=e.target.textContent;1===j.filter((function(e){return e===t})).length&&(k((function(e){return 0})),b([]))};return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(f,{score:h,bestScore:N}),Object(u.jsx)(O,{pokemons:n,select:function(e){!function(e){var t=e.target.dataset.pokemon;b((function(e){return[].concat(Object(o.a)(e),[t])}))}(e),k((function(e){return e+1})),w(e),function(e){for(var t=e.length;0!==t;){var n=Math.floor(Math.random()*t);t--;var r=[e[n],e[t]];e[t]=r[0],e[n]=r[1]}}(n)}}),Object(u.jsx)(x,{})]})};s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(k,{})}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.bb14b7da.chunk.js.map