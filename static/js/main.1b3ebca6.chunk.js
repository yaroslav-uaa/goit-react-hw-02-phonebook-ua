(this["webpackJsonpgoit-react-hw-02-phonebook-ua"]=this["webpackJsonpgoit-react-hw-02-phonebook-ua"]||[]).push([[0],[,,,function(t,e,n){t.exports={form:"Form_form__3xM2_",label:"Form_label__1VD2R",btn:"Form_btn__b7_3a"}},,,,,,,,function(t,e,n){t.exports={section:"Section_section__3ZHEC"}},function(t,e,n){t.exports={filter:"Filter_filter__3Mngo"}},function(t,e,n){t.exports={links:"Contacts_links__2vKC6"}},,,,,,function(t,e,n){},,function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(10),i=n.n(r),o=(n(19),n(14)),s=n(2),l=n(5),u=n(6),b=n(8),m=n(7),j=n(11),d=n.n(j),h=n(0),f=function(t){var e=t.title,n=t.children;return Object(h.jsxs)("section",{className:d.a.section,children:[Object(h.jsx)("h1",{children:e}),n]})},p=n(4),O=n(24),x=n(3),C=n.n(x),g=function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleSubmit=function(e){e.preventDefault(),t.props.getContact(Object(s.a)(Object(s.a)({},t.state),{},{id:Object(O.a)()})),t.setState({name:"",number:""})},t.handleNameChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(p.a)({},a,c)),t.props.getName(t.state.name)},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number;return Object(h.jsxs)("form",{className:C.a.form,onSubmit:this.handleSubmit,children:[Object(h.jsxs)("label",{className:C.a.label,children:["Name",Object(h.jsx)("input",{type:"text",name:"name",value:e,placeholder:"Enter your name",onChange:this.handleNameChange,required:!0})]}),Object(h.jsxs)("label",{className:C.a.label,children:["Number",Object(h.jsx)("input",{type:"tel",name:"number",value:n,placeholder:"Enter your number",onChange:this.handleNameChange,required:!0})]}),Object(h.jsx)("button",{type:"submit",className:C.a.btn,children:"Add contact"})]})}}]),n}(a.Component),v=n(12),_=n.n(v),y=function(t){var e=t.filter,n=t.getFilterContact;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("input",{className:_.a.filter,type:"text",name:"filter",value:e,onChange:n,placeholder:"Enter name to find"})})},N=n(13),S=n.n(N),k=function(t){var e=t.contactList,n=t.deleteContact;return Object(h.jsx)("ul",{children:e.map((function(t){return Object(h.jsxs)("li",{className:S.a.links,children:[Object(h.jsx)("p",{children:t.name}),Object(h.jsx)("p",{children:t.number}),Object(h.jsx)("button",{type:"button",onClick:function(){return n(t.id)},children:"Delete"})]},t.id)}))})},F=(n(21),function(t){Object(b.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Busya Simpotusya",number:"459-12-56"},{id:"id-2",name:"Jessica Parktronic",number:"443-89-12"},{id:"id-3",name:"Silvester Vstolovoi",number:"645-17-79"},{id:"id-4",name:"Tom Cruizcontrol",number:"227-91-26"}],filter:""},t.getName=function(e){t.setState({name:e})},t.getContact=function(e){var n=!0;t.state.contacts.map((function(t){return t.name===e.name?n=!1:""})),n?t.setState((function(t){return Object(s.a)(Object(s.a)({},t),{},{contacts:[].concat(Object(o.a)(t.contacts),[e])})})):alert("".concat(e.name," is already in contacts"))},t.getFilterContact=function(e){t.setState({filter:e.target.value})},t.filteredContact=function(){return t.state.filter?t.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t.state.filter.toLowerCase())})):t.state.contacts},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state.filter;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(f,{title:"Phonebook",children:Object(h.jsx)(g,{getContact:this.getContact,getName:this.getName})}),Object(h.jsxs)(f,{title:"Contacts",children:[Object(h.jsx)(y,{filter:t,getFilterContact:this.getFilterContact}),Object(h.jsx)(k,{contactList:this.filteredContact(),deleteContact:this.deleteContact})]})]})}}]),n}(a.Component));i.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(F,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.1b3ebca6.chunk.js.map