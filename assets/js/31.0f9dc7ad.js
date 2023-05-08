(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{349:function(s,t,a){"use strict";a.r(t);var n=a(22),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"前端面试题-1-2-3-map-parseint-返回值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端面试题-1-2-3-map-parseint-返回值"}},[s._v("#")]),s._v(" 前端面试题-['1','2','3'].map(parseInt)返回值")]),s._v(" "),a("ClientOnly",[a("title-pv")],1),s._v(" "),a("ul",[a("li",[s._v("['1','2','3'].map(parseInt)的返回值是什么？")])]),s._v(" "),a("p",[s._v("答案：[1,NaN,NaN]")]),s._v(" "),a("ul",[a("li",[s._v("parseInt方法")])]),s._v(" "),a("p",[s._v("定义和用法")]),s._v(" "),a("p",[s._v("parseInt() 函数可解析一个字符串，并返回一个整数。")]),s._v(" "),a("p",[s._v("parseInt(string, radix)")]),s._v(" "),a("p",[s._v("string:要被解析的字符串")]),s._v(" "),a("p",[s._v("radix:\n可选。表示要解析的数字的基数。该值介于 2 ~ 36 之间。如果省略该参数或其值为 0，则数字将以 10 为基础（进制数）来解析。如果它以 “0x” 或 “0X” 开头，将以 16 为基数。如果该参数小于 2 或者大于 36，则\nparseInt() 将返回 NaN。")]),s._v(" "),a("ul",[a("li",[s._v("例：")])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//10 radinx为0时按十进制处理")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//NaN 最小是二进制")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//2 10以二进制为基数，结果2")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ul",[a("li",[a("p",[s._v("map方法")])]),s._v(" "),a("li",[a("p",[s._v("map方法的使用")])])]),s._v(" "),a("p",[s._v("map方法返回一个新数组，数组中的元素为原始数组元素处理后的值")]),s._v(" "),a("p",[s._v("array.map(function(currentValue,index,arr), thisValue)")]),s._v(" "),a("p",[s._v("数组的参数有三个，第一个参数代表当前被处理的元素，第二个参数代表该元素的索引，第三个参数代表当前元素属于的数组对象")]),s._v(" "),a("ul",[a("li",[s._v("解题")])]),s._v(" "),a("p",[s._v("知道了以上两个方法，那我们看一下解析过程")]),s._v(" "),a("p",[s._v("['1','2','3'].map(parseInt) 就是将字符串  '1','2','3'作为元素，0,1,2下标，分别调用 parseInt函数")]),s._v(" "),a("p",[s._v("也就是")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//基数为0 会根据十进制解析，所以结果为1")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2,'")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//基数为 1 不在区间范围，所以结果为NaN")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ParseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'3,'")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//基数为2 用二进制来解析，二进制以应该为0，1组成,<2才可以，无法解析，所以结果为NaN")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("ClientOnly",[a("leave")],1)],1)}),[],!1,null,null,null);t.default=e.exports}}]);