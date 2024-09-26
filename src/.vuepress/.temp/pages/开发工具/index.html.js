import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/开发工具/index.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/\",\"title\":\"开发工具\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"开发工具\",\"article\":false,\"feed\":false,\"sitemap\":false,\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":1},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
