import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/JavaScript/基本语法/语句和声明/throw语句.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/JavaScript/%E5%9F%BA%E6%9C%AC%E8%AF%AD%E6%B3%95/%E8%AF%AD%E5%8F%A5%E5%92%8C%E5%A3%B0%E6%98%8E/throw%E8%AF%AD%E5%8F%A5.html\",\"title\":\"throw 语句\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":9,\"date\":\"2018-01-03T00:00:00.000Z\",\"category\":[\"前端技术\"],\"tag\":[\"JavaScript\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"语法\",\"slug\":\"语法\",\"link\":\"#语法\",\"children\":[]},{\"level\":2,\"title\":\"示例\",\"slug\":\"示例\",\"link\":\"#示例\",\"children\":[{\"level\":3,\"title\":\"抛出一个对象\",\"slug\":\"抛出一个对象\",\"link\":\"#抛出一个对象\",\"children\":[]}]}],\"readingTime\":{\"minutes\":1.02,\"words\":305},\"filePathRelative\":\"前端技术/JavaScript/基本语法/语句和声明/throw语句.md\",\"localizedDate\":\"2018年1月3日\",\"excerpt\":\"\\n<p><code>throw</code> 语句 用来抛出一个用户自定义的异常。当前函数的执行将被停止（ <code>throw</code> 之后的语句将不会执行），并且控制将被传递到调用堆栈中的第一个 <code>catch</code> 块。如果调用者函数中没有 <code>catch</code> 块，程序将会终止。</p>\\n<h2>语法</h2>\\n<div class=\\\"language-js line-numbers-mode\\\" data-highlighter=\\\"shiki\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\" style=\\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\\"><pre class=\\\"shiki shiki-themes one-light one-dark-pro vp-code\\\"><code><span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">throw</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\"> expression</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">;</span></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div></div></div>\"}")
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
