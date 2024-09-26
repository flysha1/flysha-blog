import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/JavaScript/核心模块/并发模型/并发模型.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/JavaScript/%E6%A0%B8%E5%BF%83%E6%A8%A1%E5%9D%97/%E5%B9%B6%E5%8F%91%E6%A8%A1%E5%9E%8B/%E5%B9%B6%E5%8F%91%E6%A8%A1%E5%9E%8B.html\",\"title\":\"并发模型\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":1,\"date\":\"2018-01-01T00:00:00.000Z\",\"category\":[\"前端技术\"],\"tag\":[\"JavaScript\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"名词解释\",\"slug\":\"名词解释\",\"link\":\"#名词解释\",\"children\":[]},{\"level\":2,\"title\":\"运行环境\",\"slug\":\"运行环境\",\"link\":\"#运行环境\",\"children\":[{\"level\":3,\"title\":\"浏览器线程\",\"slug\":\"浏览器线程\",\"link\":\"#浏览器线程\",\"children\":[]},{\"level\":3,\"title\":\"内核引擎\",\"slug\":\"内核引擎\",\"link\":\"#内核引擎\",\"children\":[]}]},{\"level\":2,\"title\":\"单线程\",\"slug\":\"单线程\",\"link\":\"#单线程\",\"children\":[]},{\"level\":2,\"title\":\"任务队列\",\"slug\":\"任务队列\",\"link\":\"#任务队列\",\"children\":[]}],\"readingTime\":{\"minutes\":5.79,\"words\":1737},\"filePathRelative\":\"前端技术/JavaScript/核心模块/并发模型/并发模型.md\",\"localizedDate\":\"2018年1月1日\",\"excerpt\":\"\\n<h2>名词解释</h2>\\n<p>在了解 JavaScript 单线程、非阻塞机制之前，先了解几组易混淆的概念。</p>\\n<p>进程和线程的概念以及关系：</p>\\n<ul>\\n<li><strong>进程</strong>（Process）：进程是系统资源分配和调度的单元。一个运行着的程序就对应了一个进程。一个进程包括了运行中的程序和程序所使用到的内存和系统资源。</li>\\n<li><strong>线程</strong>（Thread）：线程是进程下的执行者，一个进程至少开启一个线程（主线程），也可以开启多个线程。</li>\\n</ul>\\n<p>并行和并发的概念：</p>\\n<ul>\\n<li><strong>并行</strong>（Parallelism）：指程序的运行状态，在同一时间内有几件事情并行在处理。由于一个线程在同一时间只能处理一件事情，所以并行需要多个线程在同一时间执行多件事情。</li>\\n<li><strong>并发</strong>（Concurrency）：指程序的设计结构，在同一时间内多件事情能被交替地处理。重点是，在某个时间内只有一件事情在执行。比如单核 CPU 能实现多任务运行的过程就是并发。</li>\\n</ul>\"}")
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
