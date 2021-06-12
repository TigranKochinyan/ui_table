(()=>{"use strict";var e={3890:(e,t,r)=>{var n=r(7378),a=r(1542),u=r(8388),o=r(906);function i(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m={users:[],page:0,dragedUser:""};r(9724);var p=[r(5870).Z];var d=o.md.apply(void 0,p),g=(0,o.MT)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ERROR":return s(s({},e),{},{errorMessage:t.message});case"GET_USERS":return s(s({},e),{},{users:t.users});case"ADD_USER":var r=[t.user].concat(i(e.users));return s(s({},e),{},{users:r});case"DELETE_USER":var n=e.users.filter((function(e){return e._id!==t.userId}));return s(s({},e),{},{users:n});case"CHANGE_PAGE":return s(s({},e),{},{page:t.page});case"DELETE_CHECKED":var a=e.users.filter((function(e){return!t.checkedUsers.includes(e._id)}));return s(s({},e),{},{users:a});case"DRAG_USER":return s(s({},e),{},{dragedUser:t.user});case"DROP_USER":var u=e.users.findIndex((function(t){return t._id===e.dragedUser._id})),o=e.users.findIndex((function(e){return e._id===t.id})),c=i(e.users).map((function(t,r){return r===parseInt(o)?e.dragedUser:r===parseInt(u)?e.users[o]:t}));return s(s({},e),{},{users:c,dragedUser:""});case"UPDATE_FROM_STORAGE":return s(s({},e),{},{users:t.users});case"SAVE_USER_CHANGES":var l=i(e.users),f=l.findIndex((function(e){return e._id===t.user._id}));return l[f]=t.user,s(s({},e),{},{users:l});default:return e}}),d);function y(){return Math.random().toString(32).slice(2)+"-"+Math.random().toString(32).slice(2)}const b=[{_id:y(),name:"Tigo",surname:"Migo",date:"1996/01/12"},{_id:y(),name:"Tigo",surname:"Migo1",date:"1996/01/12"},{_id:y(),name:"Tigo",surname:"Migo2",date:"1996/01/12"},{_id:y(),name:"Tigo",surname:"Migo3",date:"1996/01/12"},{_id:y(),name:"Tigo",surname:"Migo4",date:"1996/01/12"},{_id:y(),name:"Tigo",surname:"Migo5",date:"1996/01/12"},{_id:y(),name:"Tigo",surname:"Migo6",date:"1996/01/12"},{_id:y(),name:"Tigo",surname:"Migo7",date:"1996/01/12"},{_id:y(),name:"Tigo",surname:"Migo8",date:"1996/01/12"}];function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){E(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function E(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,u=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){a=!0,u=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw u}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return O(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return O(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var w={deleteUser:function(e){return function(t){t({type:"DELETE_USER",userId:e})}},dragUser:function(e){return function(t){t({type:"DRAG_USER",user:e})}},saveUsersChanges:function(e){return function(t){t({type:"SAVE_USER_CHANGES",user:e})}},dropUser:function(e){return function(t){t({type:"DROP_USER",id:e})}}};const _=(0,u.$j)(null,w)((function(e){var t,r=S((0,n.useState)(!1),2),a=r[0],u=r[1],o=e.user,i=o.name,c=o.surname,l=o.date,s=o._id,f=S((0,n.useState)({inputName:i,inputSurname:c,inputDate:l}),2),m=f[0],p=f[1],d=S((0,n.useState)(!1),2),g=d[0],y=d[1],b=S((0,n.useState)(!1),2),h=b[0],O=b[1],w=S((0,n.useState)(!1),2),_=(w[0],w[1],function(t){if("onBlur"!==t._reactName){u(!a);var r={_id:s,name:m.inputName,surname:m.inputSurname,date:m.inputDate};e.saveUsersChanges(r)}else t.preventDefault()}),j=function(e){var t=e.name,r=e.value;p(v(v({},m),{},E({},t,r)))};return n.createElement(n.Fragment,null,a?n.createElement("tr",{className:"user-row",onDoubleClick:_,onBlur:_},n.createElement("td",null,n.createElement("input",{type:"checkbox",disabled:!0})),n.createElement("td",null,n.createElement("input",{placeholder:"Name",onChange:function(e){return j(e.target)},value:m.inputName,type:"text",name:"inputName"})),n.createElement("td",null,n.createElement("input",{placeholder:"Surname",onChange:function(e){return j(e.target)},value:m.inputSurname,type:"text",name:"inputSurname"})),n.createElement("td",null,n.createElement("input",{placeholder:"Date of birth",onChange:function(e){return j(e.target)},value:function(e){return e.split("/").join("-")}(m.inputDate),type:"date",name:"inputDate"})),n.createElement("td",null,n.createElement("button",{disabled:!1,onClick:function(){localStorage.setItem("theme","".concat(Math.random()))}},"Delete"))):n.createElement("tr",{id:e.id,className:"user-row ".concat(g?"user-row__checked":""," ").concat(h?"user-row_draged":""," "),onDoubleClick:_,draggable:!0,onDragEnd:function(e){e.preventDefault(),e.currentTarget.className="user-row",O(!1)},onDragStart:function(t){return O(!0),void e.dragUser(e.user)},onDragLeave:function(e){e.currentTarget.className="user-row",O(!1)},onDragOver:function(e){e.preventDefault(),e.currentTarget.className.includes("user-row")&&(e.currentTarget.className="".concat(e.currentTarget.className," user-row_ondrag"))},onDrop:function(t){return function(t,r){t.currentTarget.className="user-row",O(!1),e.dropUser(r._id)}(t,e.user)}},n.createElement("td",{className:"user-checkbox"},n.createElement("input",{type:"checkbox",onChange:function(){y(!g),e.checkUser(s)},name:"vehicle1"})),n.createElement("td",null,m.inputName),n.createElement("td",null,m.inputSurname),n.createElement("td",null,(t=m.inputDate,Math.floor((new Date-new Date(t).getTime())/315576e5))),n.createElement("td",null,n.createElement("button",{className:"user-row_button",onClick:function(){return e.deleteUser(s)}},"Delete"))))}));const j=function(e){var t=e.users,r=e.checkUser;return n.createElement(n.Fragment,null,t.map((function(e,t){return n.createElement(_,{checkUser:r,id:t,key:e._id,user:e})})))};function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){U(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function U(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function N(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,u=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){a=!0,u=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw u}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return P(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return P(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var T={addUser:function(e){return function(t){t({type:"ADD_USER",user:e})}}};const C=(0,u.$j)(null,T)((function(e){var t=N((0,n.useState)({inputName:"",inputSurname:"",inputDate:new Date}),2),r=t[0],a=t[1],u=function(e){var t=e.name,n=e.value;a(A(A({},r),{},U({},t,n)))},o=function(){var e=Object.values(r);console.log(e);for(var t=0,n=e;t<n.length;t++){if(""===n[t])return!1}return!0};return n.createElement("form",{className:"addUser"},n.createElement("input",{className:"addUser__input",value:r.inputName,onChange:function(e){return u(e.target)},name:"inputName",placeholder:"Name",type:"text"}),n.createElement("input",{className:"addUser__input",value:r.inputSurname,onChange:function(e){return u(e.target)},name:"inputSurname",placeholder:"Surname",type:"text"}),n.createElement("input",{className:"addUser__input",value:r.inputDate,onChange:function(e){return u(e.target)},max:(new Date).toISOString().slice(0,10),name:"inputDate",placeholder:"Date of birth",type:"date"}),n.createElement("button",{className:"addUser__button",onClick:function(t){if(t.preventDefault(),o()){var n={_id:y(),name:r.inputName,surname:r.inputSurname,date:r.inputDate};e.addUser(n)}else console.log(o())}},"Save"))}));var k={changePage:function(e){return function(t){t({type:"CHANGE_PAGE",page:e})}}};const I=(0,u.$j)((function(e){return{page:e.page}}),k)((function(e){var t=e.pageCount,r=e.changePage,a=e.page,u=function(){for(var e=[],u=function(t){if(t===a)return e.push(n.createElement("button",{key:t,className:"pagination__button pagination__button_active",onClick:function(){return r(t)}},t+1)),"continue";e.push(n.createElement("button",{key:t,className:"pagination__button",onClick:function(){return r(t)}},t+1))},o=0;o<t;o++)u(o);return e}();return n.createElement(n.Fragment,null,n.createElement("div",{className:"pagination"},u))}));function x(e){return function(e){if(Array.isArray(e))return G(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||R(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,u=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){a=!0,u=e}finally{try{n||null==i.return||i.return()}finally{if(a)throw u}}return r}(e,t)||R(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function R(e,t){if(e){if("string"==typeof e)return G(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?G(e,t):void 0}}function G(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var F={getUsers:function(e){return function(t){t({type:"GET_USERS",users:e})}},deleteChecked:function(e){return function(t){t({type:"DELETE_CHECKED",checkedUsers:e})}},updateFromStorage:function(e){return function(t){t({type:"UPDATE_FROM_STORAGE",users:e})}}};const $=(0,u.$j)((function(e){return{users:e.users,page:e.page}}),F)((function(e){var t=e.users,r=e.getUsers,a=e.deleteChecked,u=e.page,o=e.updateFromStorage,i=M((0,n.useState)(new Set),2),c=i[0],l=i[1],s=M((0,n.useState)([]),2),f=s[0],m=s[1];(0,n.useEffect)((function(){localStorage.setItem("users",b),r(b)}),[]),(0,n.useEffect)((function(){m(d(u))}),[t,u]),(0,n.useEffect)((function(){p(t),0!==t.length&&o(t)}),[t]),window.addEventListener("storage",(function(){var e=JSON.parse(window.localStorage.getItem("users"));0!==e.length&&o(e)}));var p=function(e){localStorage.setItem("users",JSON.stringify(e))},d=function(e){return t.slice(6*e,6*e+6)};return n.createElement(n.Fragment,null,n.createElement("div",{className:"table-parent-div"},n.createElement("table",{className:"usersTable"},n.createElement("thead",null,n.createElement("tr",null,n.createElement("th",null),n.createElement("th",null,"Name"),n.createElement("th",null,"Surname"),n.createElement("th",null,"Age"),n.createElement("th",null,"Action"))),n.createElement("tbody",null,n.createElement(j,{checkUser:function(e){var t=new Set(c);t.add(e),l(t)},users:f})))),n.createElement("button",{className:"usersTable_deleteButton",onClick:function(){a(x(c)),l(new Set)}},"Delete checked"),t.length>6&&n.createElement(I,{pageCount:t.length%6!=0?parseInt(t.length/6)+1:parseInt(t.length/6)}),n.createElement(C,null))}));var H=function(){return n.createElement(n.StrictMode,null,n.createElement(u.zt,{store:g},n.createElement($,null)))};(0,a.render)(n.createElement(H,null),document.getElementById("app"))}},t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,r),a.exports}r.m=e,r.x=e=>{},r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0},t=[[1202,503],[3890,503]],n=e=>{},a=(a,u)=>{for(var o,i,[c,l,s,f]=u,m=0,p=[];m<c.length;m++)i=c[m],r.o(e,i)&&e[i]&&p.push(e[i][0]),e[i]=0;for(o in l)r.o(l,o)&&(r.m[o]=l[o]);for(s&&s(r),a&&a(u);p.length;)p.shift()();return f&&t.push.apply(t,f),n()},u=self.webpackChunk=self.webpackChunk||[];function o(){for(var n,a=0;a<t.length;a++){for(var u=t[a],o=!0,i=1;i<u.length;i++){var c=u[i];0!==e[c]&&(o=!1)}o&&(t.splice(a--,1),n=r(r.s=u[0]))}return 0===t.length&&(r.x(),r.x=e=>{}),n}u.forEach(a.bind(null,0)),u.push=a.bind(null,u.push.bind(u));var i=r.x;r.x=()=>(r.x=i||(e=>{}),(n=o)())})(),r.x()})();