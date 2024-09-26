import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/面试相关/浏览器/8.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/%E9%9D%A2%E8%AF%95%E7%9B%B8%E5%85%B3/%E6%B5%8F%E8%A7%88%E5%99%A8/8.html\",\"title\":\"8. 输入URL到显示页面的全过程\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2018-01-01T00:00:00.000Z\",\"category\":[\"前端技术\"],\"tag\":[\"浏览器\",\"面经\"],\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":3.83,\"words\":1149},\"filePathRelative\":\"前端技术/面试相关/浏览器/8.md\",\"localizedDate\":\"2018年1月1日\",\"excerpt\":\"\\n<ol>\\n<li>在浏览器地址栏输入URL</li>\\n<li>浏览器查看缓存，如果请求资源在缓存中并且新鲜，跳转到转码步骤\\n<ul>\\n<li>如果资源未缓存，发起新请求</li>\\n<li>如果已缓存，检验是否足够新鲜，足够新鲜直接提供给客户端，否则与服务器进行验证。</li>\\n<li>检验新鲜通常有两个HTTP头进行控制 <code>Expires</code> 和 <code>Cache-Control</code>：\\n<ul>\\n<li>HTTP1.0提供 <code>Expires</code>，值为⼀个绝对时间表示缓存新鲜日期</li>\\n<li>HTTP1.1增加了 <code>Cache-Control: max-age=time</code>，值为以秒为单位的最⼤新鲜时间</li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n<li>浏览器解析URL获取协议，主机，端口，path</li>\\n<li>浏览器组装⼀个HTTP（GET）请求报文</li>\\n<li>浏览器获取主机 ip 地址，过程如下：\\n<ul>\\n<li>浏览器缓存</li>\\n<li>本机缓存</li>\\n<li>hosts文件</li>\\n<li>路由器缓存</li>\\n<li>ISP DNS缓存</li>\\n<li>DNS递归查询（可能存在负载均衡导致每次IP不⼀样）</li>\\n</ul>\\n</li>\\n<li>打开⼀个 <code>socket</code> 与目标IP地址，端口建立TCP链接（三次握手）</li>\\n<li>TCP链接建立后发送HTTP请求</li>\\n<li>服务器接受请求并解析，将请求转发到服务程序，如虚拟主机使用HTTP Host头部判断请求的服务程序</li>\\n<li>服务器检查HTTP请求头是否包含缓存验证信息，如果验证缓存新鲜，返回304等对应状态码</li>\\n<li>处理程序读取完整请求并准备HTTP响应，可能需要查询数据库等操作</li>\\n<li>服务器将响应报文通过TCP连接发送回浏览器</li>\\n<li>浏览器接收HTTP响应，然后根据情况选择关闭TCP连接或者保留重用，关闭TCP连接的四次握手</li>\\n<li>浏览器检查响应状态码：是否为1XX，3XX， 4XX， 5XX，这些情况处理与2XX不同</li>\\n<li>如果资源可缓存，进行缓存</li>\\n<li>对响应进行解码（例如gzip压缩）</li>\\n</ol>\"}")
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
