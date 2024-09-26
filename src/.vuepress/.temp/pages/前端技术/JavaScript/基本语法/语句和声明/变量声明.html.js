import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/JavaScript/基本语法/语句和声明/变量声明.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/JavaScript/%E5%9F%BA%E6%9C%AC%E8%AF%AD%E6%B3%95/%E8%AF%AD%E5%8F%A5%E5%92%8C%E5%A3%B0%E6%98%8E/%E5%8F%98%E9%87%8F%E5%A3%B0%E6%98%8E.html\",\"title\":\"变量声明\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":2,\"date\":\"2018-01-02T00:00:00.000Z\",\"category\":[\"前端技术\"],\"tag\":[\"JavaScript\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"声明\",\"slug\":\"声明\",\"link\":\"#声明\",\"children\":[{\"level\":3,\"title\":\"var\",\"slug\":\"var\",\"link\":\"#var\",\"children\":[]},{\"level\":3,\"title\":\"let\",\"slug\":\"let\",\"link\":\"#let\",\"children\":[]}]},{\"level\":2,\"title\":\"暂存性死区\",\"slug\":\"暂存性死区\",\"link\":\"#暂存性死区\",\"children\":[{\"level\":3,\"title\":\"const\",\"slug\":\"const\",\"link\":\"#const\",\"children\":[]}]},{\"level\":2,\"title\":\"变量作用域\",\"slug\":\"变量作用域\",\"link\":\"#变量作用域\",\"children\":[]},{\"level\":2,\"title\":\"变量的数据类型\",\"slug\":\"变量的数据类型\",\"link\":\"#变量的数据类型\",\"children\":[]}],\"readingTime\":{\"minutes\":5.8,\"words\":1739},\"filePathRelative\":\"前端技术/JavaScript/基本语法/语句和声明/变量声明.md\",\"localizedDate\":\"2018年1月2日\",\"excerpt\":\"\\n<p>ECMAScript 的变量是松散类型的，所谓松散类型就是可以用于保存任何类型的数据。换句话说，每个变量仅仅是一个用于保存值的占位符而已。</p>\\n<h2>声明</h2>\\n<h3>var</h3>\\n<p><code>var</code> 语句用于声明一个变量，可选地将其初始化为一个值。</p>\\n<p>变量声明，无论发生在何处，都在执行任何代码之前进行处理。用 var 声明的变量的作用域是它当前的执行上下文，它可以是嵌套的函数，也可以是声明在任何函数外的变量。如果你重新声明一个 JavaScript 变量，它将不会丢失其值。</p>\\n<p>将赋值给未声明变量的值在执行赋值时将其隐式地创建为全局变量（它将成为全局对象的属性）。声明和未声明变量之间的差异是：</p>\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
