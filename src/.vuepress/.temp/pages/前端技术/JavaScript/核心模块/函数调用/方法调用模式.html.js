import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/JavaScript/核心模块/函数调用/方法调用模式.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/JavaScript/%E6%A0%B8%E5%BF%83%E6%A8%A1%E5%9D%97/%E5%87%BD%E6%95%B0%E8%B0%83%E7%94%A8/%E6%96%B9%E6%B3%95%E8%B0%83%E7%94%A8%E6%A8%A1%E5%BC%8F.html\",\"title\":\"方法调用模式\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":1,\"date\":\"2018-01-01T00:00:00.000Z\",\"category\":[\"前端技术\"],\"tag\":[\"JavaScript\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"函数作为方法调用\",\"slug\":\"函数作为方法调用\",\"link\":\"#函数作为方法调用\",\"children\":[]},{\"level\":2,\"title\":\"对象的公共方法提取\",\"slug\":\"对象的公共方法提取\",\"link\":\"#对象的公共方法提取\",\"children\":[]},{\"level\":2,\"title\":\"隐式实参\",\"slug\":\"隐式实参\",\"link\":\"#隐式实参\",\"children\":[]},{\"level\":2,\"title\":\"函数方法中的 this\",\"slug\":\"函数方法中的-this\",\"link\":\"#函数方法中的-this\",\"children\":[]}],\"readingTime\":{\"minutes\":2.33,\"words\":700},\"filePathRelative\":\"前端技术/JavaScript/核心模块/函数调用/方法调用模式.md\",\"localizedDate\":\"2018年1月1日\",\"excerpt\":\"\\n<p><strong>方法调用模式</strong>（Method Invocation Pattern）</p>\\n<p>在面向对象程序设计中，当函数（Function）作为对象属性时被称为方法（Method）。方法被调用时 <code>this</code> 会被绑定到对应的对象。在 JavaScript 中有两种语法可以完成方法调用。</p>\\n<h2>函数作为方法调用</h2>\\n<p>当一个函数被保存为对象的一个属性时，我们称它为一个方法。当一个方法被调用时，<code>this</code> 被绑定到该对象。如果调用表达式包含一个提取属性的动作，那么它就是被当做一个方法来调用。</p>\"}")
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
