import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/JavaScript/基本语法/语句和声明/块语句.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/JavaScript/%E5%9F%BA%E6%9C%AC%E8%AF%AD%E6%B3%95/%E8%AF%AD%E5%8F%A5%E5%92%8C%E5%A3%B0%E6%98%8E/%E5%9D%97%E8%AF%AD%E5%8F%A5.html\",\"title\":\"块语句\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":1,\"date\":\"2018-01-02T00:00:00.000Z\",\"category\":[\"前端技术\"],\"tag\":[\"JavaScript\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"块级作用域\",\"slug\":\"块级作用域\",\"link\":\"#块级作用域\",\"children\":[{\"level\":3,\"title\":\"var\",\"slug\":\"var\",\"link\":\"#var\",\"children\":[]},{\"level\":3,\"title\":\"let 和 const\",\"slug\":\"let-和-const\",\"link\":\"#let-和-const\",\"children\":[]},{\"level\":3,\"title\":\"function\",\"slug\":\"function\",\"link\":\"#function\",\"children\":[]}]}],\"readingTime\":{\"minutes\":1.93,\"words\":578},\"filePathRelative\":\"前端技术/JavaScript/基本语法/语句和声明/块语句.md\",\"localizedDate\":\"2018年1月2日\",\"excerpt\":\"\\n<p>块语句（Block）用于组合零个或多个语句。该块由一对大括号 {} 界定，块内形成块级作用域，<strong>块作用域内定义的变量将在离开块作用域后立即被回收</strong>。</p>\\n<div class=\\\"language-js line-numbers-mode\\\" data-highlighter=\\\"shiki\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\" style=\\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\\"><pre class=\\\"shiki shiki-themes one-light one-dark-pro vp-code\\\"><code><span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">{</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">  StatementList</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">;</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">}</span></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\"}")
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
