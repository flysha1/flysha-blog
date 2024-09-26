import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/JavaScript/核心模块/函数类型/构造函数.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/JavaScript/%E6%A0%B8%E5%BF%83%E6%A8%A1%E5%9D%97/%E5%87%BD%E6%95%B0%E7%B1%BB%E5%9E%8B/%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0.html\",\"title\":\"构造函数\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":1,\"date\":\"2018-01-01T00:00:00.000Z\",\"category\":[\"前端技术\"],\"tag\":[\"JavaScript\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"特点\",\"slug\":\"特点\",\"link\":\"#特点\",\"children\":[]},{\"level\":2,\"title\":\"缺点\",\"slug\":\"缺点\",\"link\":\"#缺点\",\"children\":[]},{\"level\":2,\"title\":\"作用\",\"slug\":\"作用\",\"link\":\"#作用\",\"children\":[]},{\"level\":2,\"title\":\"与普通函数对比\",\"slug\":\"与普通函数对比\",\"link\":\"#与普通函数对比\",\"children\":[]}],\"readingTime\":{\"minutes\":2.16,\"words\":648},\"filePathRelative\":\"前端技术/JavaScript/核心模块/函数类型/构造函数.md\",\"localizedDate\":\"2018年1月1日\",\"excerpt\":\"\\n<p>在典型的 OOP 语言中，如 Java 都存在类的概念，类就是对象的模版，对象就是类的实例。但是在 JavaScript 中不存在类的概念，JavaScript 不是基于类，而是通过构造函数（constructor）和原型链（prototype chains）实现的。但在 ES6 中引入了类（class） 这个概念，作为对象的模版，新的 <code>class</code> 写法知识让原型对象的写法更加清晰，这里不重点谈这个。</p>\\n<h2>特点</h2>\\n<ol>\\n<li>构造函数的首字母必须大写，用来区分于普通函数</li>\\n<li>内部使用的 <code>this</code> 对象，来指向即将要生成的实例对象</li>\\n<li>使用 <code>new</code> 关键字来生成实例对象</li>\\n</ol>\"}")
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
