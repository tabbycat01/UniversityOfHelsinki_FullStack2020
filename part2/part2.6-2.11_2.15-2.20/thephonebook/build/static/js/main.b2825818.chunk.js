(this.webpackJsonpthephonebook=this.webpackJsonpthephonebook||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},19:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),r=t(13),c=t.n(r),u=(t(19),t(2)),i=function(e){var n=e.newFilter,t=e.handleFilterChange;return o.a.createElement("div",null,"filter shown with:",o.a.createElement("input",{value:n,onChange:t}))},l=function(e){var n=e.newName,t=e.handleNameChange,a=e.newNumber,r=e.handleNumberChange,c=e.handleSubmit;return o.a.createElement("form",{onSubmit:c},o.a.createElement("div",null,"name: ",o.a.createElement("input",{value:n,onChange:t})),o.a.createElement("div",null,"number: ",o.a.createElement("input",{value:a,onChange:r})),o.a.createElement("div",null,o.a.createElement("button",{type:"submit"},"add")))},s=function(e){var n=e.personsToShow,t=e.handleDelete;return o.a.createElement("div",null,n.map((function(e,n){return o.a.createElement("p",{key:n},e.name," ",e.number,"  ",o.a.createElement("button",{onClick:function(){return t({id:e.id,name:e.name,number:e.number})}}," delete "))})))},m=function(e){var n=e.newNotification,t=e.success;if(""===n)return"";var a={color:"red",background:"lightgrey",fontSize:20,borderStyle:"solid",borderRadius:5,padding:10,marginBottom:10};return t&&(a.color="green"),o.a.createElement("div",{style:a},n)},d=t(3),f=t.n(d),h=function(){return f.a.get("/api/persons").then((function(e){return e.data}))},b=function(e){var n=e.number,t=e.name;return f.a.post("/api/persons",{name:t,number:n}).then((function(e){return e.data}))},p=function(e){return f.a.delete("/api/persons"+"/".concat(e))},v=function(e){var n=e.person;return console.log("here inside update",n.id),f.a.put("".concat("/api/persons","/").concat(n.id),n).then((function(e){return e.data}))},g=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(""),d=Object(u.a)(c,2),f=d[0],g=d[1],w=Object(a.useState)(""),E=Object(u.a)(w,2),N=E[0],y=E[1],S=Object(a.useState)(""),j=Object(u.a)(S,2),k=j[0],O=j[1],C=Object(a.useState)(""),D=Object(u.a)(C,2),F=D[0],T=D[1],_=Object(a.useState)(null),x=Object(u.a)(_,2),B=x[0],J=x[1];Object(a.useEffect)((function(){h().then((function(e){return r(e)}))}),[]);var W=k?t.filter((function(e){return e.name.toLowerCase().includes(k)})):t,z=function(e){var n=e.Notification,t=e.success;T(n),J(t),setTimeout((function(){T(""),J(null)}),5e3)};return o.a.createElement("div",null,o.a.createElement("h2",null,"Phonebook"),o.a.createElement(m,{newNotification:F,success:B}),o.a.createElement(i,{newFilter:k,handleFilterChange:function(e){return O(e.target.value)}}),o.a.createElement("h2",null,"add a new"),o.a.createElement(l,{newName:f,handleNameChange:function(e){return g(e.target.value)},newNumber:N,handleNumberChange:function(e){return y(e.target.value)},handleSubmit:function(e){e.preventDefault();var n=t.find((function(e){return e.name===f}));if(console.log(n),"undefined"!==typeof n&&n.number!==N)window.confirm("".concat(n.name," is already added to phonebook, replace the old number with a new one?"))&&(n.number=N,console.log(n),function(e){var n=e.person_to_replace;v({person:n}).then((function(e){return r(t.map((function(e){return e.name===n.name?n:e})))})).catch((function(e){console.log("error"),z({Notification:"".concat(n," does not exist anymore in the phonebook"),success:!1})}))}({person_to_replace:n}),z({Notification:"Updated ".concat(n.name,"'s number"),success:!0}));else if(t.map((function(e){return e.number})).includes(N)){var a=t.find((function(e){return e.number===N}));z({Notification:"The number: ".concat(N," is already registered under ").concat(a.name),success:!1})}else b({name:f,number:N}).then((function(e){r(t.concat(e)),z({Notification:"Added ".concat(f," successfully"),success:!0})})).catch((function(e){z({Notification:"failed: ".concat(e.response.data),success:!1})}));g(""),y("")}}),o.a.createElement("h2",null,"Numbers"),o.a.createElement(s,{personsToShow:W,handleDelete:function(e){var n=e.id,a=e.name,o=e.number;window.confirm("Delete ".concat(a,"?"))&&(p(n).catch((function(e){console.log("error"),z({Notification:"".concat(a," does not exist anymore in the phonebook"),success:!1})})),r(t.filter((function(e){return e.name!==a&&e.number!==o}))),console.log("deleted",a),z({Notification:"Deleted ".concat(a," successfully"),success:!0}))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[14,1,2]]]);
//# sourceMappingURL=main.b2825818.chunk.js.map