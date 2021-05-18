(this["webpackJsonpreact-router"]=this["webpackJsonpreact-router"]||[]).push([[0],{48:function(e,t,a){},49:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var c=a(1),r=a.n(c),s=a(20),n=a.n(s),i=(a(48),a(11)),l=(a(49),a(50),a(17)),j=a(9),o=a(18),u=(a(51),a(21)),b=(a(52),a(22)),d=a.n(b),x=a(23),h=a(24),O=a.n(h),m=a(93),p=a(94),f=a(95),g=a(96),v=a(97),w=a(111),y=a(98),N=a(89),S=a(90),C=a(2),k=function(e){var t=e.user;return Object(C.jsxs)(N.a,{className:"text-center mt-3 mb-4",children:[Object(C.jsx)("img",{src:t.avatar_url,className:"img-thumbnail"}),Object(C.jsxs)(S.a,{children:[Object(C.jsx)("div",{className:"text-primary",children:t.name}),Object(C.jsx)("div",{className:"text-primary",children:t.location}),Object(C.jsx)("div",{className:"text-primary",children:t.bio}),Object(C.jsxs)("div",{className:"text-primary",children:["Available for hire: ",t.hireable?"Yes":"Nope"]}),Object(C.jsxs)("div",{className:"text-primary",children:["Followers: ",t.followers]}),Object(C.jsxs)("div",{className:"text-primary",children:["Following: ",t.following]}),Object(C.jsx)("div",{className:"text-primary",children:t.blog})]})]})},I=a(91),P=a(92),U=function(e){var t=e.repos_url,a=Object(c.useState)([]),r=Object(i.a)(a,2),s=r[0],n=r[1],l=function(){var e=Object(x.a)(d.a.mark((function e(){var a,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get(t);case 2:a=e.sent,c=a.data,n(c);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){l()}),[t]),Object(C.jsx)(I.a,{children:s.map((function(e){return Object(C.jsxs)(P.a,{children:[Object(C.jsx)("div",{className:"text-primary",children:e.name}),Object(C.jsx)("div",{className:"text-secondary",children:e.language}),Object(C.jsx)("div",{className:"text-info",children:e.description})]},e.id)}))})},F=Object(c.createContext)(),A=function(){var e,t=Object(c.useContext)(F),a=Object(c.useState)(""),r=Object(i.a)(a,2),s=r[0],n=r[1],l=Object(c.useState)(null),u=Object(i.a)(l,2),b=u[0],h=u[1],N=function(){var e=Object(x.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("https://api.github.com/users/".concat(s));case 3:t=e.sent,a=t.data,h(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),o.b.error("Not Able to locate User :( ",{type:e.t0});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return(null===(e=t.user)||void 0===e?void 0:e.uid)?Object(C.jsx)(m.a,{children:Object(C.jsxs)(p.a,{className:" mt-3",children:[Object(C.jsxs)(f.a,{md:"5",children:[Object(C.jsxs)(g.a,{children:[Object(C.jsx)(v.a,{type:"text",value:s,onChange:function(e){return n(e.target.value)},placeholder:"Please provide the username"}),Object(C.jsx)(w.a,{addonType:"append",children:Object(C.jsx)(y.a,{onClick:N,color:"primary",children:"Fetch User"})})]}),b?Object(C.jsx)(k,{user:b}):null]}),Object(C.jsx)(f.a,{md:"7",children:b?Object(C.jsx)(U,{repos_url:b.repos_url}):null})]})}):Object(C.jsx)(j.a,{to:"/signIn"})},D=a(99),L=a(100),E=a(101),G=a(102),R=a(103),_=function(){var e,t=Object(c.useContext)(F),a=Object(c.useState)(""),r=Object(i.a)(a,2),s=r[0],n=r[1],l=Object(c.useState)(""),b=Object(i.a)(l,2),d=b[0],x=b[1];return(null===(e=t.user)||void 0===e?void 0:e.email)?Object(C.jsx)(j.a,{to:"/"}):Object(C.jsx)(m.a,{className:"text-center",children:Object(C.jsx)(p.a,{children:Object(C.jsx)(f.a,{lg:6,className:"offset-lg-3 mt-5",children:Object(C.jsx)(N.a,{children:Object(C.jsxs)(D.a,{onSubmit:function(e){e.preventDefault(),u.a.auth().signInWithEmailAndPassword(s,d).then((function(e){console.log(e),t.setUser({email:e.user.email,uid:e.user.uid})})).catch((function(e){console.log(e),o.b.error(e.message,{type:"error"})}))},children:[Object(C.jsx)(L.a,{className:"",children:"SignIn here"}),Object(C.jsxs)(S.a,{children:[Object(C.jsxs)(E.a,{row:!0,children:[Object(C.jsx)(G.a,{for:"email",sm:3,children:"Email"}),Object(C.jsx)(f.a,{sm:9,children:Object(C.jsx)(v.a,{type:"email",name:"email",id:"email",placeholder:"provide your email",value:s,onChange:function(e){return n(e.target.value)}})})]}),Object(C.jsxs)(E.a,{row:!0,children:[Object(C.jsx)(G.a,{for:"password",sm:3,children:"Password"}),Object(C.jsx)(f.a,{sm:9,children:Object(C.jsx)(v.a,{type:"password",name:"password",id:"password",placeholder:"your password here",value:d,onChange:function(e){return x(e.target.value)}})})]})]}),Object(C.jsx)(R.a,{children:Object(C.jsx)(y.a,{type:"submit",block:!0,color:"primary",children:"Sign In"})})]})})})})})},z=function(){var e,t=Object(c.useContext)(F),a=Object(c.useState)(""),r=Object(i.a)(a,2),s=r[0],n=r[1],l=Object(c.useState)(""),b=Object(i.a)(l,2),d=b[0],x=b[1];return(null===(e=t.user)||void 0===e?void 0:e.email)?Object(C.jsx)(j.a,{to:"/"}):Object(C.jsx)(m.a,{className:"text-center",children:Object(C.jsx)(p.a,{children:Object(C.jsx)(f.a,{lg:6,className:"offset-lg-3 mt-5",children:Object(C.jsx)(N.a,{children:Object(C.jsxs)(D.a,{onSubmit:function(e){e.preventDefault(),u.a.auth().createUserWithEmailAndPassword(s,d).then((function(e){console.log(e),t.setUser({email:e.user.email,uid:e.user.uid})})).catch((function(e){console.log(e),o.b.error(e.message,{type:"error"})}))},children:[Object(C.jsx)(L.a,{className:"",children:"Signup here"}),Object(C.jsxs)(S.a,{children:[Object(C.jsxs)(E.a,{row:!0,children:[Object(C.jsx)(G.a,{for:"email",sm:3,children:"Email"}),Object(C.jsx)(f.a,{sm:9,children:Object(C.jsx)(v.a,{type:"email",name:"email",id:"email",placeholder:"provide your email",value:s,onChange:function(e){return n(e.target.value)}})})]}),Object(C.jsxs)(E.a,{row:!0,children:[Object(C.jsx)(G.a,{for:"password",sm:3,children:"Password"}),Object(C.jsx)(f.a,{sm:9,children:Object(C.jsx)(v.a,{type:"password",name:"password",id:"password",placeholder:"your password here",value:d,onChange:function(e){return x(e.target.value)}})})]})]}),Object(C.jsx)(R.a,{children:Object(C.jsx)(y.a,{type:"submit",block:!0,color:"primary",children:"Sign Up"})})]})})})})})},B=function(){return Object(C.jsx)("div",{children:Object(C.jsx)("h1",{children:"PageNotFound Page "})})},J=function(){return Object(C.jsx)(m.a,{fluid:!0,tag:"footer",className:"text-center bg-info text-white text-uppercase fixed-bottom p-3",children:"GitHub Search App with firebase"})},T=a(104),W=a(105),Y=a(106),K=a(107),M=a(112),X=a(108),q=a(109),H=a(110),V=function(){var e,t=Object(c.useContext)(F),a=Object(c.useState)(!1),r=Object(i.a)(a,2),s=r[0],n=r[1];return Object(C.jsxs)(T.a,{color:"info",light:!0,expand:"md",children:[Object(C.jsx)(W.a,{children:Object(C.jsx)(l.b,{to:"/",className:"text-white",children:"GitFire app"})}),Object(C.jsx)(Y.a,{className:"text-white",children:(null===(e=t.user)||void 0===e?void 0:e.email)?t.user.email:""}),Object(C.jsx)(K.a,{onClick:function(){return n(!s)}}),Object(C.jsx)(M.a,{isOpen:s,navbar:!0,children:Object(C.jsx)(X.a,{className:"ml-auto",navbar:!0,children:t.user?Object(C.jsx)(q.a,{children:Object(C.jsx)(H.a,{onClick:function(){t.setUser(null)},className:"text-white",children:"Logout"})}):Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(q.a,{children:Object(C.jsx)(H.a,{tag:l.b,id:"RouterNavLink",to:"/signUp",className:"text-white",children:"SignUp"})}),Object(C.jsx)(q.a,{children:Object(C.jsx)(H.a,{tag:l.b,id:"RouterNavLink",to:"/signIn",className:"text-white",children:"SignIn"})})]})})})]})};u.a.initializeApp({apiKey:"AIzaSyCLXAg0Y3JuVboLqMDz5uXPCxvrauxSNuA",authDomain:"my-first-project-react-9a1ad.firebaseapp.com",projectId:"my-first-project-react-9a1ad",storageBucket:"my-first-project-react-9a1ad.appspot.com",messagingSenderId:"499079165088",appId:"1:499079165088:web:2f8b244e32cd6472bfc5c5",measurementId:"G-RGKYRGS3WD"});var Q=function(){var e=Object(c.useState)(null),t=Object(i.a)(e,2),a=t[0],r=t[1];return Object(C.jsxs)(l.a,{basename:"/Dineshkumar510/GithubProfile",children:[Object(C.jsx)(o.a,{}),Object(C.jsxs)(F.Provider,{value:{user:a,setUser:r},children:[Object(C.jsx)(V,{}),Object(C.jsxs)(j.d,{children:[Object(C.jsx)(j.b,{exact:!0,path:"/",component:A}),Object(C.jsx)(j.b,{exact:!0,path:"/SignIn",component:_}),Object(C.jsx)(j.b,{exact:!0,path:"/SignUp",component:z}),Object(C.jsx)(j.b,{exact:!0,path:"*",component:B})]}),Object(C.jsx)(J,{})]})]})},Z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,113)).then((function(t){var a=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,n=t.getTTFB;a(e),c(e),r(e),s(e),n(e)}))};n.a.render(Object(C.jsx)(r.a.StrictMode,{children:Object(C.jsx)(Q,{})}),document.getElementById("root")),Z()}},[[88,1,2]]]);
//# sourceMappingURL=main.da0c1b6b.chunk.js.map