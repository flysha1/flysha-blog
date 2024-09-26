import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/面试相关/浏览器/6.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/%E9%9D%A2%E8%AF%95%E7%9B%B8%E5%85%B3/%E6%B5%8F%E8%A7%88%E5%99%A8/6.html\",\"title\":\"6. 跨域问题\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2018-01-01T00:00:00.000Z\",\"category\":[\"前端技术\"],\"tag\":[\"浏览器\",\"面经\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"同源策略\",\"slug\":\"同源策略\",\"link\":\"#同源策略\",\"children\":[]},{\"level\":2,\"title\":\"如何解决跨域问题\",\"slug\":\"如何解决跨域问题\",\"link\":\"#如何解决跨域问题\",\"children\":[]}],\"readingTime\":{\"minutes\":0.42,\"words\":127},\"filePathRelative\":\"前端技术/面试相关/浏览器/6.md\",\"localizedDate\":\"2018年1月1日\",\"excerpt\":\"\\n<h2>同源策略</h2>\\n<p>跨域问题其实就是浏览器的同源策略造成的。 同源指的是：协议、端口号、域名必须一致。</p>\\n<h2>如何解决跨域问题</h2>\\n<ul>\\n<li>\\n<p>CORS：服务器开启跨域资源共享</p>\\n</li>\\n<li>\\n<p>JSONP：利用 <code>&lt;script&gt;</code> 标签不存在跨域限制，只支持 <code>GET</code> 请求，且不安全。</p>\\n</li>\\n<li>\\n<p>nginx 代理跨域</p>\\n</li>\\n<li>\\n<p>nodejs 中间件代理跨域，通过node开启一个代理服务器。</p>\\n</li>\\n</ul>\"}")
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
