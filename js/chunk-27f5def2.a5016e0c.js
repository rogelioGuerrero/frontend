(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27f5def2"],{"18d6":function(e,c,t){"use strict";t.d(c,"a",(function(){return o}));var l=t("1da1"),r=t("5530"),i=(t("96cf"),t("d3b7"),t("159b"),t("b64b"),t("25f0"),t("7a23")),s=(t("025e"),t("aeb7")),a=t("5502");function o(e,c,t,o){var n=Object(s["a"])(),d=Object(a["b"])(),b=Object(i["I"])({id:null,loading:!1,pageReady:!1,submitted:!1,saving:!1,errorMsg:""}),j=Object(i["e"])((function(){return e.id?e.apiPath+"/"+encodeURIComponent(e.id):e.apiPath})),u=Object(i["e"])({get:function(){return d.getters["".concat(e.pageName,"/currentRecord")]},set:function(c){d.commit("".concat(e.pageName,"/setCurrentRecord"),c)}});function O(){var e=Object(r["a"])({},c);return Array.isArray(e)?e.forEach((function(e){Object.keys(e).forEach((function(c){Array.isArray(e[c])&&(e[c]=e[c].toString())}))})):Object.keys(e).forEach((function(c){Array.isArray(e[c])&&(e[c]=e[c].toString())})),e}function m(){return p.apply(this,arguments)}function p(){return p=Object(l["a"])(regeneratorRuntime.mark((function c(){var l,r,i,s,a,u;return regeneratorRuntime.wrap((function(c){while(1)switch(c.prev=c.next){case 0:if(b.submitted=!0,l=!t.value.$invalid,l){c.next=5;break}return n.flashMsg(e.formValidationError,e.formValidationMsg,"error"),c.abrupt("return");case 5:return b.saving=!0,r=j.value,i=e.id,s=O(),a={id:i,url:r,payload:s},c.prev=10,c.next=13,d.dispatch("".concat(e.pageName,"/updateRecord"),a);case 13:u=c.sent,n.closeDialogs(),o(u),c.next=21;break;case 18:c.prev=18,c.t0=c["catch"](10),n.showPageRequestError(c.t0);case 21:return c.prev=21,b.saving=!1,b.submitted=!1,c.finish(21);case 25:case"end":return c.stop()}}),c,null,[[10,18,21,25]])}))),p.apply(this,arguments)}function f(){return v.apply(this,arguments)}function v(){return v=Object(l["a"])(regeneratorRuntime.mark((function t(){var l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return b.pageReady=!1,b.loading=!0,b.item=null,l=j.value,t.prev=4,t.next=7,d.dispatch("".concat(e.pageName,"/fetchRecord"),l);case 7:Object.assign(c,u.value),b.pageReady=!0,t.next=15;break;case 11:t.prev=11,t.t0=t["catch"](4),console.error(t.t0),n.showPageRequestError(t.t0);case 15:return t.prev=15,b.loading=!1,t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[4,11,15,18]])}))),v.apply(this,arguments)}function g(e){return{"p-invalid":t.value[e].$invalid&&b.submitted}}function y(e){var c=t.value[e].$silentErrors;return c.length?c[0].$message:null}function T(e,c){return void 0===c?t.value[e].$invalid&&b.submitted:!(!t.value.$each.$response.$errors[c][e].length||!b.submitted)}var h={apiUrl:j,currentRecord:u},V={load:f,submitForm:m,getFieldError:y,getErrorClass:g,isFieldValid:T};return{state:b,computedProps:h,methods:V}}},edf7:function(e,c,t){"use strict";t.r(c);var l=t("5530"),r=(t("a9e3"),t("7a23")),i=t("25a0"),s=t("0072"),a=t("aeb7"),o=t("18d6"),n={class:"main-page"},d={key:0,class:"page-section mb-3"},b=Object(r["l"])('<div class="container"><div class="grid justify-content-between"><div class="col"><div class=""><div class="text-2xl text-primary font-bold"> Editar </div></div></div></div></div>',1),j=[b],u={class:"page-section"},O={class:"container"},m={class:"grid"},p={class:"md:col-9 sm:col-12 comp-grid"},f={class:""},v={class:""},g={key:0,class:"grid"},y={class:"col-12"},T={class:"grid"},h={class:"col-12"},V={class:"formgrid grid"},k=Object(r["j"])("div",{class:"col-12 md:col-3"}," Id Cabecera * ",-1),w={class:"col-12 md:col-9"},E={key:0,class:"p-error"},_={class:"col-12"},S={class:"formgrid grid"},M=Object(r["j"])("div",{class:"col-12 md:col-3"}," Dimension ",-1),x={class:"col-12 md:col-9"},G={key:0,class:"p-error"},U={class:"col-12"},R={class:"formgrid grid"},C=Object(r["j"])("div",{class:"col-12 md:col-3"}," Subdimension ",-1),P={class:"col-12 md:col-9"},Q={key:0,class:"p-error"},B={class:"col-12"},A={class:"formgrid grid"},I=Object(r["j"])("div",{class:"col-12 md:col-3"}," Componente ",-1),D={class:"col-12 md:col-9"},N={key:0,class:"p-error"},$={class:"col-12"},F={class:"formgrid grid"},L=Object(r["j"])("div",{class:"col-12 md:col-3"}," Item ",-1),q={class:"col-12 md:col-9"},z={key:0,class:"p-error"},H={class:"col-12"},J={class:"formgrid grid"},K=Object(r["j"])("div",{class:"col-12 md:col-3"}," Medicion ",-1),W={class:"col-12 md:col-9"},X={key:0,class:"p-error"},Y={class:"col-12"},Z={class:"formgrid grid"},ee=Object(r["j"])("div",{class:"col-12 md:col-3"}," Base ",-1),ce={class:"col-12 md:col-9"},te={key:0,class:"p-error"},le={class:"col-12"},re={class:"formgrid grid"},ie=Object(r["j"])("div",{class:"col-12 md:col-3"}," Status ",-1),se={class:"col-12 md:col-9"},ae={key:0,class:"p-error"},oe={class:"col-12"},ne={class:"formgrid grid"},de=Object(r["j"])("div",{class:"col-12 md:col-3"}," Valor ",-1),be={class:"col-12 md:col-9"},je={key:0,class:"p-error"},ue={class:"col-12"},Oe={class:"formgrid grid"},me=Object(r["j"])("div",{class:"col-12 md:col-3"}," Porcentaje ",-1),pe={class:"col-12 md:col-9"},fe={key:0,class:"p-error"},ve={class:"col-12"},ge={class:"formgrid grid"},ye=Object(r["j"])("div",{class:"col-12 md:col-3"}," Comen ",-1),Te={class:"col-12 md:col-9"},he={key:0,class:"p-error"},Ve={class:"col-12"},ke={class:"formgrid grid"},we=Object(r["j"])("div",{class:"col-12 md:col-3"}," Link Evidencias ",-1),Ee={class:"col-12 md:col-9"},_e={key:0,class:"p-error"},Se={class:"col-12"},Me={class:"formgrid grid"},xe=Object(r["j"])("div",{class:"col-12 md:col-3"}," Criterios ",-1),Ge={class:"col-12 md:col-9"},Ue={key:0,class:"p-error"},Re={class:"col-12"},Ce={class:"formgrid grid"},Pe=Object(r["j"])("div",{class:"col-12 md:col-3"}," Orden Dim ",-1),Qe={class:"col-12 md:col-9"},Be={key:0,class:"p-error"},Ae={class:"col-12"},Ie={class:"formgrid grid"},De=Object(r["j"])("div",{class:"col-12 md:col-3"}," Orden Subdim ",-1),Ne={class:"col-12 md:col-9"},$e={key:0,class:"p-error"},Fe={class:"col-12"},Le={class:"formgrid grid"},qe=Object(r["j"])("div",{class:"col-12 md:col-3"}," Subcriterios ",-1),ze={class:"col-12 md:col-9"},He={key:0,class:"p-error"},Je={key:0,class:"text-center my-3"},Ke={key:1,class:"p-3 text-center"},We={props:{id:[String,Number],pageName:{type:String,default:"registro"},routeName:{type:String,default:"registroedit"},pagePath:{type:String,default:"registro/edit"},apiPath:{type:String,default:"registro/edit"},submitButtonLabel:{type:String,default:"Actualizar"},formValidationError:{type:String,default:"El formulario no es válido"},formValidationMsg:{type:String,default:"Por favor complete el formulario"},msgAfterUpdate:{type:String,default:"Registro actualizado con éxito"},showHeader:{type:Boolean,default:!0},showSubmitButton:{type:Boolean,default:!0},redirect:{type:Boolean,default:!0},isSubPage:{type:Boolean,default:!1}},setup:function(e){var c=e,t=Object(a["a"])(),b=Object.assign({id_cabecera:"",dimension:"",subdimension:"",componente:"",item:"",medicion:"",base:"",status:"",valor:"",porcentaje:"",comen:"",link_evidencias:"",criterios:"",orden_dim:"",orden_subdim:"",subcriterios:""},c.pageData),We=Object(r["I"])(Object(l["a"])({},b));function Xe(e){t.flashMsg(c.msgAfterUpdate),c.redirect&&t.navigateTo("/registro")}var Ye=Object(r["e"])((function(){return{id_cabecera:{required:s["b"],numeric:s["a"]},dimension:{},subdimension:{},componente:{},item:{},medicion:{numeric:s["a"]},base:{numeric:s["a"]},status:{numeric:s["a"]},valor:{numeric:s["a"]},porcentaje:{numeric:s["a"]},comen:{},link_evidencias:{},criterios:{numeric:s["a"]},orden_dim:{numeric:s["a"]},orden_subdim:{numeric:s["a"]},subcriterios:{}}})),Ze=Object(i["a"])(Ye,We),ec=Object(o["a"])(c,We,Ze,Xe),cc=Object(r["S"])(ec.state),tc=(cc.submitted,cc.saving),lc=cc.loading,rc=cc.pageReady,ic=ec.computedProps,sc=(ic.apiUrl,ic.currentRecord,ec.methods),ac=sc.load,oc=sc.submitForm,nc=sc.getErrorClass,dc=sc.getFieldError,bc=sc.isFieldValid;return Object(r["E"])((function(){var e="Editar";t.setPageTitle(c.routeName,e),ac()})),function(c,t){var l=Object(r["M"])("InputText"),i=Object(r["M"])("Textarea"),s=Object(r["M"])("Button"),a=Object(r["M"])("ProgressSpinner");return Object(r["G"])(),Object(r["i"])("div",n,[e.showHeader?(Object(r["G"])(),Object(r["i"])("section",d,j)):Object(r["h"])("",!0),Object(r["j"])("section",u,[Object(r["j"])("div",O,[Object(r["j"])("div",m,[Object(r["j"])("div",p,[Object(r["j"])("div",f,[Object(r["j"])("div",v,[Object(r["j"])("div",null,[Object(r["T"])(rc)?(Object(r["G"])(),Object(r["i"])("div",g,[Object(r["j"])("div",y,[Object(r["j"])("form",{ref:"observer",tag:"form",onSubmit:t[16]||(t[16]=Object(r["bb"])((function(e){return Object(r["T"])(oc)()}),["prevent"])),class:Object(r["y"])(["",{card:!e.isSubPage}])},[Object(r["j"])("div",T,[Object(r["j"])("div",h,[Object(r["j"])("div",V,[k,Object(r["j"])("div",w,[Object(r["n"])(l,{ref:"ctrlid_cabecera",modelValue:Object(r["T"])(We).id_cabecera,"onUpdate:modelValue":t[0]||(t[0]=function(e){return Object(r["T"])(We).id_cabecera=e}),modelModifiers:{trim:!0},label:"Id Cabecera",type:"number",placeholder:"Escribir Id Cabecera",step:"any",class:Object(r["y"])(["w-full",Object(r["T"])(nc)("id_cabecera")])},null,8,["modelValue","class"]),Object(r["T"])(bc)("id_cabecera")?(Object(r["G"])(),Object(r["i"])("small",E,Object(r["Q"])(Object(r["T"])(dc)("id_cabecera")),1)):Object(r["h"])("",!0)])])]),Object(r["j"])("div",_,[Object(r["j"])("div",S,[M,Object(r["j"])("div",x,[Object(r["n"])(l,{ref:"ctrldimension",modelValue:Object(r["T"])(We).dimension,"onUpdate:modelValue":t[1]||(t[1]=function(e){return Object(r["T"])(We).dimension=e}),modelModifiers:{trim:!0},label:"Dimension",type:"text",placeholder:"Escribir Dimension",class:Object(r["y"])(["w-full",Object(r["T"])(nc)("dimension")])},null,8,["modelValue","class"]),Object(r["T"])(bc)("dimension")?(Object(r["G"])(),Object(r["i"])("small",G,Object(r["Q"])(Object(r["T"])(dc)("dimension")),1)):Object(r["h"])("",!0)])])]),Object(r["j"])("div",U,[Object(r["j"])("div",R,[C,Object(r["j"])("div",P,[Object(r["n"])(l,{ref:"ctrlsubdimension",modelValue:Object(r["T"])(We).subdimension,"onUpdate:modelValue":t[2]||(t[2]=function(e){return Object(r["T"])(We).subdimension=e}),modelModifiers:{trim:!0},label:"Subdimension",type:"text",placeholder:"Escribir Subdimension",class:Object(r["y"])(["w-full",Object(r["T"])(nc)("subdimension")])},null,8,["modelValue","class"]),Object(r["T"])(bc)("subdimension")?(Object(r["G"])(),Object(r["i"])("small",Q,Object(r["Q"])(Object(r["T"])(dc)("subdimension")),1)):Object(r["h"])("",!0)])])]),Object(r["j"])("div",B,[Object(r["j"])("div",A,[I,Object(r["j"])("div",D,[Object(r["n"])(l,{ref:"ctrlcomponente",modelValue:Object(r["T"])(We).componente,"onUpdate:modelValue":t[3]||(t[3]=function(e){return Object(r["T"])(We).componente=e}),modelModifiers:{trim:!0},label:"Componente",type:"text",placeholder:"Escribir Componente",class:Object(r["y"])(["w-full",Object(r["T"])(nc)("componente")])},null,8,["modelValue","class"]),Object(r["T"])(bc)("componente")?(Object(r["G"])(),Object(r["i"])("small",N,Object(r["Q"])(Object(r["T"])(dc)("componente")),1)):Object(r["h"])("",!0)])])]),Object(r["j"])("div",$,[Object(r["j"])("div",F,[L,Object(r["j"])("div",q,[Object(r["n"])(l,{ref:"ctrlitem",modelValue:Object(r["T"])(We).item,"onUpdate:modelValue":t[4]||(t[4]=function(e){return Object(r["T"])(We).item=e}),modelModifiers:{trim:!0},label:"Item",type:"text",placeholder:"Escribir Item",class:Object(r["y"])(["w-full",Object(r["T"])(nc)("item")])},null,8,["modelValue","class"]),Object(r["T"])(bc)("item")?(Object(r["G"])(),Object(r["i"])("small",z,Object(r["Q"])(Object(r["T"])(dc)("item")),1)):Object(r["h"])("",!0)])])]),Object(r["j"])("div",H,[Object(r["j"])("div",J,[K,Object(r["j"])("div",W,[Object(r["n"])(l,{ref:"ctrlmedicion",modelValue:Object(r["T"])(We).medicion,"onUpdate:modelValue":t[5]||(t[5]=function(e){return Object(r["T"])(We).medicion=e}),modelModifiers:{trim:!0},label:"Medicion",type:"number",placeholder:"Escribir Medicion",step:"any",class:Object(r["y"])(["w-full",Object(r["T"])(nc)("medicion")])},null,8,["modelValue","class"]),Object(r["T"])(bc)("medicion")?(Object(r["G"])(),Object(r["i"])("small",X,Object(r["Q"])(Object(r["T"])(dc)("medicion")),1)):Object(r["h"])("",!0)])])]),Object(r["j"])("div",Y,[Object(r["j"])("div",Z,[ee,Object(r["j"])("div",ce,[Object(r["n"])(l,{ref:"ctrlbase",modelValue:Object(r["T"])(We).base,"onUpdate:modelValue":t[6]||(t[6]=function(e){return Object(r["T"])(We).base=e}),modelModifiers:{trim:!0},label:"Base",type:"number",placeholder:"Escribir Base",step:"any",class:Object(r["y"])(["w-full",Object(r["T"])(nc)("base")])},null,8,["modelValue","class"]),Object(r["T"])(bc)("base")?(Object(r["G"])(),Object(r["i"])("small",te,Object(r["Q"])(Object(r["T"])(dc)("base")),1)):Object(r["h"])("",!0)])])]),Object(r["j"])("div",le,[Object(r["j"])("div",re,[ie,Object(r["j"])("div",se,[Object(r["n"])(l,{ref:"ctrlstatus",modelValue:Object(r["T"])(We).status,"onUpdate:modelValue":t[7]||(t[7]=function(e){return Object(r["T"])(We).status=e}),modelModifiers:{trim:!0},label:"Status",type:"number",placeholder:"Escribir Status",step:"any",class:Object(r["y"])(["w-full",Object(r["T"])(nc)("status")])},null,8,["modelValue","class"]),Object(r["T"])(bc)("status")?(Object(r["G"])(),Object(r["i"])("small",ae,Object(r["Q"])(Object(r["T"])(dc)("status")),1)):Object(r["h"])("",!0)])])]),Object(r["j"])("div",oe,[Object(r["j"])("div",ne,[de,Object(r["j"])("div",be,[Object(r["n"])(l,{ref:"ctrlvalor",modelValue:Object(r["T"])(We).valor,"onUpdate:modelValue":t[8]||(t[8]=function(e){return Object(r["T"])(We).valor=e}),modelModifiers:{trim:!0},label:"Valor",type:"number",placeholder:"Escribir Valor",step:"0.1",class:Object(r["y"])(["w-full",Object(r["T"])(nc)("valor")])},null,8,["modelValue","class"]),Object(r["T"])(bc)("valor")?(Object(r["G"])(),Object(r["i"])("small",je,Object(r["Q"])(Object(r["T"])(dc)("valor")),1)):Object(r["h"])("",!0)])])]),Object(r["j"])("div",ue,[Object(r["j"])("div",Oe,[me,Object(r["j"])("div",pe,[Object(r["n"])(l,{ref:"ctrlporcentaje",modelValue:Object(r["T"])(We).porcentaje,"onUpdate:modelValue":t[9]||(t[9]=function(e){return Object(r["T"])(We).porcentaje=e}),modelModifiers:{trim:!0},label:"Porcentaje",type:"number",placeholder:"Escribir Porcentaje",step:"0.1",class:Object(r["y"])(["w-full",Object(r["T"])(nc)("porcentaje")])},null,8,["modelValue","class"]),Object(r["T"])(bc)("porcentaje")?(Object(r["G"])(),Object(r["i"])("small",fe,Object(r["Q"])(Object(r["T"])(dc)("porcentaje")),1)):Object(r["h"])("",!0)])])]),Object(r["j"])("div",ve,[Object(r["j"])("div",ge,[ye,Object(r["j"])("div",Te,[Object(r["n"])(l,{ref:"ctrlcomen",modelValue:Object(r["T"])(We).comen,"onUpdate:modelValue":t[10]||(t[10]=function(e){return Object(r["T"])(We).comen=e}),modelModifiers:{trim:!0},label:"Comen",type:"text",placeholder:"Escribir Comen",class:Object(r["y"])(["w-full",Object(r["T"])(nc)("comen")])},null,8,["modelValue","class"]),Object(r["T"])(bc)("comen")?(Object(r["G"])(),Object(r["i"])("small",he,Object(r["Q"])(Object(r["T"])(dc)("comen")),1)):Object(r["h"])("",!0)])])]),Object(r["j"])("div",Ve,[Object(r["j"])("div",ke,[we,Object(r["j"])("div",Ee,[Object(r["n"])(l,{ref:"ctrllink_evidencias",modelValue:Object(r["T"])(We).link_evidencias,"onUpdate:modelValue":t[11]||(t[11]=function(e){return Object(r["T"])(We).link_evidencias=e}),modelModifiers:{trim:!0},label:"Link Evidencias",type:"text",placeholder:"Escribir Link Evidencias",class:Object(r["y"])(["w-full",Object(r["T"])(nc)("link_evidencias")])},null,8,["modelValue","class"]),Object(r["T"])(bc)("link_evidencias")?(Object(r["G"])(),Object(r["i"])("small",_e,Object(r["Q"])(Object(r["T"])(dc)("link_evidencias")),1)):Object(r["h"])("",!0)])])]),Object(r["j"])("div",Se,[Object(r["j"])("div",Me,[xe,Object(r["j"])("div",Ge,[Object(r["n"])(l,{ref:"ctrlcriterios",modelValue:Object(r["T"])(We).criterios,"onUpdate:modelValue":t[12]||(t[12]=function(e){return Object(r["T"])(We).criterios=e}),modelModifiers:{trim:!0},label:"Criterios",type:"number",placeholder:"Escribir Criterios",step:"any",class:Object(r["y"])(["w-full",Object(r["T"])(nc)("criterios")])},null,8,["modelValue","class"]),Object(r["T"])(bc)("criterios")?(Object(r["G"])(),Object(r["i"])("small",Ue,Object(r["Q"])(Object(r["T"])(dc)("criterios")),1)):Object(r["h"])("",!0)])])]),Object(r["j"])("div",Re,[Object(r["j"])("div",Ce,[Pe,Object(r["j"])("div",Qe,[Object(r["n"])(l,{ref:"ctrlorden_dim",modelValue:Object(r["T"])(We).orden_dim,"onUpdate:modelValue":t[13]||(t[13]=function(e){return Object(r["T"])(We).orden_dim=e}),modelModifiers:{trim:!0},label:"Orden Dim",type:"number",placeholder:"Escribir Orden Dim",step:"any",class:Object(r["y"])(["w-full",Object(r["T"])(nc)("orden_dim")])},null,8,["modelValue","class"]),Object(r["T"])(bc)("orden_dim")?(Object(r["G"])(),Object(r["i"])("small",Be,Object(r["Q"])(Object(r["T"])(dc)("orden_dim")),1)):Object(r["h"])("",!0)])])]),Object(r["j"])("div",Ae,[Object(r["j"])("div",Ie,[De,Object(r["j"])("div",Ne,[Object(r["n"])(l,{ref:"ctrlorden_subdim",modelValue:Object(r["T"])(We).orden_subdim,"onUpdate:modelValue":t[14]||(t[14]=function(e){return Object(r["T"])(We).orden_subdim=e}),modelModifiers:{trim:!0},label:"Orden Subdim",type:"number",placeholder:"Escribir Orden Subdim",step:"any",class:Object(r["y"])(["w-full",Object(r["T"])(nc)("orden_subdim")])},null,8,["modelValue","class"]),Object(r["T"])(bc)("orden_subdim")?(Object(r["G"])(),Object(r["i"])("small",$e,Object(r["Q"])(Object(r["T"])(dc)("orden_subdim")),1)):Object(r["h"])("",!0)])])]),Object(r["j"])("div",Fe,[Object(r["j"])("div",Le,[qe,Object(r["j"])("div",ze,[Object(r["n"])(i,{class:Object(r["y"])([Object(r["T"])(nc)("subcriterios"),"w-full"]),ref:"ctrlsubcriterios",rows:"5",modelValue:Object(r["T"])(We).subcriterios,"onUpdate:modelValue":t[15]||(t[15]=function(e){return Object(r["T"])(We).subcriterios=e}),placeholder:"Escribir Subcriterios",type:"textarea"},null,8,["class","modelValue"]),Object(r["T"])(bc)("subcriterios")?(Object(r["G"])(),Object(r["i"])("small",He,Object(r["Q"])(Object(r["T"])(dc)("subcriterios")),1)):Object(r["h"])("",!0)])])])]),e.showSubmitButton?(Object(r["G"])(),Object(r["i"])("div",Je,[Object(r["n"])(s,{type:"submit",label:"Actualizar",icon:"pi pi-send",loading:Object(r["T"])(tc)},null,8,["loading"])])):Object(r["h"])("",!0)],34)])])):Object(r["h"])("",!0),Object(r["T"])(lc)?(Object(r["G"])(),Object(r["i"])("div",Ke,[Object(r["n"])(a,{style:{width:"50px",height:"50px"}})])):Object(r["h"])("",!0)])])])])])])])])}}};const Xe=We;c["default"]=Xe}}]);
//# sourceMappingURL=chunk-27f5def2.a5016e0c.js.map