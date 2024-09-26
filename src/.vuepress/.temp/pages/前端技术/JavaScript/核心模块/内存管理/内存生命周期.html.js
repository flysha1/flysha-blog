import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/JavaScript/核心模块/内存管理/内存生命周期.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/JavaScript/%E6%A0%B8%E5%BF%83%E6%A8%A1%E5%9D%97/%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86/%E5%86%85%E5%AD%98%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html\",\"title\":\"内存生命周期\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":2,\"date\":\"2018-01-01T00:00:00.000Z\",\"category\":[\"前端技术\"],\"tag\":[\"JavaScript\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"内存分配\",\"slug\":\"内存分配\",\"link\":\"#内存分配\",\"children\":[{\"level\":3,\"title\":\"值的初始化\",\"slug\":\"值的初始化\",\"link\":\"#值的初始化\",\"children\":[]},{\"level\":3,\"title\":\"函数调用分配\",\"slug\":\"函数调用分配\",\"link\":\"#函数调用分配\",\"children\":[]}]},{\"level\":2,\"title\":\"存使用\",\"slug\":\"存使用\",\"link\":\"#存使用\",\"children\":[]},{\"level\":2,\"title\":\"内存回收\",\"slug\":\"内存回收\",\"link\":\"#内存回收\",\"children\":[]}],\"readingTime\":{\"minutes\":2.41,\"words\":722},\"filePathRelative\":\"前端技术/JavaScript/核心模块/内存管理/内存生命周期.md\",\"localizedDate\":\"2018年1月1日\",\"excerpt\":\"\\n<p>JavaScript 环境中分配的内存一般有如下生命周期：</p>\\n<ol>\\n<li>内存分配：当我们声明变量、函数、对象的时候，系统会自动为他们分配内存</li>\\n<li>内存使用：即读写内存，也就是使用变量、函数等</li>\\n<li>内存回收：使用完毕，由 <a href=\\\"/blog/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/JavaScript/%E6%A0%B8%E5%BF%83%E6%A8%A1%E5%9D%97/%E5%86%85%E5%AD%98%E7%AE%A1%E7%90%86/%E5%9E%83%E5%9C%BE%E5%9B%9E%E6%94%B6.html\\\" target=\\\"_blank\\\">垃圾回收机制</a> 自动回收不再使用的内存</li>\\n</ol>\"}")
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
