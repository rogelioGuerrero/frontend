(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c67cf760"],{"18d6":function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var r=a("1da1"),c=a("5530"),n=(a("96cf"),a("d3b7"),a("159b"),a("b64b"),a("25f0"),a("7a23")),i=(a("025e"),a("aeb7")),o=a("5502");function s(e,t,a,s){var l=Object(i["a"])(),d=Object(o["b"])(),u=Object(n["I"])({id:null,loading:!1,pageReady:!1,submitted:!1,saving:!1,errorMsg:""}),b=Object(n["e"])((function(){return e.id?e.apiPath+"/"+encodeURIComponent(e.id):e.apiPath})),j=Object(n["e"])({get:function(){return d.getters["".concat(e.pageName,"/currentRecord")]},set:function(t){d.commit("".concat(e.pageName,"/setCurrentRecord"),t)}});function p(){var e=Object(c["a"])({},t);return Array.isArray(e)?e.forEach((function(e){Object.keys(e).forEach((function(t){Array.isArray(e[t])&&(e[t]=e[t].toString())}))})):Object.keys(e).forEach((function(t){Array.isArray(e[t])&&(e[t]=e[t].toString())})),e}function m(){return O.apply(this,arguments)}function O(){return O=Object(r["a"])(regeneratorRuntime.mark((function t(){var r,c,n,i,o,j;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(u.submitted=!0,r=!a.value.$invalid,r){t.next=5;break}return l.flashMsg(e.formValidationError,e.formValidationMsg,"error"),t.abrupt("return");case 5:return u.saving=!0,c=b.value,n=e.id,i=p(),o={id:n,url:c,payload:i},t.prev=10,t.next=13,d.dispatch("".concat(e.pageName,"/updateRecord"),o);case 13:j=t.sent,l.closeDialogs(),s(j),t.next=21;break;case 18:t.prev=18,t.t0=t["catch"](10),l.showPageRequestError(t.t0);case 21:return t.prev=21,u.saving=!1,u.submitted=!1,t.finish(21);case 25:case"end":return t.stop()}}),t,null,[[10,18,21,25]])}))),O.apply(this,arguments)}function f(){return g.apply(this,arguments)}function g(){return g=Object(r["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return u.pageReady=!1,u.loading=!0,u.item=null,r=b.value,a.prev=4,a.next=7,d.dispatch("".concat(e.pageName,"/fetchRecord"),r);case 7:Object.assign(t,j.value),u.pageReady=!0,a.next=15;break;case 11:a.prev=11,a.t0=a["catch"](4),console.error(a.t0),l.showPageRequestError(a.t0);case 15:return a.prev=15,u.loading=!1,a.finish(15);case 18:case"end":return a.stop()}}),a,null,[[4,11,15,18]])}))),g.apply(this,arguments)}function v(e){return{"p-invalid":a.value[e].$invalid&&u.submitted}}function h(e){var t=a.value[e].$silentErrors;return t.length?t[0].$message:null}function y(e,t){return void 0===t?a.value[e].$invalid&&u.submitted:!(!a.value.$each.$response.$errors[t][e].length||!u.submitted)}var w={apiUrl:b,currentRecord:j},x={load:f,submitForm:m,getFieldError:h,getErrorClass:v,isFieldValid:y};return{state:u,computedProps:w,methods:x}}},b862:function(e,t,a){"use strict";a.r(t);var r=a("5530"),c=(a("a9e3"),a("b0c0"),a("7a23")),n=a("25a0"),i=(a("0072"),a("aeb7")),o=a("18d6"),s={class:"main-page"},l={key:0,class:"page-section mb-3"},d=Object(c["l"])('<div class="container"><div class="grid justify-content-between"><div class="col"><div class=""><div class="text-2xl text-primary font-bold"> Editar </div></div></div></div></div>',1),u=[d],b={class:"page-section"},j={class:"container"},p={class:"grid"},m={class:"md:col-9 sm:col-12 comp-grid"},O={class:""},f={class:""},g={key:0,class:"grid"},v={class:"col-12"},h={class:"grid"},y={class:"col-12"},w={class:"formgrid grid"},x=Object(c["j"])("div",{class:"col-12 md:col-3"}," Name ",-1),E={class:"col-12 md:col-9"},R={key:0,class:"p-error"},S={class:"col-12"},T={class:"formgrid grid"},k=Object(c["j"])("div",{class:"col-12 md:col-3"}," Phone ",-1),P={class:"col-12 md:col-9"},V={key:0,class:"p-error"},N={key:0,class:"text-center my-3"},A={key:1,class:"p-3 text-center"},M={props:{id:[String,Number],pageName:{type:String,default:"clientes"},routeName:{type:String,default:"clientesedit"},pagePath:{type:String,default:"clientes/edit"},apiPath:{type:String,default:"clientes/edit"},submitButtonLabel:{type:String,default:"Actualizar"},formValidationError:{type:String,default:"El formulario no es válido"},formValidationMsg:{type:String,default:"Por favor complete el formulario"},msgAfterUpdate:{type:String,default:"Registro actualizado con éxito"},showHeader:{type:Boolean,default:!0},showSubmitButton:{type:Boolean,default:!0},redirect:{type:Boolean,default:!0},isSubPage:{type:Boolean,default:!1}},setup:function(e){var t=e,a=Object(i["a"])(),d=Object.assign({name:"",phone:""},t.pageData),M=Object(c["I"])(Object(r["a"])({},d));function B(e){a.flashMsg(t.msgAfterUpdate),t.redirect&&a.navigateTo("/clientes")}var $=Object(c["e"])((function(){return{name:{},phone:{}}})),G=Object(n["a"])($,M),U=Object(o["a"])(t,M,G,B),F=Object(c["S"])(U.state),C=(F.submitted,F.saving),I=F.loading,z=F.pageReady,q=U.computedProps,D=(q.apiUrl,q.currentRecord,U.methods),H=D.load,J=D.submitForm,Q=D.getErrorClass,L=D.getFieldError,K=D.isFieldValid;return Object(c["E"])((function(){var e="Editar";a.setPageTitle(t.routeName,e),H()})),function(t,a){var r=Object(c["M"])("InputText"),n=Object(c["M"])("Button"),i=Object(c["M"])("ProgressSpinner");return Object(c["G"])(),Object(c["i"])("div",s,[e.showHeader?(Object(c["G"])(),Object(c["i"])("section",l,u)):Object(c["h"])("",!0),Object(c["j"])("section",b,[Object(c["j"])("div",j,[Object(c["j"])("div",p,[Object(c["j"])("div",m,[Object(c["j"])("div",O,[Object(c["j"])("div",f,[Object(c["j"])("div",null,[Object(c["T"])(z)?(Object(c["G"])(),Object(c["i"])("div",g,[Object(c["j"])("div",v,[Object(c["j"])("form",{ref:"observer",tag:"form",onSubmit:a[2]||(a[2]=Object(c["bb"])((function(e){return Object(c["T"])(J)()}),["prevent"])),class:Object(c["y"])(["",{card:!e.isSubPage}])},[Object(c["j"])("div",h,[Object(c["j"])("div",y,[Object(c["j"])("div",w,[x,Object(c["j"])("div",E,[Object(c["n"])(r,{ref:"ctrlname",modelValue:Object(c["T"])(M).name,"onUpdate:modelValue":a[0]||(a[0]=function(e){return Object(c["T"])(M).name=e}),modelModifiers:{trim:!0},label:"Name",type:"text",placeholder:"Escribir Name",class:Object(c["y"])(["w-full",Object(c["T"])(Q)("name")])},null,8,["modelValue","class"]),Object(c["T"])(K)("name")?(Object(c["G"])(),Object(c["i"])("small",R,Object(c["Q"])(Object(c["T"])(L)("name")),1)):Object(c["h"])("",!0)])])]),Object(c["j"])("div",S,[Object(c["j"])("div",T,[k,Object(c["j"])("div",P,[Object(c["n"])(r,{ref:"ctrlphone",modelValue:Object(c["T"])(M).phone,"onUpdate:modelValue":a[1]||(a[1]=function(e){return Object(c["T"])(M).phone=e}),modelModifiers:{trim:!0},label:"Phone",type:"text",placeholder:"Escribir Phone",class:Object(c["y"])(["w-full",Object(c["T"])(Q)("phone")])},null,8,["modelValue","class"]),Object(c["T"])(K)("phone")?(Object(c["G"])(),Object(c["i"])("small",V,Object(c["Q"])(Object(c["T"])(L)("phone")),1)):Object(c["h"])("",!0)])])])]),e.showSubmitButton?(Object(c["G"])(),Object(c["i"])("div",N,[Object(c["n"])(n,{type:"submit",label:"Actualizar",icon:"pi pi-send",loading:Object(c["T"])(C)},null,8,["loading"])])):Object(c["h"])("",!0)],34)])])):Object(c["h"])("",!0),Object(c["T"])(I)?(Object(c["G"])(),Object(c["i"])("div",A,[Object(c["n"])(i,{style:{width:"50px",height:"50px"}})])):Object(c["h"])("",!0)])])])])])])])])}}};const B=M;t["default"]=B}}]);
//# sourceMappingURL=chunk-c67cf760.d66ab4a2.js.map