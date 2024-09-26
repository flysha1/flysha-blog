import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/JavaScript/核心模块/编译阶段/4.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/JavaScript/%E6%A0%B8%E5%BF%83%E6%A8%A1%E5%9D%97/%E7%BC%96%E8%AF%91%E9%98%B6%E6%AE%B5/4.html\",\"title\":\"块作用域\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":4,\"date\":\"2018-01-01T00:00:00.000Z\",\"category\":[\"前端技术\"],\"tag\":[\"JavaScript\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"声明关键字\",\"slug\":\"声明关键字\",\"link\":\"#声明关键字\",\"children\":[{\"level\":3,\"title\":\"var\",\"slug\":\"var\",\"link\":\"#var\",\"children\":[]},{\"level\":3,\"title\":\"let\",\"slug\":\"let\",\"link\":\"#let\",\"children\":[]},{\"level\":3,\"title\":\"const\",\"slug\":\"const\",\"link\":\"#const\",\"children\":[]}]},{\"level\":2,\"title\":\"暂时性死区\",\"slug\":\"暂时性死区\",\"link\":\"#暂时性死区\",\"children\":[]},{\"level\":2,\"title\":\"显式块级作用域\",\"slug\":\"显式块级作用域\",\"link\":\"#显式块级作用域\",\"children\":[]}],\"readingTime\":{\"minutes\":5.34,\"words\":1603},\"filePathRelative\":\"前端技术/JavaScript/核心模块/编译阶段/4.md\",\"localizedDate\":\"2018年1月1日\",\"excerpt\":\"\\n<blockquote>\\n<p>任何一对花括号中的语句集都属于一个块，在这之中定义的所有变量在代码块外都是不可见的，我们称之为 <strong>块级作用域</strong>。</p>\\n</blockquote>\\n<p>尽管函数作用域是最常见的作用域单元，也是现行大多数 JavaScript 最普遍的设计方法，但其他类型的作用域单元也是存在的，并且通过使用其他类型的作用域单元甚至可以实现维护起来更加优秀、简洁的代码，比如块作用域。</p>\\n<h2>声明关键字</h2>\\n<h3>var</h3>\\n<p>ES5 及之前是没有块级变量这个说法的，常规性是用 <strong>闭包</strong> 来防止内存泄漏。</p>\"}")
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
