(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],[,,,,,function(e,t,a){e.exports=a.p+"static/media/logo.1090473d.svg"},function(e,t,a){e.exports=a.p+"static/media/phone.58d7e3d6.svg"},function(e,t,a){e.exports=a(13)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(4),r=a.n(c),i=(a(12),a(5)),o=a.n(i),s=a(1),u=a(2),m=[{page:"products",links:[{label:"payment",icon:l.a.createElement(s.d,null),url:"/products"},{label:"terminal",icon:l.a.createElement(s.d,null),url:"/products"},{label:"connect",icon:l.a.createElement(s.d,null),url:"/products"}]},{page:"developers",links:[{label:"plugins",icon:l.a.createElement(s.b,null),url:"/products"},{label:"libraries",icon:l.a.createElement(s.b,null),url:"/products"},{label:"help",icon:l.a.createElement(s.b,null),url:"/products"},{label:"billing",icon:l.a.createElement(s.b,null),url:"/products"}]},{page:"company",links:[{label:"about",icon:l.a.createElement(s.c,null),url:"/products"},{label:"customers",icon:l.a.createElement(s.c,null),url:"/products"}]}],b=l.a.createContext();function p(e){var t=e.children,a=Object(n.useState)(!1),c=Object(u.a)(a,2),r=c[0],i=c[1],o=Object(n.useState)(!1),s=Object(u.a)(o,2),p=s[0],d=s[1],E=Object(n.useState)({}),v=Object(u.a)(E,2),g=v[0],f=v[1],h=Object(n.useState)({page:"",links:[]}),N=Object(u.a)(h,2),O=N[0],S=N[1];return l.a.createElement(b.Provider,{value:{isSubmenuOpen:p,isSidebarOpen:r,openSubmenu:function(e,t){var a=m.find((function(t){return t.page===e}));S(a),f(t),d(!0)},closeSubmenu:function(){d(!1)},openSidebar:function(){i(!0)},closeSidebar:function(){i(!1)},location:g,page:O}},t)}function d(){return Object(n.useContext)(b)}var E=function(){var e=d(),t=e.openSidebar,a=e.openSubmenu;e.closeSubmenu;function n(e){var t=e.target.textContent,n=e.target.getBoundingClientRect(),l=(n.left+n.right)/2,c=n.bottom-3;a(t,{centerpoint:l,bottompoint:c})}return l.a.createElement("nav",{className:"nav"},l.a.createElement("div",{className:"nav-center"},l.a.createElement("div",{className:"nav-header"},l.a.createElement("img",{className:"nav-logo",src:o.a,alt:"stripelogo"}),l.a.createElement("button",{className:"btn toggle-btn",onClick:t},l.a.createElement(s.a,null))),l.a.createElement("ul",{className:"nav-links"},l.a.createElement("li",null,l.a.createElement("button",{className:"link-btn",onMouseOver:n},"products")),l.a.createElement("li",null,l.a.createElement("button",{className:"link-btn",onMouseOver:n},"developers")),l.a.createElement("li",null,l.a.createElement("button",{className:"link-btn",onMouseOver:n},"company"))),l.a.createElement("button",{className:"btn signin-btn"},"Sign in")))},v=a(6),g=a.n(v),f=function(){var e=d().closeSubmenu;return l.a.createElement("section",{className:"hero",onMouseOver:e},l.a.createElement("div",{className:"hero-center"},l.a.createElement("article",{className:"hero-info"},l.a.createElement("h1",null,"Payments infrastructure for the internet"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, iste exercitationem rem corporis laudantium sed cum distinctio reiciendis quaerat architecto culpa esse, corrupti omnis sit labore, nulla dicta nisi cupiditate."),l.a.createElement("button",{className:"btn"},"Start now")),l.a.createElement("article",{className:"hero-images"},l.a.createElement("img",{src:g.a,className:"phone-img"}))))},h=function(){var e=d(),t=e.isSidebarOpen,a=e.closeSidebar;return l.a.createElement("aside",{className:"".concat(t?"sidebar-wrapper show":"sidebar-wrapper"," ")},l.a.createElement("div",{className:"sidebar"},l.a.createElement("button",{className:"close-btn",onClick:a},l.a.createElement(s.e,null)),l.a.createElement("div",{className:"sidebar-links"},m.map((function(e,t){var a=e.links,n=e.page;return l.a.createElement("article",{key:t},l.a.createElement("h4",null,n," "),l.a.createElement("div",{className:"sidebar-sublinks"},a.map((function(e,t){var a=e.url,n=e.icon,c=e.label;return l.a.createElement("a",{key:t,href:a},n,c)}))))})))))},N=function(){var e=d(),t=e.isSubmenuOpen,a=e.location,c=e.page,r=c.page,i=c.links,o=Object(n.useRef)(null),s=Object(n.useState)("col-2"),m=Object(u.a)(s,2),b=m[0],p=m[1];return Object(n.useEffect)((function(){p("col-2");var e=o.current,t=a.centerpoint,n=a.bottompoint;e.style.left="".concat(t,"px"),e.style.top="".concat(n,"px"),3===i.length?p("col-3"):i.length>3&&p("col-4")}),[a,i]),l.a.createElement("aside",{className:"".concat(t?"submenu show":"submenu"),ref:o},l.a.createElement("h4",null,r),l.a.createElement("div",{className:"submenu-center ".concat(b)},i.map((function(e,t){var a=e.label,n=e.icon,c=e.url;return l.a.createElement("a",{key:t,href:c},n,a)}))," "))};var O=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(E,null),l.a.createElement(h,null),l.a.createElement(f,null),l.a.createElement(N,null))};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(p,null,l.a.createElement(O,null))),document.getElementById("root"))}],[[7,1,2]]]);
//# sourceMappingURL=main.006af0df.chunk.js.map