import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/JavaScript/内置对象/Object/Object.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/Object/Object.html\",\"title\":\"Object\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":1,\"date\":\"2018-01-03T00:00:00.000Z\",\"category\":[\"前端技术\"],\"tag\":[\"JavaScript\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"语法\",\"slug\":\"语法\",\"link\":\"#语法\",\"children\":[]},{\"level\":2,\"title\":\"构造函数\",\"slug\":\"构造函数\",\"link\":\"#构造函数\",\"children\":[{\"level\":3,\"title\":\"属性\",\"slug\":\"属性\",\"link\":\"#属性\",\"children\":[]},{\"level\":3,\"title\":\"方法\",\"slug\":\"方法\",\"link\":\"#方法\",\"children\":[]}]},{\"level\":2,\"title\":\"原型对象\",\"slug\":\"原型对象\",\"link\":\"#原型对象\",\"children\":[{\"level\":3,\"title\":\"属性\",\"slug\":\"属性-1\",\"link\":\"#属性-1\",\"children\":[]},{\"level\":3,\"title\":\"方法\",\"slug\":\"方法-1\",\"link\":\"#方法-1\",\"children\":[]}]},{\"level\":2,\"title\":\"示例\",\"slug\":\"示例\",\"link\":\"#示例\",\"children\":[]}],\"readingTime\":{\"minutes\":3.71,\"words\":1113},\"filePathRelative\":\"前端技术/JavaScript/内置对象/Object/Object.md\",\"localizedDate\":\"2018年1月3日\",\"excerpt\":\"\\n<p>JavaScript 中的 <code>Object</code> 对象，是 JavaScript 中所有对象的基类，也就是说 JavaScript 中的所有对象都是由 <code>Object</code> 对象衍生的。<code>Object</code> 对象主要用于将任意数据封装成对象形式。</p>\\n<p>对象也可看做是属性的无序集合，每个属性都是一个名值对。<strong>属性名是字符串，因此我们可以把对象看成是从字符串到值的映射</strong>。</p>\\n<h2>语法</h2>\\n<ul>\\n<li>构造函数</li>\\n</ul>\\n<div class=\\\"language-js line-numbers-mode\\\" data-highlighter=\\\"shiki\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\" style=\\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\\"><pre class=\\\"shiki shiki-themes one-light one-dark-pro vp-code\\\"><code><span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">new</span><span style=\\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\\"> Object</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">([</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#E06C75\\\">value</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">]);</span></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div></div></div>\"}")
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
