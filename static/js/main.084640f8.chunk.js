(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,t,a){e.exports=a(33)},27:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(14),r=a.n(l),m=a(5),u=a(6),i=(a(27),function(){return c.a.createElement("h1",null,"Home page")}),o=a(15),s=a(16),b=a(20),E=a(17),p=a(21),d=function(e){var t=e.tab;return c.a.createElement("li",null,c.a.createElement(m.b,{className:"button",to:"/tabs/".concat(t.id)},t.title))},f=Object(u.f)(function(e){var t=e.tabs,a=e.match;return c.a.createElement("div",null,c.a.createElement("ul",{className:"tabs"},t.map(function(e){return c.a.createElement(d,{key:e.id,tab:e})})),c.a.createElement("div",{className:"tabs__text"},t.map(function(e){return e.id===a.params.tabId?e.content:null})))}),h=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],_=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(b.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(c)))).state={tabs:h},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Tabs"),c.a.createElement(f,{tabs:this.state.tabs}))}}]),t}(n.Component),v=function(){return c.a.createElement("nav",null,c.a.createElement("ul",{className:"main-menu"},c.a.createElement("li",{className:"main-menu__li"},c.a.createElement(m.b,{className:"main-menu__link button",to:"/",exact:!0},"Home")),c.a.createElement("li",{className:"main-menu__li"},c.a.createElement(m.b,{className:"main-menu__link button",to:"/tabs"},"Tabs"))))},N=function(){return c.a.createElement("div",{className:"App"},c.a.createElement(m.a,{basename:"/react_tabs-with-router/"},c.a.createElement(v,null),c.a.createElement(u.c,null,c.a.createElement(u.a,{path:"/",component:i,exact:!0}),c.a.createElement(u.a,{path:"/tabs/:tabId?",component:_}))))};r.a.render(c.a.createElement(N,null),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.084640f8.chunk.js.map