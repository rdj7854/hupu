(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f32963b2"],{3409:function(t,i,s){},"5c65":function(t,i,s){"use strict";s.r(i);var c=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",[s("div",{staticClass:"header"},[s("div",{staticClass:"logo"}),s("div",{staticClass:"input"},[s("el-input",{attrs:{placeholder:"请输入内容",clearable:"","prefix-icon":"el-icon-search"},model:{value:t.input,callback:function(i){t.input=i},expression:"input"}})],1),t.isSearchIcon?s("div",{staticClass:"search"},[s("p",{on:{click:t.search}},[t._v("搜索")])]):s("div",{staticClass:"cancel"},[s("p",{on:{click:t.goBack}},[t._v("取消")])])]),s("div",{staticClass:"body"},[s("div",{staticClass:"search-header"},[s("span",[t._v("搜索历史")]),s("i",{staticClass:"el-icon-delete",on:{click:t.clearHistory}})]),s("div",{staticClass:"search-box"},t._l(t.history,(function(i,c){return s("ul",{key:c},[s("li",{staticClass:"search-item"},[t._v(" "+t._s(i)+" ")])])})),0)])])},a=[],n={data:function(){return{input:"",history:[],isSearchIcon:!1}},methods:{search:function(){this.history.push(this.input),this.input="",console.log(this.history)},goBack:function(){this.$router.go(-1)},clearHistory:function(){this.history=[]}},watch:{input:function(t){t.length>=1?this.isSearchIcon=!0:this.isSearchIcon=!1}}},e=n,o=(s("bbba"),s("5511")),r=Object(o["a"])(e,c,a,!1,null,"183255c0",null);i["default"]=r.exports},bbba:function(t,i,s){"use strict";var c=s("3409"),a=s.n(c);a.a}}]);
//# sourceMappingURL=chunk-f32963b2.e73c0746.js.map