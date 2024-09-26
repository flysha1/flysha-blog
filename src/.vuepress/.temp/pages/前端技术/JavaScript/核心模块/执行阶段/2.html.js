import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/JavaScript/核心模块/执行阶段/2.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/JavaScript/%E6%A0%B8%E5%BF%83%E6%A8%A1%E5%9D%97/%E6%89%A7%E8%A1%8C%E9%98%B6%E6%AE%B5/2.html\",\"title\":\"变量对象\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":2,\"date\":\"2018-01-01T00:00:00.000Z\",\"category\":[\"前端技术\"],\"tag\":[\"JavaScript\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"全局执行上下文\",\"slug\":\"全局执行上下文\",\"link\":\"#全局执行上下文\",\"children\":[]},{\"level\":2,\"title\":\"函数执行上下文\",\"slug\":\"函数执行上下文\",\"link\":\"#函数执行上下文\",\"children\":[]},{\"level\":2,\"title\":\"执行过程\",\"slug\":\"执行过程\",\"link\":\"#执行过程\",\"children\":[{\"level\":3,\"title\":\"进入执行上下文阶段的变量对象\",\"slug\":\"进入执行上下文阶段的变量对象\",\"link\":\"#进入执行上下文阶段的变量对象\",\"children\":[]},{\"level\":3,\"title\":\"代码执行阶段的变量对象\",\"slug\":\"代码执行阶段的变量对象\",\"link\":\"#代码执行阶段的变量对象\",\"children\":[]}]},{\"level\":2,\"title\":\"变量对象和活动对象\",\"slug\":\"变量对象和活动对象\",\"link\":\"#变量对象和活动对象\",\"children\":[]}],\"readingTime\":{\"minutes\":4.78,\"words\":1435},\"filePathRelative\":\"前端技术/JavaScript/核心模块/执行阶段/2.md\",\"localizedDate\":\"2018年1月1日\",\"excerpt\":\"\\n<p>变量对象是与 <a href=\\\"/blog/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/JavaScript/%E6%A0%B8%E5%BF%83%E6%A8%A1%E5%9D%97/%E6%89%A7%E8%A1%8C%E9%98%B6%E6%AE%B5/1.html\\\" target=\\\"_blank\\\">执行上下文</a> 相关的数据作用域，存储了在上下文中定义的 <strong>变量</strong> 和 <strong>函数声明</strong>。</p>\\n<p>因为不同执行上下文中的变量对象稍有不同，所以我们来聊聊 全局执行上下文 下的变量对象和 函数执行上下文 下的变量对象。</p>\"}")
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
