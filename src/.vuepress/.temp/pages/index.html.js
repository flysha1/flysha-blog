import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"博客主页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"layout\":\"BlogHome\",\"icon\":\"home\",\"title\":\"博客主页\",\"heroImage\":\"/logo.svg\",\"bgImage\":\"/assets/images/R-C.jpg\",\"heroText\":\"Flysha的博客\",\"heroFullScreen\":true,\"tagline\":\"日暮苍山远，天寒白屋贫\",\"projects\":null,\"footer\":\"\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.58,\"words\":175},\"filePathRelative\":\"README.md\",\"excerpt\":\"\"}")
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
