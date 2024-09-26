import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/JavaScript/核心模块/并发模型/事件循环.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/JavaScript/%E6%A0%B8%E5%BF%83%E6%A8%A1%E5%9D%97/%E5%B9%B6%E5%8F%91%E6%A8%A1%E5%9E%8B/%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF.html\",\"title\":\"事件循环\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":2,\"date\":\"2018-01-01T00:00:00.000Z\",\"category\":[\"前端技术\"],\"tag\":[\"JavaScript\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"浏览器环境\",\"slug\":\"浏览器环境\",\"link\":\"#浏览器环境\",\"children\":[]},{\"level\":2,\"title\":\"Node 环境\",\"slug\":\"node-环境\",\"link\":\"#node-环境\",\"children\":[]}],\"readingTime\":{\"minutes\":3.52,\"words\":1056},\"filePathRelative\":\"前端技术/JavaScript/核心模块/并发模型/事件循环.md\",\"localizedDate\":\"2018年1月1日\",\"excerpt\":\"\\n<p>为了协调事件、用户交互、脚本、UI 渲染、网络请求，用户代理必须使用 <strong>事件循环机制</strong>（Event Loop）。</p>\\n<p>这种事件循环机制是由 JavaScript 的宿主环境来实现的，在浏览器运行环境中由浏览器内核引擎实现，而在 NodeJS 中则由 libuv 引擎实现。</p>\\n<p>主线程运行时候，产生堆（Heap）和栈（Stack），栈中的代码调用各种外部 API，它们在任务队列中加入各种事件。只要栈中的代码执行完毕，主线程就会通过事件循环机制读取任务队列，依次执行那些事件所对应的回调函数。</p>\\n<p>运行机制：</p>\\n<ol>\\n<li>所有同步任务都在主线程上执行，形成一个 <strong>执行栈</strong>（Execution Context Stack）</li>\\n<li>主线程之外，还存在一个 <strong>任务队列</strong>（Task Queue）。只要异步任务有了运行结果，就在 <strong>任务队列</strong> 之中放置一个事件</li>\\n<li>一旦 <strong>执行栈</strong> 中的所有同步任务执行完毕，系统就会读取 <strong>任务队列</strong>，看看里面有哪些待执行事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行</li>\\n<li>主线程不断重复上面的第三步</li>\\n</ol>\"}")
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
