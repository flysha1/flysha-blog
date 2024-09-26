export const siteData = JSON.parse("{\"base\":\"/blog/\",\"lang\":\"zh-CN\",\"title\":\"Flysha\",\"description\":\"Flysha's blog\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"favicon.ico\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}