import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/JavaScript/基本语法/运算符/运算符优先级.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/JavaScript/%E5%9F%BA%E6%9C%AC%E8%AF%AD%E6%B3%95/%E8%BF%90%E7%AE%97%E7%AC%A6/%E8%BF%90%E7%AE%97%E7%AC%A6%E4%BC%98%E5%85%88%E7%BA%A7.html\",\"title\":\"运算符优先级\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":18,\"date\":\"2018-01-02T00:00:00.000Z\",\"category\":[\"前端技术\"],\"tag\":[\"JavaScript\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"结合性\",\"slug\":\"结合性\",\"link\":\"#结合性\",\"children\":[]},{\"level\":2,\"title\":\"汇总表\",\"slug\":\"汇总表\",\"link\":\"#汇总表\",\"children\":[]}],\"readingTime\":{\"minutes\":2.54,\"words\":763},\"filePathRelative\":\"前端技术/JavaScript/基本语法/运算符/运算符优先级.md\",\"localizedDate\":\"2018年1月2日\",\"excerpt\":\"\\n<p>运算符的优先级决定了表达式中运算执行的先后顺序，优先级高的运算符最先被执行。</p>\\n<h2>结合性</h2>\\n<p>结合性决定了拥有相同优先级的运算符的执行顺序。考虑下面这个表达式：</p>\\n<div class=\\\"language-js line-numbers-mode\\\" data-highlighter=\\\"shiki\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\" style=\\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\\"><pre class=\\\"shiki shiki-themes one-light one-dark-pro vp-code\\\"><code><span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">a</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#E5C07B\\\"> OP</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> b</span><span style=\\\"--shiki-light:#986801;--shiki-dark:#E5C07B\\\"> OP</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> c</span></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div></div></div>\"}")
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
