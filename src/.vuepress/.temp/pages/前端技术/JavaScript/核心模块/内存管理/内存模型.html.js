import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/JavaScript/核心模块/内存管理/内存模型.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/JavaScript/%E6%A0%B8%E5%BF%83%E6%A8%A1%E5%9D%97/%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86/%E5%86%85%E5%AD%98%E6%A8%A1%E5%9E%8B.html\",\"title\":\"内存模型\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":1,\"date\":\"2018-01-01T00:00:00.000Z\",\"category\":[\"前端技术\"],\"tag\":[\"JavaScript\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"栈数据结构\",\"slug\":\"栈数据结构\",\"link\":\"#栈数据结构\",\"children\":[]},{\"level\":2,\"title\":\"堆数据结构\",\"slug\":\"堆数据结构\",\"link\":\"#堆数据结构\",\"children\":[]},{\"level\":2,\"title\":\"队列数据结构\",\"slug\":\"队列数据结构\",\"link\":\"#队列数据结构\",\"children\":[]},{\"level\":2,\"title\":\"变量对象与基础数据类型\",\"slug\":\"变量对象与基础数据类型\",\"link\":\"#变量对象与基础数据类型\",\"children\":[]},{\"level\":2,\"title\":\"引用数据类型与堆内存\",\"slug\":\"引用数据类型与堆内存\",\"link\":\"#引用数据类型与堆内存\",\"children\":[]},{\"level\":2,\"title\":\"数据拷贝\",\"slug\":\"数据拷贝\",\"link\":\"#数据拷贝\",\"children\":[{\"level\":3,\"title\":\"基本数据类型\",\"slug\":\"基本数据类型\",\"link\":\"#基本数据类型\",\"children\":[]},{\"level\":3,\"title\":\"引用数据类型\",\"slug\":\"引用数据类型\",\"link\":\"#引用数据类型\",\"children\":[]}]},{\"level\":2,\"title\":\"总结\",\"slug\":\"总结\",\"link\":\"#总结\",\"children\":[]}],\"readingTime\":{\"minutes\":5.86,\"words\":1757},\"filePathRelative\":\"前端技术/JavaScript/核心模块/内存管理/内存模型.md\",\"localizedDate\":\"2018年1月1日\",\"excerpt\":\"\\n<p>JavaScript 内存空间分为 栈（Stack）、堆（Heap）、池（一般也会归类为栈中）。其中 栈 存放变量，堆 存放复杂对象，池 存放常量。</p>\\n<h2>栈数据结构</h2>\\n<p>与 C / C++ 不同，JavaScript 中并没有严格意义上区分栈内存与堆内存。因此我们可以简单粗暴的理解为 JavaScript 的所有数据都保存在堆内存中。但是在某些场景，我们仍然需要基于堆栈数据结构的思维来实现一些功能，比如 JavaScript 的 执行上下文。执行上下文的执行顺序借用了栈数据结构的存取方式。</p>\\n<p>要简单理解栈的存取方式，我们可以通过类比乒乓球盒子来分析。</p>\"}")
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
