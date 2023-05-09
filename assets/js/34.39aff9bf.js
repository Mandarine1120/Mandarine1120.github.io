(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{384:function(t,s,n){"use strict";n.r(s);var a=n(22),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"前端面试题-写react-vue-项目时为什么要在列表组件中写-key-其作用是什么"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前端面试题-写react-vue-项目时为什么要在列表组件中写-key-其作用是什么"}},[t._v("#")]),t._v(" 前端面试题-写React/Vue 项目时为什么要在列表组件中写 key,其作用是什么？")]),t._v(" "),n("ClientOnly",[n("title-pv")],1),t._v(" "),n("p",[t._v("vue和react都是采用diff算法来对比新旧虚拟节点，从而更新节点。在vue的diff函数中（建议先了解一下diff算法过程）。\n在交叉对比中，当新节点跟旧节点头尾交叉对比没有结果时，会根据新节点的key去对比旧节点数组中的key，从而找到相应旧节点（这里对应的是一个key => index 的map映射）。如果没找到就认为是一个新增节点。而如果没有key，那么就会采用遍历查找的方式去找到对应的旧节点。一种一个map映射，另一种是遍历查找。相比而言。map映射的速度更快。")]),t._v(" "),n("p",[t._v("key是给每一个vnode的唯一id,可以依靠key,更准确, 更快的拿到oldVnode中对应的vnode节点。")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("更准确\n因为带key就不是就地复用了，在sameNode函数 a.key === b.key对比中可以避免就地复用的情况。所以会更加准确。")])]),t._v(" "),n("li",[n("p",[t._v("更快\n利用key的唯一性生成map对象来获取对应节点，比遍历方式更快。")])])]),t._v(" "),n("ul",[n("li",[t._v("列")])]),t._v(" "),n("p",[t._v("v-for的内容会生成以下的dom节点数组，我们给每一个节点标记一个身份id：")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("\n "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<div>1</div>'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// id： A")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<div>2</div>'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// id:  B")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<div>3</div>'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// id:  C")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<div>4</div>'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// id:  D")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<div>5</div>'")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// id:  E")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n")])])]),n("ul",[n("li",[t._v("改变dataList数据，进行数据位置替换，对比改变后的数据")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("\n vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dataList "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 数据位置替换")]),t._v("\n\n "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 没有key的情况， 节点位置不变，但是节点innerText内容更新了")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<div>4</div>'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// id： A")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<div>1</div>'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// id:  B")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<div>3</div>'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// id:  C")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<div>5</div>'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// id:  D")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<div>2</div>'")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// id:  E")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 有key的情况，dom节点位置进行了交换，但是内容没有更新")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// <div v-for=\"i in dataList\" :key='i'>{{ i }}</div>")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<div>4</div>'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// id： D")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<div>1</div>'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// id:  A")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<div>3</div>'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// id:  C")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<div>5</div>'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// id:  E")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<div>2</div>'")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// id:  B")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n")])])]),n("ul",[n("li",[t._v("增删dataList列表项")])]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v(" vm"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dataList "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("7")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 数据进行增删")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1. 没有key的情况， 节点位置不变，内容也更新了")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<div>3</div>'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// id： A")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<div>4</div>'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// id:  B")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<div>5</div>'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// id:  C")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<div>6</div>'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// id:  D")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<div>7</div>'")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// id:  E")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2. 有key的情况， 节点删除了 A, B 节点，新增了 F, G 节点")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// <div v-for=\"i in dataList\" :key='i'>{{ i }}</div>")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<div>3</div>'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// id： C")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<div>4</div>'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// id:  D")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<div>5</div>'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// id:  E")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<div>6</div>'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// id:  F")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<div>7</div>'")]),t._v("  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// id:  G")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n")])])]),n("ClientOnly",[n("leave")],1)],1)}),[],!1,null,null,null);s.default=e.exports}}]);