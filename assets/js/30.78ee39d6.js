(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{391:function(t,a,e){"use strict";e.r(a);var s=e(4),r=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"无root权限安装软件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#无root权限安装软件"}},[t._v("#")]),t._v(" 无root权限安装软件")]),t._v(" "),a("ClientOnly",[a("title-pv")],1),t._v(" "),a("h2",{attrs:{id:"源代码安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#源代码安装"}},[t._v("#")]),t._v(" 源代码安装")]),t._v(" "),a("ol",[a("li",[t._v("首先下载想安装的软件的源码")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("wget 你想下载的源码压缩包的链接\ntar -xzf *.tar.gz\ntar -xvf *.tar\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("进入bin文件夹，执行以下命令")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("./configure --prefix=/home/yourname/software/bin\nmake\nmake install\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("配置环境变量")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("vim ~/.bashrc\nexport PATH=$PATH:/home/yourname/software/bin\nsource ~/.bashrc\n")])])]),a("h2",{attrs:{id:"deb安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deb安装"}},[t._v("#")]),t._v(" deb安装")]),t._v(" "),a("ol",[a("li",[t._v("首先下载想安装的软件的deb包")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("wget 你想下载的源码压缩包的链接\n")])])]),a("ol",{attrs:{start:"2"}},[a("li",[t._v("安装软件包")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("dpkg -x *.deb /home/yourname/software\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("将软件目录添加到环境变量，方法同上")])]),t._v(" "),a("ClientOnly",[a("leave")],1)],1)}),[],!1,null,null,null);a.default=r.exports}}]);