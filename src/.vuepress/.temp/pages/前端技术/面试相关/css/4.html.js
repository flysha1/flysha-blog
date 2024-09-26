import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/面试相关/css/4.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/%E9%9D%A2%E8%AF%95%E7%9B%B8%E5%85%B3/css/4.html\",\"title\":\"4. CSS选择器的权重和优先级\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2018-01-01T00:00:00.000Z\",\"category\":[\"前端技术\",\"面经\"],\"tag\":[\"CSS\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"选择器权重\",\"slug\":\"选择器权重\",\"link\":\"#选择器权重\",\"children\":[]},{\"level\":2,\"title\":\"优先级规则\",\"slug\":\"优先级规则\",\"link\":\"#优先级规则\",\"children\":[]}],\"readingTime\":{\"minutes\":1.1,\"words\":331},\"filePathRelative\":\"前端技术/面试相关/css/4.md\",\"localizedDate\":\"2018年1月1日\",\"excerpt\":\"\\n<h2>选择器权重</h2>\\n<p>当多个样式规则应用于同一个元素时，浏览器需要决定哪个样式规则应该被优先应用。这就是选择器权重的概念</p>\\n<ul>\\n<li>ID选择器: 权重为100</li>\\n<li>类选择器: 权重为10</li>\\n<li>属性选择器: 权重为10</li>\\n<li>伪类选择器: 权重为10</li>\\n<li>标签选择器: 权重为1</li>\\n<li>伪元素选择器: 权重为1</li>\\n<li>兄弟选择器: 权重为0</li>\\n<li>子选择器: 权重为0</li>\\n<li>后代选择器: 权重为0</li>\\n<li>通配符选择器: 权重为0</li>\\n</ul>\\n<h2>优先级规则</h2>\"}")
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
