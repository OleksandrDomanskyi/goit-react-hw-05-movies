"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[19],{2019:function(r,e,n){n.r(e),n.d(e,{default:function(){return l}});var t=n(1413),a=n(5861),u=n(885),c=n(7757),i=n.n(c),s=n(2791),o=n(6871),f=n(6188),p={container:"reviews_container__0EL+r",author:"reviews_author__y-Lm7",content:"reviews_content__9jPPr",alternative:"reviews_alternative__5EHRx"},v=n(184),l=function(){var r=(0,s.useState)({items:[],loading:!1,error:!1}),e=(0,u.Z)(r,2),n=e[0],c=e[1],l=(0,o.UO)().id;(0,s.useEffect)((function(){var r=function(){var r=(0,a.Z)(i().mark((function r(){var e,n;return i().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return c((function(r){return(0,t.Z)((0,t.Z)({},r),{},{loading:!0})})),r.next=3,(0,f.W_)(l);case 3:e=r.sent,n=e.results;try{c((function(r){return(0,t.Z)((0,t.Z)({},r),{},{items:n,loading:!1})}))}catch(m){c((function(e){return(0,t.Z)((0,t.Z)({},e),{},{loading:!1,error:m.message})}))}case 6:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}();r()}),[l]);var h=n.items,d=n.loading,m=n.error,_=Boolean(Object.values(h).length),w=h.map((function(r){var e=r.id,n=r.author,t=r.content;return(0,v.jsxs)("li",{children:[(0,v.jsx)("h2",{className:p.author,children:n}),(0,v.jsx)("p",{className:p.content,children:t})]},e)}));return(0,v.jsxs)("div",{className:p.container,children:[_>0?(0,v.jsx)("ul",{className:p.list,children:w}):(0,v.jsx)("p",{className:p.alternative,children:"We don't have any reviews for this movie"}),d&&(0,v.jsx)("p",{children:"...Loading"}),m&&(0,v.jsx)("p",{children:m})]})}},6188:function(r,e,n){n.d(e,{Df:function(){return s},Ku:function(){return p},W_:function(){return v},sJ:function(){return o},zi:function(){return f}});var t=n(5861),a=n(7757),u=n.n(a),c=n(4569),i=n.n(c)().create({baseURL:"https://api.themoviedb.org/3",params:{api_key:"46bbf66c9e65ae01644c2e2f5cf2826f"}}),s=function(){var r=(0,t.Z)(u().mark((function r(){var e,n;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.get("/trending/movie/day");case 2:return e=r.sent,n=e.data,r.abrupt("return",n);case 5:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,t.Z)(u().mark((function r(e){var n,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.get("/movie/".concat(e));case 2:return n=r.sent,t=n.data,r.abrupt("return",t);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),f=function(){var r=(0,t.Z)(u().mark((function r(e){var n,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.get("/search/movie",{params:{query:e}});case 2:return n=r.sent,t=n.data,r.abrupt("return",t.results);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),p=function(){var r=(0,t.Z)(u().mark((function r(e){var n,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.get("/movie/".concat(e,"/credits"));case 2:return n=r.sent,t=n.data,r.abrupt("return",t);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),v=function(){var r=(0,t.Z)(u().mark((function r(e){var n,t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.get("/movie/".concat(e,"/reviews"));case 2:return n=r.sent,t=n.data,r.abrupt("return",t);case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=19.7d33d06c.chunk.js.map