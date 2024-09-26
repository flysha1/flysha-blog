import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/JavaScript/核心模块/并发模型/定时器机制.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/JavaScript/%E6%A0%B8%E5%BF%83%E6%A8%A1%E5%9D%97/%E5%B9%B6%E5%8F%91%E6%A8%A1%E5%9E%8B/%E5%AE%9A%E6%97%B6%E5%99%A8%E6%9C%BA%E5%88%B6.html\",\"title\":\"定时器机制\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":3,\"date\":\"2018-01-01T00:00:00.000Z\",\"category\":[\"前端技术\"],\"tag\":[\"JavaScript\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"事件排队\",\"slug\":\"事件排队\",\"link\":\"#事件排队\",\"children\":[]},{\"level\":2,\"title\":\"先进先出原则\",\"slug\":\"先进先出原则\",\"link\":\"#先进先出原则\",\"children\":[]},{\"level\":2,\"title\":\"间歇调用定时器调用被废弃\",\"slug\":\"间歇调用定时器调用被废弃\",\"link\":\"#间歇调用定时器调用被废弃\",\"children\":[]},{\"level\":2,\"title\":\"定时器无法保证准时执行回调函数\",\"slug\":\"定时器无法保证准时执行回调函数\",\"link\":\"#定时器无法保证准时执行回调函数\",\"children\":[]},{\"level\":2,\"title\":\"间歇调用定时器的连续执行\",\"slug\":\"间歇调用定时器的连续执行\",\"link\":\"#间歇调用定时器的连续执行\",\"children\":[]},{\"level\":2,\"title\":\"超时调用定时器按固定间隔触发周期性定时器\",\"slug\":\"超时调用定时器按固定间隔触发周期性定时器\",\"link\":\"#超时调用定时器按固定间隔触发周期性定时器\",\"children\":[]}],\"readingTime\":{\"minutes\":4.27,\"words\":1280},\"filePathRelative\":\"前端技术/JavaScript/核心模块/并发模型/定时器机制.md\",\"localizedDate\":\"2018年1月1日\",\"excerpt\":\"\\n<figure><img src=\\\"https://www.freeimg.cn/i/2024/07/16/6695c9e442577.png\\\" alt=\\\"\\\" tabindex=\\\"0\\\" loading=\\\"lazy\\\"><figcaption></figcaption></figure>\\n<p>让我们看看这里发生了什么事情：</p>\\n<ol>\\n<li>首先在 0 毫秒的时候有一个持续 18 毫秒的 JavaScript 代码块要执行。</li>\\n<li>然后在 0 毫秒的时候设了两个 10 毫秒延迟的定时器，<code>setTimeout</code> 以及 <code>setInterval</code> ，<code>setTimeout</code> 先设定。</li>\\n<li>在第 6 毫秒的时候有一个发生了鼠标单击事件。</li>\\n</ol>\"}")
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
