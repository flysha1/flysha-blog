import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/浏览器/3.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/%E6%B5%8F%E8%A7%88%E5%99%A8/3.html\",\"title\":\"3. 浏览器的工作原理\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2017-12-01T00:00:00.000Z\",\"category\":[\"前端技术\"],\"tag\":[\"浏览器\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"1. 解析URL\",\"slug\":\"_1-解析url\",\"link\":\"#_1-解析url\",\"children\":[]},{\"level\":2,\"title\":\"2. 检查缓存\",\"slug\":\"_2-检查缓存\",\"link\":\"#_2-检查缓存\",\"children\":[]},{\"level\":2,\"title\":\"3. DNS解析\",\"slug\":\"_3-dns解析\",\"link\":\"#_3-dns解析\",\"children\":[]},{\"level\":2,\"title\":\"4. 建立TCP连接\",\"slug\":\"_4-建立tcp连接\",\"link\":\"#_4-建立tcp连接\",\"children\":[]},{\"level\":2,\"title\":\"5 发送HTTP请求\",\"slug\":\"_5-发送http请求\",\"link\":\"#_5-发送http请求\",\"children\":[]},{\"level\":2,\"title\":\"6. 服务器处理请求\",\"slug\":\"_6-服务器处理请求\",\"link\":\"#_6-服务器处理请求\",\"children\":[]},{\"level\":2,\"title\":\"7. 返回HTTP响应\",\"slug\":\"_7-返回http响应\",\"link\":\"#_7-返回http响应\",\"children\":[]},{\"level\":2,\"title\":\"8. 浏览器接受响应\",\"slug\":\"_8-浏览器接受响应\",\"link\":\"#_8-浏览器接受响应\",\"children\":[]},{\"level\":2,\"title\":\"9. 关闭TCP连接\",\"slug\":\"_9-关闭tcp连接\",\"link\":\"#_9-关闭tcp连接\",\"children\":[]},{\"level\":2,\"title\":\"10. 浏览器解析HTML\",\"slug\":\"_10-浏览器解析html\",\"link\":\"#_10-浏览器解析html\",\"children\":[]},{\"level\":2,\"title\":\"11. 浏览器布局渲染\",\"slug\":\"_11-浏览器布局渲染\",\"link\":\"#_11-浏览器布局渲染\",\"children\":[]}],\"readingTime\":{\"minutes\":8.9,\"words\":2669},\"filePathRelative\":\"前端技术/浏览器/3.md\",\"localizedDate\":\"2017年12月1日\",\"excerpt\":\"\\n<p><em><strong>浏览器输入URL后发生了什么？</strong></em></p>\\n<p>主要包括以下几个基本步骤：</p>\\n<ol>\\n<li>浏览器的地址栏输入URL并按下回车</li>\\n<li>浏览器查找当前URL是否存在缓存，并比较缓存是否过期</li>\\n<li>DNS解析URL对应的IP</li>\\n<li>根据IP建立TCP连接（三次握手）</li>\\n<li>发送HTTP请求</li>\\n<li>服务器处理请求</li>\\n<li>返回HTTP响应</li>\\n<li>浏览器接受HTTP响应</li>\\n<li>关闭TCP连接（四次挥手）</li>\\n<li>浏览器解析HTML</li>\\n<li>浏览器布局渲染</li>\\n</ol>\"}")
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
