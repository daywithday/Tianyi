(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9afa4390"],{"00eb":function(t,e,s){},"133c":function(t,e,s){"use strict";s("3b8a")},"27ad":function(t,e,s){"use strict";s("d12a")},"3b8a":function(t,e,s){},"3cbc":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pan-item",style:{zIndex:t.zIndex,height:t.height,width:t.width}},[s("div",{staticClass:"pan-info"},[s("div",{staticClass:"pan-info-roles-container"},[t._t("default")],2)]),s("div",{staticClass:"pan-thumb",style:{backgroundImage:"url("+t.image+")"}})])},i=[],l={name:"PanThumb",props:{image:{type:String,required:!0},zIndex:{type:Number,default:1},width:{type:String,default:"150px"},height:{type:String,default:"150px"}}},r=l,c=(s("133c"),s("4ac2")),n=Object(c["a"])(r,a,i,!1,null,"799537af",null);e["a"]=n.exports},"6e50":function(t,e,s){"use strict";s("00eb")},d12a:function(t,e,s){},ecac:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"app-container"},[t.user?s("div",[s("el-row",{attrs:{gutter:20}},[s("el-col",{attrs:{span:6,xs:24}},[s("user-card",{attrs:{user:t.user}})],1),s("el-col",{attrs:{span:18,xs:24}},[s("el-card",[s("el-tabs",{model:{value:t.activeTab,callback:function(e){t.activeTab=e},expression:"activeTab"}},[s("el-tab-pane",{attrs:{label:"Activity",name:"activity"}},[s("activity")],1),s("el-tab-pane",{attrs:{label:"Timeline",name:"timeline"}},[s("timeline")],1),s("el-tab-pane",{attrs:{label:"Account",name:"account"}},[s("account",{attrs:{user:t.user}})],1)],1)],1)],1)],1)],1):t._e()])},i=[],l=s("52c1"),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-card",{staticStyle:{"margin-bottom":"20px"}},[s("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[s("span",[t._v("About me")])]),s("div",{staticClass:"user-profile"},[s("div",{staticClass:"box-center"},[s("pan-thumb",{attrs:{image:t.user.avatar,height:"100px",width:"100px",hoverable:!1}},[s("div",[t._v("Hello")]),t._v(" "+t._s(t.user.role)+" ")])],1),s("div",{staticClass:"box-center"},[s("div",{staticClass:"user-name text-center"},[t._v(t._s(t.user.name))]),s("div",{staticClass:"user-role text-center text-muted"},[t._v(t._s(t._f("uppercaseFirst")(t.user.role)))])])]),s("div",{staticClass:"user-bio"},[s("div",{staticClass:"user-education user-bio-section"},[s("div",{staticClass:"user-bio-section-header"},[s("svg-icon",{attrs:{"icon-class":"education"}}),s("span",[t._v("About")])],1),s("div",{staticClass:"user-bio-section-body"},[s("div",{staticClass:"text-muted"},[t._v(" "+t._s(t.$t("about.content"))+" ")])])]),s("div",{staticClass:"user-skills user-bio-section"},[s("div",{staticClass:"user-bio-section-header"},[s("svg-icon",{attrs:{"icon-class":"skill"}}),s("span",[t._v("Skills")])],1),s("div",{staticClass:"user-bio-section-body"},[s("div",{staticClass:"progress-item"},[s("span",[t._v("Vue")]),s("el-progress",{attrs:{percentage:70}})],1),s("div",{staticClass:"progress-item"},[s("span",[t._v("JavaScript")]),s("el-progress",{attrs:{percentage:18}})],1),s("div",{staticClass:"progress-item"},[s("span",[t._v("Css")]),s("el-progress",{attrs:{percentage:12}})],1),s("div",{staticClass:"progress-item"},[s("span",[t._v("ESLint")]),s("el-progress",{attrs:{percentage:100,status:"success"}})],1)])])])])},c=[],n=s("3cbc"),o={components:{PanThumb:n["a"]},props:{user:{type:Object,default:()=>({name:"",email:"",avatar:"",role:""})}}},m=o,u=(s("27ad"),s("4ac2")),p=Object(u["a"])(m,r,c,!1,null,"0eb4e59c",null),d=p.exports,v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"user-activity"},[s("div",{staticClass:"post"},[s("div",{staticClass:"user-block"},[s("img",{staticClass:"img-circle",attrs:{src:"https://wpimg.wallstcn.com/57ed425a-c71e-4201-9428-68760c0537c4.jpg"+t.avatarPrefix}}),s("span",{staticClass:"username text-muted"},[t._v("Iron Man")]),s("span",{staticClass:"description"},[t._v("Shared publicly - 7:30 PM today")])]),s("p",[t._v(" Lorem ipsum represents a long-held tradition for designers, typographers and the like. Some people hate it and argue for its demise, but others ignore the hate as they create awesome tools to help create filler text for everyone from bacon lovers to Charlie Sheen fans. ")]),s("ul",{staticClass:"list-inline"},[t._m(0),s("li",[s("span",{staticClass:"link-black text-sm"},[s("svg-icon",{attrs:{"icon-class":"like"}}),t._v(" Like ")],1)])])]),s("div",{staticClass:"post"},[s("div",{staticClass:"user-block"},[s("img",{staticClass:"img-circle",attrs:{src:"https://wpimg.wallstcn.com/9e2a5d0a-bd5b-457f-ac8e-86554616c87b.jpg"+t.avatarPrefix}}),s("span",{staticClass:"username text-muted"},[t._v("Captain American")]),s("span",{staticClass:"description"},[t._v("Sent you a message - yesterday")])]),s("p",[t._v(" Lorem ipsum represents a long-held tradition for designers, typographers and the like. Some people hate it and argue for its demise, but others ignore the hate as they create awesome tools to help create filler text for everyone from bacon lovers to Charlie Sheen fans. ")]),s("ul",{staticClass:"list-inline"},[t._m(1),s("li",[s("span",{staticClass:"link-black text-sm"},[s("svg-icon",{attrs:{"icon-class":"like"}}),t._v(" Like ")],1)])])]),s("div",{staticClass:"post"},[s("div",{staticClass:"user-block"},[s("img",{staticClass:"img-circle",attrs:{src:"https://wpimg.wallstcn.com/fb57f689-e1ab-443c-af12-8d4066e202e2.jpg"+t.avatarPrefix}}),s("span",{staticClass:"username"},[t._v("Spider Man")]),s("span",{staticClass:"description"},[t._v("Posted 4 photos - 2 days ago")])]),s("div",{staticClass:"user-images"},[s("el-carousel",{attrs:{interval:6e3,type:"card",height:"220px"}},t._l(t.carouselImages,(function(e){return s("el-carousel-item",{key:e},[s("img",{staticClass:"image",attrs:{src:e+t.carouselPrefix}})])})),1)],1),s("ul",{staticClass:"list-inline"},[t._m(2),s("li",[s("span",{staticClass:"link-black text-sm"},[s("svg-icon",{attrs:{"icon-class":"like"}}),t._v(" Like")],1)])])])])},b=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("span",{staticClass:"link-black text-sm"},[s("i",{staticClass:"el-icon-share"}),t._v(" Share ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("span",{staticClass:"link-black text-sm"},[s("i",{staticClass:"el-icon-share"}),t._v(" Share ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("li",[s("span",{staticClass:"link-black text-sm"},[s("i",{staticClass:"el-icon-share"}),t._v(" Share")])])}];const h="?imageView2/1/w/80/h/80",f="?imageView2/2/h/440";var g={data(){return{carouselImages:["https://wpimg.wallstcn.com/9679ffb0-9e0b-4451-9916-e21992218054.jpg","https://wpimg.wallstcn.com/bcce3734-0837-4b9f-9261-351ef384f75a.jpg","https://wpimg.wallstcn.com/d1d7b033-d75e-4cd6-ae39-fcd5f1c0a7c5.jpg","https://wpimg.wallstcn.com/50530061-851b-4ca5-9dc5-2fead928a939.jpg"],avatarPrefix:h,carouselPrefix:f}}},C=g,_=(s("6e50"),Object(u["a"])(C,v,b,!1,null,"1066d76c",null)),x=_.exports,y=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"block"},[s("el-timeline",t._l(t.timeline,(function(e,a){return s("el-timeline-item",{key:a,attrs:{timestamp:e.timestamp,placement:"top"}},[s("el-card",[s("h4",[t._v(t._s(e.title))]),s("p",[t._v(t._s(e.content))])])],1)})),1)],1)},k=[],w={data(){return{timeline:[{timestamp:"2019/4/20",title:"Update Github template",content:"PanJiaChen committed 2019/4/20 20:46"},{timestamp:"2019/4/21",title:"Update Github template",content:"PanJiaChen committed 2019/4/21 20:46"},{timestamp:"2019/4/22",title:"Build Template",content:"PanJiaChen committed 2019/4/22 20:46"},{timestamp:"2019/4/23",title:"Release New Version",content:"PanJiaChen committed 2019/4/23 20:46"}]}}},j=w,S=Object(u["a"])(j,y,k,!1,null,null,null),P=S.exports,$=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("el-form",[s("el-form-item",{attrs:{label:"Name"}},[s("el-input",{model:{value:t.user.name,callback:function(e){t.$set(t.user,"name","string"===typeof e?e.trim():e)},expression:"user.name"}})],1),s("el-form-item",{attrs:{label:"Email"}},[s("el-input",{model:{value:t.user.email,callback:function(e){t.$set(t.user,"email","string"===typeof e?e.trim():e)},expression:"user.email"}})],1),s("el-form-item",[s("el-button",{attrs:{type:"primary"},on:{click:t.submit}},[t._v("Update")])],1)],1)},E=[],O={props:{user:{type:Object,default:()=>({name:"",email:""})}},methods:{submit(){this.$message({message:"User information has been updated successfully",type:"success",duration:5e3})}}},T=O,A=Object(u["a"])(T,$,E,!1,null,null,null),I=A.exports,J={name:"Profile",components:{UserCard:d,Activity:x,Timeline:P,Account:I},data(){return{user:{},activeTab:"activity"}},computed:{...Object(l["b"])(["name","avatar","roles"])},created(){this.getUser()},methods:{getUser(){this.user={name:this.name,role:this.roles.join(" | "),email:"admin@test.com",avatar:this.avatar}}}},U=J,L=Object(u["a"])(U,a,i,!1,null,null,null);e["default"]=L.exports}}]);