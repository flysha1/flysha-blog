import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/面试相关/浏览器/5.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/%E9%9D%A2%E8%AF%95%E7%9B%B8%E5%85%B3/%E6%B5%8F%E8%A7%88%E5%99%A8/5.html\",\"title\":\"5. Cookie、LocalStorage、SessionStorage\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2018-01-01T00:00:00.000Z\",\"category\":[\"前端技术\"],\"tag\":[\"浏览器\",\"面经\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"Cookie\",\"slug\":\"cookie\",\"link\":\"#cookie\",\"children\":[]},{\"level\":2,\"title\":\"SessionStorage\",\"slug\":\"sessionstorage\",\"link\":\"#sessionstorage\",\"children\":[]},{\"level\":2,\"title\":\"LocalStorage\",\"slug\":\"localstorage\",\"link\":\"#localstorage\",\"children\":[]}],\"readingTime\":{\"minutes\":0.4,\"words\":120},\"filePathRelative\":\"前端技术/面试相关/浏览器/5.md\",\"localizedDate\":\"2018年1月1日\",\"excerpt\":\"\\n<h2>Cookie</h2>\\n<ul>\\n<li>\\n<p>大小只有4kb</p>\\n</li>\\n<li>\\n<p>跨域不能共享</p>\\n</li>\\n<li>\\n<p>不安全，容易被劫持</p>\\n</li>\\n<li>\\n<p>只存在请求头中</p>\\n</li>\\n</ul>\\n<h2>SessionStorage</h2>\\n<ul>\\n<li>\\n<p>存储在内存中，体积相对较大</p>\\n</li>\\n<li>\\n<p>页面关闭，数据会消失</p>\\n</li>\\n<li>\\n<p>相对Cookie安全</p>\\n</li>\\n</ul>\\n<h2>LocalStorage</h2>\\n<ul>\\n<li>\\n<p>体积大，可以存储更多内容。</p>\\n</li>\\n<li>\\n<p>生命周期长，除非手动删除，不然会一直存在</p>\\n</li>\\n<li>\\n<p>存储在硬盘中，不会像Cookie一样被请求携带</p>\\n</li>\\n</ul>\"}")
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
