import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/JavaScript/OOP/类/静态成员.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/JavaScript/OOP/%E7%B1%BB/%E9%9D%99%E6%80%81%E6%88%90%E5%91%98.html\",\"title\":\"静态成员\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":4,\"date\":\"2018-01-01T00:00:00.000Z\",\"category\":[\"前端技术\"],\"tag\":[\"JavaScript\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"静态方法\",\"slug\":\"静态方法\",\"link\":\"#静态方法\",\"children\":[{\"level\":3,\"title\":\"动态作用域\",\"slug\":\"动态作用域\",\"link\":\"#动态作用域\",\"children\":[]},{\"level\":3,\"title\":\"子类继承\",\"slug\":\"子类继承\",\"link\":\"#子类继承\",\"children\":[]}]},{\"level\":2,\"title\":\"静态属性\",\"slug\":\"静态属性\",\"link\":\"#静态属性\",\"children\":[]}],\"readingTime\":{\"minutes\":1.77,\"words\":530},\"filePathRelative\":\"前端技术/JavaScript/OOP/类/静态成员.md\",\"localizedDate\":\"2018年1月1日\",\"excerpt\":\"\\n<p>类的静态成员包括 <strong>静态方法</strong> 和 <strong>静态属性</strong>。</p>\\n<ul>\\n<li>静态方法定义在类的内部（不是定义在实例对象 <code>this</code> 上）</li>\\n<li>静态属性通过对象的属性访问器定义（新提案提供了关键字 <code>static</code> 用于定义）</li>\\n</ul>\\n<h2>静态方法</h2>\\n<p>类相当于实例的原型，所有在类中定义的方法，都会被实例继承。</p>\\n<p>如果在一个方法前，加上 <code>static</code> 关键字，就表示该方法不会被实例继承，而是需要直接通过类来调用，这就称为 <strong>静态方法</strong>。</p>\"}")
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
