(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22c935"],{2532:function(e,t,a){"use strict";var n=a("23e7"),r=a("e330"),c=a("5a34"),o=a("1d80"),i=a("577e"),l=a("ab13"),u=r("".indexOf);n({target:"String",proto:!0,forced:!l("includes")},{includes:function(e){return!!~u(i(o(this)),i(c(e)),arguments.length>1?arguments[1]:void 0)}})},"6cf2":function(e,t,a){"use strict";a.r(t);a("a9e3");var n=a("7a23"),r=a("aeb7"),c=a("9519"),o={class:"main-page"},i={key:0,class:"page-section mb-3"},l={class:"container-fluid"},u={class:"grid justify-content-between"},s=Object(n["j"])("div",{class:"col"},[Object(n["j"])("div",{class:""},[Object(n["j"])("div",{class:"text-2xl text-primary font-bold"}," Produtos ")])],-1),d={class:"col-12 md:col-3 lg:col-2"},p={class:""},b={class:"col-12 md:col-5 lg:col-4"},g={class:""},j={class:"p-input-icon-left w-full"},f=Object(n["j"])("i",{class:"pi pi-search"},null,-1),O={class:"page-section"},m={class:"container-fluid"},v={class:"grid"},y={class:"col comp-grid"},h={class:""},x={class:"flex align-items-center justify-content-around"},T=Object(n["m"])(" Buscar "),w={class:""},R={class:"grid justify-content-start"},B={class:"col-12"},P={class:"page-records"},S=Object(n["j"])("i",null,null,-1),C={key:0,class:"flex align-items-center justify-content-center text-gray-500 p-3"},N=Object(n["j"])("div",null,"Cargando...",-1),k={key:1,class:"p-3 my-3 text-500 text-lg font-medium text-center"},M={key:2,class:""},D={class:"flex justify-content-between"},q={class:"flex justify-content-center flex-grow-0"},I={key:0,class:"m-2"},G={key:0,class:"flex-grow-1"},_={class:"text-sm text-gray-500 px-2"},Y=Object(n["m"])(" Archivos "),A={props:{primaryKey:{type:String,default:"id"},pageName:{type:String,default:"produtos"},routeName:{type:String,default:"produtoslist"},apiPath:{type:String,default:"produtos/index"},paginate:{type:Boolean,default:!0},showHeader:{type:Boolean,default:!0},showFooter:{type:Boolean,default:!0},showBreadcrumbs:{type:Boolean,default:!0},exportButton:{type:Boolean,default:!0},importButton:{type:Boolean,default:!1},multiCheckbox:{type:Boolean,default:!0},emptyRecordMsg:{type:String,default:"ningún record fue encontrado"},titleBeforeDelete:{type:String,default:"Eliminar el registro"},msgBeforeDelete:{type:String,default:"¿Seguro que quieres borrar este registro?"},msgAfterDelete:{type:String,default:"Grabar eliminado con éxito"},page:{type:Number,default:1},limit:{type:Number,default:10},mergeRecords:{type:Boolean,default:!1},search:{type:String,default:""},fieldName:null,fieldValue:null,sortBy:{type:String,default:""},sortType:{type:String,default:""},isSubPage:{type:Boolean,default:!1},filterTagClass:{type:String,default:"surface-card p-2 text-500 flex-grow-1 text-center m-1 mb-3 flex-grow-1 text-center"}},setup:function(e){var t=e,a=Object(r["a"])(),A=Object(n["I"])({}),L=Object(c["a"])(t,A),V=Object(n["S"])(L.state),F=V.totalRecords,E=(V.recordCount,V.loading),Q=V.selectedItems,H=V.pagination,U=V.searchText,K=V.pageReady,z=L.computedProps,J=z.records,W=(z.apiUrl,z.currentRecord,z.pageBreadCrumb),X=(z.canLoadMore,z.finishedLoading,z.totalPages),Z=z.recordsPosition,$=L.methods,ee=$.load,te=($.reload,$.loadNextPage,$.loadPreviousPage,$.exportPage,$.clearSearch),ae=$.debounce,ne=$.onSort,re=$.deleteItem;$.setCurrentRecord,$.isCurrentRecord,$.removeFilter,$.getFilterLabel,$.filterHasValue,$.importComplete;function ce(e){return[{label:"View",to:"/produtos/view/".concat(e.id),icon:"pi pi-eye"},{label:"Edit",command:function(t){a.openPageDialog({page:"produtos/edit",url:"/produtos/edit/".concat(e.id),closeBtn:!0})},icon:"pi pi-pencil"},{label:"Delete",command:function(t){re(e.id)},icon:"pi pi-minus-circle"}]}return Object(n["E"])((function(){var e="Produtos";a.setPageTitle(t.routeName,e),ee()})),function(t,r){var c=Object(n["M"])("Button"),A=Object(n["M"])("InputText"),L=Object(n["M"])("Chip"),V=Object(n["M"])("Breadcrumb"),z=Object(n["M"])("Column"),$=Object(n["M"])("router-link"),ee=Object(n["M"])("SplitButton"),oe=Object(n["M"])("DataTable"),ie=Object(n["M"])("ProgressSpinner"),le=Object(n["M"])("Paginator");return Object(n["G"])(),Object(n["i"])("div",o,[e.showHeader?(Object(n["G"])(),Object(n["i"])("section",i,[Object(n["j"])("div",l,[Object(n["j"])("div",u,[s,Object(n["j"])("div",d,[Object(n["j"])("div",p,[Object(n["n"])(c,{label:"Agregar nuevo",icon:"pi pi-plus",onClick:r[0]||(r[0]=function(e){return Object(n["T"])(a).openPageDialog({page:"produtos/add",url:"/produtos/add",closeBtn:!0})}),class:"w-full bg-primary"})])]),Object(n["j"])("div",b,[Object(n["j"])("div",g,[Object(n["j"])("span",j,[f,Object(n["n"])(A,{outlined:"",dense:"",placeholder:"Buscar",class:"w-full",value:Object(n["T"])(U),onInput:r[1]||(r[1]=function(e){return Object(n["T"])(ae)((function(){U.value=e.target.value}))})},null,8,["value"])])])])])])])):Object(n["h"])("",!0),Object(n["j"])("section",O,[Object(n["j"])("div",m,[Object(n["j"])("div",v,[Object(n["j"])("div",y,[Object(n["j"])("div",h,[Object(n["j"])("div",x,[Object(n["T"])(U)?(Object(n["G"])(),Object(n["i"])("div",{key:0,class:Object(n["y"])(e.filterTagClass)},[T,Object(n["n"])(L,{class:"font-medium px-2 py-1",removable:"",onRemove:r[2]||(r[2]=function(e){return Object(n["T"])(te)()})},{default:Object(n["Y"])((function(){return[Object(n["m"])(Object(n["Q"])(Object(n["T"])(U)),1)]})),_:1})],2)):Object(n["h"])("",!0)]),Object(n["j"])("div",w,[Object(n["j"])("div",null,[e.showBreadcrumbs&&t.$route.query.tag?(Object(n["G"])(),Object(n["g"])(V,{key:0,home:{icon:"pi pi-home",to:"/produtos"},model:Object(n["T"])(W)},null,8,["model"])):Object(n["h"])("",!0),Object(n["j"])("div",R,[Object(n["j"])("div",B,[Object(n["j"])("div",{class:Object(n["y"])(["",{card:!e.isSubPage}])},[Object(n["j"])("div",P,[Object(n["n"])(oe,{lazy:!0,loading:Object(n["T"])(E),selection:Object(n["T"])(Q),"onUpdate:selection":r[3]||(r[3]=function(e){return Object(n["v"])(Q)?Q.value=e:null}),value:Object(n["T"])(J),dataKey:"id",onSort:r[4]||(r[4]=function(e){return Object(n["T"])(ne)(e)}),class:"",showGridlines:!1,rowHover:!0,responsiveLayout:"stack"},{default:Object(n["Y"])((function(){return[Object(n["n"])(z,{selectionMode:"multiple",headerStyle:"width: 3em"}),Object(n["n"])(z,{field:"id",header:"Id"},{body:Object(n["Y"])((function(e){var t=e.data;return[Object(n["n"])($,{to:"/produtos/view/".concat(t.id)},{default:Object(n["Y"])((function(){return[Object(n["m"])(Object(n["Q"])(t.id),1)]})),_:2},1032,["to"])]})),_:1}),Object(n["n"])(z,{field:"nome",header:"Nome"},{body:Object(n["Y"])((function(e){var t=e.data;return[Object(n["m"])(Object(n["Q"])(t.nome),1)]})),_:1}),Object(n["n"])(z,{field:"valor",header:"Valor"},{body:Object(n["Y"])((function(e){var t=e.data;return[Object(n["m"])(Object(n["Q"])(t.valor),1)]})),_:1}),Object(n["n"])(z,{headerStyle:"width: 3em",headerClass:"text-center"},{body:Object(n["Y"])((function(e){var t=e.data;return[Object(n["n"])(ee,{class:"p-button p-button-raised p-button-text p-button-sm",model:ce(t)},{default:Object(n["Y"])((function(){return[S]})),_:2},1032,["model"])]})),_:1})]})),_:1},8,["loading","selection","value"])]),Object(n["T"])(E)?(Object(n["G"])(),Object(n["i"])("div",C,[Object(n["j"])("div",null,[Object(n["n"])(ie,{style:{width:"30px",height:"30px"}})]),N])):Object(n["h"])("",!0),Object(n["T"])(K)&&!Object(n["T"])(J).length?(Object(n["G"])(),Object(n["i"])("div",k," ningún record fue encontrado ")):Object(n["h"])("",!0),e.showFooter?(Object(n["G"])(),Object(n["i"])("div",M,[Object(n["Z"])(Object(n["j"])("div",null,[Object(n["j"])("div",D,[Object(n["j"])("div",q,[Object(n["T"])(Q).length?(Object(n["G"])(),Object(n["i"])("div",I,[Object(n["n"])(c,{onClick:r[5]||(r[5]=function(e){return Object(n["T"])(re)(Object(n["T"])(Q))}),icon:"pi pi-trash",class:"p-button-danger",title:"Eliminar seleccionado"})])):Object(n["h"])("",!0)]),e.paginate&&Object(n["T"])(X)>1?(Object(n["G"])(),Object(n["i"])("div",G,[Object(n["n"])(le,{class:"border-none bg-transparent py-3",first:Object(n["T"])(Z),onPage:r[6]||(r[6]=function(e){Object(n["T"])(H).page=e.page+1}),rows:Object(n["T"])(H).limit,totalRecords:Object(n["T"])(F)},{start:Object(n["Y"])((function(){return[Object(n["j"])("span",_,[Y,Object(n["j"])("b",null,Object(n["Q"])(Object(n["T"])(Z))+" de "+Object(n["Q"])(Object(n["T"])(F)),1)])]})),end:Object(n["Y"])((function(){return[]})),_:1},8,["first","rows","totalRecords"])])):Object(n["h"])("",!0)])],512),[[n["V"],Object(n["T"])(K)]])])):Object(n["h"])("",!0)],2)])])])])])])])])])])}}};const L=A;t["default"]=L},9519:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a("1da1"),r=a("3835"),c=(a("96cf"),a("ac1f"),a("4fad"),a("d81d"),a("caad"),a("2532"),a("99af"),a("b0c0"),a("841c"),a("a434"),a("7db0"),a("d3b7"),a("25f0"),a("7a23")),o=a("025e"),i=a("aeb7"),l=a("5502"),u=a("6c02"),s=a("d725");function d(e,t){var a=Object(i["a"])(),d=Object(u["c"])(),p=Object(l["b"])(),b=Object(s["b"])(),g=Object(c["I"])({totalRecords:0,recordCount:0,pageReady:!1,loading:!1,singleSelect:!1,selectedItems:[],pagination:{page:1,limit:e.limit,sortBy:"",descending:!0},deleting:!1,searchText:"",errorMsg:""}),j=Object(c["e"])({get:function(){return p.getters["".concat(e.pageName,"/records")]},set:function(t){p.commit("".concat(e.pageName,"/setRecords"),t)}}),f=Object(c["e"])({get:function(){return p.getters["".concat(e.pageName,"/currentRecord")]},set:function(t){p.commit("".concat(e.pageName,"/setCurrentRecord"),t)}}),O=Object(c["e"])((function(){var a=e.apiPath;e.fieldName&&(a=a+"/"+encodeURIComponent(e.fieldName)+"/"+encodeURIComponent(e.fieldValue)),e.sortBy?g.pagination.sortBy=e.sortBy:d.query.sortby&&(g.pagination.sortBy=d.query.sortby),e.sortType?g.pagination.descending="desc"==e.sortType.toLowerCase():d.query.sorttype&&(g.pagination.descending="desc"==d.query.sorttype.toLowerCase());var n={};if(n.page=g.pagination.page,n.limit=g.pagination.limit,g.pagination.sortBy){var c=g.pagination.descending?"desc":"asc";n.orderby=g.pagination.sortBy,n.ordertype=c}g.searchText&&(n.search=g.searchText);for(var i=0,l=Object.entries(t);i<l.length;i++){var u=Object(r["a"])(l[i],2),s=u[0],p=u[1];if(Y(p))if("range"==p.valueType)n[s]={min:p.value[0],max:p.value[1]};else if("range-date"==p.valueType){var b=o["a"].formatDate(p.value[0]),j=o["a"].formatDate(p.value[1]);n[s]={from:b,to:j}}else"multiple-date"==p.valueType?n[s]=p.value.map((function(e){return o["a"].formatDate(e)})):n[s]=p.value}var f=o["a"].serializeQuery(n);return a.includes("?")?"".concat(a,"&").concat(f):"".concat(a,"?").concat(f)})),m=Object(c["e"])((function(){var e=Math.min(g.pagination.page*g.pagination.limit,g.totalRecords)-1;return Math.abs(e)})),v=Object(c["e"])((function(){return g.totalRecords>g.pagination.limit?Math.ceil(g.totalRecords/g.pagination.limit):1})),y=Object(c["e"])((function(){return j.value.length>g.pagination.limit&&j.value.length>=g.totalRecords})),h=Object(c["e"])((function(){return!g.loading&&!y.value})),x=Object(c["e"])((function(){var t=[],a=d.query.tag||e.fieldName;t.push({label:a,to:"/".concat(e.pageName)});var n=d.query.label||e.fieldValue;return t.push({label:n,to:"/".concat(e.pageName)}),t}));function T(){j.value=[],g.recordCount=0,g.pagination.page=1}function w(t){e.mergeRecords&&T(),g.pagination.sortBy=t.sortField,g.pagination.descending=-1==t.sortOrder}function R(){g.pagination.page++}function B(){g.pagination.page>0&&g.pagination.page--}function P(){e.routeName!==d.name||e.mergeRecords||window.scrollTo({top:0,behavior:"smooth"})}function S(){return C.apply(this,arguments)}function C(){return C=Object(n["a"])(regeneratorRuntime.mark((function t(){var n,r,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(h.value){t.next=2;break}return t.abrupt("return");case 2:return P(),g.pageReady=!1,g.loading=!0,f.value=null,n=O.value,r={url:n,merge:e.mergeRecords},t.prev=8,t.next=11,p.dispatch("".concat(e.pageName,"/fetchRecords"),r);case 11:c=t.sent,g.totalRecords=c.total_records,g.recordCount=c.record_count,g.pagination.rowsNumber=g.totalRecords,g.pageReady=!0,t.next=21;break;case 18:t.prev=18,t.t0=t["catch"](8),a.showPageRequestError(t.t0);case 21:return t.prev=21,g.loading=!1,t.finish(21);case 24:case"end":return t.stop()}}),t,null,[[8,18,21,24]])}))),C.apply(this,arguments)}function N(){g.searchText=d.query.search||null,T()}function k(t){g.selectedItems=[t],p.commit("".concat(e.pageName,"/setCurrentRecord"),t)}function M(e){return e==f.value}function D(e){a.flashMsg(e),N()}function q(){a.exportPageRecords(e.exportFormats,O.value,e.pageName)}function I(e){return G.apply(this,arguments)}function G(){return G=Object(n["a"])(regeneratorRuntime.mark((function t(r){var c,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:Array.isArray(r)&&(r=r.map((function(t){return t[e.primaryKey]}))),r&&(c=e.titleBeforeDelete,o=e.msgBeforeDelete,b.require({message:o,header:c,icon:"pi pi-exclamation-triangle",accept:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){var n,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n="".concat(e.pageName,"/delete/").concat(r.toString()),c={id:r,url:n},t.prev=2,t.next=5,p.dispatch("".concat(e.pageName,"/deleteRecord"),c);case 5:a.flashMsg(e.msgAfterDelete),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](2),a.showPageRequestError(t.t0);case 11:case"end":return t.stop()}}),t,null,[[2,8]])})));function c(){return t.apply(this,arguments)}return c}(),reject:function(){}}));case 2:case"end":return t.stop()}}),t)}))),G.apply(this,arguments)}function _(e,t){var a=e.valueType;if("single"==a)e.value=null;else if("range"==a||"range-date"==a)e.value=[];else if("multiple"==a||"multiple-date"==a){var n=e.value.indexOf(t);e.value.splice(n,1)}}function Y(e){if("range"==e.valueType)return e.value.length>0;if("range-date"==e.valueType){var t=e.value[1]||null;return!!t}return Array.isArray(e.value)?e.value.length>0:!!e.value}function A(e,t){if("range"==e.valueType&&e.value.length){var a=e.value[0],n=e.value[1];return"".concat(a," - ").concat(n)}if("range-date"==e.valueType&&e.value.length){var r=o["a"].humanDate(e.value[0]),c=o["a"].humanDate(e.value[1]);return"".concat(r," - ").concat(c)}if("multiple-date"==e.valueType){var i=t||e.value;return o["a"].humanDate(i)}if("single-date"==e.valueType)return o["a"].humanDate(e.value);if(e.options.length){var l=t||e.value,u=e.options.find((function(e){return e.value==l}));if(u)return u.label}else if(t)return t.toString();return e.value.toString()}function L(){g.searchText="",d.query.search=""}Object(c["E"])((function(){d.query.search&&(g.searchText=d.query.search)})),Object(c["X"])((function(){(e.fieldName&&e.fieldValue||g.searchText)&&T()})),Object(c["W"])(O,(function(){return S()}));var V={records:j,apiUrl:O,currentRecord:f,pageBreadCrumb:x,canLoadMore:h,finishedLoading:y,totalPages:v,recordsPosition:m},F={load:S,reload:N,loadNextPage:R,loadPreviousPage:B,resetPagination:T,exportPage:q,clearSearch:L,debounce:o["a"].debounce(),onSort:w,deleteItem:I,setCurrentRecord:k,isCurrentRecord:M,removeFilter:_,getFilterLabel:A,filterHasValue:Y,importComplete:D};return{state:g,computedProps:V,methods:F}}},caad:function(e,t,a){"use strict";var n=a("23e7"),r=a("4d64").includes,c=a("44d2");n({target:"Array",proto:!0},{includes:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),c("includes")}}]);
//# sourceMappingURL=chunk-2d22c935.514309b9.js.map