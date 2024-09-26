import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/JavaScript/核心模块/模块化/模块化.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/JavaScript/%E6%A0%B8%E5%BF%83%E6%A8%A1%E5%9D%97/%E6%A8%A1%E5%9D%97%E5%8C%96/%E6%A8%A1%E5%9D%97%E5%8C%96.html\",\"title\":\"模块化\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":1,\"date\":\"2018-01-01T00:00:00.000Z\",\"category\":[\"前端技术\"],\"tag\":[\"JavaScript\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"模块化趋势\",\"slug\":\"模块化趋势\",\"link\":\"#模块化趋势\",\"children\":[{\"level\":3,\"title\":\"痛点\",\"slug\":\"痛点\",\"link\":\"#痛点\",\"children\":[]},{\"level\":3,\"title\":\"优势\",\"slug\":\"优势\",\"link\":\"#优势\",\"children\":[]}]},{\"level\":2,\"title\":\"模块化进化史\",\"slug\":\"模块化进化史\",\"link\":\"#模块化进化史\",\"children\":[{\"level\":3,\"title\":\"全局模式\",\"slug\":\"全局模式\",\"link\":\"#全局模式\",\"children\":[]},{\"level\":3,\"title\":\"单例模式\",\"slug\":\"单例模式\",\"link\":\"#单例模式\",\"children\":[]},{\"level\":3,\"title\":\"IIFE 模式\",\"slug\":\"iife-模式\",\"link\":\"#iife-模式\",\"children\":[]},{\"level\":3,\"title\":\"IIFE 模式增强\",\"slug\":\"iife-模式增强\",\"link\":\"#iife-模式增强\",\"children\":[]}]},{\"level\":2,\"title\":\"模块化方案\",\"slug\":\"模块化方案\",\"link\":\"#模块化方案\",\"children\":[{\"level\":3,\"title\":\"CommonJS\",\"slug\":\"commonjs\",\"link\":\"#commonjs\",\"children\":[]},{\"level\":3,\"title\":\"AMD\",\"slug\":\"amd\",\"link\":\"#amd\",\"children\":[]},{\"level\":3,\"title\":\"CMD\",\"slug\":\"cmd\",\"link\":\"#cmd\",\"children\":[]},{\"level\":3,\"title\":\"ES6 Module\",\"slug\":\"es6-module\",\"link\":\"#es6-module\",\"children\":[]}]},{\"level\":2,\"title\":\"严格模式\",\"slug\":\"严格模式\",\"link\":\"#严格模式\",\"children\":[]},{\"level\":2,\"title\":\"模块化与组合化\",\"slug\":\"模块化与组合化\",\"link\":\"#模块化与组合化\",\"children\":[]}],\"readingTime\":{\"minutes\":15.3,\"words\":4589},\"filePathRelative\":\"前端技术/JavaScript/核心模块/模块化/模块化.md\",\"localizedDate\":\"2018年1月1日\",\"excerpt\":\"\\n<p>🌽 <strong>模块化</strong>：把复杂的系统分解到多个模块以方便编码</p>\\n<p>在 <strong>模块化编程</strong> 中，开发者将程序分解成离散功能块（discrete chunks of functionality），并称之为模块。</p>\\n<p>将一个复杂的程序依据一定的规则（规范）封装成几个块（文件），并进行组合在一起\\n块的内部数据相对而言是私有的，只是向外部暴露一些接口与外部其他模块通信\\n每个模块具有比完整程序更小的接触面，使得校验、调试、测试轻而易举。 精心编写的模块提供了可靠的抽象和封装界限，使得应用程序中每个模块都具有条理清楚的设计和明确的目的。</p>\"}")
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
