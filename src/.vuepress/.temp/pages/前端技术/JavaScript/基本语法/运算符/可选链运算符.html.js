import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/JavaScript/基本语法/运算符/可选链运算符.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/JavaScript/%E5%9F%BA%E6%9C%AC%E8%AF%AD%E6%B3%95/%E8%BF%90%E7%AE%97%E7%AC%A6/%E5%8F%AF%E9%80%89%E9%93%BE%E8%BF%90%E7%AE%97%E7%AC%A6.html\",\"title\":\"可选链运算符\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":17,\"date\":\"2018-01-02T00:00:00.000Z\",\"category\":[\"前端技术\"],\"tag\":[\"JavaScript\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"语法\",\"slug\":\"语法\",\"link\":\"#语法\",\"children\":[]},{\"level\":2,\"title\":\"示例\",\"slug\":\"示例\",\"link\":\"#示例\",\"children\":[]}],\"readingTime\":{\"minutes\":1.05,\"words\":314},\"filePathRelative\":\"前端技术/JavaScript/基本语法/运算符/可选链运算符.md\",\"localizedDate\":\"2018年1月2日\",\"excerpt\":\"\\n<p><strong>可选链运算符</strong>（<code>?.</code>）允许读取位于连接对象链深处的属性的值，而不必明确验证链中的每个引用是否有效。<code>?.</code> 运算符的功能类似于 <code>.</code> 链式运算符，不同之处在于，在引用为空 (nullish) (<code>null</code> 或者 <code>undefined</code>) 的情况下不会引起错误，该表达式短路返回值是 <code>undefined</code>。与函数调用一起使用时，如果给定的函数不存在，则返回 <code>undefined</code>。</p>\\n<p>当尝试访问可能不存在的对象属性时，可选链运算符将会使表达式更短、更简明。在探索一个对象的内容时，如果不能确定哪些属性必定存在，可选链运算符也是很有帮助的。</p>\"}")
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
