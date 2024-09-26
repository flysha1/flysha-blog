import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/面试相关/浏览器/7.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/%E9%9D%A2%E8%AF%95%E7%9B%B8%E5%85%B3/%E6%B5%8F%E8%A7%88%E5%99%A8/7.html\",\"title\":\"7. 事件流\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2018-01-01T00:00:00.000Z\",\"category\":[\"前端技术\"],\"tag\":[\"浏览器\",\"面经\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"事件冒泡和捕获的区别？\",\"slug\":\"事件冒泡和捕获的区别\",\"link\":\"#事件冒泡和捕获的区别\",\"children\":[]},{\"level\":2,\"title\":\"如何阻止事件冒泡\",\"slug\":\"如何阻止事件冒泡\",\"link\":\"#如何阻止事件冒泡\",\"children\":[]},{\"level\":2,\"title\":\"对事件委托的理解\",\"slug\":\"对事件委托的理解\",\"link\":\"#对事件委托的理解\",\"children\":[]},{\"level\":2,\"title\":\"对浏览器事件循环的理解\",\"slug\":\"对浏览器事件循环的理解\",\"link\":\"#对浏览器事件循环的理解\",\"children\":[]},{\"level\":2,\"title\":\"Node.js的事件循环\",\"slug\":\"node-js的事件循环\",\"link\":\"#node-js的事件循环\",\"children\":[{\"level\":3,\"title\":\"process.nextTick\",\"slug\":\"process-nexttick\",\"link\":\"#process-nexttick\",\"children\":[]},{\"level\":3,\"title\":\"setImmediate 和 setTimeout\",\"slug\":\"setimmediate-和-settimeout\",\"link\":\"#setimmediate-和-settimeout\",\"children\":[]}]},{\"level\":2,\"title\":\"Node和浏览器事件循环机制的区别\",\"slug\":\"node和浏览器事件循环机制的区别\",\"link\":\"#node和浏览器事件循环机制的区别\",\"children\":[]}],\"readingTime\":{\"minutes\":4.72,\"words\":1416},\"filePathRelative\":\"前端技术/面试相关/浏览器/7.md\",\"localizedDate\":\"2018年1月1日\",\"excerpt\":\"\\n<p>事件流分为三个阶段：<strong>捕获阶段</strong>、<strong>目标阶段</strong>、<strong>冒泡阶段</strong>。</p>\\n<p>过程如下：</p>\\n<ul>\\n<li>\\n<p><strong>捕获阶段</strong> ：事件从最外层的节点，也就是文档对象开始，逐级向下传播，直到事件的目标节点上。</p>\\n</li>\\n<li>\\n<p><strong>目标阶段</strong>：事件到达目标节点，触发目标节点上的事件处理函数。</p>\\n</li>\\n<li>\\n<p><strong>冒泡阶段</strong>：事件从目标节点开始，逐级向上传播，直到到达最外层节点（文档对象）</p>\\n</li>\\n</ul>\"}")
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
