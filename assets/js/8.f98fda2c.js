(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{301:function(t,s,i){},336:function(t,s,i){"use strict";i(301)},363:function(t,s,i){"use strict";i.r(s);var e={data:()=>({dataList:[],getPvs:null}),mounted(){Promise.all([i.e(1),i.e(2)]).then(i.bind(null,357)).then(t=>{this.getPvs=t.getPv,this.getPv()})},methods:{getPv(){this.getPvs(this.$page.path).then(t=>{if(0!==t.data.err)return console.log(t.data);this.dataList=t.data.list})}}},a=(i(336),i(22)),n=Object(a.a)(e,(function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"msga"},[this.$page.frontmatter.username?s("i",{staticClass:"iconfont icon-renyuan title-text"},[this._v(this._s(this.$page.frontmatter.username))]):s("i",{staticClass:"iconfont icon-renyuan title-text"},[this._v("MaLunan")]),this._v(" "),s("i",{staticClass:"iconfont icon-liulan title-text"},[this._v(" "+this._s(this.dataList.pv))])])}),[],!1,null,"7cca488e",null);s.default=n.exports}}]);