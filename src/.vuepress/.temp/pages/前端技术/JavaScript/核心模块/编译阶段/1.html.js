import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/JavaScript/核心模块/编译阶段/1.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/JavaScript/%E6%A0%B8%E5%BF%83%E6%A8%A1%E5%9D%97/%E7%BC%96%E8%AF%91%E9%98%B6%E6%AE%B5/1.html\",\"title\":\"编译阶段\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":1,\"date\":\"2018-01-01T00:00:00.000Z\",\"category\":[\"前端技术\"],\"tag\":[\"JavaScript\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"编译原理\",\"slug\":\"编译原理\",\"link\":\"#编译原理\",\"children\":[{\"level\":3,\"title\":\"分词和词法分析\",\"slug\":\"分词和词法分析\",\"link\":\"#分词和词法分析\",\"children\":[]},{\"level\":3,\"title\":\"解析和语法分析\",\"slug\":\"解析和语法分析\",\"link\":\"#解析和语法分析\",\"children\":[]},{\"level\":3,\"title\":\"代码生成\",\"slug\":\"代码生成\",\"link\":\"#代码生成\",\"children\":[]}]},{\"level\":2,\"title\":\"编译过程\",\"slug\":\"编译过程\",\"link\":\"#编译过程\",\"children\":[{\"level\":3,\"title\":\"编译过程详解\",\"slug\":\"编译过程详解\",\"link\":\"#编译过程详解\",\"children\":[]}]}],\"readingTime\":{\"minutes\":6.61,\"words\":1983},\"filePathRelative\":\"前端技术/JavaScript/核心模块/编译阶段/1.md\",\"localizedDate\":\"2018年1月1日\",\"excerpt\":\"\\n<h2>编译原理</h2>\\n<p>JavaScript 是一门编译语言。与传统的编译语言不同的是，JavaScript 不是提前编译的，编译结果也不能在分布式系统中进行移植。\\n在传统编译语言的流程中，程序中的一段源代码在执行之前会经历三个步骤，统称为 <strong>编译</strong>。</p>\\n<ol>\\n<li>分词 / 词法分析</li>\\n<li>解析 / 语法分析</li>\\n<li>代码生成</li>\\n</ol>\\n<h3>分词和词法分析</h3>\\n<p><strong>词法分析</strong>（Tokenizing / Lexing） 这个过程会将由字符组成的字符串分解成有意义的代码块（对编程语言来说），这些代码块被称为 <strong>词法单元</strong>（Token）。</p>\"}")
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
