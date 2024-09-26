import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/JavaScript/核心模块/执行阶段/3.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/JavaScript/%E6%A0%B8%E5%BF%83%E6%A8%A1%E5%9D%97/%E6%89%A7%E8%A1%8C%E9%98%B6%E6%AE%B5/3.html\",\"title\":\"作用域链\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":3,\"date\":\"2018-01-01T00:00:00.000Z\",\"category\":[\"前端技术\"],\"tag\":[\"JavaScript\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"函数的创建\",\"slug\":\"函数的创建\",\"link\":\"#函数的创建\",\"children\":[]},{\"level\":2,\"title\":\"函数的激活\",\"slug\":\"函数的激活\",\"link\":\"#函数的激活\",\"children\":[]},{\"level\":2,\"title\":\"示例分析\",\"slug\":\"示例分析\",\"link\":\"#示例分析\",\"children\":[]}],\"readingTime\":{\"minutes\":2.41,\"words\":724},\"filePathRelative\":\"前端技术/JavaScript/核心模块/执行阶段/3.md\",\"localizedDate\":\"2018年1月1日\",\"excerpt\":\"\\n<p>在 <a href=\\\"/blog/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/JavaScript/%E6%A0%B8%E5%BF%83%E6%A8%A1%E5%9D%97/%E6%89%A7%E8%A1%8C%E9%98%B6%E6%AE%B5/2.html\\\" target=\\\"_blank\\\">变量对象</a> 中提及到，当查找变量的时候，会先从当前执行上下文的变量对象中查找，如果没有找到，就会从父级（词法层面上的父级）执行上下文的变量对象中查找，一直找到全局上下文的变量对象，也就是全局对象。这样由多个执行上下文的 <strong>变量对象</strong> 构成的链表就叫做作用域链。</p>\"}")
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
