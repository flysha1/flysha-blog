import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/JavaScript/基本语法/运算符/比较运算符.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/JavaScript/%E5%9F%BA%E6%9C%AC%E8%AF%AD%E6%B3%95/%E8%BF%90%E7%AE%97%E7%AC%A6/%E6%AF%94%E8%BE%83%E8%BF%90%E7%AE%97%E7%AC%A6.html\",\"title\":\"比较运算符\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":12,\"date\":\"2018-01-02T00:00:00.000Z\",\"category\":[\"前端技术\"],\"tag\":[\"JavaScript\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"关系运算符\",\"slug\":\"关系运算符\",\"link\":\"#关系运算符\",\"children\":[]},{\"level\":2,\"title\":\"等值运算符\",\"slug\":\"等值运算符\",\"link\":\"#等值运算符\",\"children\":[{\"level\":3,\"title\":\"抽象相等比较算法\",\"slug\":\"抽象相等比较算法\",\"link\":\"#抽象相等比较算法\",\"children\":[]},{\"level\":3,\"title\":\"引用数据类型间比较\",\"slug\":\"引用数据类型间比较\",\"link\":\"#引用数据类型间比较\",\"children\":[]}]}],\"readingTime\":{\"minutes\":4.3,\"words\":1291},\"filePathRelative\":\"前端技术/JavaScript/基本语法/运算符/比较运算符.md\",\"localizedDate\":\"2018年1月2日\",\"excerpt\":\"\\n<p>比较运算符比较它的操作数并返回一个基于表达式是否为 <code>true</code> 的逻辑值。</p>\\n<p>比较运算符分为 <strong>关系运算符</strong>（Relational Operators）和 <strong>等值运算符</strong>（Equality Operators）。</p>\\n<ul>\\n<li>操作数可以是数字，字符串，逻辑，对象值。</li>\\n<li>字符串比较是基于标准的字典顺序，使用 Unicode 值。</li>\\n<li>在多数情况下，如果两个操作数不是相同的类型， JavaScript 会尝试转换它们为恰当的类型来比较。这种行为通常发生在数字作为操作数的比较。</li>\\n<li>类型转换的例外是使用 <code>===</code> 和 <code>!==</code> 操作符，它们会执行严格的相等和不相等比较。这些运算符不会在检查相等之前转换操作数的类型。下面的表格描述了该示例代码中的各比较运算符。</li>\\n</ul>\"}")
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
