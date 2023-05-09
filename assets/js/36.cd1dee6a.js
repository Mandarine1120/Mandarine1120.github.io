(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{381:function(t,e,a){"use strict";a.r(e);var n=a(22),r=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"前端面试题-react"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端面试题-react"}},[t._v("#")]),t._v(" 前端面试题-react")]),t._v(" "),a("ClientOnly",[a("title-pv")],1),t._v(" "),a("h2",{attrs:{id:"react-中-keys-的作用是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-中-keys-的作用是什么"}},[t._v("#")]),t._v(" React 中 keys  的作用是什么？")]),t._v(" "),a("p",[t._v("Keys 是 React  用于追踪哪些列表中元素被修改、被添加或者被移除的辅助标识。\n在开发过程中，我们需要保证某个元素的 key  在其同级元素中具有唯一性。在\nReact Diff 算法中 React 会借助元素的 Key  值来判断该元素是新近创建的还是被移\n动而来的元素，从而减少不必要的元素重渲染。此外，React 还需要借助 Key  值来\n判断元素与本地状态的关联关系，因此我们绝不可忽视转换函数中 Key  的重要\n性。")]),t._v(" "),a("h2",{attrs:{id:"调用-setstate-之后发生了什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#调用-setstate-之后发生了什么"}},[t._v("#")]),t._v(" 调用 setState  之后发生了什么？")]),t._v(" "),a("p",[t._v("在代码中调用 setState 函数之后，React  会将传入的参数对象与组件当前的状态合\n并，然后触发所谓的调和过程（Reconciliation）。经过调和过程，React  会以相对\n高效的方式根据新的状态构建 React 元素树并且着手重新渲染整个 UI  界面。在\nReact 得到元素树之后，React  会自动计算出新的树与老树的节点差异，然后根据\n差异对界面进行最小化重渲染。在差异计算算法中，React  能够相对精确地知道哪\n些位置发生了改变以及应该如何改变，这就保证了按需更新，而不是全部重新渲\n染。")]),t._v(" "),a("h2",{attrs:{id:"react-生命周期函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-生命周期函数"}},[t._v("#")]),t._v(" react  生命周期函数")]),t._v(" "),a("p",[t._v("初始化阶段："),a("br"),t._v("\ngetDefaultProps:获取实例的默认属性"),a("br"),t._v("\ngetInitialState:获取每个实例的初始化状态"),a("br"),t._v("\ncomponentWillMount：组件即将被装载、渲染到页面上"),a("br"),t._v("\nrender:组件在这里生成虚拟的 DOM  节点"),a("br"),t._v("\ncomponentDidMount:组件真正在被装载之后"),a("br"),t._v("\n运行中状态："),a("br"),t._v("\ncomponentWillReceiveProps:组件将要接收到属性的时候调用"),a("br"),t._v("\nshouldComponentUpdate:组件接受到新属性或者新状态的时候（可\n以返回 false，接收数据后不更新，阻止 render 调用，后面的函数不\n会被继续执行了）\ncomponentWillUpdate:组件即将更新不能修改属性和状态\nrender:组件重新描绘"),a("br"),t._v("\ncomponentDidUpdate:组件已经更新"),a("br"),t._v("\n销毁阶段："),a("br"),t._v("\ncomponentWillUnmount:组件即将销毁"),a("br"),t._v("\nshouldComponentUpdate 是做什么的,（react性能优\n化是哪个周期函数？）"),a("br"),t._v("\nshouldComponentUpdate 这个方法用来判断是否需要调用 render 方法重新描绘\ndom。因为 dom 的描绘非常消耗性能，如果我们能在 shouldComponentUpdate  方\n法中能够写出更优化的 dom diff  算法，可以极大的提高性能。")]),t._v(" "),a("h2",{attrs:{id:"为什么虚拟-dom-会提高性能-必考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么虚拟-dom-会提高性能-必考"}},[t._v("#")]),t._v(" 为什么虚拟 dom 会提高性能?(必考)")]),t._v(" "),a("p",[t._v("虚拟 dom 相当于在 js 和真实 dom 中间加了一个缓存，利用 dom diff  算法避免了没\n有必要的 dom  操作，从而提高性能。\n用 JavaScript 对象结构表示 DOM 树的结构；然后用这个树构建一个真正的  DOM\n树，插到文档当中当状态变更的时候，重新构造一棵新的对象树。然后用新的树和\n旧的树进行比较，记录两棵树差异把 2 所记录的差异应用到步骤 1  所构建的真正的\nDOM  树上，视图就更新了。")]),t._v(" "),a("h2",{attrs:{id:"reactdiff原理-常考-大厂必考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#reactdiff原理-常考-大厂必考"}},[t._v("#")]),t._v(" reactdiff原理（常考，大厂必考）")]),t._v(" "),a("p",[t._v("把树形结构按照层级分解，只比较同级元素。\n给列表结构的每个单元添加唯一的 key  属性，方便比较。\nReact 只会匹配相同 class 的 component（这里面的 class  指的是组件的名\n字）\n合并操作，调用 component 的 setState 方法的时候, React 将其标记为  dirty.\n到每一个事件循环结束, React 检查所有标记 dirty 的 component 重新绘制.\n选择性子树渲染。开发人员可以重写 shouldComponentUpdate 提高 diff  的\n性能。")]),t._v(" "),a("h2",{attrs:{id:"react-中-refs的作用是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-中-refs的作用是什么"}},[t._v("#")]),t._v(" React 中 refs的作用是什么？")]),t._v(" "),a("p",[t._v("Refs 是 React 提供给我们的安全访问 DOM  元素或者某个组件实例的句柄。我们可\n以为元素添加 ref 属性然后在回调函数中接受该元素在 DOM  树中的句柄，该值会\n作为回调函数的第一个参数返回：\n上述代码中的 input 域包含了一个 ref 属性，该属性声明的回调函数会接收 input  对\n应的 DOM 元素，我们将其绑定到 this  指针以便在其他的类函数中使用。另外值得\n一提的是， refs  并不是类组件的专属，函数式组件同样能够利用闭包暂存其值：")]),t._v(" "),a("h2",{attrs:{id:"类组件-class-component-和函数式组件-functionalcomponent-之间有何不同"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类组件-class-component-和函数式组件-functionalcomponent-之间有何不同"}},[t._v("#")]),t._v(" 类组件(Class   component)和函数式组件(Functionalcomponent)之间有何不同")]),t._v(" "),a("p",[t._v("类组件不仅允许你使用更多额外的功能，如组件自身的状态和生命周期钩\n子，也能使组件直接访问 store  并维持状态\n当组件仅是接收 props，并将组件自身渲染到页面时，该组件就是一个 '无\n状态组件(stateless component)'，可以使用一个纯函数来创建这样的组件。\n这种组件也被称为哑组件(dumb components)或展示组件\n(组件的)状态(state)和属性(props)之间有何不同\nState 是一种数据结构，用于组件挂载时所需数据的默认值。State  可能会随\n着时间的推移而发生突变，但多数时候是作为用户事件行为的结果。\nProps(properties 的简写)则是组件的配置。props  由父组件传递给子组件，\n并且就子组件而言，props 是不可变的(immutable)。组件不能改变自身的\nprops，但是可以把其子组件的 props 放在一起(统一管理)。Props  也不仅仅\n是数据--回调函数也可以通过 props  传递。\n何为受控组件(controlled component)\n在 HTML 中，类似 "),a("code",[t._v("<input>, <textarea>")]),t._v(" 和 "),a("code",[t._v("<select>")]),t._v(' 这样的表单元素会维护自身\n的状态，并基于用户的输入来更新。当用户提交表单时，前面提到的元素的值将随\n表单一起被发送。但在 React 中会有些不同，包含表单元素的组件将会在 state  中\n追踪输入的值，并且每次调用回调函数时，如 onChange 会更新 state，重新渲染组\n件。一个输入表单元素，它的值通过 React  的这种方式来控制，这样的元素就被称\n为"受控元素"。')]),t._v(" "),a("h2",{attrs:{id:"何为高阶组件-higher-order-component"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#何为高阶组件-higher-order-component"}},[t._v("#")]),t._v(" 何为高阶组件(higher order component)")]),t._v(" "),a("p",[t._v("高阶组件是一个以组件为参数并返回一个新组件的函数。HOC  运行你重用代码、\n逻辑和引导抽象。最常见的可能是 Redux 的 connect  函数。除了简单分享工具库和\n简单的组合，HOC 最好的方式是共享 React  组件之间的行为。如果你发现你在不\n同的地方写了大量代码来做同一件事时，就应该考虑将代码重构为可重用的\nHOC。")]),t._v(" "),a("h2",{attrs:{id:"为什么建议传递给-setstate-的参数是一个-callback-而不是一个对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么建议传递给-setstate-的参数是一个-callback-而不是一个对象"}},[t._v("#")]),t._v(" 为什么建议传递给 setState 的参数是一个 callback 而不是一个对象")]),t._v(" "),a("p",[t._v("因为 this.props 和 this.state  的更新可能是异步的，不能依赖它们的值去计算下一个\nstate。")]),t._v(" "),a("h2",{attrs:{id:"除了在构造函数中绑定-this-还有其它方式吗"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#除了在构造函数中绑定-this-还有其它方式吗"}},[t._v("#")]),t._v(" 除了在构造函数中绑定 this，还有其它方式吗")]),t._v(" "),a("p",[t._v("你可以使用属性初始值设定项(property initializers)来正确绑定回调，create-react-\napp  也是默认支持的。在回调中你可以使用箭头函数，但问题是每次组件渲染时都\n会创建一个新的回调。")]),t._v(" "),a("h2",{attrs:{id:"在构造函数中-调用-super-props-的目的是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在构造函数中-调用-super-props-的目的是什么"}},[t._v("#")]),t._v(" (在构造函数中)调用 super(props)的目的是什么")]),t._v(" "),a("p",[t._v("在 super() 被调用之前，子类是不能使用 this 的，在 ES2015  中，子类必须在\nconstructor 中调用 super()。传递 props 给 super() 的原因则是便于(在子类中)能在\nconstructor 访问 this.props。")]),t._v(" "),a("h2",{attrs:{id:"应该在-react-组件的何处发起-ajax请求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应该在-react-组件的何处发起-ajax请求"}},[t._v("#")]),t._v(" 应该在 React 组件的何处发起 Ajax请求")]),t._v(" "),a("p",[t._v("在 React 组件中，应该在 componentDidMount  中发起网络请求。这个方法会在组\n件第一次“挂载”(被添加到 DOM)时执行，在组件的生命周期中仅会执行一次。更重\n要的是，你不能保证在组件挂载之前 Ajax  请求已经完成，如果是这样，也就意味\n着你将尝试在一个未挂载的组件上调用 setState，这将不起作用。在\ncomponentDidMount  中发起网络请求将保证这有一个组件可以更新了。")]),t._v(" "),a("h2",{attrs:{id:"描述事件在-react-中的处理方式。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#描述事件在-react-中的处理方式。"}},[t._v("#")]),t._v(" 描述事件在 React  中的处理方式。")]),t._v(" "),a("p",[t._v("为了解决跨浏览器兼容性问题，您的 React  中的事件处理程序将传递\nSyntheticEvent 的实例，它是 React  的浏览器本机事件的跨浏览器包装器。\n这些 SyntheticEvent  与您习惯的原生事件具有相同的接口，除了它们在所有浏览器\n中都兼容。有趣的是，React 实际上并没有将事件附加到子节点本身。React  将使\n用单个事件监听器监听顶层的所有事件。这对于性能是有好处的，这也意味着在更\n新 DOM 时，React  不需要担心跟踪事件监听器。")]),t._v(" "),a("h2",{attrs:{id:"createelement-和-cloneelement-有什么区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#createelement-和-cloneelement-有什么区别"}},[t._v("#")]),t._v(" createElement 和 cloneElement  有什么区别？")]),t._v(" "),a("p",[t._v("React.createElement():JSX 语法就是用 React.createElement()来构建 React  元素的。\n它接受三个参数，第一个参数可以是一个标签名。如 div、span，或者 React  组\n件。第二个参数为传入的属性。第三个以及之后的参数，皆作为组件的子组件。\nReact.cloneElement()与  React.createElement()相似，不同的是它传入的第一个参数\n是一个 React   元素，而不是标签名或组件。新添加的属性会并入原有的属性，传入\n到返回的新元素中，而就的子元素奖杯替换。")]),t._v(" "),a("h2",{attrs:{id:"react中有三种构建组件的方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react中有三种构建组件的方式"}},[t._v("#")]),t._v(" React中有三种构建组件的方式")]),t._v(" "),a("p",[t._v("React.createClass()、ES6 class 和无状态函数。")]),t._v(" "),a("h2",{attrs:{id:"react组件的划分业务组件技术组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react组件的划分业务组件技术组件"}},[t._v("#")]),t._v(" react组件的划分业务组件技术组件？")]),t._v(" "),a("p",[t._v("根据组件的职责通常把组件分为 UI  组件和容器组件。\nUI 组件负责 UI  的呈现，容器组件负责管理数据和逻辑。\n两者通过 React-Redux 提供 connect  方法联系起来。")]),t._v(" "),a("h2",{attrs:{id:"简述-flux思想"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简述-flux思想"}},[t._v("#")]),t._v(" 简述 flux思想")]),t._v(" "),a("p",[t._v('Flux 的最大特点，就是数据的"单向流动"。')]),t._v(" "),a("ol",[a("li",[t._v("用户访问  View")]),t._v(" "),a("li",[t._v("View 发出用户的  Action")]),t._v(" "),a("li",[t._v("Dispatcher 收到 Action，要求 Store  进行相应的更新")]),t._v(" "),a("li",[t._v('Store 更新后，发出一个"change"事件')]),t._v(" "),a("li",[t._v('View 收到"change"事件后，更新页面')])]),t._v(" "),a("h2",{attrs:{id:"react-项目用过什么脚手架-本题是开放性题目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react-项目用过什么脚手架-本题是开放性题目"}},[t._v("#")]),t._v(" React 项目用过什么脚手架（本题是开放性题目）")]),t._v(" "),a("p",[t._v("creat-react-app Yeoman 等")]),t._v(" "),a("h2",{attrs:{id:"了解-redux-么-说一下redux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#了解-redux-么-说一下redux"}},[t._v("#")]),t._v(" 了解 redux 么，说一下redux")]),t._v(" "),a("p",[t._v("把redux 是一个应用数据流框架，主要是解决了组件间状态共享的问题，原理\n是集中式管理，主要有三个核心方法，action，store，reducer，工作流程是\nview 调用 store 的 dispatch 接收 action 传入 store，reducer 进行 state  操\n作，view 通过 store 提供的 getState 获取最新的数据，flux  也是用来进行数\n据操作的，有四个组成部分 action，dispatch，view，store，工作流程是\nview 发出一个 action，派发器接收 action，让 store  进行数据更新，更新完\n成以后 store 发出 change，view 接受 change 更新视图。Redux 和 Flux  很\n像。主要区别在于 Flux 有多个可以改变应用状态的 store，在 Flux  中\ndispatcher 被用来传递数据到注册的回调事件，但是在 redux  中只能定义一\n个可更新状态的 store，redux 把 store 和 Dispatcher 合并,结构更加简单清晰\n新增 state,对状态的管理更加明确，通过 redux，流程更加规范了，减少手\n动编码量，提高了编码效率，同时缺点时当数据更新时有时候组件不需\n要，但是也要重新绘制，有些影响效率。一般情况下，我们在构建多交\n互，多数据流的复杂项目应用时才会使用它们")]),t._v(" "),a("h2",{attrs:{id:"redux-有什么缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redux-有什么缺点"}},[t._v("#")]),t._v(" redux 有什么缺点")]),t._v(" "),a("p",[t._v("一个组件所需要的数据，必须由父组件传过来，而不能像 flux  中直接从\nstore  取。\n当一个组件相关数据更新时，即使父组件不需要用到这个组件，父组件还\n是会重新 render，可能会有效率影响，或者需要写复杂的\nshouldComponentUpdate  进行判断。")]),t._v(" "),a("ClientOnly",[a("leave")],1)],1)}),[],!1,null,null,null);e.default=r.exports}}]);