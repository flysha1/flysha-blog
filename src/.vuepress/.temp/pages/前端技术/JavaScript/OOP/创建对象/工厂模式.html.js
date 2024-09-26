import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/JavaScript/OOP/创建对象/工厂模式.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/JavaScript/OOP/%E5%88%9B%E5%BB%BA%E5%AF%B9%E8%B1%A1/%E5%B7%A5%E5%8E%82%E6%A8%A1%E5%BC%8F.html\",\"title\":\"工厂模式\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":1,\"date\":\"2018-01-01T00:00:00.000Z\",\"category\":[\"前端技术\"],\"tag\":[\"JavaScript\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"应用场景\",\"slug\":\"应用场景\",\"link\":\"#应用场景\",\"children\":[{\"level\":3,\"title\":\"ES5 实现工厂模式\",\"slug\":\"es5-实现工厂模式\",\"link\":\"#es5-实现工厂模式\",\"children\":[]},{\"level\":3,\"title\":\"ES6 实现工厂模式\",\"slug\":\"es6-实现工厂模式\",\"link\":\"#es6-实现工厂模式\",\"children\":[]}]}],\"readingTime\":{\"minutes\":1.91,\"words\":573},\"filePathRelative\":\"前端技术/JavaScript/OOP/创建对象/工厂模式.md\",\"localizedDate\":\"2018年1月1日\",\"excerpt\":\"\\n<p><strong>工厂模式</strong> 是用来创建对象的一种最常用的设计模式。工厂模式不暴露创建对象的具体逻辑，而是将逻辑封装在一个函数中，那么这个函数就可以被视为一个工厂。工厂模式常见于大型项目，例如 jQuery 的 $ 对象，我们创建选择器对象之所以没有 <code>new selector</code> 就是因为 <code>$()</code> 已经是一个工厂方法，其他例子例如 <code>React.createElement()</code>、<code>Vue.component()</code> 都是工厂模式的实现。</p>\\n<p>工厂模式根据抽象程度的不同可以分为三种：</p>\"}")
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
