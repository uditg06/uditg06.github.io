(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{21:function(e,t,n){"use strict";var c=n(0),i=n(1),l=n(16),a=n(3),s=n(12),r=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),o=r.NODE_ENV,j=r.REACT_APP_GA_TRACKING_ID;"production"===o&&s.a.initialize(j);var b=function(){var e=Object(a.f)().pathname;return Object(i.useEffect)((function(){"production"===o&&(s.a.set({page:e}),s.a.pageview(e))}),[e]),null},u=n(5),d=n(24),h=[{index:!0,label:"Udit Garg",path:"/"},{label:"About",path:"/about"},{label:"Resume",path:"/resume"},{label:"Blogs",path:"/blogs"},{label:"Stats",path:"/stats"},{label:"Contact",path:"/contact"}],O=Object(i.lazy)((function(){return n.e(4).then(n.t.bind(null,164,7))})),m=function(){var e=Object(i.useState)(!1),t=Object(d.a)(e,2),n=t[0],l=t[1];return Object(c.jsxs)("div",{className:"hamburger-container",children:[Object(c.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(c.jsx)("ul",{children:n?Object(c.jsx)("li",{className:"menu close-menu",children:Object(c.jsx)("div",{onClick:function(){return l(!n)},className:"menu-hover",children:"\u2715"})}):Object(c.jsx)("li",{className:"menu open-menu",children:Object(c.jsx)("div",{onClick:function(){return l(!n)},className:"menu-hover",children:"\u2630"})})})}),Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(c.Fragment,{}),children:Object(c.jsx)(O,{right:!0,isOpen:n,children:Object(c.jsx)("ul",{className:"hamburger-ul",children:h.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:e.path,onClick:function(){return l(!n)},children:Object(c.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},x=function(){return Object(c.jsxs)("header",{id:"header",children:[Object(c.jsx)("h1",{className:"index-link",children:h.filter((function(e){return e.index})).map((function(e){return Object(c.jsx)(u.b,{to:e.path,children:e.label},e.label)}))}),Object(c.jsx)("nav",{className:"links",children:Object(c.jsx)("ul",{children:h.filter((function(e){return!e.index})).map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:e.path,children:e.label})},e.label)}))})}),Object(c.jsx)(m,{})]})},p=n(25),f=function(){return Object(c.jsxs)("section",{id:"sidebar",children:[Object(c.jsxs)("section",{id:"intro",children:[Object(c.jsx)(u.b,{to:"/",className:"logo",children:Object(c.jsx)("img",{src:"".concat("","/images/me.jpg"),alt:""})}),Object(c.jsxs)("header",{children:[Object(c.jsx)("h2",{children:"Udit Garg"}),Object(c.jsx)("p",{children:Object(c.jsx)("a",{href:"mailto:uditgarg501@gmail.com",children:"Email Udit"})})]})]}),Object(c.jsxs)("section",{className:"blurb",children:[Object(c.jsx)("h2",{children:"About"}),Object(c.jsx)("p",{children:"I am currently at Airtel Africa. I am a developer turned Product Manager with a mission of digital inclusion. I am trying to bring digital banking services across 14 countries in Africa and positively impact the lives of millions of people. I have experience taking products from 0 to 1 to the next 1 Mn."}),Object(c.jsx)("p",{children:"I am passionate about digital products, strategy, design, and product management. I firmly believe that technology can transform people\u201cs lives for good. I have Healthcare, Travel, Telecom, and Banking domain experience."}),Object(c.jsx)("ul",{className:"actions",children:Object(c.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(c.jsx)(u.b,{to:"/about",className:"button",children:"About Me"}):Object(c.jsx)(u.b,{to:"/resume",className:"button",children:"Learn More"})})})]}),Object(c.jsxs)("section",{id:"footer",children:[Object(c.jsx)(p.a,{}),Object(c.jsxs)("p",{className:"copyright",children:["\xa9 Udit Garg ",Object(c.jsx)(u.b,{to:"/",children:"uditgarg.com"}),"."]})]})]})},g=function(){var e=Object(a.f)().pathname;return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},v=function(e){return Object(c.jsxs)(l.b,{children:[Object(c.jsx)(b,{}),Object(c.jsx)(g,{}),Object(c.jsxs)(l.a,{titleTemplate:"%s | Michael D'Angelo",defaultTitle:"Michael D'Angelo",defer:!1,children:[e.title&&Object(c.jsx)("title",{children:e.title}),Object(c.jsx)("meta",{name:"description",content:e.description})]}),Object(c.jsxs)("div",{id:"wrapper",children:[Object(c.jsx)(x,{}),Object(c.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(c.jsx)(f,{})]})]})};v.defaultProps={children:null,fullPage:!1,title:null,description:"Michael D'Angelo's personal website."};t.a=v},25:function(e,t,n){"use strict";var c=n(0),i=(n(1),n(29)),l=n(30),a=n(31),s=[{link:"https://www.linkedin.com/in/uditgarg6",label:"LinkedIn",icon:l.faLinkedinIn},{link:"mailto:uditgarg501@gmail.com",label:"Email",icon:a.faEnvelope}];t.a=function(){return Object(c.jsx)("ul",{className:"icons",children:s.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.link,children:Object(c.jsx)(i.a,{icon:e.icon})})},e.label)}))})}},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n(1),l=n.n(i),a=n(15),s=n(5),r=n(3),o=n(21),j=(n(44),Object(i.lazy)((function(){return Promise.all([n.e(2),n.e(6)]).then(n.bind(null,160))}))),b=Object(i.lazy)((function(){return n.e(8).then(n.bind(null,167))})),u=Object(i.lazy)((function(){return n.e(9).then(n.bind(null,161))})),d=Object(i.lazy)((function(){return n.e(10).then(n.bind(null,162))})),h=Object(i.lazy)((function(){return n.e(7).then(n.bind(null,163))})),O=Object(i.lazy)((function(){return n.e(5).then(n.bind(null,165))})),m=Object(i.lazy)((function(){return n.e(11).then(n.bind(null,166))})),x=function(){return Object(c.jsx)(s.a,{basename:"",children:Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(o.a,{}),children:Object(c.jsxs)(r.c,{children:[Object(c.jsx)(r.a,{exact:!0,path:"/",component:u}),Object(c.jsx)(r.a,{path:"/about",component:j}),Object(c.jsx)(r.a,{path:"/blogs",component:h}),Object(c.jsx)(r.a,{path:"/stats",component:m}),Object(c.jsx)(r.a,{path:"/contact",component:b}),Object(c.jsx)(r.a,{path:"/resume",component:O}),Object(c.jsx)(r.a,{component:d,status:404})]})})})},p=function(){return Object(c.jsx)(l.a.StrictMode,{children:Object(c.jsx)(x,{})})},f=document.getElementById("root");f.hasChildNodes()?Object(a.hydrate)(Object(c.jsx)(p,{}),f):Object(a.render)(Object(c.jsx)(p,{}),f)}},[[45,1,3]]]);
//# sourceMappingURL=main.18b80dc7.chunk.js.map