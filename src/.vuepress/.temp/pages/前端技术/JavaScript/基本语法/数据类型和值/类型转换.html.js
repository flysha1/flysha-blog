import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/JavaScript/基本语法/数据类型和值/类型转换.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/JavaScript/%E5%9F%BA%E6%9C%AC%E8%AF%AD%E6%B3%95/%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%E5%92%8C%E5%80%BC/%E7%B1%BB%E5%9E%8B%E8%BD%AC%E6%8D%A2.html\",\"title\":\"类型转换\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":3,\"date\":\"2018-01-01T00:00:00.000Z\",\"category\":[\"前端技术\"],\"tag\":[\"JavaScript\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"基本规则\",\"slug\":\"基本规则\",\"link\":\"#基本规则\",\"children\":[{\"level\":3,\"title\":\"ToString\",\"slug\":\"tostring\",\"link\":\"#tostring\",\"children\":[]},{\"level\":3,\"title\":\"ToNumber\",\"slug\":\"tonumber\",\"link\":\"#tonumber\",\"children\":[]},{\"level\":3,\"title\":\"ToBoolean\",\"slug\":\"toboolean\",\"link\":\"#toboolean\",\"children\":[]},{\"level\":3,\"title\":\"ToPrimitive\",\"slug\":\"toprimitive\",\"link\":\"#toprimitive\",\"children\":[]}]},{\"level\":2,\"title\":\"显式类型转换\",\"slug\":\"显式类型转换\",\"link\":\"#显式类型转换\",\"children\":[]},{\"level\":2,\"title\":\"隐式类型转换\",\"slug\":\"隐式类型转换\",\"link\":\"#隐式类型转换\",\"children\":[{\"level\":3,\"title\":\"运行环境\",\"slug\":\"运行环境\",\"link\":\"#运行环境\",\"children\":[]},{\"level\":3,\"title\":\"运算符\",\"slug\":\"运算符\",\"link\":\"#运算符\",\"children\":[]}]},{\"level\":2,\"title\":\"JavaScript 原始类型转换表\",\"slug\":\"javascript-原始类型转换表\",\"link\":\"#javascript-原始类型转换表\",\"children\":[]},{\"level\":2,\"title\":\"经典试题\",\"slug\":\"经典试题\",\"link\":\"#经典试题\",\"children\":[]}],\"readingTime\":{\"minutes\":9.74,\"words\":2922},\"filePathRelative\":\"前端技术/JavaScript/基本语法/数据类型和值/类型转换.md\",\"localizedDate\":\"2018年1月1日\",\"excerpt\":\"\\n<p>JavaScript 作为一种弱类型的语言，不用像 C 语言那样要定义好数据类型，因为允许变量类型的 <strong>隐式类型转换</strong> 和允许 <strong>强制类型转换</strong>。我们在定义一个变量的时候，只需一个 <code>var</code>、<code>let</code>、<code>const</code> 搞定，不用担心数据的类型。</p>\\n<h2>基本规则</h2>\\n<p>从 ECMAScript Standard 中了解 <code>Number</code>、<code>String</code>、<code>Boolean</code>、<code>Array</code> 和 <code>Object</code> 之间的相互转换会更加直观。</p>\"}")
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
