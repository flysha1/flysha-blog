import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/JavaScript/OOP/理解对象/对象类型.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/JavaScript/OOP/%E7%90%86%E8%A7%A3%E5%AF%B9%E8%B1%A1/%E5%AF%B9%E8%B1%A1%E7%B1%BB%E5%9E%8B.html\",\"title\":\"对象类型\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":1,\"date\":\"2018-01-01T00:00:00.000Z\",\"category\":[\"前端技术\"],\"tag\":[\"JavaScript\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"对象创建\",\"slug\":\"对象创建\",\"link\":\"#对象创建\",\"children\":[{\"level\":3,\"title\":\"对象字面量\",\"slug\":\"对象字面量\",\"link\":\"#对象字面量\",\"children\":[]},{\"level\":3,\"title\":\"构造函数\",\"slug\":\"构造函数\",\"link\":\"#构造函数\",\"children\":[]},{\"level\":3,\"title\":\"Object.create\",\"slug\":\"object-create\",\"link\":\"#object-create\",\"children\":[]}]},{\"level\":2,\"title\":\"对象组成\",\"slug\":\"对象组成\",\"link\":\"#对象组成\",\"children\":[{\"level\":3,\"title\":\"键名\",\"slug\":\"键名\",\"link\":\"#键名\",\"children\":[]},{\"level\":3,\"title\":\"属性值\",\"slug\":\"属性值\",\"link\":\"#属性值\",\"children\":[]}]},{\"level\":2,\"title\":\"引用对象\",\"slug\":\"引用对象\",\"link\":\"#引用对象\",\"children\":[]}],\"readingTime\":{\"minutes\":4.04,\"words\":1211},\"filePathRelative\":\"前端技术/JavaScript/OOP/理解对象/对象类型.md\",\"localizedDate\":\"2018年1月1日\",\"excerpt\":\"\\n<p>JavaScript 的基本数据类型包括 <code>Undefined</code>、<code>Null</code>、<code>Boolean</code>、<code>String</code>、<code>Number</code> 和 <code>Object</code>，以及 ES6 新增的 <code>Symbol</code> 类型。</p>\\n<p>对象和其他基本类型值不同的是，对象是一种复合值：它可以将多个原始值或者其他对象聚合在一起，可通过键名访问这些值。</p>\\n<p>对象也可看作是 <strong>属性的无序集合</strong>，每个属性都是一个键值对。属性名是 <code>String</code> 类型或 <code>Symbol</code> 类型，因此我们可以把对象看成是从字符串到值的映射。</p>\"}")
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
