(this["webpackJsonpreact-ui"]=this["webpackJsonpreact-ui"]||[]).push([[0],{115:function(e,t,a){},121:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(30),l=a.n(s),c=a(80),m=a.n(c);a(94);var i=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement("img",{src:m.a,className:"App-logo",alt:"logo"})))},o=a(15),u=a(16),d=a(18),h=a(17),p=a(50),E=a(81),f=a.n(E).a.create({baseURL:"http://localhost:8080/api/"}),b=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={standings:[{id:1,player:{name:"Evan White"},wins:1,losses:0,percentage:1},{id:2,player:{name:"Zach Volz"},wins:0,losses:1,percentage:0}]},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.get("standings").then((function(t){var a=t.data;e.setState({standings:a})}))}},{key:"renderTableData",value:function(){return this.state.standings.map((function(e,t){var a=e.player,n=e.wins,s=e.losses,l=e.percentage;return r.a.createElement("tr",{key:t},r.a.createElement("td",{className:"align-middle"},t+1),r.a.createElement("td",{className:"align-middle"},a.name),r.a.createElement("td",{className:"align-middle"},n),r.a.createElement("td",{className:"align-middle"},s),r.a.createElement("td",{className:"align-middle"},(Math.round(100*l)/100).toFixed(2)))}))}},{key:"render",value:function(){return r.a.createElement(p.a,{className:"App",size:"sm",striped:!0,bordered:!0,hover:!0,variant:"dark"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Place"),r.a.createElement("th",null,"Player"),r.a.createElement("th",null,"Wins"),r.a.createElement("th",null,"Losses"),r.a.createElement("th",null,"Percentage"))),r.a.createElement("tbody",null,this.renderTableData()))}}]),a}(n.Component),g=a(14),v=a(39),x=a(37),N=a(6),y=a(9),w=a(7),k=a(34),S=a(59),O=a(47),j=function(e){var t=e.submit,a=e.submitButtonText,n=e.elements;return r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{onSubmit:t},n(),r.a.createElement(N.a.Row,{className:"pr-1 pl-1 mb-4 mt-4"},r.a.createElement(v.a,{variant:"primary",type:"submit",block:!0},a))))},C=a(66),A=function(e){var t=e.variant,a=e.heading,n=e.message,s=e.dismiss;return r.a.createElement(C.a,{variant:t,onClose:s,dismissible:!0},r.a.createElement(C.a.Heading,null,a),r.a.createElement("p",null,n))},T=a(51),D=a(64),I=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={players:[]},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.get("players").then((function(t){var a=t.data;e.setState({players:a})}))}},{key:"renderPlayerOptions",value:function(e){return e.map((function(e){return r.a.createElement("option",{value:e.id},e.name," (",e.nickname,")")}))}},{key:"render",value:function(){var e=this.props,t=e.position,a=e.name,n=e.value,s=e.change;return r.a.createElement(w.a,{sm:"12",md:"5"},r.a.createElement(D.a,null,r.a.createElement(D.a.Prepend,{className:"d-md-none d-block w-25"},r.a.createElement(D.a.Text,{className:"text-white"},t)),r.a.createElement(T.a,{as:"select",name:a,value:n,required:!0,onChange:s},r.a.createElement("option",{value:""}),this.renderPlayerOptions(this.state.players))))}}]),a}(n.Component),F=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).change=function(e){var t=e.target.name;n.props[t]!==e.target.value?n.state.changed.add(t):n.state.changed.delete(t),n.setState(Object(x.a)({},t,e.target.value))},n.submit=function(e){e.preventDefault(),f.put("games/".concat(n.props.id),n.buildGameChanges(n.state.changed)).then((function(e){n.setState({changed:new Set,success:"Successfully created game",fail:""},(function(){return n.render()}))})).catch((function(e){n.setState({fail:"Could not create game. Please try again later.",success:""},(function(){return n.render()}))}))},n.state={date:e.date,p1:e.p1,p2:e.p2,p3:e.p3,p4:e.p4,t1h:e.t1h,t2h:e.t2h,t1f:e.t1f,t2f:e.t2f,players:[],changed:new Set},n.submit=n.submit.bind(Object(g.a)(n)),n.change=n.change.bind(Object(g.a)(n)),n.dismissAlert=n.dismissAlert.bind(Object(g.a)(n)),n}return Object(u.a)(a,[{key:"dismissAlert",value:function(){this.setState({success:"",fail:""})}},{key:"renderAlert",value:function(e,t){return e?r.a.createElement(A,{variant:"success",heading:"Success",message:e,dismiss:this.dismissAlert}):t?r.a.createElement(A,{variant:"danger",heading:"Error",message:t,dismiss:this.dismissAlert}):null}},{key:"buildGameChanges",value:function(e){var t=this,a={team1:{},team2:{}};return e.forEach((function(e){switch(e){case"p1":a.team1.defense={id:parseInt(t.state[e])};break;case"p2":a.team1.offense={id:parseInt(t.state[e])};break;case"p3":a.team2.defense={id:parseInt(t.state[e])};break;case"p4":a.team2.offense={id:parseInt(t.state[e])};break;case"t1h":a.team1HalfScore=parseInt(t.state[e]);break;case"t2h":a.team2HalfScore=parseInt(t.state[e]);break;case"t1f":a.team1FinalScore=parseInt(t.state[e]);break;case"t2f":a.team2FinalScore=parseInt(t.state[e]);break;default:a[e]=parseInt(t.state[e])}})),a}},{key:"playerSelections",value:function(){return r.a.createElement(N.a.Group,{id:"players"},r.a.createElement("h4",{className:"pt-3 text-white text-center"},"Positions"),r.a.createElement("div",{className:"d-md-block d-sm-none d-none"},r.a.createElement(k.a,{className:"pad text-white"},r.a.createElement(w.a,{sm:"2"}),r.a.createElement(w.a,null,"Defense"),r.a.createElement(w.a,null,"Offense"))),r.a.createElement(N.a.Group,{id:"team-1"},r.a.createElement(N.a.Row,null,r.a.createElement(w.a,{sm:"2"},r.a.createElement(y.a,{className:"text-white"},"Team 1")),r.a.createElement(I,{value:this.state.p1,name:"p1",position:"Defense",change:this.change}),r.a.createElement(I,{value:this.state.p2,name:"p2",position:"Offense",change:this.change}))),r.a.createElement(N.a.Group,{id:"team-2"},r.a.createElement(N.a.Row,null,r.a.createElement(w.a,{sm:"2"},r.a.createElement(y.a,{className:"text-white"},"Team 2")),r.a.createElement(I,{value:this.state.p3,name:"p3",position:"Defense",change:this.change}),r.a.createElement(I,{value:this.state.p4,name:"p4",position:"Offense",change:this.change}))))}},{key:"scoreSelections",value:function(){return r.a.createElement(N.a.Group,{id:"scores"},r.a.createElement("h4",{className:"pb-2 text-white text-center"},"Scores"),r.a.createElement(N.a.Group,null,r.a.createElement(N.a.Row,null,r.a.createElement(w.a,{className:"pr-2"},r.a.createElement("h5",{className:"pb-2 text-white text-center"},"Half"),r.a.createElement(N.a.Row,null,r.a.createElement(w.a,null,r.a.createElement(y.a,{className:"text-white text-center"},"Team 1"),r.a.createElement(N.a.Control,{name:"t1h",type:"number",value:this.state.t1h,onChange:this.change,max:5,min:0,required:!0})),r.a.createElement(w.a,{xs:"2"},r.a.createElement(y.a,{className:"text-hide"},"suh"),r.a.createElement("p",{className:"text-white text-center"},"__")),r.a.createElement(w.a,null,r.a.createElement(y.a,{className:"text-white text-center"},"Team 2"),r.a.createElement(N.a.Control,{name:"t2h",type:"number",value:this.state.t2h,onChange:this.change,max:5,min:0,required:!0})))),r.a.createElement(w.a,{className:"pl-2"},r.a.createElement("h5",{className:"pb-2 text-white text-center"},"Final"),r.a.createElement(N.a.Row,null,r.a.createElement(w.a,null,r.a.createElement(y.a,{className:"text-white text-center"},"Team 1"),r.a.createElement(N.a.Control,{name:"t1f",type:"number",value:this.state.t1f,onChange:this.change,max:15,min:0,required:!0})),r.a.createElement(w.a,{xs:"2"},r.a.createElement(y.a,{className:"text-hide"},"suh"),r.a.createElement("p",{className:"text-white text-center"},"__")),r.a.createElement(w.a,null,r.a.createElement(y.a,{className:"text-white text-center"},"Team 2"),r.a.createElement(N.a.Control,{name:"t2f",type:"number",value:this.state.t2f,onChange:this.change,max:15,min:0,required:!0})))))))}},{key:"render",value:function(){var e=this;return r.a.createElement(O.a,{size:"lg",show:this.props.show,onHide:this.props.onHide,className:"dark"},r.a.createElement(O.a.Header,{closeButton:!0,className:"dark"},r.a.createElement(O.a.Title,null,"Edit Game")),r.a.createElement(O.a.Body,{className:"dark"},r.a.createElement(k.a,null,r.a.createElement(w.a,{sm:"10",md:"8",className:"pl-0 pr-0 rounded bordered border-teal mx-auto"},r.a.createElement("div",{className:"bg-dark rounded-top border-teal bordered-bottom "},r.a.createElement("h3",{className:"pb-4 pt-4 text-white text-center"},"New Game")),r.a.createElement(S.a,null,this.renderAlert(this.state.success,this.state.fail),r.a.createElement(j,{submit:this.submit,submitButtonText:"Create",elements:function(){return r.a.createElement(r.a.Fragment,null,e.playerSelections(),r.a.createElement("hr",{className:"mt-4 border-teal"}),e.scoreSelections())}}))))))}}]),a}(n.Component),G=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).showModal=n.showModal.bind(Object(g.a)(n)),n.hideModal=n.hideModal.bind(Object(g.a)(n)),n.state={show:!1},n}return Object(u.a)(a,[{key:"renderEditModal",value:function(){var e=this.props,t=e.id,a=e.played,n=e.p1,s=e.p2,l=e.p3,c=e.p4,m=e.t1h,i=e.t2h,o=e.t1f,u=e.t2f;return this.state.show?r.a.createElement(F,{show:this.state.show,onHide:this.hideModal,id:t,date:a,p1:n,p2:s,p3:l,p4:c,t1h:m,t2h:i,t1f:o,t2f:u}):null}},{key:"showModal",value:function(){var e=this;this.setState({show:!0},(function(){return e.render()}))}},{key:"hideModal",value:function(){var e=this;this.setState({show:!1},(function(){return e.render()}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.a,{variant:"outline-warning",onClick:this.showModal},"Edit"),this.renderEditModal())}}]),a}(n.Component),H=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={games:[{id:1,played:{epochSecond:"07-04-2021"},team1:{defense:{id:1,name:"Evan White"},offense:{id:2,name:"Thomas Mckenna"}},team2:{defense:{id:3,name:"Zach Volz"},offense:{id:4,name:"Manny Shahugan"}},team1HalfScore:5,team2HalfScore:3,team1FinalScore:10,team2FinalScore:6}]},n}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;f.get("games").then((function(t){var a=t.data;e.setState({games:a})}))}},{key:"renderTableData",value:function(){return this.state.games.map((function(e,t){var a=e.id,n=e.played,s=e.team1,l=e.team2,c=e.team1HalfScore,m=e.team2HalfScore,i=e.team1FinalScore,o=e.team2FinalScore,u=s.defense.name+" - "+s.offense.name,d=l.defense.name+" - "+l.offense.name,h=c+" - "+m,p=i+" - "+o,E=i>o?u:d,f=i>o?d:u;return r.a.createElement("tr",{key:a},r.a.createElement("td",{className:"align-middle text-center"},new Date(1e3*n.epochSecond).toDateString()),r.a.createElement("td",{className:"align-middle winners text-center"},E),r.a.createElement("td",{className:"align-middle losers text-center"},f),r.a.createElement("td",{className:"align-middle text-center"},h),r.a.createElement("td",{className:"align-middle text-center"},p),r.a.createElement("td",{className:"align-middle text-center"},r.a.createElement(G,{id:a,played:n,p1:s.defense.id,p2:s.offense.id,p3:l.defense.id,p4:l.offense.id,t1h:c,t2h:m,t1f:i,t2f:o})))}))}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{className:"App",size:"sm",striped:!0,bordered:!0,hover:!0,variant:"dark"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{className:"text-center"},"Date"),r.a.createElement("th",{className:"text-center"},"Winners"),r.a.createElement("th",{className:"text-center"},"Losers"),r.a.createElement("th",{className:"text-center"},"Half"),r.a.createElement("th",{className:"text-center"},"Final"),r.a.createElement("th",{className:"text-center"},"Edit"))),r.a.createElement("tbody",null,this.renderTableData())))}}]),a}(n.Component),M=a(48),P=a(36),R=a(126),q=a(127),B=(a(115),function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement(R.a,{bg:"dark",expand:"md",variant:"dark",fixed:"top"},r.a.createElement(R.a.Brand,{as:P.b,to:"/"},r.a.createElement("img",{className:"logo",src:"/logo.png",alt:""})),r.a.createElement(R.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(R.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(q.a,{className:"mr-auto"},r.a.createElement(q.a.Link,{as:P.b,to:"/standings"},"Standings"),r.a.createElement(q.a.Link,{as:P.b,to:"/games"},"Games"),r.a.createElement(M.a,{title:"New",id:"nav-dropdown"},r.a.createElement(M.a.Item,{as:P.b,to:"/new/player"},"Player"),r.a.createElement(M.a.Divider,null),r.a.createElement(M.a.Item,{as:P.b,to:"/new/game"},"Game")))))}}]),a}(n.Component)),_=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).submit=function(e){e.preventDefault();var t=n.state,a=t.firstname,r=t.lastname,s=t.nickname,l=t.email;f.post("players",{name:"".concat(a," ").concat(r),nickname:s,email:l}).then((function(e){n.setState({firstname:"",lastname:"",nickname:"",email:"",success:"Successfully created user: ".concat(a," ").concat(r," (").concat(s,")"),fail:""},(function(){return n.render()}))})).catch((function(e){n.setState({fail:"Could not create user. Please try again later.",success:""},(function(){return n.render()}))}))},n.change=function(e){var t=e.target.name;n.setState(Object(x.a)({},t,e.target.value))},n.state={firstname:"",lastname:"",nickname:"",email:"",success:"",fail:""},n.submit=n.submit.bind(Object(g.a)(n)),n.change=n.change.bind(Object(g.a)(n)),n.dismissAlert=n.dismissAlert.bind(Object(g.a)(n)),n}return Object(u.a)(a,[{key:"dismissAlert",value:function(){this.setState({success:"",fail:""})}},{key:"renderAlert",value:function(e,t){return e?r.a.createElement(A,{variant:"success",heading:"Success",message:e,dismiss:this.dismissAlert}):t?r.a.createElement(A,{variant:"danger",heading:"Error",message:t,dismiss:this.dismissAlert}):null}},{key:"render",value:function(){var e=this;return r.a.createElement(k.a,null,r.a.createElement(w.a,{sm:"8",md:"6",className:"mx-auto boxed"},r.a.createElement("h3",{className:"pb-4 pt-4 text-white text-center"},"New Player"),this.renderAlert(this.state.success,this.state.fail),r.a.createElement(j,{submit:this.submit,submitButtonText:"Create",elements:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{className:"text-white"},"First Name"),r.a.createElement(N.a.Control,{type:"text",name:"firstname",value:e.state.firstname,className:"mb-3",onChange:e.change}),r.a.createElement(y.a,{className:"text-white"},"Last Name"),r.a.createElement(N.a.Control,{type:"text",name:"lastname",value:e.state.lastname,className:"mb-3",onChange:e.change}),r.a.createElement(y.a,{className:"text-white"},"Nick Name"),r.a.createElement(N.a.Control,{type:"text",name:"nickname",value:e.state.nickname,className:"mb-3",onChange:e.change}),r.a.createElement(y.a,{className:"text-white"},"Email"),r.a.createElement(N.a.Control,{type:"email",name:"email",value:e.state.email,className:"mb-3",onChange:e.change}))}})))}}]),a}(n.Component),W=function(e){Object(d.a)(a,e);var t=Object(h.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).change=function(e){var t=e.target.name;n.setState(Object(x.a)({},t,e.target.value))},n.submit=function(e){e.preventDefault();var t=n.state,a=t.p1,r=t.p2,s=t.p3,l=t.p4,c=t.t1h,m=t.t2h,i=t.t1f,o=t.t2f;f.post("games",{played:Date,team1:{defense:{id:parseInt(a)},offense:{id:parseInt(r)}},team2:{defense:{id:parseInt(s)},offense:{id:parseInt(l)}},team1HalfScore:parseInt(c),team2HalfScore:parseInt(m),team1FinalScore:parseInt(i),team2FinalScore:parseInt(o)}).then((function(e){n.setState({date:"",p1:"",p2:"",p3:"",p4:"",t1h:"",t2h:"",t1f:"",t2f:"",success:"Successfully created game",fail:""},(function(){return n.render()}))})).catch((function(e){n.setState({fail:"Could not create game. Please try again later.",success:""},(function(){return n.render()}))}))},n.state={p1:e.p1,p2:e.p2,p3:e.p3,p4:e.p4,t1h:e.t1h,t2h:e.t2h,t1f:e.t1f,t2f:e.t2f,players:[{id:1,name:"Evan White",nickname:"EZ"}]},n.submit=n.submit.bind(Object(g.a)(n)),n.change=n.change.bind(Object(g.a)(n)),n.dismissAlert=n.dismissAlert.bind(Object(g.a)(n)),n}return Object(u.a)(a,[{key:"dismissAlert",value:function(){this.setState({success:"",fail:""})}},{key:"renderAlert",value:function(e,t){return e?r.a.createElement(A,{variant:"success",heading:"Success",message:e,dismiss:this.dismissAlert}):t?r.a.createElement(A,{variant:"danger",heading:"Error",message:t,dismiss:this.dismissAlert}):null}},{key:"playerSelections",value:function(){return r.a.createElement(N.a.Group,{id:"players"},r.a.createElement("h4",{className:"pt-3 text-white text-center"},"Positions"),r.a.createElement("div",{class:"d-md-block d-sm-none d-none"},r.a.createElement(k.a,{className:"pad text-white"},r.a.createElement(w.a,{sm:"2"}),r.a.createElement(w.a,null,"Defense"),r.a.createElement(w.a,null,"Offense"))),r.a.createElement(N.a.Group,{id:"team-1"},r.a.createElement(N.a.Row,null,r.a.createElement(w.a,{sm:"2"},r.a.createElement(y.a,{className:"text-white"},"Team 1")),r.a.createElement(I,{value:this.state.p1,name:"p1",position:"Defense",change:this.change}),r.a.createElement(I,{value:this.state.p2,name:"p2",position:"Offense",change:this.change}))),r.a.createElement(N.a.Group,{id:"team-2"},r.a.createElement(N.a.Row,null,r.a.createElement(w.a,{sm:"2"},r.a.createElement(y.a,{className:"text-white"},"Team 2")),r.a.createElement(I,{value:this.state.p3,name:"p3",position:"Defense",change:this.change}),r.a.createElement(I,{value:this.state.p4,name:"p4",position:"Offense",change:this.change}))))}},{key:"scoreSelections",value:function(){return r.a.createElement(N.a.Group,{id:"scores"},r.a.createElement("h4",{className:"pb-2 text-white text-center"},"Scores"),r.a.createElement(N.a.Group,null,r.a.createElement(N.a.Row,null,r.a.createElement(w.a,{className:"pr-2"},r.a.createElement("h5",{className:"pb-2 text-white text-center"},"Half"),r.a.createElement(N.a.Row,null,r.a.createElement(w.a,null,r.a.createElement(y.a,{className:"text-white text-center"},"Team 1"),r.a.createElement(N.a.Control,{name:"t1h",type:"number",value:this.state.t1h,onChange:this.change,max:5,min:0,required:!0})),r.a.createElement(w.a,{xs:"2"},r.a.createElement(y.a,{className:"text-hide"},"suh"),r.a.createElement("p",{className:"text-white text-center"},"__")),r.a.createElement(w.a,null,r.a.createElement(y.a,{className:"text-white text-center"},"Team 2"),r.a.createElement(N.a.Control,{name:"t2h",type:"number",value:this.state.t2h,onChange:this.change,max:5,min:0,required:!0})))),r.a.createElement(w.a,{className:"pl-2"},r.a.createElement("h5",{className:"pb-2 text-white text-center"},"Final"),r.a.createElement(N.a.Row,null,r.a.createElement(w.a,null,r.a.createElement(y.a,{className:"text-white text-center"},"Team 1"),r.a.createElement(N.a.Control,{name:"t1f",type:"number",value:this.state.t1f,onChange:this.change,max:15,min:0,required:!0})),r.a.createElement(w.a,{xs:"2"},r.a.createElement(y.a,{className:"text-hide"},"suh"),r.a.createElement("p",{className:"text-white text-center"},"__")),r.a.createElement(w.a,null,r.a.createElement(y.a,{className:"text-white text-center"},"Team 2"),r.a.createElement(N.a.Control,{name:"t2f",type:"number",value:this.state.t2f,onChange:this.change,max:15,min:0,required:!0})))))))}},{key:"render",value:function(){var e=this;return r.a.createElement(k.a,null,r.a.createElement(w.a,{sm:"10",md:"8",className:"pl-0 pr-0 rounded bordered border-teal mx-auto"},r.a.createElement("div",{className:"bg-dark rounded-top border-teal bordered-bottom "},r.a.createElement("h3",{className:"pb-4 pt-4 text-white text-center"},"New Game")),r.a.createElement(S.a,null,this.renderAlert(this.state.success,this.state.fail),r.a.createElement(j,{submit:this.submit,submitButtonText:"Create",elements:function(){return r.a.createElement(r.a.Fragment,null,e.playerSelections(),r.a.createElement("hr",{className:"mt-4 border-teal"}),e.scoreSelections())}}))))}}]),a}(n.Component),L=a(11);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(120);l.a.render(r.a.createElement(P.a,null,r.a.createElement(B,null),r.a.createElement(S.a,{className:"undernav"},r.a.createElement(L.c,null,r.a.createElement(L.a,{path:"/standings",exact:!0,component:b}),r.a.createElement(L.a,{path:"/games",exact:!0,component:H}),r.a.createElement(L.a,{path:"/new/game",exact:!0,component:W}),r.a.createElement(L.a,{path:"/new/player",exact:!0,component:_}),r.a.createElement(L.a,{path:"/",exact:!0,component:i})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},80:function(e,t,a){e.exports=a.p+"static/media/foos-icon-color.4e353b84.svg"},89:function(e,t,a){e.exports=a(121)},94:function(e,t,a){}},[[89,1,2]]]);
//# sourceMappingURL=main.84a63270.chunk.js.map