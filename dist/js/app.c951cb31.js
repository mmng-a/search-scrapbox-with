(function(e){function t(t){for(var r,i,p=t[0],c=t[1],l=t[2],u=0,d=[];u<p.length;u++)i=p[u],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);s&&s(t);while(d.length)d.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,p=1;p<n.length;p++){var c=n[p];0!==o[c]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var p=window["webpackJsonp"]=window["webpackJsonp"]||[],c=p.push.bind(p);p.push=t,p=p.slice();for(var l=0;l<p.length;l++)t(p[l]);var s=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"09e5":function(e,t,n){},4562:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[null!=e.projects?n("div",e._l(e.projects,(function(e){return n("ul",{key:e.name},[n("Project",{attrs:{name:e.name,pages:e.pages}})],1)})),0):n("div",[e._v(" loading... ")])])},a=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"background-color":"gray, padding: 5px"},attrs:{id:"project"}},[n("h2",[e._v(e._s(e.name))]),null!=e.pages?n("ul",e._l(e.pages,(function(t){return n("div",{key:t.url,staticClass:"pages"},[n("a",{attrs:{href:e.url}},[n("img",{attrs:{src:e.image,alt:""}}),n("h3",[e._v(e._s(t.title))]),n("p",[e._v(e._s(t.description))])])])})),0):n("div",[n("p",[e._v("loading...")])])])},p=[],c={name:"Project",data(){return{name:"project title",pages:[{title:"page title",description:"description",image:"http://www.scdn.co/i/_global/open-graph-default.png",url:"https://www.apple.com/"},{title:"title2",description:"description",image:"http://www.scdn.co/i/_global/open-graph-default.png",url:"https://www.apple.com/"},{title:"タイトル",description:"description",image:"http://www.scdn.co/i/_global/open-graph-default.png",url:"https://www.apple.com/"},{title:"タイトー",description:"description",image:"http://www.scdn.co/i/_global/open-graph-default.png",url:"https://www.apple.com/"}]}}},l=c,s=(n("a401"),n("2877")),u=Object(s["a"])(l,i,p,!1,null,"8dbba796",null),d=u.exports,f={name:"App",components:[d],data(){return{projects:[{name:"project",pages:null}]}}},g=f,h=Object(s["a"])(g,o,a,!1,null,"68f05b14",null);h.exports;async function m(e){try{const t="https://scrapbox.io/api/projects/search/query?q="+e,n=await fetch(t),r=await n.json();return console.log(r["projects"]),r["projects"].map(e=>({name:e.name,displayName:e.displayName}))}catch(t){console.log(t)}}async function w(e,t){try{const n=`https://scrapbox.io/api/pages/${t}/search/query?q=${e}&limit=10`,r=await fetch(n),o=await r.json();return o["pages"].map(e=>({title:e.title,description:e.lines[0],image:e.image,url:`https://scrapbox.io/${t}/${encodeURI(e.title)}`}))}catch(n){console.log(n)}}var b=n("4562");function y(e){document.body.style.border="5px solid "+e}y("black");const v=Object(b["getQuery"])();y("red");var j=Object(b["insertionArea"])(),_={projects:null};new r["a"]({el:"#app",data:_}).$mount(j),m(v).then(e=>{_.projects=e.map(e=>({name:e.displayName,pages:null}))}).then(e=>{for([index,project]of e.entries())w(v,project.name).then(e=>{_[index].pages=e,console.log(e),y("green")})})},a401:function(e,t,n){"use strict";n("09e5")}});
//# sourceMappingURL=app.c951cb31.js.map