import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/JavaScript/OOP/继承/原型链.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/JavaScript/OOP/%E7%BB%A7%E6%89%BF/%E5%8E%9F%E5%9E%8B%E9%93%BE.html\",\"title\":\"原型链\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":1,\"date\":\"2018-01-01T00:00:00.000Z\",\"category\":[\"前端技术\"],\"tag\":[\"JavaScript\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"显式原型\",\"slug\":\"显式原型\",\"link\":\"#显式原型\",\"children\":[]},{\"level\":2,\"title\":\"隐式原型\",\"slug\":\"隐式原型\",\"link\":\"#隐式原型\",\"children\":[]},{\"level\":2,\"title\":\"构造函数\",\"slug\":\"构造函数\",\"link\":\"#构造函数\",\"children\":[]},{\"level\":2,\"title\":\"原型对象\",\"slug\":\"原型对象\",\"link\":\"#原型对象\",\"children\":[]},{\"level\":2,\"title\":\"原型对象的指向\",\"slug\":\"原型对象的指向\",\"link\":\"#原型对象的指向\",\"children\":[{\"level\":3,\"title\":\"字面量方式\",\"slug\":\"字面量方式\",\"link\":\"#字面量方式\",\"children\":[]},{\"level\":3,\"title\":\"构造器方式\",\"slug\":\"构造器方式\",\"link\":\"#构造器方式\",\"children\":[]},{\"level\":3,\"title\":\"Object.create 方式\",\"slug\":\"object-create-方式\",\"link\":\"#object-create-方式\",\"children\":[]}]},{\"level\":2,\"title\":\"原型对象与实例\",\"slug\":\"原型对象与实例\",\"link\":\"#原型对象与实例\",\"children\":[]}],\"readingTime\":{\"minutes\":5.45,\"words\":1635},\"filePathRelative\":\"前端技术/JavaScript/OOP/继承/原型链.md\",\"localizedDate\":\"2018年1月1日\",\"excerpt\":\"\\n<p>ECMAScript 中描述了原型链的概念，并将原型链作为实现继承的主要方法。其基本思想是利用原型让一个引用类型继承另一个引用类型的属性和方法。</p>\\n<p>搞懂原型对象和原型链其实就是搞懂 <code>prototype</code>、<code>__proto__</code> 和 <code>constructor</code> 之间的相互关系。</p>\\n<p>我们通过示例并附加图例阐述这种复杂的相互关系。</p>\\n<figure><img src=\\\"/blog/assets/images/继承原型.svg\\\" alt=\\\"\\\" tabindex=\\\"0\\\" loading=\\\"lazy\\\"><figcaption></figcaption></figure>\"}")
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
