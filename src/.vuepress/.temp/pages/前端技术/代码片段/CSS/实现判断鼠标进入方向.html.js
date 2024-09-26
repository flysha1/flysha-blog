import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/代码片段/CSS/实现判断鼠标进入方向.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/%E4%BB%A3%E7%A0%81%E7%89%87%E6%AE%B5/CSS/%E5%AE%9E%E7%8E%B0%E5%88%A4%E6%96%AD%E9%BC%A0%E6%A0%87%E8%BF%9B%E5%85%A5%E6%96%B9%E5%90%91.html\",\"title\":\"实现判断鼠标进入方向\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2022-12-19T00:00:00.000Z\",\"order\":2,\"category\":[\"前端技术\"],\"tag\":[\"CSS\",\"代码片段\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"1. 纯css实现\",\"slug\":\"_1-纯css实现\",\"link\":\"#_1-纯css实现\",\"children\":[{\"level\":3,\"title\":\"Clip-path\",\"slug\":\"clip-path\",\"link\":\"#clip-path\",\"children\":[]},{\"level\":3,\"title\":\"Transform\",\"slug\":\"transform\",\"link\":\"#transform\",\"children\":[]}]},{\"level\":2,\"title\":\"2. JS实现\",\"slug\":\"_2-js实现\",\"link\":\"#_2-js实现\",\"children\":[{\"level\":3,\"title\":\"判断方向算法\",\"slug\":\"判断方向算法\",\"link\":\"#判断方向算法\",\"children\":[]},{\"level\":3,\"title\":\"移入方向判断\",\"slug\":\"移入方向判断\",\"link\":\"#移入方向判断\",\"children\":[]},{\"level\":3,\"title\":\"移出方向判断\",\"slug\":\"移出方向判断\",\"link\":\"#移出方向判断\",\"children\":[]}]},{\"level\":2,\"title\":\"3. 总结\",\"slug\":\"_3-总结\",\"link\":\"#_3-总结\",\"children\":[]}],\"readingTime\":{\"minutes\":6.25,\"words\":1875},\"filePathRelative\":\"前端技术/代码片段/CSS/实现判断鼠标进入方向.md\",\"localizedDate\":\"2022年12月19日\",\"excerpt\":\"\\n<h2>1. 纯css实现</h2>\\n<p>实现纯 CSS 判断鼠标进入方向，主要是先通过将 DIV 以对角线切割为 4 个部分，然后即可为这 4 个部分写入:hover 选择器执行不同方向的动画。</p>\\n<figure><img src=\\\"https://s2.loli.net/2021/12/04/Afdp2u1U4S6oVWL.png\\\" alt=\\\"\\\" tabindex=\\\"0\\\" loading=\\\"lazy\\\"><figcaption></figcaption></figure>\\n<h3>Clip-path</h3>\\n<p>使用 CSS3 的 clip-path 属性定向裁剪区域</p>\\n\"}")
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
