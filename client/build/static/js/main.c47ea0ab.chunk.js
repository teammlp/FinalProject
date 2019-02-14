(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a.p+"static/media/tracker.563db0d5.jpg"},27:function(e,t,a){e.exports=a(73)},33:function(e,t,a){},54:function(e,t,a){},58:function(e,t,a){},61:function(e,t,a){},63:function(e,t,a){},65:function(e,t,a){},67:function(e,t,a){},69:function(e,t,a){},71:function(e,t,a){},73:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(24),o=a.n(r),l=(a(33),a(6)),i=a(7),c=a(9),m=a(8),u=a(10),d=a(2),h=a(77),p=a(78),f=a(79),g=a(76),b=a(75),v=a(12),E=a.n(v),w={getUserbyUsernamePass:function(e,t){return E.a.get("/api/get/user/login?username=".concat(e,"&password=").concat(t))},getUser:function(e){return E.a.get("/api/get/user/".concat(e))},saveUser:function(e,t,a){return E.a.put("/api/user",{username:e,password:t,email:a})},updateUser:function(e,t,a){return E.a.post("/api/user",{id:e,username:t,password:a})},deleteUser:function(e){return E.a.delete("/api/delete/user/".concat(e))},pleasegodlogin:function(e){return E.a.post("/api/user/login",e)},getJobLists:function(){return E.a.get("/api/jobLists")},getJobList:function(e){return E.a.get("/api/jobLists/"+e)},deleteJobList:function(e){return E.a.delete("/api/jobLists/"+e)},saveJobList:function(e){return E.a.post("/api/jobLists",e)}},j=(a(54),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={value:"",username:"",password:"",passwordRepeat:"",email:"",emailRepeat:""},a.handleUsernameValidation=a.handleUsernameValidation.bind(Object(d.a)(Object(d.a)(a))),a.handlePasswordValidation=a.handlePasswordValidation.bind(Object(d.a)(Object(d.a)(a))),a.handlePasswordRepeat=a.handlePasswordRepeat.bind(Object(d.a)(Object(d.a)(a))),a.handleEmailValidation=a.handleEmailValidation.bind(Object(d.a)(Object(d.a)(a))),a.handleEmailRepeat=a.handleEmailRepeat.bind(Object(d.a)(Object(d.a)(a))),a.signUpUser=a.signUpUser.bind(Object(d.a)(Object(d.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleUsernameValidation",value:function(e){var t=this.refs.username.value,a=this.refs.usernameForm,n=this.refs.usernameFeedback;this.setState({username:t}),t.length<6?(a.classList.remove("has-success"),a.classList.add("has-error"),n.textContent="username must be at least 6 characters long"):(a.classList.remove("has-error"),a.classList.add("has-success"),n.textContent="Username valid!")}},{key:"handlePasswordValidation",value:function(e){var t=this.refs.password.value,a=this.refs.passwordForm,n=this.refs.passwordFeedback;this.setState({password:t});/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/.test(t)?(a.classList.remove("has-error"),a.classList.add("has-success"),n.textContent="Password set correctly!"):(a.classList.remove("has-success"),a.classList.add("has-error"),n.textContent="Password must contain at least 1 lowercase letter, 1 uppercase letter, 1 number, 1 special character and must be at least 8 characters long.")}},{key:"handlePasswordRepeat",value:function(e){var t=this.state.password,a=this.refs.repeatPassword.value,n=this.refs.repeatPasswordForm,s=this.refs.repeatPasswordFeedback;this.setState({passwordRepeat:a}),t!==a?(n.classList.remove("has-success"),n.classList.add("has-error"),s.textContent="Passwords Don't Match"):(n.classList.remove("has-error"),n.classList.add("has-success"),s.textContent="Passwords Match!")}},{key:"handleEmailValidation",value:function(e){var t=this.refs.email.value,a=this.refs.emailForm,n=this.refs.emailFeedback,s=this.refs.emailAdditionalFeedback;this.setState({email:t}),/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(t)?(a.classList.remove("has-error"),a.classList.add("has-success"),n.textContent="Valid Email!",s.textContent=""):(a.classList.remove("has-success"),a.classList.add("has-error"),n.textContent="Invalid Email",s.textContent="Ex: someone@example.com")}},{key:"handleEmailRepeat",value:function(e){var t=this.refs.emailRepeat.value,a=this.refs.emailRepeatForm,n=this.refs.emailRepeatFeedback;this.setState({emailRepeat:t}),/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(t)?(a.classList.remove("has-error"),a.classList.add("has-success"),n.textContent="Emails Match!"):(a.classList.remove("has-success"),a.classList.add("has-error"),n.textContent="Emails Don't Match")}},{key:"signUpUser",value:function(e){var t=e.username;w.saveUser(e.username,e.password,e.email).then(function(e){console.log(e),(e.data.message?e.data.message:"").includes("duplicate")?alert("Sorry, that username has been taken"):"OK"===e.statusText&&(this.props.authenticate(),sessionStorage.setItem("userAuth","yes"),sessionStorage.setItem("userUsername",t),this.setState({redirectToReferrer:!0}))}.bind(this)).catch(function(e){console.log(e)})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,email:this.state.email,password:this.state.password};if(!t.username||!t.email||!t.password)return alert("Please don't leave fields blank");this.signUpUser(t),this.setState({value:"",username:"",password:"",passwordRepeat:"",email:"",emailRepeat:"",redirectToReferrer:!1})}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("div",{id:"registration-container"},s.a.createElement("h1",null,"Registration"),s.a.createElement("section",{className:"container"},s.a.createElement("div",{className:"container-page"},s.a.createElement("form",{onSubmit:this.handleSubmit.bind(this)},s.a.createElement("div",{className:""},s.a.createElement("div",{id:"username-form",ref:"usernameForm",className:"form-group col-lg-12"},s.a.createElement("input",{type:"",name:"",ref:"username",placeholder:"Username",className:"form-control",id:"username-input",value:this.state.username,onChange:this.handleUsernameValidation}),s.a.createElement("small",{id:"username-feedback",ref:"usernameFeedback",className:""})),s.a.createElement("div",{id:"password-form",className:"form-group col-lg-12",ref:"passwordForm"},s.a.createElement("input",{type:"password",name:"",placeholder:"Password",ref:"password",className:"form-control",id:"password-input",value:this.state.password,onChange:this.handlePasswordValidation}),s.a.createElement("small",{id:"password-feedback",ref:"passwordFeedback",className:""})),s.a.createElement("div",{id:"repeat-password-form",className:"form-group col-lg-12",ref:"repeatPasswordForm"},s.a.createElement("input",{type:"password",name:"",placeholder:"Confirm Password",ref:"repeatPassword",className:"form-control",id:"repeat-password-input",value:this.state.passwordRepeat,onChange:this.handlePasswordRepeat}),s.a.createElement("small",{id:"repeat-password-feedback",className:"",ref:"repeatPasswordFeedback"})),s.a.createElement("div",{id:"email-form",className:"form-group col-lg-12",ref:"emailForm"},s.a.createElement("input",{type:"email",name:"",placeholder:"Email Address",ref:"email",className:"form-control",id:"email-input",value:this.state.email,onChange:this.handleEmailValidation}),s.a.createElement("p",{id:"email-feedback",className:"",ref:"emailFeedback"}),s.a.createElement("small",{id:"email-additional-feedback",ref:"emailAdditionalFeedback",className:"form-text text-muted"})),s.a.createElement("div",{id:"email-repeat-form",className:"form-group col-lg-12",ref:"emailRepeatForm"},s.a.createElement("input",{type:"email",name:"",ref:"emailRepeat",placeholder:"Confirm Email Address",className:"form-control",id:"repeat-email-input",value:this.state.emailRepeat,onChange:this.handleEmailRepeat}),s.a.createElement("small",{id:"email-repeat-feedback",className:"",ref:"emailRepeatFeedback"}))),s.a.createElement("div",{className:""},s.a.createElement("button",{type:"submit",className:"btn btn-primary register"},"Register"))),s.a.createElement("div",{className:"login-help"},s.a.createElement("p",null,"Already have an account? ",s.a.createElement(b.a,{to:"/login"}," Login ")))))))}}]),t}(n.Component)),y=(a(58),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).loginUser=function(e){var t=e.username;w.pleasegodlogin({username:e.username,password:e.password}).then(function(e){console.log(e.data),e.data.success?(this.props.authenticate(),sessionStorage.setItem("userAuth","yes"),sessionStorage.setItem("userUsername",t),this.setState({redirectToReferrer:!0})):alert("Username or password is Incorrect.")}.bind(Object(d.a)(Object(d.a)(a)))).catch(function(e){alert("Wrong username or password"),console.log("NOT IN DATABASE"),console.log(e)}),a.setState({username:"",password:""})},a.state={username:"",password:"",redirectToReferrer:!1},a.handleUsernameChange=a.handleUsernameChange.bind(Object(d.a)(Object(d.a)(a))),a.handlePasswordChange=a.handlePasswordChange.bind(Object(d.a)(Object(d.a)(a))),a.loginUser=a.loginUser.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleUsernameChange",value:function(e){this.setState({username:e.target.value})}},{key:"handlePasswordChange",value:function(e){this.setState({password:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,password:this.state.password};t.username&&t.password&&this.loginUser(t)}},{key:"render",value:function(){var e=(this.props.location.state||{from:{pathname:"/"}}).from;return this.state.redirectToReferrer?s.a.createElement(g.a,{to:e}):s.a.createElement("div",null,s.a.createElement("div",{className:"loginWrap"},s.a.createElement("h1",null,"Log In Or Register"),s.a.createElement("div",{className:"loginmodal-container"},s.a.createElement("form",{className:"login",onSubmit:this.handleSubmit.bind(this)},s.a.createElement("input",{id:"username-input",ref:"user",type:"text",name:"user",placeholder:"Username",onChange:this.handleUsernameChange,value:this.state.username}),s.a.createElement("input",{id:"password-input",ref:"password",type:"password",name:"pass",placeholder:"Password",onChange:this.handlePasswordChange,value:this.state.password}),s.a.createElement("input",{type:"submit",name:"login",className:"login loginmodal-submit",value:"Login"})),s.a.createElement("div",{className:"login-help"},s.a.createElement(b.a,{to:"/register"}," Register ")))))}}]),t}(n.Component)),O=a(1),k=a.n(O),N=(a(61),function(e){return s.a.createElement("button",Object.assign({className:"btn btn-primary"},e),e.children)});function L(e){return s.a.createElement("div",{className:"form-group"},s.a.createElement("input",Object.assign({className:"form-control"},e)))}function C(e){return s.a.createElement("div",{className:"form-group"},s.a.createElement("textarea",Object.assign({className:"form-control",rows:"17"},e)))}function S(e){return s.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:9},className:"btn btn-success"}),e.children)}function A(e){return s.a.createElement("div",{className:"form-group"},s.a.createElement("input",Object.assign({type:"Date",className:"form-control"},e)))}a(63);var U=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).getUserId=function(e){w.getUser(e).then(function(e){console.log("get username",e),a.setState({userID:e.data._id})}).catch(function(e){return console.log(e)})},a.logout=function(){a.props.deAuthenticate(),sessionStorage.removeItem("userAuth"),sessionStorage.removeItem("userUsername"),sessionStorage.removeItem("userID"),window.location.reload()},a.state={userID:"",username:""},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){"yes"===sessionStorage.getItem("userAuth")&&sessionStorage.getItem("userUsername")&&(sessionStorage.getItem("userID")&&this.setState({username:sessionStorage.getItem("userUsername")}),this.getUserId(sessionStorage.getItem("userUsername")))}},{key:"render",value:function(){return"yes"!==sessionStorage.getItem("userAuth")?s.a.createElement(g.a,{to:{pathname:"/login"}}):s.a.createElement("div",null,s.a.createElement("div",{className:"UserWrap"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-lg-6"},s.a.createElement("h1",null,"Current")),s.a.createElement(S,{onClick:this.logout},"logout"))))}}]),t}(n.Component);U.contextTypes={router:k.a.object};var x=U,I=a(25),R=a.n(I);a(65);var P=function(){return s.a.createElement("nav",{class:"navbar navbar-expand-lg navbar-dark bg-dark"},s.a.createElement("a",{class:"navbar-brand",href:"/"},s.a.createElement("img",{src:"https://clipart.info/images/ccovers/1521073957easter-egg-hunt-clipart-png.png",width:"30",height:"30",class:"d-inline-block align-top",alt:"cute chicken"}),"\xa0 ezHunt"),s.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},s.a.createElement("span",{class:"navbar-toggler-icon"})),s.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarNavDropdown"},s.a.createElement("ul",{class:"navbar-nav"},s.a.createElement("li",{class:"nav-item active"},s.a.createElement("a",{class:"nav-link",href:"#"},"Home ",s.a.createElement("span",{class:"sr-only"},"(current)"))),s.a.createElement("li",{class:"nav-item"},s.a.createElement("a",{class:"nav-link",href:"#"},"Jobs")),s.a.createElement("li",{class:"nav-item"},s.a.createElement("a",{class:"nav-link",href:"#"},"About")),s.a.createElement("li",{class:"nav-item dropdown"},s.a.createElement("a",{class:"nav-link dropdown-toggle",href:"#",id:"navbarDropdownMenuLink",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Jobs"),s.a.createElement("div",{class:"dropdown-menu","aria-labelledby":"navbarDropdownMenuLink"},s.a.createElement("a",{class:"dropdown-item",href:"#"},"Add Job"),s.a.createElement("a",{class:"dropdown-item",href:"#"},"Job History"),s.a.createElement("a",{class:"dropdown-item",href:"#"},"Something else here"))))))},F=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).logout=function(){a.props.deAuthenticate(),sessionStorage.removeItem("userAuth"),sessionStorage.removeItem("userUsername"),window.location.reload()},a.profilesList=function(){var e=[{source:"Indeed",description:"Todays Job Listing",postUrl:"https://www.indeed.com/viewjob?jk=bcbb008d958aa019&tk=1d3i2k7k3agdr800&from=serp&vjs=3&advn=7563612448552419&adid=141554971&sjdu=i6xVERweJM_pVUvgf-Mzud6v7vx4W2vba62rTobId36J1r29Sj03s_2Kk7DbjLum"}];return e.map(function(t){return s.a.createElement("div",{className:e[0]===t?"carousel-item active":"carousel-item"},s.a.createElement("a",{href:t.postUrl},t.source,s.a.createElement("div",null,t.description)))})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{class:"container-fluid"},s.a.createElement(P,null),s.a.createElement("div",{className:"homeContain"},s.a.createElement("div",{className:"homeLogo"},s.a.createElement("img",{alt:"logo",src:R.a})),s.a.createElement(N,null,s.a.createElement(b.a,{to:"/login"},"LOGIN")),s.a.createElement(N,null,s.a.createElement(b.a,{to:"/register"},"REGISTER")),s.a.createElement("div",{id:"carouselExampleControls",className:"carousel slide","data-ride":"carousel"},s.a.createElement("div",{className:"carousel-inner"},this.profilesList()),s.a.createElement("a",{className:"carousel-control-prev",href:"#carouselExampleControls",role:"button","data-slide":"prev"},s.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),s.a.createElement("span",{className:"sr-only"},"Previous")),s.a.createElement("a",{className:"carousel-control-next",href:"#carouselExampleControls",role:"button","data-slide":"next"},s.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),s.a.createElement("span",{className:"sr-only"},"Next"))),s.a.createElement("script",null,"$('.carousel').carousel();")))}}]),t}(n.Component),D=a(26);a(67);var J=function(e){return s.a.createElement("span",Object.assign({className:"delete-btn"},e,{role:"button",tabIndex:"0"}),"-\u2717-")};var z=function(e){var t=e.children;return s.a.createElement("div",{style:{height:50,clear:"both",paddingTop:10,textAlign:"center"},className:"jumbotron"},t)};function T(e){var t=e.fluid,a=e.children;return s.a.createElement("div",{className:"container".concat(t?"-fluid":"")},a)}function V(e){var t=e.fluid,a=e.children;return s.a.createElement("div",{className:"row".concat(t?"-fluid":"")},a)}function M(e){var t=e.size,a=e.children;return s.a.createElement("div",{className:t.split(" ").map(function(e){return"col-"+e}).join(" ")},a)}a(69);function W(e){var t=e.children;return s.a.createElement("div",{className:"list-overflow-container"},s.a.createElement("ul",{className:"list-group"},t))}function Z(e){var t=e.children;return s.a.createElement("li",{className:"list-group-item"},t)}var _=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={jobLists:[],company:"",position:"",detail:"",date:"",location:""},a.loadJobLists=function(){w.getJobLists().then(function(e){return a.setState({jobLists:e.data,company:"",position:"",detail:"",date:"",location:""})}).catch(function(e){return console.log(e,"Why error, huh?")})},a.deleteJobList=function(e){w.deleteJobList(e).then(function(e){return a.loadJobLists()}).catch(function(e){return console.log(e)})},a.handleInputChange=function(e){var t=e.target,n=t.name,s=t.value;a.setState(Object(D.a)({},n,s))},a.handleFormSubmit=function(e){e.preventDefault(),a.state.company&&a.state.position&&w.saveJobList({company:a.state.company,position:a.state.position,detail:a.state.detail,date:a.state.date,location:a.state.location}).then(function(e){return a.loadJobLists()}).catch(function(e){return console.log(e)})},a.logout=function(){a.props.deAuthenticate(),sessionStorage.removeItem("userAuth"),window.location.reload()},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.loadJobLists()}},{key:"render",value:function(){var e=this;return"yes"!==sessionStorage.getItem("userAuth")?s.a.createElement(g.a,{to:{pathname:"/login"}}):s.a.createElement(T,{fluid:!0},s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement(S,{onClick:this.logout},"logout"),s.a.createElement(V,null,s.a.createElement(M,{size:"md-12"},s.a.createElement(z,null,s.a.createElement("hr",null),s.a.createElement("h3",null,"What Companies have you applied?"),s.a.createElement("hr",null)))),s.a.createElement(V,null,s.a.createElement(M,{size:"md-3"}),s.a.createElement(M,{size:"md-6"},s.a.createElement("form",null,s.a.createElement(L,{value:this.state.company,onChange:this.handleInputChange,name:"company",placeholder:"Company Name (required)"}),s.a.createElement(L,{value:this.state.position,onChange:this.handleInputChange,name:"position",placeholder:"Position (required)"}),s.a.createElement(C,{value:this.state.detail,onChange:this.handleInputChange,name:"detail",placeholder:"Write your comment (Optional)"}),s.a.createElement(A,{value:this.state.date,onChange:this.handleInputChange,name:"date",placeholder:"Date you applied"}),s.a.createElement("p",null,"Location"),s.a.createElement(L,{value:this.state.location,onChange:this.handleInputChange,name:"location",placeholder:"Location",IL:!0}),s.a.createElement(S,{disabled:!(this.state.company&&this.state.position),onClick:this.handleFormSubmit},"Submit")))),s.a.createElement(V,null,s.a.createElement(M,{size:"md-2"}),s.a.createElement(M,{size:"md-8 sm-8"},s.a.createElement(z,null,s.a.createElement("h1",null,"Companies On My List")),this.state.jobLists.length?s.a.createElement(W,null,this.state.jobLists.map(function(t){return s.a.createElement(Z,{key:t._id},s.a.createElement(b.a,{to:"/jobLists/"+t._id},s.a.createElement("strong",null,t.position," at \ud83d\udccd ",t.company)),s.a.createElement(J,{onClick:function(){return e.deleteJobList(t._id)}}))})):s.a.createElement("h3",null,"No Results to Display")),s.a.createElement(M,{size:"md-2"})))}}]),t}(n.Component);_.contextTypes={router:k.a.object};var B=_,$=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={book:{}},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;w.getBook(this.props.match.params.id).then(function(t){return e.setState({book:t.data})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return s.a.createElement(T,{fluid:!0},s.a.createElement(V,null,s.a.createElement(M,{size:"md-12"},s.a.createElement(z,null,s.a.createElement("h1",null,this.state.book.title," by ",this.state.book.author)))),s.a.createElement(V,null,s.a.createElement(M,{size:"md-10 md-offset-1"},s.a.createElement("article",null,s.a.createElement("h1",null,"Synopsis"),s.a.createElement("p",null,this.state.book.synopsis)))),s.a.createElement(V,null,s.a.createElement(M,{size:"md-2"},s.a.createElement(b.a,{to:"/"},"\u2190 Back to Authors"))))}}]),t}(n.Component),H=(a(71),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={authenticated:!1,adminAuthenticated:!1},a.authenticate=a.authenticate.bind(Object(d.a)(Object(d.a)(a))),a.deAuthenticate=a.deAuthenticate.bind(Object(d.a)(Object(d.a)(a))),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"authenticate",value:function(){this.setState({authenticated:!0})}},{key:"deAuthenticate",value:function(){this.setState({authenticated:!1})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"App"},s.a.createElement(h.a,null,s.a.createElement("div",{className:"master"},s.a.createElement(p.a,null,s.a.createElement(f.a,{exact:!0,path:"/",render:function(t){return s.a.createElement(F,Object.assign({},t,{authenticate:e.authenticate,deAuthenticate:e.deAuthenticate,authenticated:e.state.authenticated}))}}),s.a.createElement(f.a,{exact:!0,path:"/login",render:function(t){return s.a.createElement(y,Object.assign({},t,{authenticate:e.authenticate,deAuthenticate:e.deAuthenticate,authenticated:e.state.authenticated}))}}),s.a.createElement(f.a,{exact:!0,path:"/register",render:function(t){return s.a.createElement(j,Object.assign({},t,{authenticate:e.authenticate,deAuthenticate:e.deAuthenticate,authenticated:e.state.authenticated}))}}),s.a.createElement(f.a,{exact:!0,path:"/user",render:function(t){return s.a.createElement(x,Object.assign({},t,{authenticate:e.authenticate,deAuthenticate:e.deAuthenticate,authenticated:e.state.authenticated}))}}),s.a.createElement(f.a,{exact:!0,path:"/jobLists",component:B}),s.a.createElement(f.a,{exact:!0,path:"/jobLists/:id",component:$})))))}}]),t}(n.Component)),q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function G(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(s.a.createElement(H,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");q?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):G(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):G(e)})}}()}},[[27,2,1]]]);
//# sourceMappingURL=main.c47ea0ab.chunk.js.map