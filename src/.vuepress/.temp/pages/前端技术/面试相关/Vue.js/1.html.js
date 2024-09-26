import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/面试相关/Vue.js/1.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/%E9%9D%A2%E8%AF%95%E7%9B%B8%E5%85%B3/Vue.js/1.html\",\"title\":\"1. Vue2.0 和 Vue3.0 响应式原理区别\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2018-01-01T00:00:00.000Z\",\"category\":[\"前端技术\",\"面经\"],\"tag\":[\"Vue\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"1. Vue2.0 和 Vue3.0的原理\",\"slug\":\"_1-vue2-0-和-vue3-0的原理\",\"link\":\"#_1-vue2-0-和-vue3-0的原理\",\"children\":[]},{\"level\":2,\"title\":\"2. Vue2.0响应式实现\",\"slug\":\"_2-vue2-0响应式实现\",\"link\":\"#_2-vue2-0响应式实现\",\"children\":[]},{\"level\":2,\"title\":\"3. Vue3.0 响应式的实现\",\"slug\":\"_3-vue3-0-响应式的实现\",\"link\":\"#_3-vue3-0-响应式的实现\",\"children\":[]}],\"readingTime\":{\"minutes\":2.71,\"words\":814},\"filePathRelative\":\"前端技术/面试相关/Vue.js/1.md\",\"localizedDate\":\"2018年1月1日\",\"excerpt\":\"\\n<h2>1. Vue2.0 和 Vue3.0的原理</h2>\\n<p>Vue2.0实现MVVM(双向数据绑定)的原理是通过 Object.defineProperty 来劫持各个属性的setter、getter，在数据变动时发布消息给订阅者，触发相应的监听回调。Vue 3.0实现响应式基于ES6的Proxy。两者的差异如下：</p>\\n<ul>\\n<li>Vue2.0</li>\\n</ul>\\n<ol>\\n<li>基于Object.defineProperty，不具备监听数组的能力，需要重新定义数组的原型来达到响应式。</li>\\n<li>Object.defineProperty 无法检测到对象属性的添加和删除 。</li>\\n<li>由于Vue会在初始化实例时对属性执行getter/setter转化，所有属性必须在data对象上存在才能让Vue将它转换为响应式。</li>\\n<li>深度监听需要一次性递归，对性能影响比较大。</li>\\n</ol>\"}")
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
