import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/JavaScript/核心模块/模块化/模块导入导出复合写法.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/JavaScript/%E6%A0%B8%E5%BF%83%E6%A8%A1%E5%9D%97/%E6%A8%A1%E5%9D%97%E5%8C%96/%E6%A8%A1%E5%9D%97%E5%AF%BC%E5%85%A5%E5%AF%BC%E5%87%BA%E5%A4%8D%E5%90%88%E5%86%99%E6%B3%95.html\",\"title\":\"模块导入/导出的复合写法\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":4,\"date\":\"2018-01-01T00:00:00.000Z\",\"category\":[\"前端技术\"],\"tag\":[\"JavaScript\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"模块整体转发\",\"slug\":\"模块整体转发\",\"link\":\"#模块整体转发\",\"children\":[]},{\"level\":2,\"title\":\"模块部分接口转发\",\"slug\":\"模块部分接口转发\",\"link\":\"#模块部分接口转发\",\"children\":[]},{\"level\":2,\"title\":\"模块部分重命名转发\",\"slug\":\"模块部分重命名转发\",\"link\":\"#模块部分重命名转发\",\"children\":[]},{\"level\":2,\"title\":\"默认模块转发\",\"slug\":\"默认模块转发\",\"link\":\"#默认模块转发\",\"children\":[]},{\"level\":2,\"title\":\"命名模块改默认模块\",\"slug\":\"命名模块改默认模块\",\"link\":\"#命名模块改默认模块\",\"children\":[]},{\"level\":2,\"title\":\"默认模块改命名模块\",\"slug\":\"默认模块改命名模块\",\"link\":\"#默认模块改命名模块\",\"children\":[]},{\"level\":2,\"title\":\"无对应写法场景\",\"slug\":\"无对应写法场景\",\"link\":\"#无对应写法场景\",\"children\":[]}],\"readingTime\":{\"minutes\":1.32,\"words\":395},\"filePathRelative\":\"前端技术/JavaScript/核心模块/模块化/模块导入导出复合写法.md\",\"localizedDate\":\"2018年1月1日\",\"excerpt\":\"\\n<p>如果在一个模块之中，先输入后输出同一个模块，<code>import</code> 语句可以与 `export 语句写在一起。</p>\\n<h2>模块整体转发</h2>\\n<p>从 <code>module</code> 模块整体导入后，直接完整导出。</p>\\n<div class=\\\"language-js line-numbers-mode\\\" data-highlighter=\\\"shiki\\\" data-ext=\\\"js\\\" data-title=\\\"js\\\" style=\\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\\"><pre class=\\\"shiki shiki-themes one-light one-dark-pro vp-code\\\"><code><span class=\\\"line\\\"><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\">export</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#D19A66\\\"> *</span><span style=\\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\\"> from</span><span style=\\\"--shiki-light:#50A14F;--shiki-dark:#98C379\\\"> 'module'</span></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div></div></div>\"}")
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
