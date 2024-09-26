import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/JavaScript/OOP/理解对象/对象属性描述符.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/JavaScript/OOP/%E7%90%86%E8%A7%A3%E5%AF%B9%E8%B1%A1/%E5%AF%B9%E8%B1%A1%E5%B1%9E%E6%80%A7%E6%8F%8F%E8%BF%B0%E7%AC%A6.html\",\"title\":\"对象属性描述符\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":3,\"date\":\"2018-01-01T00:00:00.000Z\",\"category\":[\"前端技术\"],\"tag\":[\"JavaScript\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"数据属性\",\"slug\":\"数据属性\",\"link\":\"#数据属性\",\"children\":[{\"level\":3,\"title\":\"可写性\",\"slug\":\"可写性\",\"link\":\"#可写性\",\"children\":[]},{\"level\":3,\"title\":\"可配置性\",\"slug\":\"可配置性\",\"link\":\"#可配置性\",\"children\":[]},{\"level\":3,\"title\":\"可枚举性\",\"slug\":\"可枚举性\",\"link\":\"#可枚举性\",\"children\":[]}]},{\"level\":2,\"title\":\"访问器属性\",\"slug\":\"访问器属性\",\"link\":\"#访问器属性\",\"children\":[{\"level\":3,\"title\":\"Getter\",\"slug\":\"getter\",\"link\":\"#getter\",\"children\":[]},{\"level\":3,\"title\":\"Setter\",\"slug\":\"setter\",\"link\":\"#setter\",\"children\":[]}]}],\"readingTime\":{\"minutes\":4.28,\"words\":1284},\"filePathRelative\":\"前端技术/JavaScript/OOP/理解对象/对象属性描述符.md\",\"localizedDate\":\"2018年1月1日\",\"excerpt\":\"\\n<p>ECMA-262 第五版在定义只有内部才能使用的特性（Attribute）时，描述了属性（Property）的各种特征。这些特性是为了实现 JavaScript 引擎而存在的，因此在 JavaScript 中不能直接访问它们。为了表示特征是内部值，该规范把它们放在了两对儿方括号 <code>[[]]</code>中。</p>\\n<p>对象属性描述符的类型分为两种：<strong>数据属性</strong> 和 <strong>访问器属性</strong>。</p>\\n<h2>数据属性</h2>\\n<p>数据属性（Data Property）包含一个数据值的位置，在这个位置可以读取和写入值。数据属性共有 4 个特性。</p>\"}")
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
