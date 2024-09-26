import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/JavaScript/核心模块/内存管理/垃圾回收.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/JavaScript/%E6%A0%B8%E5%BF%83%E6%A8%A1%E5%9D%97/%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86/%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6.html\",\"title\":\"垃圾回收\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":3,\"date\":\"2018-01-01T00:00:00.000Z\",\"category\":[\"前端技术\"],\"tag\":[\"JavaScript\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"原理\",\"slug\":\"原理\",\"link\":\"#原理\",\"children\":[{\"level\":3,\"title\":\"引用计数法\",\"slug\":\"引用计数法\",\"link\":\"#引用计数法\",\"children\":[]},{\"level\":3,\"title\":\"标记清除法\",\"slug\":\"标记清除法\",\"link\":\"#标记清除法\",\"children\":[]}]},{\"level\":2,\"title\":\"堆栈溢出\",\"slug\":\"堆栈溢出\",\"link\":\"#堆栈溢出\",\"children\":[]},{\"level\":2,\"title\":\"内存泄漏\",\"slug\":\"内存泄漏\",\"link\":\"#内存泄漏\",\"children\":[{\"level\":3,\"title\":\"全局变量\",\"slug\":\"全局变量\",\"link\":\"#全局变量\",\"children\":[]},{\"level\":3,\"title\":\"分离的 DOM 引用\",\"slug\":\"分离的-dom-引用\",\"link\":\"#分离的-dom-引用\",\"children\":[]},{\"level\":3,\"title\":\"闭包\",\"slug\":\"闭包\",\"link\":\"#闭包\",\"children\":[]},{\"level\":3,\"title\":\"定时器\",\"slug\":\"定时器\",\"link\":\"#定时器\",\"children\":[]},{\"level\":3,\"title\":\"控制台打印\",\"slug\":\"控制台打印\",\"link\":\"#控制台打印\",\"children\":[]}]}],\"readingTime\":{\"minutes\":8.97,\"words\":2692},\"filePathRelative\":\"前端技术/JavaScript/核心模块/内存管理/垃圾回收.md\",\"localizedDate\":\"2018年1月1日\",\"excerpt\":\"\\n<blockquote>\\n<p>由于字符串、对象和数组没有固定大小，所以当他们的大小已知时，才能对他们进行动态的存储分配。JavaScript 序每次创建字符串、数组或对象时，解释器都必须分配内存来存储那个实体。只要像这样动态地分配了内存，最终都要释放这些内存以便他们能够被再用，否则，JavaScript 的解释器将会消耗完系统中所有可用的内存，造成系统崩溃。——《JavaScript 权威指南》</p>\\n</blockquote>\\n<p>在 C 和 C++ 之类的语言中，需要手动来管理内存的，这也是造成许多不必要问题的根源。幸运的是，在编写 JavaScript 的过程中，内存的分配以及内存的回收完全实现了自动管理。</p>\"}")
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
