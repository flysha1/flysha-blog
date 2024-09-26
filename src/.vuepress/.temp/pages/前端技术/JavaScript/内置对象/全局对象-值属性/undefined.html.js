import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/JavaScript/内置对象/全局对象-值属性/undefined.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/%E5%85%A8%E5%B1%80%E5%AF%B9%E8%B1%A1-%E5%80%BC%E5%B1%9E%E6%80%A7/undefined.html\",\"title\":\"undefined\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2018-01-03T00:00:00.000Z\",\"category\":[\"前端技术\"],\"tag\":[\"JavaScript\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"说明\",\"slug\":\"说明\",\"link\":\"#说明\",\"children\":[]}],\"readingTime\":{\"minutes\":0.4,\"words\":120},\"filePathRelative\":\"前端技术/JavaScript/内置对象/全局对象-值属性/undefined.md\",\"localizedDate\":\"2018年1月3日\",\"excerpt\":\"\\n<p><code>undefined</code> 属性是一个特殊值。如果已声明了一个变量但还未进行初始化，则其值为 <code>undefined</code>。</p>\\n<p>该属性为 <code>Global</code> 对象的一个只读属性(准确地说，是一个常量)。所有主流浏览器均支持该属性。</p>\\n<h2>说明</h2>\\n<p>如果一个变量未被初始化赋值，则其值为 <code>undefined</code>。如果一个函数没有返回值，则其返回值默认为 <code>undefined</code>。</p>\\n\"}")
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
