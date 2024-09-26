import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/JavaScript/基本语法/运算符/字符串运算符.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/JavaScript/%E5%9F%BA%E6%9C%AC%E8%AF%AD%E6%B3%95/%E8%BF%90%E7%AE%97%E7%AC%A6/%E5%AD%97%E7%AC%A6%E4%B8%B2%E8%BF%90%E7%AE%97%E7%AC%A6.html\",\"title\":\"字符串运算符\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":6,\"date\":\"2018-01-01T00:00:00.000Z\",\"category\":[\"前端技术\"],\"tag\":[\"JavaScript\"],\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.42,\"words\":125},\"filePathRelative\":\"前端技术/JavaScript/基本语法/运算符/字符串运算符.md\",\"localizedDate\":\"2018年1月1日\",\"excerpt\":\"\\n<p>字符串运算符（用 <code>+</code> 加号表示）用于把两个字符串值相连接。操作值位于运算符两侧，运算返回另一个字符串，它是两个操作数串的结合。</p>\\n<div class=\\\"language-js line-numbers-mode\\\" data-highlighter=\\\"shiki\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\" style=\\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\\"><pre class=\\\"shiki shiki-themes one-light one-dark-pro vp-code\\\"><code><span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">var</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> foo</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> =</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\"> 'Hello'</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> +</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\"> ' '</span><span style=\\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\\"> +</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\"> 'world!'</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">;</span></span>\\n<span class=\\\"line\\\"></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E5C07B\\\">console</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">.</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\">log</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">(</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">foo</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">);</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\\">// 'Hello world!'</span></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\"}")
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
