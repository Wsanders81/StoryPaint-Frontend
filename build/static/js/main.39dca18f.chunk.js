(this["webpackJsonpcoloring-app"]=this["webpackJsonpcoloring-app"]||[]).push([[0],{149:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/peppa_cover.9ca0fa16.svg"},150:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/peppa_page1.88494774.svg"},151:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/peppa_page2.429ec0be.svg"},152:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/peppa_page3.3fa0ad66.svg"},153:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/peppa_page4.92766730.svg"},154:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/peppa_page5.da41f1ce.svg"},155:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/peppa_page6.902277d8.svg"},156:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/peppa_page7.f0baaf30.svg"},157:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/Elephant.a77a487d.svg"},158:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/cover.8e266e30.svg"},159:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/mickey-beach.05159bd3.svg"},160:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/octopus.11b16053.svg"},161:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/page1.4763f0c6.svg"},162:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/page2.7bc8792f.svg"},229:function(e,t,a){},261:function(e,t,a){},262:function(e,t,a){},268:function(e,t,a){var s={"./images/Peppa/peppa_cover.svg":149,"./images/Peppa/peppa_page1.svg":150,"./images/Peppa/peppa_page2.svg":151,"./images/Peppa/peppa_page3.svg":152,"./images/Peppa/peppa_page4.svg":153,"./images/Peppa/peppa_page5.svg":154,"./images/Peppa/peppa_page6.svg":155,"./images/Peppa/peppa_page7.svg":156,"./images/Random/Elephant.svg":157,"./images/Random/cover.svg":158,"./images/Random/mickey-beach.svg":159,"./images/Random/octopus.svg":160,"./images/Random/page1.svg":161,"./images/Random/page2.svg":162};function n(e){var t=c(e);return a(t)}function c(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=c,e.exports=n,n.id=268},409:function(e,t,a){},430:function(e,t,a){var s={"./Peppa/peppa_cover.svg":149,"./Peppa/peppa_page1.svg":150,"./Peppa/peppa_page2.svg":151,"./Peppa/peppa_page3.svg":152,"./Peppa/peppa_page4.svg":153,"./Peppa/peppa_page5.svg":154,"./Peppa/peppa_page6.svg":155,"./Peppa/peppa_page7.svg":156,"./Random/Elephant.svg":157,"./Random/cover.svg":158,"./Random/mickey-beach.svg":159,"./Random/octopus.svg":160,"./Random/page1.svg":161,"./Random/page2.svg":162};function n(e){return Promise.resolve().then((function(){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a(s[e])}))}n.keys=function(){return Object.keys(s)},n.id=430,e.exports=n},431:function(e,t,a){var s={"./Elephant.svg":157,"./cover.svg":158,"./mickey-beach.svg":159,"./octopus.svg":160,"./page1.svg":161,"./page2.svg":162};function n(e){var t=c(e);return a(t)}function c(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=c,e.exports=n,n.id=431},432:function(e,t,a){var s={"./peppa_cover.svg":149,"./peppa_page1.svg":150,"./peppa_page2.svg":151,"./peppa_page3.svg":152,"./peppa_page4.svg":153,"./peppa_page5.svg":154,"./peppa_page6.svg":155,"./peppa_page7.svg":156};function n(e){var t=c(e);return a(t)}function c(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=c,e.exports=n,n.id=432},433:function(e,t,a){},434:function(e,t,a){},435:function(e,t,a){},436:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a.n(s),c=a(38),r=a.n(c),i=(a(261),a(10)),o=(a(262),a(23)),l=a(479),u=a(32);a(163);var d=a(17),j=a.n(d),p=a(26),b=a(35),h=a(497),f=a(494),g=a(498),x=a(492),O=a(491),m=a(490),v=a(485),w=a(70),y=a(113),k=a.n(y),P="GET_USER",S="LOGOUT",N="ADD_COLORING_TO_STATE",C="http://localhost:9000";function _(e,t){return{type:P,username:e,id:t}}function R(e){return function(){var t=Object(p.a)(j.a.mark((function t(a){var s;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k()({method:"post",url:"".concat(C,"/users/login"),data:{username:"".concat(e.username),password:"".concat(e.password)}});case 2:return s=t.sent,t.abrupt("return",a(_(s.data.username,s.data.id)));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function T(e){return console.log(e.username,e.password),function(){var t=Object(p.a)(j.a.mark((function t(a){var s;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,k()({method:"post",url:"".concat(C,"/users"),data:{username:e.username,password:e.password}});case 2:return s=t.sent,console.log(s),t.abrupt("return",a(_(s.data.username)));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}function E(e,t,a){return D.apply(this,arguments)}function D(){return(D=Object(p.a)(j.a.mark((function e(t,a,s){var n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k()({method:"post",url:"".concat(C,"/colorings"),data:{name:t,image:a,user_id:s}});case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function G(e){return I.apply(this,arguments)}function I(){return(I=Object(p.a)(j.a.mark((function e(t){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k()({method:"get",url:"".concat(C,"/colorings/").concat(t)});case 2:return a=e.sent,console.log(a),e.abrupt("return",a.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var L=a(1);var F=function(e){var t=e.toggle,a=e.notify,s=Object(o.b)();return Object(L.jsxs)("div",{style:{textAlign:"center"},children:[Object(L.jsx)(u.a,{autoClose:2e3,hideProgressBar:!0}),Object(L.jsx)(h.a,{sx:{margin:"auto"},children:Object(L.jsxs)(f.a,{children:[Object(L.jsx)(g.a,{variant:"h4",mb:2,children:"Login"}),Object(L.jsx)(b.d,{validationSchema:Object(w.a)({username:Object(w.b)().required().min(3).max(15),password:Object(w.b)().required().min(5).max(20)}),initialValues:{username:"",password:""},onSubmit:function(){var e=Object(p.a)(j.a.mark((function e(n){var c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s(R(n));case 3:(c=e.sent).username&&(t(),a(c.username)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0),u.b.error("Sorry, incorrect login information",{position:u.b.POSITION.TOP_RIGHT});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),children:function(e){e.values,e.errors;return Object(L.jsxs)(b.c,{children:[Object(L.jsxs)(x.a,{children:[Object(L.jsxs)(O.a,{mb:2,children:[Object(L.jsx)(b.b,{name:"username",as:m.a,label:"Username"}),Object(L.jsx)(b.a,{name:"username",render:function(e){return Object(L.jsx)("div",{style:{color:"red"},children:e})}})]}),Object(L.jsxs)(O.a,{mb:2,children:[Object(L.jsx)(b.b,{name:"password",type:"password",as:m.a,label:"Password"}),Object(L.jsx)(b.a,{name:"password",render:function(e){return Object(L.jsx)("div",{style:{color:"red"},children:e})}})]})]}),Object(L.jsx)(v.a,{style:{backgroundColor:"#81c784"},variant:"contained",type:"submit",color:"success",children:"Login"})]})}})]})})]})},M=a(15);var U=function(e){var t=e.toggle,a=e.notify,s=Object(o.b)(),n=Object(M.f)();return Object(L.jsxs)("div",{style:{textAlign:"center"},children:[Object(L.jsx)(u.a,{autoClose:2e3,hideProgressBar:!0}),Object(L.jsx)(h.a,{sx:{margin:"auto"},children:Object(L.jsxs)(f.a,{children:[Object(L.jsx)(g.a,{variant:"h4",mb:2,children:"Sign Up"}),Object(L.jsx)(b.d,{validationSchema:Object(w.a)({username:Object(w.b)().required().min(3).max(15),password:Object(w.b)().required().min(5).max(20)}),initialValues:{username:"",password:""},onSubmit:function(){var e=Object(p.a)(j.a.mark((function e(c){var r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s(T(c));case 3:(r=e.sent).username&&(t(),a(r.username),n("/color")),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.log("*******",e.t0),u.b.error("Sorry, username already taken",{position:u.b.POSITION.TOP_RIGHT});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),children:function(e){e.values,e.errors;return Object(L.jsxs)(b.c,{children:[Object(L.jsxs)(x.a,{children:[Object(L.jsxs)(O.a,{mb:2,children:[Object(L.jsx)(b.b,{name:"username",as:m.a,label:"Username"}),Object(L.jsx)(b.a,{name:"username",render:function(e){return Object(L.jsx)("div",{style:{color:"red"},children:e})}})]}),Object(L.jsxs)(O.a,{mb:2,children:[Object(L.jsx)(b.b,{name:"password",type:"password",as:m.a,label:"Password"}),Object(L.jsx)(b.a,{name:"password",render:function(e){return Object(L.jsx)("div",{style:{color:"red"},children:e})}})]})]}),Object(L.jsx)(v.a,{style:{backgroundColor:"#81c784"},variant:"contained",type:"submit",color:"success",children:"Submit"})]})}})]})})]})},B=a(246),A=(a(409),a(241)),q=a(243),J=(a(424),a(229),function(e){var t=e.name,n=e.currentColor,c=e.bookName,r=e.text,l=e.pageClass,u=Object(o.b)(),d=Object(s.useRef)(null),b=Object(s.useRef)(null),h=Object(s.useState)(!1),f=Object(i.a)(h,2),g=f[0],x=f[1];Object(o.c)((function(e){return e.coloringReducer}));Object(s.useEffect)((function(){x(!0);var e=function(){var e=Object(p.a)(j.a.mark((function e(){var s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a(430)("./".concat(c,"/").concat(t,".svg"));case 3:s=e.sent,b.current=s.default,e.next=10;break;case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:x(!1);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[c,t]);return!g&&b.current&&b.current?Object(L.jsxs)(L.Fragment,{children:[Object(L.jsxs)(O.a,{className:"SVG-".concat(l),children:[Object(L.jsx)("svg",{onClick:function(e){e.target.style.fill=n;var a=e.target.closest("svg").outerHTML;u({type:"ADD_COLORING_TO_STATE",coloring:a,name:t})},ref:d,id:"my-svg",className:"SVG","data-src":"".concat(b.current),width:"90%",height:"90%"}),Object(L.jsx)("p",{className:"SVG-text",children:r})]}),Object(L.jsx)(O.a,{sx:{display:"flex",justifyContent:"space-evenly"},children:Object(L.jsx)(v.a,{variant:"contained",onClick:function(){return q.saveSvg(d.current,"mycreation.svg")},children:"Download"})})]}):null}),W=["An elephant taking a shower","Oh, the Places You'll Go!","Mickey and Pluto at the beach","The octopus from Finding Dory","Oh, the Places You'll Go!","Oh, the Places You'll Go!"],V=["","It was a beautiful, sunny day at the Peppa pig house.","Peppa: Good morning George. George: Oink Oink. Peppa: I can't wait to go outside and play!","Mommy pig has just finished making breakfast. Mommy pig: Peppa! George! Time for breakfast!","While daddy pig reads the morning newspaper. Daddy pig: Mmm, something smells good.","After breakfast, it was finally time to play. Mommy pig: Uh no, it's raining...","Good thing Peppa and George LOVE jumping up and down in muddy puddles!","Oh my goodness! Wow! So much mud!. Splish, Splash, Splosh, Splish, Splash. The End."];function H(e){if(console.log(e),"Random"===e){for(var t=a(431),s=t.keys().map((function(e){return{path:e,file:t(e)}})),n=[],c=0;c<s.length;c++){var r=(c+1)%2!==0?"left":"right";n.push({path:s[c].path,text:W[c],className:r})}return n}if("Peppa"===e){for(var i=a(432),o=i.keys().map((function(e){return{path:e,file:i(e)}})),l=[],u=0;u<o.length;u++){var d=(u+1)%2!==0?"left":"right";l.push({path:o[u].path,text:V[u],className:d})}return l}}var Y=function(e){var t=e.currentColor,a=e.bookName,n=Object(s.useRef)(),c=Object(o.c)((function(e){return e.userReducer.user})),r=Object(o.c)((function(e){return e.userReducer.id})),l=Object(o.c)((function(e){return e.coloringReducer})),u=Object(s.useRef)(),d=Object(s.useState)(!0),b=Object(i.a)(d,2),h=b[0],f=b[1],g=function(){var e=Object(p.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Object.keys(l).length||alert("Color something first!"),t=Object.keys(l),t.forEach(function(){var e=Object(p.a)(j.a.mark((function e(t){var s,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=l[t],n=a,e.next=4,E(n,s,r);case 4:e.sent;case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){var e=function(){var e=Object(p.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return f(!0),e.next=3,H(a);case 3:t=e.sent,u.current=t,f(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[a]),h?Object(L.jsx)("h1",{children:"Loading"}):Object(L.jsxs)(O.a,{sx:{paddingTop:"5rem"},children:[Object(L.jsx)(v.a,{variant:"contained",sx:{margin:"1rem 2rem 1rem 0",padding:"1rem"},onClick:function(){return n.current.pageFlip().flipPrev()},children:"Prev Page"}),Object(L.jsx)(v.a,{variant:"contained",sx:{margin:"1rem 2rem 1rem 0",padding:"1rem"},onClick:function(){return n.current.pageFlip().flipNext()},children:"Next Page"}),Object(L.jsx)(A.a,{className:"flipbook",style:{margin:"auto"},ref:n,useMouseEvents:!1,maxShadowOpacity:.5,height:100,width:100,size:"stretch",children:u.current.map((function(e){return Object(L.jsx)(O.a,{"data-density":"soft",children:Object(L.jsx)(J,{text:e.text,pageClass:e.className,bookName:a,name:e.path.slice(2).slice(0,-4),currentColor:t})},e.path)}))}),Object(L.jsx)(O.a,{className:"SVG-save",children:c?Object(L.jsx)(v.a,{onClick:g,sx:{marginTop:"4rem"},variant:"contained",children:"Save Book"}):null})]})},z=a(481),Q=a(482),X=a(477),K=a(480),Z=a(496);function $(e){var t=e.book,a=e.setBook,s=e.availableBooks;return Object(L.jsx)("div",{children:Object(L.jsxs)(z.a,{sx:{m:1,minWidth:120},children:[Object(L.jsx)(Q.a,{id:"book-label",children:"Book"}),Object(L.jsx)(X.a,{labelId:"book-label",id:"book",value:t,label:"Book",onChange:function(e){console.log(e.target.value),a(e.target.value)},children:s.map((function(e){return Object(L.jsx)(K.a,{value:e,children:e},e)}))}),Object(L.jsx)(Z.a,{children:"Choose a Book"})]})})}function ee(){var e=Object(s.useState)("white"),t=Object(i.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)("Random"),r=Object(i.a)(c,2),o=r[0],l=r[1];return Object(L.jsxs)(O.a,{sx:{paddingTop:"1rem",height:"100vh"},children:[Object(L.jsxs)(O.a,{sx:{width:"100%"},children:[Object(L.jsx)(O.a,{sx:{margin:"auto"},children:Object(L.jsx)($,{setBook:l,book:o,handlePictureChange:function(e){l(e.target.value)},availableBooks:["Random","Peppa"]})}),Object(L.jsx)(O.a,{sx:{width:"100%",textAlign:"center"},children:Object(L.jsx)(O.a,{sx:{margin:"auto",width:"75%",padding:"1rem",backgroundColor:"rgba(190, 164, 164, 0.8)",borderRadius:"5px"},children:Object(L.jsx)(B.a,{width:"100%",className:"ColoringPage-sketch",direction:"horizontal",circleSize:50,colors:["#f44336","#e91e63","#9c27b0","#673ab7","#3f51b5","#2196f3","#03a9f4","#00bcd4","#009688","#4caf50","#8bc34a","#cddc39","#ffeb3b","#ffc107","#ff9800","#ff5722","#735548","#607db8","#222222","#FFFFFF"],color:a,onChangeComplete:function(e){n(e.hex)}})})})]}),Object(L.jsx)(O.a,{sx:{width:"80%",margin:"auto"},children:Object(L.jsx)(Y,{bookName:o,currentColor:a})})]})}a(433);function te(){var e=Object(M.f)();return Object(L.jsxs)(O.a,{sx:{paddingTop:"10rem"},children:[Object(L.jsxs)("div",{class:"container-fluid",children:[Object(L.jsx)("div",{class:"d-flex justify-content-center LandingPage-logo",children:Object(L.jsx)("img",{id:"title",src:"/assets/StoryPaint2.png",alt:""})}),Object(L.jsx)("div",{class:"row"})]}),Object(L.jsxs)("div",{class:"container",children:[Object(L.jsxs)("div",{class:"row",children:[Object(L.jsx)("div",{class:"col col-2"}),Object(L.jsxs)("div",{class:"col col-8",children:[Object(L.jsx)("h2",{class:"text-center",children:"Paint a coloring book with a story"}),Object(L.jsx)("p",{class:"fw-light fs-4 text-center",children:"Create an account to save all your progress and pick up where you left off next time. Otherwise, continue as a guest, where you can still download your book."})]})]}),Object(L.jsx)("div",{class:"row d-flex justify-content-center",children:Object(L.jsxs)("div",{class:"col-lg-6 col-md-8 col-sm-10 m-1 bg-dark bg-opacity-75 text-white text-center p-5",children:[Object(L.jsx)("h2",{class:"mb-4 text-white text-center",children:"Create an Account"}),Object(L.jsx)("div",{class:"row",children:Object(L.jsxs)("div",{class:"input-group input-group-sm mb-3",children:[Object(L.jsx)("span",{class:"input-group-text",children:"Username"}),Object(L.jsx)("input",{type:"text",class:"form-control",placeholder:"Username"})]})}),Object(L.jsx)("div",{class:"row",children:Object(L.jsxs)("div",{class:"input-group input-group-sm mb-3",children:[Object(L.jsx)("span",{class:"input-group-text",children:"Password"}),Object(L.jsx)("input",{type:"text",required:!0,class:"form-control",placeholder:"Password"})]})}),Object(L.jsxs)("span",{children:[Object(L.jsx)("button",{onClick:function(){e("/login")},class:"btn btn-secondary m-md-3 m-sm-2 m-3",children:"Create Account"}),Object(L.jsx)("button",{onClick:function(){e("/color")},class:"btn btn-secondary m-md-3 m-sm-2 m-3",children:"Continue as Guest"})]})]})})]}),Object(L.jsxs)("div",{class:"container",children:[Object(L.jsx)("h2",{class:"display-5 fw-bold text-center pt-3 pb-2",children:"Developers"}),Object(L.jsxs)("div",{class:"row",children:[Object(L.jsx)("div",{class:"col col-xl-4 col-lg-3 col-0"}),Object(L.jsx)("div",{class:"col col-xl-4 col-lg-6 col-md-8 col-sm-10 col-12",children:Object(L.jsxs)("div",{id:"carouselDevelopers",class:"carousel slide p-5 bg-light bg-opacity-50","data-bs-ride":"carousel",children:[Object(L.jsxs)("div",{class:"carousel-inner",children:[Object(L.jsxs)("div",{class:"carousel-item active",children:[Object(L.jsx)("h4",{class:"text-center",children:"Matt Dillon"}),Object(L.jsx)("div",{class:"d-flex justify-content-center",children:Object(L.jsx)("img",{src:"./assets/MattDillon.jpg",class:"img-thumbnail mb-3",alt:"Missing"})}),Object(L.jsx)("h5",{class:" text-center",children:"Full Stack Developer"}),Object(L.jsx)("p",{class:"lead text-center fs-6",children:"Matt likes long walks on the beach and a glass of warm milk before bed. He also is a leo and has a passion for passion fruit."}),Object(L.jsxs)("span",{class:"d-flex justify-content-center",children:[Object(L.jsx)("a",{class:"me-3",href:"https://www.linkedin.com/in/coderdill/",children:Object(L.jsx)("i",{class:"fab fa-linkedin fa-2x"})}),Object(L.jsx)("a",{class:"me-3",href:"https://twitter.com/CoderDill",children:Object(L.jsx)("i",{class:"fab fa-twitter fa-2x"})}),Object(L.jsx)("a",{href:"https://github.com/coderdill",class:"me-3",children:Object(L.jsx)("i",{class:"fab fa-github fa-2x"})}),Object(L.jsx)("a",{href:"https://www.facebook.com/coderdill",children:Object(L.jsx)("i",{class:"fab fa-facebook fa-2x"})})]})]}),Object(L.jsxs)("div",{class:"carousel-item",children:[Object(L.jsx)("h4",{class:"text-center",children:"Will Sanders"}),Object(L.jsx)("div",{class:"d-flex justify-content-center",children:Object(L.jsx)("img",{src:"./assets/WillSanders.jpg",class:"img-thumbnail mb-3"})}),Object(L.jsx)("h5",{class:"text-center",children:"Full Stack Developer"}),Object(L.jsx)("p",{class:"lead text-center fs-6",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quae nulla nostrum labore veritatis, nesciunt velit inventore earum rem! Porro."}),Object(L.jsxs)("span",{class:"d-flex justify-content-center",children:[Object(L.jsx)("a",{class:"me-3",href:"https://www.linkedin.com/in/williamsanders81/",children:Object(L.jsx)("i",{class:"fab fa-linkedin fa-2x"})}),Object(L.jsx)("a",{class:"me-3",href:"",children:Object(L.jsx)("i",{class:"fab fa-twitter fa-2x"})}),Object(L.jsx)("a",{href:"https://github.com/Wsanders81",class:"me-3",children:Object(L.jsx)("i",{class:"fab fa-github fa-2x"})}),Object(L.jsx)("a",{href:"",children:Object(L.jsx)("i",{class:"fab fa-facebook fa-2x"})})]})]}),Object(L.jsxs)("div",{class:"carousel-item",children:[Object(L.jsx)("h4",{class:"text-center",children:"John Quattrocchi Jr."}),Object(L.jsx)("div",{class:"d-flex justify-content-center",children:Object(L.jsx)("img",{src:"./assets/JohnQuattrocchi.png",class:"img-thumbnail mb-3"})}),Object(L.jsx)("h5",{class:"text-center",children:"UX/UI Designer"}),Object(L.jsx)("p",{class:"lead text-center fs-6",children:"John began his coding journey in early 2021 upon joining a Springboard program. He has a background in the poker and casino industry. Throughout his career he has had the opportunity to hone his large scale project and event management skills. John has a genuine and life-long interest in advancing technologies (and gaming in his spare time)."}),Object(L.jsxs)("span",{class:"d-flex justify-content-center",children:[Object(L.jsx)("a",{class:"me-3",href:"https://www.linkedin.com/in/jquatjr/",children:Object(L.jsx)("i",{class:"fab fa-linkedin fa-2x"})}),Object(L.jsx)("a",{class:"me-3",href:"https://www.twitter.com/johnqtd",children:Object(L.jsx)("i",{class:"fab fa-twitter fa-2x"})}),Object(L.jsx)("a",{href:"https://github.com/jquatjr",class:"me-3",children:Object(L.jsx)("i",{class:"fab fa-github fa-2x"})}),Object(L.jsx)("a",{href:"https://facebook.com/gotacrotchy",children:Object(L.jsx)("i",{class:"fab fa-facebook fa-2x"})})]})]})]}),Object(L.jsxs)("button",{class:"carousel-control-prev",type:"button","data-bs-target":"#carouselDevelopers","data-bs-slide":"prev",children:[Object(L.jsx)("span",{class:"carousel-control-prev-icon","aria-hidden":"true"}),Object(L.jsx)("span",{class:"visually-hidden",children:"Previous"})]}),Object(L.jsxs)("button",{class:"carousel-control-next",type:"button","data-bs-target":"#carouselDevelopers","data-bs-slide":"next",children:[Object(L.jsx)("span",{class:"carousel-control-next-icon","aria-hidden":"true"}),Object(L.jsx)("span",{class:"visually-hidden",children:"Next"})]})]})}),Object(L.jsx)("div",{class:"col col-lg-3 col-0"})]})]}),Object(L.jsx)("div",{class:"container bg-light bg-opacity-50 pb-4",children:Object(L.jsxs)("div",{class:"row",children:[Object(L.jsx)("h4",{class:"text-center",children:"This App Brought to You By:"}),Object(L.jsx)("div",{class:"col-2"}),Object(L.jsxs)("div",{class:"col-4 text-center",children:[Object(L.jsx)("div",{class:"fs-5 fw-bold",children:"Front End"}),Object(L.jsx)("li",{children:Object(L.jsxs)("span",{children:[Object(L.jsx)("i",{class:"fab fa-react"})," React.js"]})}),Object(L.jsx)("li",{children:"Material.Ui"}),Object(L.jsx)("li",{children:Object(L.jsxs)("span",{children:[Object(L.jsx)("i",{class:"fab fa-bootstrap"})," Bootstrap"]})}),Object(L.jsx)("li",{children:"JQuery"})]}),Object(L.jsxs)("div",{class:"col-4 text-center",children:[Object(L.jsx)("div",{class:"fs-5 fw-bold",children:"Back End"}),Object(L.jsx)("li",{children:Object(L.jsxs)("span",{children:[Object(L.jsx)("i",{class:"fab fa-node"})," Node.js"]})}),Object(L.jsxs)("li",{children:[Object(L.jsx)("img",{id:"express",src:"ExpressJS.png",alt:""}),"Express.js"]}),Object(L.jsx)("li",{children:"Node-postgres"})]})]})}),Object(L.jsx)("script",{src:"https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js",integrity:"sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p",crossorigin:"anonymous"})]})}a(434);function ae(){var e=Object(o.c)((function(e){return e.coloringReducer})),t=Object(o.c)((function(e){return e.userReducer.id})),a=Object(s.useState)(!0),n=Object(i.a)(a,2);n[0],n[1];return Object(s.useEffect)((function(){!function(){for(var t=0,a=Object.entries(e);t<a.length;t++){var s=Object(i.a)(a[t],2),n=(s[0],s[1]),c=document.createElement("svg");console.log(n),c.innerHTML=n,document.querySelector(".page").appendChild(c)}}()}),[e]),Object(s.useEffect)((function(){var e=function(){var e=Object(p.a)(j.a.mark((function e(){var a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=G(t),console.log(a.length);case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(L.jsx)("div",{className:"page"})}function se(){return Object(L.jsxs)(M.c,{children:[Object(L.jsx)(M.a,{path:"*",element:Object(L.jsx)("h1",{children:"NOT FOUND"})}),Object(L.jsx)(M.a,{path:"/",element:Object(L.jsx)(te,{})}),Object(L.jsx)(M.a,{path:"/color",element:Object(L.jsx)(ee,{})}),Object(L.jsx)(M.a,{path:"/my-pictures",element:Object(L.jsx)(ae,{})})]})}a(435);var ne=a(486),ce=a(487),re=a.p+"static/media/StoryPaint2.693eb22e.png";function ie(e){var t=e.toggleLogin,a=e.toggleRegister,s=e.notify,n=Object(M.f)(),c=Object(o.b)(),r=Object(o.c)((function(e){return e.userReducer.user})),i=Object(L.jsxs)(O.a,{sx:{display:"flex",justifyContent:"flex-end",flexGrow:1},children:[Object(L.jsx)(g.a,{onClick:t,sx:{marginRight:"1rem"},className:"Navbar-link",children:"Login"}),Object(L.jsx)(g.a,{onClick:a,className:"Navbar-link",children:"Register"})]}),l=Object(L.jsxs)(O.a,{sx:{display:"flex",justifyContent:"flex-end",flexGrow:1},children:[Object(L.jsx)(g.a,{onClick:function(){c({type:"LOGOUT"}),s(),n("/")},sx:{marginRight:"1rem"},className:"Navbar-link",children:"Logout"}),Object(L.jsx)(g.a,{className:"Navbar-link",sx:{marginRight:"1rem"},onClick:function(){return n("/color")},children:"Coloring Page"}),Object(L.jsx)(g.a,{onClick:function(){return n("/my-pictures")},className:"Navbar-link",children:"My Pictures"})]});return Object(L.jsx)(O.a,{sx:{flexGrow:1},children:Object(L.jsx)(ne.a,{className:"Navbar",position:"static",children:Object(L.jsxs)(ce.a,{children:[Object(L.jsx)(g.a,{className:"Navbar-link",onClick:function(){return n("/")},align:"left",variant:"h6",component:"div",children:Object(L.jsx)("img",{className:"Navbar-logo",src:re})}),r?l:i]})})})}var oe=function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),a=t[0],n=t[1],c=Object(s.useState)(!1),r=Object(i.a)(c,2),d=r[0],j=r[1],p=Object(s.useState)(!0),b=Object(i.a)(p,2),h=(b[0],b[1],Object(o.b)()),f=window.localStorage.getItem("user")||null,g=window.localStorage.getItem("id")||null;f&&g&&h({type:"GET_USER",username:f,id:g});var x=function(){n((function(e){return!e}))},O=function(){j((function(e){return!e}))};return Object(L.jsxs)("div",{className:"App",children:[Object(L.jsx)(u.a,{}),Object(L.jsx)(ie,{toggleLogin:x,toggleRegister:O,notify:function(){return u.b.success("You have successfully logged out",{position:u.b.POSITION.TOP_CENTER})}}),Object(L.jsx)(l.a,{className:"App-modal",open:a,onClose:x,children:Object(L.jsx)("div",{children:Object(L.jsx)(F,{toggle:x,notify:function(e){return u.b.success("Welcome Back, ".concat(e,"!"),{position:u.b.POSITION.TOP_CENTER})}})})}),Object(L.jsx)(l.a,{className:"App-modal",open:d,onClose:O,children:Object(L.jsx)("div",{children:Object(L.jsx)(U,{toggle:O,notify:function(e){return u.b.success("Welcome, ".concat(e,"!"))}})})}),Object(L.jsx)(se,{})]})},le=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,499)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),s(e),n(e),c(e),r(e)}))},ue=a(104),de=a(93),je=a(245),pe=a(244),be=a(69);var he=a(6);var fe=Object(de.combineReducers)({userReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return window.localStorage.setItem("user",t.username),window.localStorage.setItem("id",t.id),Object(be.a)(Object(be.a)({},e),{},{user:t.username,id:t.id});case S:return window.localStorage.removeItem("user"),window.localStorage.removeItem("id"),Object(be.a)(Object(be.a)({},e),{},{user:null,id:null});default:return e}},coloringReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return t.type===N?(window.localStorage.setItem(t.name,t.coloring),Object(be.a)(Object(be.a)({},e),{},Object(he.a)({},t.name,t.coloring))):e}}),ge=fe,xe=Object(de.createStore)(ge,Object(pe.composeWithDevTools)(Object(de.applyMiddleware)(je.a)));r.a.render(Object(L.jsx)(n.a.StrictMode,{children:Object(L.jsx)(o.a,{store:xe,children:Object(L.jsx)(ue.a,{children:Object(L.jsx)(oe,{})})})}),document.getElementById("root")),le()}},[[436,1,2]]]);
//# sourceMappingURL=main.39dca18f.chunk.js.map