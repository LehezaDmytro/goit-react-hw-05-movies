"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[134],{134:function(e,t,n){n.r(t);var r=n(433),a=n(861),u=n(439),c=n(757),i=n.n(c),o=n(689),s=n(87),l=n(791),p=n(534),f=n(184);t.default=function(){var e=(0,o.TH)(),t=(0,s.lr)(),n=(0,u.Z)(t,2),c=n[0],h=n[1],g=(0,l.useState)([]),m=(0,u.Z)(g,2),v=m[0],d=m[1];return(0,l.useEffect)((function(){var e=c.get("query"),t=function(){var t=(0,a.Z)(i().mark((function t(){var n,a;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,p.Zh)(e);case 3:n=t.sent,a=n.data,d((0,r.Z)(a.results)),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0.name),console.log(t.t0.message);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();e?t():d([])}),[c]),(0,f.jsxs)("main",{children:[(0,f.jsxs)("form",{onSubmit:function(e){var t;e.preventDefault();var n=e.currentTarget;h({query:null!==(t=n.elements.movieTitle.value)&&void 0!==t?t:""}),n.reset()},children:[(0,f.jsx)("input",{type:"text",name:"movieTitle"}),(0,f.jsx)("button",{type:"submit",children:"Search"})]}),(0,f.jsx)("ul",{children:v&&v.map((function(t){return(0,f.jsx)("li",{children:(0,f.jsx)(s.rU,{to:"/movies/".concat(t.id),state:{from:e},children:t.title})},t.id)}))})]})}},534:function(e,t,n){n.d(t,{Df:function(){return u},IQ:function(){return i},Jh:function(){return o},Zh:function(){return s},yK:function(){return c}});var r=n(243),a="081601e5e6af2357464de85c20034e49",u=function(){return r.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(a,"&language=uk"))},c=function(e){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(a,"&language=uk"))},i=function(e){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(a,"&language=uk"))},o=function(e){return r.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(a,"&language=en-US&page=1"))},s=function(e){return r.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(a,"&language=en-US&query=").concat(e,"&page=1&include_adult=true"))}}}]);
//# sourceMappingURL=134.74b4a6cf.chunk.js.map