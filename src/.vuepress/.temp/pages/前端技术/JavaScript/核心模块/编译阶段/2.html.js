import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/JavaScript/核心模块/编译阶段/2.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/JavaScript/%E6%A0%B8%E5%BF%83%E6%A8%A1%E5%9D%97/%E7%BC%96%E8%AF%91%E9%98%B6%E6%AE%B5/2.html\",\"title\":\"词法作用域\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":2,\"date\":\"2018-01-01T00:00:00.000Z\",\"category\":[\"前端技术\"],\"tag\":[\"JavaScript\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"词法作用域/静态作用域\",\"slug\":\"词法作用域-静态作用域\",\"link\":\"#词法作用域-静态作用域\",\"children\":[{\"level\":3,\"title\":\"查找\",\"slug\":\"查找\",\"link\":\"#查找\",\"children\":[]},{\"level\":3,\"title\":\"遮蔽\",\"slug\":\"遮蔽\",\"link\":\"#遮蔽\",\"children\":[]}]},{\"level\":2,\"title\":\"动态作用域\",\"slug\":\"动态作用域\",\"link\":\"#动态作用域\",\"children\":[]}],\"readingTime\":{\"minutes\":5.44,\"words\":1632},\"filePathRelative\":\"前端技术/JavaScript/核心模块/编译阶段/2.md\",\"localizedDate\":\"2018年1月1日\",\"excerpt\":\"\\n<p>作用域就是变量（标识符）适用范围，控制着变量的可见性。</p>\\n<p>《You don‘t know js》对作用域的定义：</p>\\n<blockquote>\\n<p>使用一套严格的规则来分辨哪些标识符对哪些语法有访问权限。</p>\\n</blockquote>\\n<p>《JavaScript 权威指南》中对变量作用域的描述：</p>\\n<blockquote>\\n<p>一个变量的作用域（Scope）是程序源代码中定义这个变量的区域。全局变量拥有全局作用域，在 JavaScript 代码中的任何地方都是有定义的。然而在函数内声明的变量只在函数体内有定义。它们是局部变量，作用域是局部性的。函数参数也是局部变量，它们只是在函数体内有定义。</p>\\n</blockquote>\"}")
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
