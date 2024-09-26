import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/面试相关/浏览器/2.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/%E9%9D%A2%E8%AF%95%E7%9B%B8%E5%85%B3/%E6%B5%8F%E8%A7%88%E5%99%A8/2.html\",\"title\":\"2. 进程和线程\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2018-01-01T00:00:00.000Z\",\"category\":[\"前端技术\"],\"tag\":[\"浏览器\",\"面经\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"1. 进程（Process）\",\"slug\":\"_1-进程-process\",\"link\":\"#_1-进程-process\",\"children\":[]},{\"level\":2,\"title\":\"2. 线程（Thread）\",\"slug\":\"_2-线程-thread\",\"link\":\"#_2-线程-thread\",\"children\":[]},{\"level\":2,\"title\":\"3. 区别\",\"slug\":\"_3-区别\",\"link\":\"#_3-区别\",\"children\":[]},{\"level\":2,\"title\":\"4. 浏览器有哪些进程\",\"slug\":\"_4-浏览器有哪些进程\",\"link\":\"#_4-浏览器有哪些进程\",\"children\":[]}],\"readingTime\":{\"minutes\":2.09,\"words\":627},\"filePathRelative\":\"前端技术/面试相关/浏览器/2.md\",\"localizedDate\":\"2018年1月1日\",\"excerpt\":\"\\n<h2>1. 进程（Process）</h2>\\n<p>进程是计算机中正在运行的程序的实例，<strong>一个进程就是一个程序运行实例</strong>。它拥有独立的内存空间、代码和数据，并且由操作系统负责调度和管理。<strong>每个进程在执行时都会分配独立的内存空间，不同进程之间的内存是隔离的，一个进程的错误不会直接影响其他进程</strong>。 进程之间通过进程间通信（IPC）机制来交换数据和进行通信，常见的IPC方式包括管道、消息队列、共享内存等。进程的切换开销较大，因为需要保存和恢复进程的完整状态，涉及到内存保护和虚拟内存的切换。</p>\\n<h2>2. 线程（Thread）</h2>\"}")
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
