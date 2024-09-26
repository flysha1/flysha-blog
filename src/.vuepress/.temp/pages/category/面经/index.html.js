import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/category/面经/index.html.vue"
const data = JSON.parse("{\"path\":\"/category/%E9%9D%A2%E7%BB%8F/\",\"title\":\"面经 分类\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"面经 分类\",\"dir\":{\"index\":false},\"index\":false,\"feed\":false,\"sitemap\":false,\"blog\":{\"type\":\"category\",\"name\":\"面经\",\"key\":\"category\"},\"layout\":\"BlogCategory\",\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0,\"words\":0},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
