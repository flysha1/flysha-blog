import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/面试相关/css/1.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/%E9%9D%A2%E8%AF%95%E7%9B%B8%E5%85%B3/css/1.html\",\"title\":\"1. BFC和浮动清除\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2018-01-01T00:00:00.000Z\",\"order\":1,\"category\":[\"前端技术\",\"面经\"],\"tag\":[\"CSS\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"1. 什么是BFC\",\"slug\":\"_1-什么是bfc\",\"link\":\"#_1-什么是bfc\",\"children\":[]},{\"level\":2,\"title\":\"2.浮动和清除浮动\",\"slug\":\"_2-浮动和清除浮动\",\"link\":\"#_2-浮动和清除浮动\",\"children\":[]}],\"readingTime\":{\"minutes\":1.58,\"words\":475},\"filePathRelative\":\"前端技术/面试相关/css/1.md\",\"localizedDate\":\"2018年1月1日\",\"excerpt\":\"\\n<h2>1. 什么是BFC</h2>\\n<p>\\\"BFC容器\\\"通常是指\\\"块级格式化上下文容器\\\"（Block Formatting Context Container）。块级格式化上下文（BFC）是在CSS中用来管理和控制元素在页面上布局和排列的一种机制。BFC容器是一种具有特定规则的HTML元素或CSS属性，它们会创建一个独立的上下文，影响其内部元素的布局和排列方式。BFC容器是CSS布局中的一个重要概念，可以帮助开发人员更精确地控制元素的布局和排列</p>\\n<p>BFC的作用：</p>\\n<ol>\\n<li>\\n<p>清除浮动：BFC容器可以用来清除浮动元素的影响，确保父元素包含浮动子元素的高度，从而避免出现高度塌陷问题。这是BFC最常见的应用之一，特别是在创建多列布局或类似网格的布局时非常有用。</p>\\n</li>\\n<li>\\n<p>防止外边距重叠：在同一个BFC容器内的相邻块级元素的外边距不会发生重叠，这有助于更精确地控制元素之间的间距。这对于垂直外边距塌陷问题的解决非常有帮助。</p>\\n</li>\\n</ol>\"}")
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
