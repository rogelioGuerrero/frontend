(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d0f88"],{"69f5":function(e,r,a){"use strict";a.r(r);var t=a("7a23"),n={class:"container"},o={class:"row justify-center"},s={class:"col-md-5 col-12"},d=Object(t["j"])("div",{class:"text-h5 text-bold q-my-md"},"Change Password",-1),i={class:"q-mt-md text-center"},l=Object(t["m"])(" Change Password ");function c(e,r,a,c,u,m){var f=Object(t["M"])("q-input"),b=Object(t["M"])("ValidationProvider"),w=Object(t["M"])("q-spinner-oval"),p=Object(t["M"])("q-btn"),v=Object(t["M"])("ValidationObserver");return Object(t["G"])(),Object(t["i"])("div",n,[Object(t["j"])("div",o,[Object(t["j"])("div",s,[d,Object(t["n"])(v,{ref:"observer",tag:"form",onSubmit:r[3]||(r[3]=Object(t["bb"])((function(e){return m.startSaveRecord()}),["prevent"]))},{default:Object(t["Y"])((function(e){e.invalid;return[Object(t["n"])(b,{rules:{required:!0},name:"Old Password"},{default:Object(t["Y"])((function(e){var a=e.errors,n=e.invalid,o=e.validated;return[Object(t["n"])(f,{dense:"",outlined:"",label:"Old Password",placeholder:"Your New Password",modelValue:u.formData.oldPassword,"onUpdate:modelValue":r[0]||(r[0]=function(e){return u.formData.oldPassword=e}),name:"password",type:"password",error:n&&o,"error-message":a[0]},null,8,["modelValue","error","error-message"])]})),_:2},1024),Object(t["n"])(b,{rules:{required:!0},name:"New Password"},{default:Object(t["Y"])((function(e){var a=e.errors,n=e.invalid,o=e.validated;return[Object(t["n"])(f,{dense:"",outlined:"",hint:"Hints : Not Less Than 6 Characters",label:"New Password",placeholder:"Your New Password",modelValue:u.formData.password,"onUpdate:modelValue":r[1]||(r[1]=function(e){return u.formData.password=e}),name:"password",type:"password",error:n&&o,"error-message":a[0]},null,8,["modelValue","error","error-message"])]})),_:2},1024),Object(t["n"])(b,{rules:{required:!0},name:"Password Confirm"},{default:Object(t["Y"])((function(e){var a=e.errors,n=e.invalid,o=e.validated;return[Object(t["n"])(f,{dense:"",outlined:"",label:"Confirm new password",placeholder:"Confirm Password",modelValue:u.formData.confirmPassword,"onUpdate:modelValue":r[2]||(r[2]=function(e){return u.formData.confirmPassword=e}),name:"cpassword",type:"password",error:n&&o,"error-message":a[0]},null,8,["modelValue","error","error-message"])]})),_:2},1024),Object(t["j"])("div",i,[Object(t["n"])(p,{unelevated:"",type:"submit",icon:"send",color:"primary",large:"",loading:u.saving},{default:Object(t["Y"])((function(){return[Object(t["n"])(w,{slot:"loading"}),l]})),_:1},8,["loading"])])]})),_:1},512)])])])}var u=a("1da1"),m=(a("96cf"),{props:{apiUrl:"account/change_password/"},data:function(){return{saving:!1,formData:{oldPassword:"",password:"",confirmPassword:""}}},methods:{startSaveRecord:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function r(){var a,t,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.$refs.observer.validate();case 2:a=r.sent,a&&(e.saving=!0,t=e.formData,n=e.apiUrl,e.$api.post(n,t).then((function(r){e.saving=!1}),(function(r){e.saving=!1,e.$root.$emit("requestError",r)})));case 4:case"end":return r.stop()}}),r)})))()}}}),f=a("6b0d"),b=a.n(f);const w=b()(m,[["render",c]]);r["default"]=w}}]);
//# sourceMappingURL=chunk-2d0d0f88.b9e09498.js.map