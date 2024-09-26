import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/JavaScript/核心模块/模块化/模块导出.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/JavaScript/%E6%A0%B8%E5%BF%83%E6%A8%A1%E5%9D%97/%E6%A8%A1%E5%9D%97%E5%8C%96/%E6%A8%A1%E5%9D%97%E5%AF%BC%E5%87%BA.html\",\"title\":\"模块导出 export\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":3,\"date\":\"2018-01-01T00:00:00.000Z\",\"category\":[\"前端技术\"],\"tag\":[\"JavaScript\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"导出方式\",\"slug\":\"导出方式\",\"link\":\"#导出方式\",\"children\":[{\"level\":3,\"title\":\"命名导出\",\"slug\":\"命名导出\",\"link\":\"#命名导出\",\"children\":[]},{\"level\":3,\"title\":\"默认导出\",\"slug\":\"默认导出\",\"link\":\"#默认导出\",\"children\":[]}]},{\"level\":2,\"title\":\"特性规范\",\"slug\":\"特性规范\",\"link\":\"#特性规范\",\"children\":[{\"level\":3,\"title\":\"对应关系\",\"slug\":\"对应关系\",\"link\":\"#对应关系\",\"children\":[]},{\"level\":3,\"title\":\"模块顶层输出\",\"slug\":\"模块顶层输出\",\"link\":\"#模块顶层输出\",\"children\":[]}]}],\"readingTime\":{\"minutes\":2.57,\"words\":771},\"filePathRelative\":\"前端技术/JavaScript/核心模块/模块化/模块导出.md\",\"localizedDate\":\"2018年1月1日\",\"excerpt\":\"\\n<p><code>export</code> 命令用于规定模块的对外接口。</p>\\n<h2>导出方式</h2>\\n<p>ECMAScript 规范中的模块化方案提供了两种导出模块的方式：</p>\\n<ul>\\n<li>命名导出（Named Exports）</li>\\n<li>默认导出（Default Export）</li>\\n</ul>\\n<h3>命名导出</h3>\\n<p>在声明的变量前添加 <code>export</code> 关键字即可将相对应的变量输出。</p>\\n<p><strong>导出前声明的值</strong>：</p>\\n<p>这种写法能在脚本底部清晰看到所有输出模块，推荐。</p>\\n\"}")
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
