import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/问题解决/项目启动报错.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/%E9%97%AE%E9%A2%98%E8%A7%A3%E5%86%B3/%E9%A1%B9%E7%9B%AE%E5%90%AF%E5%8A%A8%E6%8A%A5%E9%94%99.html\",\"title\":\"项目启动报错\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":1,\"date\":\"2020-01-01T00:00:00.000Z\",\"category\":[\"前端技术\"],\"tag\":[\"Node.js\"],\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.24,\"words\":72},\"filePathRelative\":\"前端技术/问题解决/项目启动报错.md\",\"localizedDate\":\"2020年1月1日\",\"excerpt\":\"\\n<ol>\\n<li>在启动vue项目时出现错误 <code>error:0308010C:digital envelope routines::unsupported</code></li>\\n</ol>\\n<p>解决方式:</p>\\n<p>在配置文件 <code>package.json</code> 中配置</p>\\n<div class=\\\"language-json line-numbers-mode\\\" data-highlighter=\\\"shiki\\\" data-ext=\\\"json\\\" data-title=\\\"json\\\" style=\\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\\"><pre class=\\\"shiki shiki-themes one-light one-dark-pro vp-code\\\"><code><span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">scripts:{</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">    \\\"serve\\\"</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">: </span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">\\\"set NODE_OPTIONS=--openssl-legacy-provider &amp;&amp; vue-cli-service serve\\\"</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">,</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">    \\\"build\\\"</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">: </span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\">\\\"set NODE_OPTIONS=--openssl-legacy-provider &amp;&amp; vue-cli-service build\\\"</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">,</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">}</span></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\"}")
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
