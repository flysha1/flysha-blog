import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/JavaScript/核心模块/函数调用/构造函数调用模式.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/JavaScript/%E6%A0%B8%E5%BF%83%E6%A8%A1%E5%9D%97/%E5%87%BD%E6%95%B0%E8%B0%83%E7%94%A8/%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E8%B0%83%E7%94%A8%E6%A8%A1%E5%BC%8F.html\",\"title\":\"构造函数调用模式\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":3,\"date\":\"2018-01-01T00:00:00.000Z\",\"category\":[\"前端技术\"],\"tag\":[\"JavaScript\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"关键字 new\",\"slug\":\"关键字-new\",\"link\":\"#关键字-new\",\"children\":[]},{\"level\":2,\"title\":\"实参表达式\",\"slug\":\"实参表达式\",\"link\":\"#实参表达式\",\"children\":[]},{\"level\":2,\"title\":\"省略圆括号\",\"slug\":\"省略圆括号\",\"link\":\"#省略圆括号\",\"children\":[]},{\"level\":2,\"title\":\"调用上下文\",\"slug\":\"调用上下文\",\"link\":\"#调用上下文\",\"children\":[]},{\"level\":2,\"title\":\"构造函数的返回语句\",\"slug\":\"构造函数的返回语句\",\"link\":\"#构造函数的返回语句\",\"children\":[]}],\"readingTime\":{\"minutes\":1.95,\"words\":585},\"filePathRelative\":\"前端技术/JavaScript/核心模块/函数调用/构造函数调用模式.md\",\"localizedDate\":\"2018年1月1日\",\"excerpt\":\"\\n<p><strong>构造函数调用模式</strong>（Constructor Invocation Pattern）</p>\\n<p>构造函数调用模式的特征：</p>\\n<ol>\\n<li>构造函数的首字母一般要大写</li>\\n<li>一般情况下和关键字 <code>new</code> 一起使用</li>\\n<li>构造函数中的 <code>this</code> 指向 <code>new</code> 关键字创建出来的实例对象</li>\\n<li>默认返回 <code>new</code> 创建出来的这个对象（<code>this</code>）</li>\\n</ol>\\n<h2>关键字 new</h2>\"}")
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
