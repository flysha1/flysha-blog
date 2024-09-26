import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/面试相关/JavaScript/5.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/%E9%9D%A2%E8%AF%95%E7%9B%B8%E5%85%B3/JavaScript/5.html\",\"title\":\"5. 在本地实现一个聊天室，多个tab页相互通信，不能用websocket，有哪些方法？\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2018-01-01T00:00:00.000Z\",\"category\":[\"前端技术\",\"面经\"],\"tag\":[\"JavaScript\"],\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":1.27,\"words\":382},\"filePathRelative\":\"前端技术/面试相关/JavaScript/5.md\",\"localizedDate\":\"2018年1月1日\",\"excerpt\":\"\\n<ol>\\n<li>\\n<p>使用LocalStorage或SessionStorage：这两个Web存储API可在浏览器的不同标签页之间共享数据。当一个标签页发送消息时，将消息存储在LocalStorage或SessionStorage中。其他标签页可以监听该存储区的变化，并读取最新的消息内容来实现通信效果。</p>\\n</li>\\n<li>\\n<p>使用Broadcast Channel API：Broadcast Channel API 可以在浏览器的不同上下文（包括不同的标签页）之间进行双向通信。当一个标签页发送消息到广播频道时，其他标签页可以通过监听相同的广播频道来接收和响应消息。</p>\\n</li>\\n<li>\\n<p>使用SharedWorker：SharedWorker 是一种在多个浏览器上下文之间共享脚本执行的机制，它可以在不同的标签页之间进行通信。可以创建一个SharedWorker，然后在各个标签页中连接到该SharedWorker，使它们能够共享数据和通信。</p>\\n</li>\\n</ol>\"}")
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
