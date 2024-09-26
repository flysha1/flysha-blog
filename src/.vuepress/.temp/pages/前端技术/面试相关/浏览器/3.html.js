import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/面试相关/浏览器/3.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/%E9%9D%A2%E8%AF%95%E7%9B%B8%E5%85%B3/%E6%B5%8F%E8%A7%88%E5%99%A8/3.html\",\"title\":\"3. 协商缓存和强缓存\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2018-01-01T00:00:00.000Z\",\"category\":[\"前端技术\"],\"tag\":[\"浏览器\",\"面经\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"1. 强缓存\",\"slug\":\"_1-强缓存\",\"link\":\"#_1-强缓存\",\"children\":[]},{\"level\":2,\"title\":\"2. 协商缓存\",\"slug\":\"_2-协商缓存\",\"link\":\"#_2-协商缓存\",\"children\":[]},{\"level\":2,\"title\":\"3. 区别\",\"slug\":\"_3-区别\",\"link\":\"#_3-区别\",\"children\":[]},{\"level\":2,\"title\":\"4. 为什么需要浏览器缓存\",\"slug\":\"_4-为什么需要浏览器缓存\",\"link\":\"#_4-为什么需要浏览器缓存\",\"children\":[]}],\"readingTime\":{\"minutes\":2.94,\"words\":882},\"filePathRelative\":\"前端技术/面试相关/浏览器/3.md\",\"localizedDate\":\"2018年1月1日\",\"excerpt\":\"\\n<h2>1. 强缓存</h2>\\n<p>使用强缓存策略时，如果缓存资源有效，浏览器会<strong>从本地读取缓存资源并返回200</strong>，不必再向服务器发起请求。强缓存策略可以通过两种方式来设置，分别是 <code>http</code> 头信息中的 <code>Expires</code> 属性和 <code>Cache-Control</code> 属性。</p>\\n<p><strong>Expires</strong> 指定资源的过期时间。在过期时间以内，改资源可以被缓存使用，不需要向浏览器发送请求。这个时间依赖于服务器时间，会存在服务器时间和客户端时间不一致。</p>\\n<p><strong>Cache-Control属性</strong>：</p>\"}")
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
