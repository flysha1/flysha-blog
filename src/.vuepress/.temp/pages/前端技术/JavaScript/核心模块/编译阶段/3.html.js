import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/JavaScript/核心模块/编译阶段/3.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/JavaScript/%E6%A0%B8%E5%BF%83%E6%A8%A1%E5%9D%97/%E7%BC%96%E8%AF%91%E9%98%B6%E6%AE%B5/3.html\",\"title\":\"函数作用域\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":3,\"date\":\"2018-01-01T00:00:00.000Z\",\"category\":[\"前端技术\"],\"tag\":[\"JavaScript\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"隐藏内部实现\",\"slug\":\"隐藏内部实现\",\"link\":\"#隐藏内部实现\",\"children\":[]},{\"level\":2,\"title\":\"规避命名冲突\",\"slug\":\"规避命名冲突\",\"link\":\"#规避命名冲突\",\"children\":[{\"level\":3,\"title\":\"全局命名空间\",\"slug\":\"全局命名空间\",\"link\":\"#全局命名空间\",\"children\":[]},{\"level\":3,\"title\":\"模块管理\",\"slug\":\"模块管理\",\"link\":\"#模块管理\",\"children\":[]}]},{\"level\":2,\"title\":\"匿名和具名函数表达式\",\"slug\":\"匿名和具名函数表达式\",\"link\":\"#匿名和具名函数表达式\",\"children\":[]},{\"level\":2,\"title\":\"立即执行函数表达式 IIFE\",\"slug\":\"立即执行函数表达式-iife\",\"link\":\"#立即执行函数表达式-iife\",\"children\":[]}],\"readingTime\":{\"minutes\":6.84,\"words\":2053},\"filePathRelative\":\"前端技术/JavaScript/核心模块/编译阶段/3.md\",\"localizedDate\":\"2018年1月1日\",\"excerpt\":\"\\n<p><strong>函数作用域</strong> 指属于这个函数的全部变量都可以在整个函数的范围内使用及复用（事实上在嵌套的作用域中也可以使用）。这种设计方案是非常有用的，能充分利用 JavaScript 变量可以根据需要改变值类型的动态特性。</p>\\n<h2>隐藏内部实现</h2>\\n<p>对函数的传统认知就是先声明一个函数，然后再向里面添加代码。但反过来想也可以带来一些启示：从所写的代码中挑选出一个任意的片段，然后用函数声明对它进行包装，实际上就是把这些代码隐藏起来。</p>\\n<p>实际的结果就是在这个代码片段的周围创建了一个作用域气泡，也就是说这段代码中的任何声明（变量或函数）都将绑定在这个新创建的包装函数的作用域中，而不是先前所在的作用域中。换句话说，可以把变量和函数包裹在一个函数的作用域中，然后用这个作用域来隐藏它们。</p>\"}")
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
