(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ea5effa"],{7960:function(t,e,n){"use strict";n("cb5c")},ab43:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chat-history-container"},[n("aside",[t._v(" "+t._s(t.$t("route.notice"))+" ")]),n("el-form",{ref:"form",attrs:{model:t.form,"label-width":"auto"}},[n("el-form-item",{attrs:{label:t.$t("notice.alternateInterval")}},[n("el-input",{model:{value:t.form.alternateInterval,callback:function(e){t.$set(t.form,"alternateInterval",e)},expression:"form.alternateInterval"}})],1),n("el-form-item",{attrs:{label:t.$t("notice.alternateNotice")}},[n("el-input",{attrs:{type:"textarea"},model:{value:t.form.alternateNotice,callback:function(e){t.$set(t.form,"alternateNotice",e)},expression:"form.alternateNotice"}})],1),n("el-form-item",{attrs:{label:t.$t("notice.functionName")}},[n("el-input",{attrs:{disabled:""},model:{value:t.form.functionName,callback:function(e){t.$set(t.form,"functionName",e)},expression:"form.functionName"}})],1),n("el-form-item",{attrs:{label:t.$t("notice.welcomeNotice")}},[n("el-input",{attrs:{type:"textarea"},model:{value:t.form.welcomeNotice,callback:function(e){t.$set(t.form,"welcomeNotice",e)},expression:"form.welcomeNotice"}})],1),n("el-form-item",{attrs:{label:t.$t("notice.isEnabled")}},[n("el-switch",{model:{value:t.form.isEnabled,callback:function(e){t.$set(t.form,"isEnabled",e)},expression:"form.isEnabled"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v(t._s(t.$t("button.save")))])],1)],1)],1)},a=[],c=n("7c15"),i={data:function(){return{form:{}}},mounted:function(){this.getDate()},methods:{getDate:function(){var t=this;Object(c["g"])().then((function(e){t.form=e.data}))},onSubmit:function(){var t=this;this.$confirm("确定保存？").then((function(e){Object(c["u"])(t.form).then((function(e){t.getDate(),t.$notify({title:"Success",dangerouslyUseHTMLString:!0,type:"success"})}))})).catch((function(t){}))}}},l=i,r=(n("7960"),n("4ac2")),s=Object(r["a"])(l,o,a,!1,null,"23c1c73c",null);e["default"]=s.exports},cb5c:function(t,e,n){}}]);