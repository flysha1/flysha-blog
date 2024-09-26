import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/JavaScript/核心模块/函数类型/惰性函数.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/JavaScript/%E6%A0%B8%E5%BF%83%E6%A8%A1%E5%9D%97/%E5%87%BD%E6%95%B0%E7%B1%BB%E5%9E%8B/%E6%83%B0%E6%80%A7%E5%87%BD%E6%95%B0.html\",\"title\":\"惰性函数\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":3,\"date\":\"2018-01-01T00:00:00.000Z\",\"category\":[\"前端技术\"],\"tag\":[\"JavaScript\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"解决问题\",\"slug\":\"解决问题\",\"link\":\"#解决问题\",\"children\":[]},{\"level\":2,\"title\":\"函数重写\",\"slug\":\"函数重写\",\"link\":\"#函数重写\",\"children\":[]},{\"level\":2,\"title\":\"惰性载入\",\"slug\":\"惰性载入\",\"link\":\"#惰性载入\",\"children\":[{\"level\":3,\"title\":\"在函数被调用时处理函数\",\"slug\":\"在函数被调用时处理函数\",\"link\":\"#在函数被调用时处理函数\",\"children\":[]},{\"level\":3,\"title\":\"声明函数时指定适当的函数\",\"slug\":\"声明函数时指定适当的函数\",\"link\":\"#声明函数时指定适当的函数\",\"children\":[]}]}],\"readingTime\":{\"minutes\":3.42,\"words\":1025},\"filePathRelative\":\"前端技术/JavaScript/核心模块/函数类型/惰性函数.md\",\"localizedDate\":\"2018年1月1日\",\"excerpt\":\"\\n<p><strong>惰性函数</strong> 表示函数执行的分支只会在函数 <strong>第一次调用</strong> 的时候执行，在第一次调用过程中，该函数会被覆盖为另一个按照合适方式执行的函数，这样任何对原函数的调用就不用再经过执行的分支了。</p>\\n<h2>解决问题</h2>\\n<p>在一个方法里面可能会涉及到一些兼容性的问题，不同的浏览器对应不同的方法，第一次我们遍历这些方法找到最合适的那个， 并将这个方法覆盖于遍历它的函数，这就是惰性函数即只遍历一次就找到最佳方案，下次再要找那个方法的时候就不用遍历了，提高了性能。</p>\\n<p>🌰 <strong>示例：常见的为 DOM 节点添加事件的函数</strong></p>\"}")
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
