(this["webpackJsonppoke-tkpd"]=this["webpackJsonppoke-tkpd"]||[]).push([[0],{65:function(e,t,n){"use strict";n.r(t);var c=n(76),o=n(77),r=n(75),i=n(2),a=n.n(i),s=n(48),l=n.n(s),j=n(33),d=n(5),b=n(4);var u=function(){return Object(b.jsx)("div",{children:"Not Found"})},h=n(49),m=n(78),O=n(79);var p=function(e){var t=e.children;return Object(i.useEffect)((function(){console.log("from layout default")}),[]),Object(b.jsx)(b.Fragment,{children:t})},f=n.p+"static/media/pokeball.2db7de44.svg",g=n(44);var x,v=function(){return Object(g.a)("div",{children:Object(g.a)("img",{src:f,alt:"loading"})})},k=Object(m.a)(x||(x=Object(h.a)(["\n  query pokemons($limit: Int, $offset: Int) {\n    pokemons(limit: $limit, offset: $offset) {\n      count\n      next\n      previous\n      status\n      message\n      results {\n        url\n        name\n        image\n      }\n    }\n  }\n"]))),y={limit:2,offset:1};var F=function(){var e=Object(O.a)(k,{variables:y}),t=e.loading,n=e.error,c=e.data;return Object(i.useEffect)((function(){console.log(t),console.log(c),console.log(n)})),Object(b.jsxs)(p,{children:[Object(b.jsx)("div",{children:"Pokemon"}),Object(b.jsx)("hr",{}),Object(b.jsx)("div",{style:{width:48,height:48},children:Object(b.jsx)(v,{})}),Object(b.jsx)("hr",{}),Object(b.jsx)(j.b,{to:"/asda/detail",children:"Detail"}),Object(b.jsx)(j.b,{to:"/my-pokemon",children:"My Pokemon"})]})};var P=function(){return Object(b.jsx)(p,{children:"Pokemon Detail"})};var w=function(){return Object(b.jsx)(p,{children:"My Pokemon"})},I=[{path:"/",element:Object(b.jsx)(F,{})},{path:"/:name/detail",element:Object(b.jsx)(P,{})},{path:"/my-pokemon",element:Object(b.jsx)(w,{})},{path:"*",element:Object(b.jsx)(u,{})}];var $=function(){var e=Object(d.g)(I);return Object(b.jsx)(b.Fragment,{children:e})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,81)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),r(e),i(e)}))},C=new c.a({uri:"https://graphql-pokeapi.vercel.app/api/graphql",cache:new o.a});l.a.render(Object(b.jsx)(r.a,{client:C,children:Object(b.jsx)(j.a,{children:Object(b.jsx)(a.a.StrictMode,{children:Object(b.jsx)($,{})})})}),document.getElementById("root")),q()}},[[65,1,2]]]);
//# sourceMappingURL=main.f853cc7c.chunk.js.map