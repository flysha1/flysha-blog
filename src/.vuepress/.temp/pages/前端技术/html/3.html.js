import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/html/3.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/html/3.html\",\"title\":\"3. HTML 常见元素\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2017-12-01T00:00:00.000Z\",\"category\":[\"前端技术\"],\"tag\":[\"HTML\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"div（内容划分元素）\",\"slug\":\"div-内容划分元素\",\"link\":\"#div-内容划分元素\",\"children\":[]}],\"readingTime\":{\"minutes\":0.52,\"words\":155},\"filePathRelative\":\"前端技术/html/3.md\",\"localizedDate\":\"2017年12月1日\",\"excerpt\":\"\\n<h2>div（内容划分元素）</h2>\\n<p><code>div</code> 元素 (或 HTML 文档分区元素) 是一个通用型的流内容容器，在不使用CSS的情况下，其对内容或布局没有任何影响。</p>\\n<p>作为一个“纯粹的”容器，<code>&lt;div&gt;</code> 元素在语义上不表示任何特定类型的内容。然而，其可以将内容分组，从而可以使用class或是id属性方便的定义内容的格式，也可以在一段文档中划分标记出使用另一种语言书写的内容</p>\\n\"}")
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
