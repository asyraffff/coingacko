(this.webpackJsonpcoingacko=this.webpackJsonpcoingacko||[]).push([[0],{165:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(42),r=n.n(i),s=n(3),o=n.n(s),l=n(7),d=n(4),j=n(2),u=function(){var e=Object(l.a)(o.a.mark((function e(t){var n,c;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new URLSearchParams({vs_currency:t,order:"market_cap_desc",per_page:100,page:1,sparkline:!0,price_change_percentage:"24h,7d"}),c="".concat("https://api.coingecko.com/api/v3","/coins/markets?").concat(n),e.abrupt("return",fetch(c).then((function(e){return e.json()})).catch((function(e){console.log("Error fetching data from server",e)})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(e){var t=e.fiat,n=Object(c.useState)({fiat:t,currencies:[]}),a=Object(d.a)(n,2),i=a[0],r=a[1],s=Object(c.useState)(new Date),j=Object(d.a)(s,2),h=j[0],b=j[1];return Object(c.useEffect)((function(){Object(l.a)(o.a.mark((function e(){var n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(t);case 2:n=e.sent,r({fiat:t,currencies:n});case 4:case"end":return e.stop()}}),e)})))()}),[h]),function(e,t){var n=Object(c.useRef)(null),a=Object(c.useRef)(e);Object(c.useEffect)((function(){a.current=e})),Object(c.useEffect)((function(){if("number"===typeof t)return n.current=window.setInterval((function(){return a.current()}),t),function(){return window.clearInterval(n.current)}}),[t]),n.current}((function(){var e=new Date;e>new Date(h.getTime()+1e4)&&b(e)}),1e3),[i,function(e){t=e.fiat,b(new Date)}]},b=function(){var e=Object(l.a)(o.a.mark((function e(t,n){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:window.localStorage.setItem(t,JSON.stringify(n));case 1:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),m=function(e){var t=e.key,n=e.defaultValue,a=Object(c.useState)(function(e,t){var n=window.localStorage.getItem(e);return null!==n?JSON.parse(n):t}(t,n)),i=Object(d.a)(a,2),r=i[0],s=i[1];return[r,function(e){s(e),b(t,e)}]},g=n(0),f=Object(j.a)({selector:{display:"flex",alignItems:"center",padding:2,border:"1px solid #e4e2e2",background:"whitesmoke",borderRadius:5,userSelect:"none"},option:{color:"rgb(121, 109, 109)",fontWeight:"bold",outline:0,border:"none",background:"transparent",padding:7,cursor:"pointer"},selected:{color:"white",background:"rgb(59,59,255)",borderRadius:5}}),p=function(e){var t=f(e),n=e.options,c=e.value,a=e.onChange,i=e.className;return Object(g.jsx)("div",{className:i,children:Object(g.jsx)("div",{className:t.selector,children:n.map((function(e){return Object(g.jsx)("button",{className:"".concat(t.option," ").concat(c===e?t.selected:""),onClick:function(){return a(e)},children:e},e)}))})})},x=Object(j.a)({header:{display:"flex",alignItems:"center",padding:"20px 12px"},logo:{width:30,marginRight:10},text:{margin:0},url:{paddingLeft:20},toggle:{display:"flex",justifyContent:"flex-end",width:"100%"}}),O=function(e){var t=x(),n=e.fiatOptions,c=e.selectedFiat,a=e.onFiatChange;return Object(g.jsxs)("header",{className:t.header,children:[Object(g.jsx)("h1",{className:t.text,children:"CoinGacko"}),Object(g.jsx)("h1",{className:t.text,children:"\ud83e\udd96"}),Object(g.jsxs)("p",{className:t.url,children:["Written by ",Object(g.jsx)("a",{href:"https://github.com/asyraffff/coingacko",children:"@asyraf"})]}),Object(g.jsx)(p,{className:t.toggle,options:n,value:c,onChange:a})]})},v=n(13),N=n.n(v),w=n(5),y=function(e){return Object(g.jsxs)("svg",Object(w.a)(Object(w.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),{},{children:[Object(g.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(g.jsx)("path",{d:"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"})]}))},_=function(e){return Object(g.jsxs)("svg",Object(w.a)(Object(w.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},e),{},{children:[Object(g.jsx)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(g.jsx)("path",{d:"M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"})]}))},C=Object(j.a)({favorite:{cursor:"pointer",background:"none",border:"none",padding:5,margin:"0 10px 0 0","&:focus":{outline:"none"}}}),k=function(e){var t=C();return Object(g.jsx)(c.Fragment,{children:e.active?Object(g.jsx)("button",{className:t.favorite,onClick:function(t){return e.onClick(t)},children:Object(g.jsx)(y,{fill:"rgb(59,59,255)",width:"18px",height:"18px"})}):Object(g.jsx)("button",{className:t.favorite,onClick:function(t){return e.onClick(t)},children:Object(g.jsx)(_,{fill:"rgb(135, 135, 135)",width:"18px",height:"18px"})})})},F=n(18),R=n.n(F),H=function(e){return R()(e).format("0,0.[00000000]")},S=Object(j.a)({price:{fontSize:14,lineHeight:"20px",fontWeight:"normal"}}),I=function(e){var t,n=S(),c=e.value,a=e.fiat,i=e.short,r=e.className;return Object(g.jsxs)("div",{className:"".concat(n.price," ").concat(r),children:["myr"===a?"RM":"$",i?(t=c,R()(t).format("0.0a")):H(c)]})},E=Object(j.a)({currencyGroup:{display:"flex",flexDirection:"row"},currencyCol:{display:"flex",flexDirection:"column"},currencyRow:{display:"flex"},rank:{fontSize:12,lineHeight:"20px",marginRight:5,color:"#796d6d"},image:{width:20,height:20,margin:"0 5px 0 0"},symbol:{textTransform:"uppercase",fontSize:16,lineHeight:"20px",fontWeight:"bold"}}),T=function(e){var t=E(),n=e.data,c=e.favorites,a=e.fiat,i=e.onToggleFavorite,r=e.className;return Object(g.jsx)("div",{className:r,children:Object(g.jsxs)("div",{className:t.currencyGroup,children:[Object(g.jsx)(k,{active:void 0!==c[n.id],onClick:function(){return i(n.id)}}),Object(g.jsxs)("div",{className:t.currencyCol,children:[Object(g.jsxs)("div",{className:t.currencyRow,children:[Object(g.jsx)("img",{className:t.image,src:n.image}),Object(g.jsx)("span",{className:t.symbol,children:n.symbol})]}),Object(g.jsxs)("div",{className:t.currencyRow,children:[Object(g.jsxs)("span",{className:t.rank,children:["#",n.market_cap_rank]}),Object(g.jsx)(I,{short:!0,value:n.market_cap,fiat:a})]})]})]})})},M=n(9),L=Object(j.a)({sparkline:{fill:"#ecf5fd",stroke:"#2d79c5",strokeWidth:1,margin:"0 10px"}}),W=function(e){var t=L(),n=Object(c.useRef)(null),a=e.data,i=e.width,r=e.height,s=e.className;return Object(c.useEffect)((function(){!function(e){var t=e.data,n=e.width,c=e.height,a=e.element,i=e.className,r=Object(M.e)(a).append("svg").attr("width",n-4).attr("height",c).attr("class",i).append("g").attr("transform","translate(-2,0)"),s=Object(M.d)().domain([0,t.length]).range([0,n]),o=Object(M.d)().domain([Object(M.c)(t),Object(M.b)(t)]).range([c,0]);r.append("path").datum(t).attr("d",Object(M.a)().x((function(e,t){return s(t)})).y0(o(0)).y1((function(e,t){return o(e)})))}({data:a||[],width:i||135,height:r||50,element:n.current,className:t.sparkline})}),[n]),Object(g.jsx)("div",{className:s,ref:n})},z=Object(j.a)({change:{fontSize:14,lineHeight:"20px"},pos:{color:"rgb(4, 138, 9)"},neg:{color:"rgb(204, 19, 19)"}}),B=function(e){var t,n=z(),c=e.value,a=e.className;return Object(g.jsx)("div",{className:a,children:Object(g.jsx)("div",{className:"".concat(n.change," ").concat(c>0?n.pos:n.neg),children:(t=c,(t>0?"+":"")+R()(t).format("0.00")+"%")})})},D=Object(j.a)({tinyList:{display:"grid",gridTemplateColumns:"minmax(100px, auto) min(100px) min(70px)",alignItems:"center"},smallList:{display:"grid",gridTemplateColumns:"minmax(100px, auto) min(100px) min(70px) min(70px)",alignItems:"center"},mediumList:{display:"grid",gridTemplateColumns:"minmax(100px, auto) min(100px) min(70px) min(70px) min(160px)",alignItems:"center"},largeList:{display:"grid",gridTemplateColumns:"minmax(100px, auto) min(100px) min(70px) min(70px) min(160px) min(150px)",alignItems:"center"},heading:{display:"flex",justifyContent:"flex-end",padding:7,color:"#262f3e",fontWeight:900},headingFtCol:{justifyContent:"flex-start"},content:{display:"flex",justifyContent:"flex-end",padding:7,alignItems:"center",height:60,borderBottom:"1px #e8e8e8 solid"},contentFtCol:{justifyContent:"flex-start"},priceHighlight:{fontWeight:"bold"}}),V=function(e){var t=D(),n=e.fiat,a=e.currencies,i=e.filter,r=function(){var e=m({key:"favorites",defaultValue:{}}),t=Object(d.a)(e,2),n=t[0],c=t[1];return[n,function(e){var t=Object(w.a)({},n);void 0===t[e]?t[e]=!0:delete t[e],c(t)}]}(),s=Object(d.a)(r,2),o=s[0],l=s[1],j=Object(c.useState)([]),u=Object(d.a)(j,2),h=u[0],b=u[1];return Object(c.useEffect)((function(){"favorite"===i.view?b(a.filter((function(e){return void 0!==o[e.id]}))):b(a)}),[i,o]),Object(g.jsxs)(c.Fragment,{children:[Object(g.jsx)(N.a,{maxWidth:450,children:Object(g.jsxs)("div",{className:t.tinyList,children:[Object(g.jsx)("div",{className:"".concat(t.heading," ").concat(t.headingFtCol),children:"MARKET CAP"}),Object(g.jsx)("div",{className:t.heading,children:"PRICE"}),Object(g.jsx)("div",{className:t.heading,children:"24H"}),h.map((function(e){return Object(g.jsxs)(c.Fragment,{children:[Object(g.jsx)(T,{className:"".concat(t.content," ").concat(t.contentFtCol),data:e,fiat:n,favorites:o,onToggleFavorite:l}),Object(g.jsx)(I,{className:"".concat(t.content," ").concat(t.priceHighlight),value:e.current_price,fiat:n}),Object(g.jsx)(B,{className:t.content,value:e.price_change_percentage_24h_in_currency})]},e.id)}))]})}),Object(g.jsx)(N.a,{minWidth:451,maxWidth:600,children:Object(g.jsxs)("div",{className:t.smallList,children:[Object(g.jsx)("div",{className:"".concat(t.heading," ").concat(t.headingFtCol),children:"MARKET CAP"}),Object(g.jsx)("div",{className:t.heading,children:"PRICE"}),Object(g.jsx)("div",{className:t.heading,children:"24H"}),Object(g.jsx)("div",{className:t.heading,children:"7D"}),h.map((function(e){return Object(g.jsxs)(c.Fragment,{children:[Object(g.jsx)(T,{className:"".concat(t.content," ").concat(t.contentFtCol),data:e,fiat:n,favorites:o,onToggleFavorite:l}),Object(g.jsx)(I,{className:"".concat(t.content," ").concat(t.priceHighlight),value:e.current_price,fiat:n}),Object(g.jsx)(B,{className:t.content,value:e.price_change_percentage_24h_in_currency}),Object(g.jsx)(B,{className:t.content,value:e.price_change_percentage_7d_in_currency})]},e.id)}))]})}),Object(g.jsx)(N.a,{minWidth:601,maxWidth:720,children:Object(g.jsxs)("div",{className:t.mediumList,children:[Object(g.jsx)("div",{className:"".concat(t.heading," ").concat(t.headingFtCol),children:"MARKET CAP"}),Object(g.jsx)("div",{className:t.heading,children:"PRICE"}),Object(g.jsx)("div",{className:t.heading,children:"24H"}),Object(g.jsx)("div",{className:t.heading,children:"7D"}),Object(g.jsx)("div",{className:t.heading,children:"7D"}),h.map((function(e){return Object(g.jsxs)(c.Fragment,{children:[Object(g.jsx)(T,{className:"".concat(t.content," ").concat(t.contentFtCol),data:e,fiat:n,favorites:o,onToggleFavorite:l}),Object(g.jsx)(I,{className:"".concat(t.content," ").concat(t.priceHighlight),value:e.current_price,fiat:n}),Object(g.jsx)(B,{className:t.content,value:e.price_change_percentage_24h_in_currency}),Object(g.jsx)(B,{className:t.content,value:e.price_change_percentage_7d_in_currency}),Object(g.jsx)(W,{className:t.content,data:e.sparkline_in_7d.price,width:135,height:50})]},e.id)}))]})}),Object(g.jsx)(N.a,{minWidth:721,children:Object(g.jsxs)("div",{className:t.largeList,children:[Object(g.jsx)("div",{className:"".concat(t.heading," ").concat(t.headingFtCol),children:"MARKET CAP"}),Object(g.jsx)("div",{className:t.heading,children:"PRICE"}),Object(g.jsx)("div",{className:t.heading,children:"24H"}),Object(g.jsx)("div",{className:t.heading,children:"7D"}),Object(g.jsx)("div",{className:t.heading,children:"7D"}),Object(g.jsx)("div",{className:t.heading,children:"VOLUME(24H)"}),h.map((function(e){return Object(g.jsxs)(c.Fragment,{children:[Object(g.jsx)(T,{className:"".concat(t.content," ").concat(t.contentFtCol),data:e,fiat:n,favorites:o,onToggleFavorite:l}),Object(g.jsx)(I,{className:"".concat(t.content," ").concat(t.priceHighlight),value:e.current_price,fiat:n}),Object(g.jsx)(B,{className:t.content,value:e.price_change_percentage_24h_in_currency}),Object(g.jsx)(B,{className:t.content,value:e.price_change_percentage_7d_in_currency}),Object(g.jsx)(W,{className:t.content,data:e.sparkline_in_7d.price,width:135,height:50}),Object(g.jsx)(I,{className:t.content,value:e.total_volume,fiat:n})]},e.id)}))]})})]})},P=function(e){return Object(g.jsxs)("svg",Object(w.a)(Object(w.a)({xmlns:"http://www.w3.org/2000/svg",enableBackground:"new 0 0 24 24",viewBox:"0 0 24 24"},e),{},{children:[Object(g.jsx)("rect",{fill:"none",height:"24",width:"24"}),Object(g.jsx)("g",{children:Object(g.jsx)("path",{d:"M7.5,21H2V9h5.5V21z M14.75,3h-5.5v18h5.5V3z M22,11h-5.5v10H22V11z"})})]}))},A=Object(j.a)({bar:{display:"flex",justifyContent:"center",alignItems:"center",position:"fixed",right:0,bottom:0,left:0,height:50,background:"whitesmoke",borderTop:"1px solid #e4e2e2",overflow:"hidden"},btn:{cursor:"pointer",background:"none",border:"none",padding:5,margin:"0 20px","&:focus":{outline:"none"}},icon:{paddingBottom:3},inactive:{borderBottom:"2px rgb(0, 0, 0, 0) solid",fill:"rgb(121, 109, 109)"},active:{borderBottom:"2px rgb(0,0,20) solid",fill:"rgb(59,59,255)"}}),J=function(e){var t=A();return Object(g.jsxs)("footer",{className:t.bar,children:[Object(g.jsx)("button",{className:t.btn,onClick:function(){return e.onViewChange("all")},children:Object(g.jsx)(P,{className:"".concat(t.icon," ").concat("all"===e.view?t.active:t.inactive),width:"25px",height:"25px"})}),Object(g.jsx)("button",{className:t.btn,onClick:function(){return e.onViewChange("favorite")},children:Object(g.jsx)(y,{className:"".concat(t.icon," ").concat("favorite"===e.view?t.active:t.inactive),width:"25px",height:"25px"})})]})},K=Object(j.a)({appBarSpace:{marginBottom:50}}),G=function(){var e=K(),t=Object(c.useState)("all"),n=Object(d.a)(t,2),a=n[0],i=n[1],r=m({key:"fiat",defaultValue:"myr"}),s=Object(d.a)(r,2),j=s[0],u=s[1],b=h({fiat:j,interval:1e4}),f=Object(d.a)(b,2),p=f[0],x=f[1],v=function(){var e=Object(l.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:u(t),x({fiat:t});case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(g.jsxs)(c.Fragment,{children:[Object(g.jsx)(O,{fiatOptions:["myr","usd"],selectedFiat:j,onFiatChange:v}),Object(g.jsx)("main",{className:e.appBarSpace,children:Object(g.jsx)(V,{fiat:p.fiat,currencies:p.currencies,filter:{view:a}})}),Object(g.jsx)(J,{view:a,onViewChange:i})]})};r.a.render(Object(g.jsx)(a.a.StrictMode,{children:Object(g.jsx)(G,{})}),document.getElementById("root"))}},[[165,1,2]]]);
//# sourceMappingURL=main.c8d01a2b.chunk.js.map