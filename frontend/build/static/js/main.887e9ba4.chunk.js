(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},125:function(e,t,a){},133:function(e,t){},230:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(81),o=a.n(r),c=(a(100),a(19)),u=a(2),m=(a(101),function(){return l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(c.b,{to:"/"},"Survey")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/dashboard"},"Dashboard")),l.a.createElement("li",null,l.a.createElement(c.b,{to:"/admin"},"Admin"))))}),i=function(){return l.a.createElement("div",{style:{backgroundColor:"white",position:"absolute",top:0,bottom:0,left:0,right:0}},l.a.createElement("div",{style:{position:"absolute",top:"50%",left:"50%",height:"150px",width:"500px",margin:"-75px 0 0 -250px",padding:"20px",fontFamily:"Arial",fontSize:"75px",textAlign:"center",textTransform:"uppercase",textShadow:"0 0 80px red, 0 0 30px FireBrick, 0 0 6px DarkRed",color:"red"}},l.a.createElement("p",{style:{color:"#fff",textShadow:"0 0 80px #ffffff, 0 0 30px #008000, 0 0 6px #0000ff"}},"error"),l.a.createElement("p",{id:"code"},"404")))},s=a(34),d=a(3),p=a(90),f=a(52),E=(a(106),a(89)),h=(a(107),a(33)),b=a(4),g=a.n(b),v="http://3.7.46.135:8000";g.a.defaults.headers.common.User="qxf2";var y=[];g.a.get("".concat(v,"/survey/admin/employees")).then((function(e){for(var t in e.data)"y"===e.data[t].status.toLowerCase()&&y.push({label:e.data[t].fullName,value:e.data[t].email})})).catch((function(e){console.log(e.response)}));var x=y;var S=function(e){var t=e.setState,a=Object(p.a)(e,["setState"]),r=l.a.useState([]),o=Object(d.a)(r,2),c=o[0],u=o[1],m=l.a.useState([]),i=Object(d.a)(m,2),s=i[0],b=i[1],g=l.a.useState([]),v=Object(d.a)(g,2),y=v[0],S=v[1];return Object(n.useEffect)((function(){t("selectedHelp",c)}),[c,t]),Object(n.useEffect)((function(){t("tags",s)}),[s,t]),Object(n.useEffect)((function(){t("selectedHelped",y)}),[y,t]),l.a.createElement("div",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("h3",null,"Enter Email ID"),l.a.createElement("input",{name:"email",type:"email",onChange:a.handleChange,className:"form-control"})),l.a.createElement("div",{className:"new-tech"},l.a.createElement("h3",null,"What new technologies did you learn this week?",l.a.createElement("sub",{id:"reference"},l.a.createElement("a",{href:"https://wiki.qxf2.com/home/r-d/newbie-orientation/what-technologies-did-you-work-on-this-week"},"Help"))),l.a.createElement(E.a,{tags:s,onChange:function(e){return b(e)}}),l.a.createElement("br",null)),l.a.createElement("div",{className:"who-helped"},l.a.createElement("h3",null,"Who helped you this week?",l.a.createElement("sub",{id:"reference"},l.a.createElement("a",{href:"https://wiki.qxf2.com/home/r-d/newbie-orientation/helping-others"},"Help"))),l.a.createElement(f.a,{options:x,value:c,onChange:u,labelledBy:"Select"}),l.a.createElement("br",null)),l.a.createElement("div",{className:"whom-did-you-help"},l.a.createElement("h3",null,"Whom did you help this week?",l.a.createElement("sub",{id:"reference"},l.a.createElement("a",{href:"https://wiki.qxf2.com/home/r-d/newbie-orientation/helping-others"},"Help"))),l.a.createElement(f.a,{options:x,value:y,onChange:S,labelledBy:"Select"}),l.a.createElement("br",null)),l.a.createElement("div",{className:"col-md-4 offset-md-4"},l.a.createElement(h.a,{variant:"primary",size:"lg",block:!0,button:"true",disabled:a.step.isLast(),onClick:a.next},"Submit")))};g.a.defaults.headers.common.User="qxf2";var j=function(e){var t=e.state.email,a=e.state.tags.toString(),r=JSON.parse(JSON.stringify(e.state.selectedHelp)),o=JSON.parse(JSON.stringify(e.state.selectedHelped)),c=Object(n.useState)([]),u=Object(d.a)(c,2),m=u[0],i=u[1],s=Object(n.useState)(!0),p=Object(d.a)(s,2),f=p[0],E=p[1];return Object(n.useEffect)((function(){g.a.get("".concat(v,"/survey/admin/employees")).then((function(e){i(e.data),E(!1)}))}),[]),function(){if(!1===f){if(!0===function(){var e=!1,a=0;for(a=0;a<=m.length-1;a++)if(m[a].email===t){e=!0;break}return e}()){var e={userMail:t,listHelp:r,listHelped:o,listTags:a};return""!==e?g.a.post("".concat(v,"/survey/response"),{data:e}).then((function(e){console.log("Post request: Success")})).catch((function(e){console.log("Post request: Failed"),console.log(e.response)})):alert("Could not pass empty data"),l.a.createElement("div",{className:"jumbotron text-center"},l.a.createElement("h1",{className:"display-3"},"Thank You!"),l.a.createElement("p",{className:"lead"},l.a.createElement("strong",null,"Here is what we recorded!")),l.a.createElement("p",null,l.a.createElement("b",null,"E-mail:")," ",t),l.a.createElement("p",null,l.a.createElement("b",null,"Who helped you?:")," ",r.map((function(e){return e.label})).join(", ")),l.a.createElement("p",null,l.a.createElement("b",null,"Whom did you help?:")," ",o.map((function(e){return e.label})).join(", ")," "),l.a.createElement("p",null,l.a.createElement("b",null,"Tags:")," ",a," "))}return l.a.createElement("div",{className:"jumbotron text-center"},l.a.createElement("p",{className:"lead"},l.a.createElement("strong",null,"Please enter valid email")))}return l.a.createElement("span",null,"Loading.....")}()};var N=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(s.b,null,l.a.createElement(s.a,{component:S}),l.a.createElement(s.a,{component:j})))},k=a(15),O=a.n(k),w=a(49),C=a(32),L=a(50),A=a(23),D=(a(125),"361336870916-q88h5gho5ee7p1mudg32je26th6pjlv5.apps.googleusercontent.com");function q(e){var t=e.Login,a=Object(n.useState)(!0),r=Object(d.a)(a,2),o=r[0],c=r[1],u=Object(n.useState)(!1),m=Object(d.a)(u,2),i=m[0],s=m[1],p=Object(n.useState)(!1),f=Object(d.a)(p,2),E=f[0],h=f[1],b=Object(n.useState)(null),g=Object(d.a)(b,2),y=g[0],x=g[1];return l.a.createElement("div",{className:"g-signin"},o?l.a.createElement("h3",null,"Sign in with Google"):null,o?l.a.createElement(A.GoogleLogin,{clientId:D,buttonText:"Sign In",onSuccess:function(e){var a=e.getAuthResponse().id_token;x(e.profileObj.email),c(!1);var n=new XMLHttpRequest;n.open("POST","".concat(v,"/survey/admin/admin-login")),n.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),n.setRequestHeader("User","qxf2"),n.onload=function(){if(200===n.status){t(!0,e.profileObj.email)}else h(!0)},n.send("idtoken="+a),s(!0)},onFailure:function(e){console.log("Login Failed:",e)},cookiePolicy:"single_host_origin",isSignedIn:!0}):null,E?l.a.createElement("span",null,"Logged in as ",y,l.a.createElement("br",null)," ",l.a.createElement("h5",null,"Your Unauthorized to view this page")):null,i?l.a.createElement(A.GoogleLogout,{clientId:D,buttonText:"Sign Out",onLogoutSuccess:function(){alert("You have been logged out successfully"),console.clear(),c(!0),s(!1),h(!1)}}):null)}g.a.defaults.headers.common.User="qxf2";var B=function(){var e=l.a.useState([]),t=Object(d.a)(e,2),a=t[0],r=t[1],o=l.a.useState([]),c=Object(d.a)(o,2),u=c[0],m=c[1];Object(n.useEffect)((function(){g.a.get("".concat(v,"/survey/admin/employees")).then((function(e){m(e.data)}))}),[]);var i=function(e){r(Object(L.a)(Object(L.a)({},a),{},Object(C.a)({},e.target.name,e.target.value.trim())))},s={firstName:a["employee-first-name-input"],lastName:a["employee-last-name-input"],email:a["email-input"],fullName:a["employee-first-name-input"]+" "+a["employee-last-name-input"],status:a["status-input"]};return l.a.createElement("div",{className:"panel panel-primary"},l.a.createElement("div",{className:"panel-heading"},l.a.createElement("h3",{className:"panel-title"},l.a.createElement("strong",null,"Add Employee"))),l.a.createElement("div",{className:"panel-body"},l.a.createElement("form",null,l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"employee-first-name-input"},"First Name"),l.a.createElement("input",{className:"form-control",name:"employee-first-name-input",type:"text",onChange:i})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"employee-last-name-input"},"Last Name"),l.a.createElement("input",{className:"form-control",name:"employee-last-name-input",type:"text",onChange:i})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"email-input"},"E-Mail"),l.a.createElement("input",{className:"form-control",name:"email-input",type:"text",onChange:i})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"status-input"},"Employee Status (Y/N)"),l.a.createElement("input",{className:"form-control",name:"status-input",type:"text",onChange:i})),l.a.createElement("div",{className:"col-md-4 offset-md-4"},l.a.createElement(h.a,{variant:"primary",size:"lg",block:!0,onClick:function(e){if(e.preventDefault(),""!==a){var t=!1,n=0;for(n=0;n<=u.length-1;n++)if(u[n].email===s.email){t=!0;break}!1===t?g.a.post("".concat(v,"/survey/admin/new_employee"),{data:s}).then((function(e){console.log("Post request: Success")})).catch((function(e){console.log("Post request: Failed"),console.log(e.response)})):alert("Email already exists")}}},"Submit")))))},H=function(){var e="".concat(v,"/survey/admin/employees"),t=Object(n.useState)([]),a=Object(d.a)(t,2),r=a[0],o=a[1],c=function(){var t=Object(w.a)(O.a.mark((function t(){var a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.get(e);case 2:a=t.sent,o(a.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(n.useEffect)((function(){c()}),[]);return l.a.createElement("div",null,l.a.createElement("h1",{id:"title"},"Employee Table"),l.a.createElement("table",{id:"employees"},l.a.createElement("tbody",null,l.a.createElement("tr",null,["ID","first_name","last_name","active_flag","email","operation"].map((function(e,t){return l.a.createElement("th",{key:t},e.toUpperCase())}))),r&&r.map((function(t){var a=t.ID,n=t.firstName,c=t.lastName,u=t.status,m=t.email;return l.a.createElement("tr",{key:a},l.a.createElement("td",null,a),l.a.createElement("td",null,n),l.a.createElement("td",null,c),l.a.createElement("td",null,u),l.a.createElement("td",null,m),l.a.createElement("td",{className:"operation"},l.a.createElement("button",{className:"button",onClick:function(){return t=a,void g.a.delete("".concat(e,"/").concat(t)).then((function(e){var a=r.filter((function(e){return t!==e.ID}));o(a)}));var t}},"Delete")))})))),l.a.createElement("br",null))},F=function(){var e="".concat(v,"/survey/admin/not_responded_users"),t=Object(n.useState)([]),a=Object(d.a)(t,2),r=a[0],o=a[1],c=function(){var t=Object(w.a)(O.a.mark((function t(){var a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.get(e);case 2:a=t.sent,o(a.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(n.useEffect)((function(){c()}),[]);return l.a.createElement("div",null,l.a.createElement("h1",{id:"title"},"Employees yet to Respond"),l.a.createElement("table",{id:"employees"},l.a.createElement("tbody",null,l.a.createElement("tr",null,["ID","Name"].map((function(e,t){return l.a.createElement("th",{key:t},e.toUpperCase())}))),r&&r.map((function(e){var t=e.ID,a=e.firstName,n=e.lastName;return l.a.createElement("tr",{key:t},l.a.createElement("td",null,t),l.a.createElement("td",null,a," ",n))})))),l.a.createElement("br",null))},R=function(){var e=l.a.useState(!1),t=Object(d.a)(e,2),a=t[0],n=t[1],r=l.a.useState(null),o=Object(d.a)(r,2),c=o[0],u=o[1];return l.a.createElement("div",{className:"App"},!0===a?l.a.createElement(l.a.Fragment,null,l.a.createElement("br",null),l.a.createElement("span",{style:{float:"right",marginRight:"-350px"}},l.a.createElement("p",{style:{float:"center"}},"Logged in as ",c),l.a.createElement(A.GoogleLogout,{clientId:"361336870916-q88h5gho5ee7p1mudg32je26th6pjlv5.apps.googleusercontent.com",buttonText:"Sign Out",onLogoutSuccess:function(){alert("You have been logged out successfully"),console.clear(),n(!1)}})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(H,null),l.a.createElement(B,null),l.a.createElement(F,null)):l.a.createElement(q,{Login:function(e,t){!0===e&&(n(!0),u(t))}}))},I=a(88),P=(a(134),a(135),a(51)),T={labels:["Shivahari","Arunkumar","Rahul","Raji","Avinash","Smitha","Rohit"],datasets:[{label:"Symmetry Score",backgroundColor:"LightBlue",borderColor:"black",borderWidth:1,hoverBackgroundColor:"blue",hoverBorderColor:"black",data:[234,212,110,107,67,55,16]}]},W={labels:["Rohan Joshi","Mohan Kumar","Kiran CV","Akkul DN","Rajkumar","Smitha","Rohan Dudam"],datasets:[{label:"Symmetry Score",backgroundColor:"LightBlue",borderColor:"black",borderWidth:1,hoverBackgroundColor:"blue",hoverBorderColor:"black",data:[91,100,72,91,67,66,54]}]},_=[{text:"Python",value:75},{text:"Git",value:55},{text:"AWS",value:64},{text:"API",value:33},{text:"DynamoDB",value:43},{text:"Elastic Beanstalk",value:26},{text:"Github Actions",value:87},{text:"AWS Lambda",value:50},{text:"Neo4j",value:23},{text:"MySQL",value:35},{text:"Py2Neo",value:23},{text:"SOAP",value:31},{text:"Flask",value:12},{text:"Django-REST",value:15},{text:"GraphQL",value:30},{text:"Selenium",value:18}],G=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"Survey Analysis Dashboard"),l.a.createElement("div",{style:{backgroundColor:"#efefef",height:"300px",width:"100%"}},l.a.createElement(I.a,{words:_})),l.a.createElement("div",null,l.a.createElement("h2",null,"Symmetry Score"),l.a.createElement(P.HorizontalBar,{data:T})),l.a.createElement("div",null,l.a.createElement("h2",null,"Overall Data"),l.a.createElement(P.HorizontalBar,{data:W})))};var J=function(){return l.a.createElement(c.a,null,l.a.createElement("div",{className:"App"},l.a.createElement(m,null),l.a.createElement("div",{id:"page-body"},l.a.createElement(u.c,null,l.a.createElement(u.a,{path:"/",component:N,exact:!0}),l.a.createElement(u.a,{path:"/survey",component:N}),l.a.createElement(u.a,{path:"/admin",component:R}),l.a.createElement(u.a,{path:"/dashboard",component:G}),l.a.createElement(u.a,{component:i})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},95:function(e,t,a){e.exports=a(230)}},[[95,1,2]]]);
//# sourceMappingURL=main.887e9ba4.chunk.js.map