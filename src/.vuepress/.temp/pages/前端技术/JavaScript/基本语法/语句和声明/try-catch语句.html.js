import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/JavaScript/基本语法/语句和声明/try-catch语句.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/JavaScript/%E5%9F%BA%E6%9C%AC%E8%AF%AD%E6%B3%95/%E8%AF%AD%E5%8F%A5%E5%92%8C%E5%A3%B0%E6%98%8E/try-catch%E8%AF%AD%E5%8F%A5.html\",\"title\":\"try-catch 语句\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":10,\"date\":\"2018-01-03T00:00:00.000Z\",\"category\":[\"前端技术\"],\"tag\":[\"JavaScript\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"catch\",\"slug\":\"catch\",\"link\":\"#catch\",\"children\":[]},{\"level\":2,\"title\":\"finally\",\"slug\":\"finally\",\"link\":\"#finally\",\"children\":[]},{\"level\":2,\"title\":\"嵌套捕获\",\"slug\":\"嵌套捕获\",\"link\":\"#嵌套捕获\",\"children\":[]},{\"level\":2,\"title\":\"异常标识符\",\"slug\":\"异常标识符\",\"link\":\"#异常标识符\",\"children\":[]}],\"readingTime\":{\"minutes\":2.9,\"words\":870},\"filePathRelative\":\"前端技术/JavaScript/基本语法/语句和声明/try-catch语句.md\",\"localizedDate\":\"2018年1月3日\",\"excerpt\":\"\\n<p><code>try...catch</code> 语句将能引发错误的代码放在 <code>try</code> 块中，并且对应一个响应，然后有异常被抛出。</p>\\n<p><code>try...catch</code> 语句包含了由一个或者多个语句组成的 <code>try</code> 块, 和至少一个 <code>catch</code> 子句或者一个 <code>finally</code> 子句的其中一个，或者两个兼有。</p>\\n<p>下面是三种形式的 <code>try</code> 声明：</p>\\n<ul>\\n<li><code>try...catch</code></li>\\n<li><code>try...finally</code></li>\\n<li><code>try...catch...finally</code></li>\\n</ul>\"}")
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
