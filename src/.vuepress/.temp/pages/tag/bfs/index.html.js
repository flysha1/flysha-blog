import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/tag/bfs/index.html.vue"
const data = JSON.parse("{\"path\":\"/tag/bfs/\",\"title\":\"标签: BFS\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"标签: BFS\",\"dir\":{\"index\":false},\"index\":false,\"feed\":false,\"sitemap\":false,\"blog\":{\"type\":\"category\",\"name\":\"BFS\",\"key\":\"tag\"},\"layout\":\"BlogCategory\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
