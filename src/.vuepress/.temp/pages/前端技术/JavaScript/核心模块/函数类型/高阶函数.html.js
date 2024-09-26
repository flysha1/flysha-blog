import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/JavaScript/核心模块/函数类型/高阶函数.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/JavaScript/%E6%A0%B8%E5%BF%83%E6%A8%A1%E5%9D%97/%E5%87%BD%E6%95%B0%E7%B1%BB%E5%9E%8B/%E9%AB%98%E9%98%B6%E5%87%BD%E6%95%B0.html\",\"title\":\"高阶函数\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":6,\"date\":\"2018-01-01T00:00:00.000Z\",\"category\":[\"前端技术\"],\"tag\":[\"JavaScript\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"作为参数传递\",\"slug\":\"作为参数传递\",\"link\":\"#作为参数传递\",\"children\":[{\"level\":3,\"title\":\"回调函数\",\"slug\":\"回调函数\",\"link\":\"#回调函数\",\"children\":[]},{\"level\":3,\"title\":\"数组排序\",\"slug\":\"数组排序\",\"link\":\"#数组排序\",\"children\":[]}]},{\"level\":2,\"title\":\"作为返回值输出\",\"slug\":\"作为返回值输出\",\"link\":\"#作为返回值输出\",\"children\":[]},{\"level\":2,\"title\":\"AOP 面向切面编程\",\"slug\":\"aop-面向切面编程\",\"link\":\"#aop-面向切面编程\",\"children\":[]},{\"level\":2,\"title\":\"其他应用\",\"slug\":\"其他应用\",\"link\":\"#其他应用\",\"children\":[]}],\"readingTime\":{\"minutes\":5.55,\"words\":1666},\"filePathRelative\":\"前端技术/JavaScript/核心模块/函数类型/高阶函数.md\",\"localizedDate\":\"2018年1月1日\",\"excerpt\":\"\\n<p><strong>高阶函数</strong> 指操作函数的函数，一般地，有以下两种情况：</p>\\n<ol>\\n<li>函数可以作为参数被传递</li>\\n<li>函数可以作为返回值输出</li>\\n</ol>\\n<p>JavaScript 中的函数显然满足高阶函数的条件，在实际开发中，无论是将函数当作参数传递，还是让函数的执行结果返回另外一个函数，这两种情形都有很多应用场景。</p>\\n<h2>作为参数传递</h2>\\n<p>把函数当作参数传递，代表可以抽离出一部分容易变化的业务逻辑，把这部分业务逻辑放在函数参数中，这样一来可以分离业务代码中变化与不变的部分。</p>\\n<h3>回调函数</h3>\\n<p>其中一个常见的应用场景就是回调函数。</p>\"}")
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
