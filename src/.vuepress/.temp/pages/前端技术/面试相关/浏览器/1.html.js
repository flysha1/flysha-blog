import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/面试相关/浏览器/1.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/%E9%9D%A2%E8%AF%95%E7%9B%B8%E5%85%B3/%E6%B5%8F%E8%A7%88%E5%99%A8/1.html\",\"title\":\"1. XSS和CSRF\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2018-01-01T00:00:00.000Z\",\"category\":[\"前端技术\"],\"tag\":[\"浏览器\",\"面经\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"1. XSS（跨站脚本攻击）\",\"slug\":\"_1-xss-跨站脚本攻击\",\"link\":\"#_1-xss-跨站脚本攻击\",\"children\":[]},{\"level\":2,\"title\":\"2. CSRF（跨站请求伪造）\",\"slug\":\"_2-csrf-跨站请求伪造\",\"link\":\"#_2-csrf-跨站请求伪造\",\"children\":[]}],\"readingTime\":{\"minutes\":1.02,\"words\":306},\"filePathRelative\":\"前端技术/面试相关/浏览器/1.md\",\"localizedDate\":\"2018年1月1日\",\"excerpt\":\"\\n<h2>1. XSS（跨站脚本攻击）</h2>\\n<p><code>XSS</code> 攻击指的是跨站脚本攻击，是一种 <strong>代码注入攻击</strong>。攻击者通过在网站注入恶意脚本，使之在用户的浏览器上运行，从而盗取用户的信息如 <code>cookie</code> 等。</p>\\n<p><strong>避免方式</strong>：</p>\\n<ul>\\n<li>\\n<p>服务端拼接后返回 HTML 是一种避免 XSS 攻击的常见方法，也就是 SSR（Server-Side Rendering，服务端渲染），这种方式可以在服务端进行输入过滤和转义，从而避免恶意脚本的注入用服务端拼接后返回（不使用服务端渲染）</p>\\n</li>\\n<li>\\n<p>对一些敏感信息进行保护，比如 <code>cookie</code> 使用 <code>http-only</code>，使得脚本无法获取。</p>\\n</li>\\n<li>\\n<p>对用户输入的地方和变量都需要仔细检查长度和对 <code>”&lt;”,”&gt;”,”;”,”’”</code> 等字符做过滤</p>\\n</li>\\n</ul>\"}")
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
