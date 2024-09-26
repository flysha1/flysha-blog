import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/JavaScript/核心模块/执行阶段/1.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/JavaScript/%E6%A0%B8%E5%BF%83%E6%A8%A1%E5%9D%97/%E6%89%A7%E8%A1%8C%E9%98%B6%E6%AE%B5/1.html\",\"title\":\"执行上下文栈\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":1,\"date\":\"2018-01-01T00:00:00.000Z\",\"category\":[\"前端技术\"],\"tag\":[\"JavaScript\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"可执行代码\",\"slug\":\"可执行代码\",\"link\":\"#可执行代码\",\"children\":[]},{\"level\":2,\"title\":\"栈堆实现分析\",\"slug\":\"栈堆实现分析\",\"link\":\"#栈堆实现分析\",\"children\":[]}],\"readingTime\":{\"minutes\":3.22,\"words\":966},\"filePathRelative\":\"前端技术/JavaScript/核心模块/执行阶段/1.md\",\"localizedDate\":\"2018年1月1日\",\"excerpt\":\"\\n<figure><img src=\\\"https://www.freeimg.cn/i/2024/06/26/667b753160d56.jpg\\\" alt=\\\"\\\" tabindex=\\\"0\\\" loading=\\\"lazy\\\"><figcaption></figcaption></figure>\\n<p>当我们调用一个函数时（激活），一个新的执行上下文就会被创建。</p>\\n<p>一个执行上下文的生命周期可分为 <strong>创建阶段</strong> 和 <strong>代码执行阶段</strong> 两个阶段。</p>\\n<p><strong>创建阶段</strong>：在这个阶段中，执行上下文会分别进行以下操作</p>\"}")
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
