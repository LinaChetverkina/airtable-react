(this["webpackJsonpairtable-react"]=this["webpackJsonpairtable-react"]||[]).push([[0],{40:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),r=a(14),s=a.n(r),i=a(4),l=a.n(i),u=a(15),o=a(5),b=a(16),d=a.n(b),j=(a(40),a(0)),p={ru:{placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043a\u043e\u0434 \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u043d\u0438\u044f",button:"\u041d\u0430\u0439\u0442\u0438",title:"\u0414\u043e\u0431\u0440\u044b\u0439 \u0434\u0435\u043d\u044c,",subtitle:"\u0412\u0430\u0448 \u043a\u043e\u0434 \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u043d\u0438\u044f"},en:{placeholder:"Type your tracking number here",button:"Search",title:"G'day!",subtitle:"Your tracking number is"}};var h=function(){var e=Object(n.useState)(""),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)({data:[]}),s=Object(o.a)(r,2),i=s[0],b=s[1],h=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.post("".concat("https://app.finefindersonline.com/api","/track"),{trackingNumber:a});case 2:t=e.sent,b(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),m="en"===new URLSearchParams(window.location.search).get("lang")?"en":"ru";return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"button-wrapper",children:[Object(j.jsx)("input",{type:"text",placeholder:p[m].placeholder,className:"input-tracking",onChange:function(e){c(e.target.value)}}),Object(j.jsx)("button",{type:"button",className:"search-button",onClick:h,children:p[m].button})]}),i.data.length>0?Object(j.jsxs)("div",{className:"result-container",children:[Object(j.jsx)("h1",{className:"title",children:p[m].title}),Object(j.jsxs)("p",{className:"sub-title",children:[p[m].subtitle," ",i.tracking_number]}),Object(j.jsx)("div",{className:"results",children:i.data.map((function(e,t){return Object(j.jsxs)("div",{className:"result ".concat(t%2===1?"white":""),children:[Object(j.jsx)("p",{className:"date",children:e.date}),Object(j.jsx)("p",{className:"status",children:e.stage})]},t)}))})]}):null]})})};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.35bd00a5.chunk.js.map