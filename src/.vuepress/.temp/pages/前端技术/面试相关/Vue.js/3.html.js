import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/面试相关/Vue.js/3.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/%E9%9D%A2%E8%AF%95%E7%9B%B8%E5%85%B3/Vue.js/3.html\",\"title\":\"3. vuex相关\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2018-01-01T00:00:00.000Z\",\"category\":[\"前端技术\",\"面经\"],\"tag\":[\"Vue\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"1. vuex的概念\",\"slug\":\"_1-vuex的概念\",\"link\":\"#_1-vuex的概念\",\"children\":[]},{\"level\":2,\"title\":\"2. vuex的5个核心属性\",\"slug\":\"_2-vuex的5个核心属性\",\"link\":\"#_2-vuex的5个核心属性\",\"children\":[]}],\"readingTime\":{\"minutes\":0.85,\"words\":255},\"filePathRelative\":\"前端技术/面试相关/Vue.js/3.md\",\"localizedDate\":\"2018年1月1日\",\"excerpt\":\"\\n<h2>1. vuex的概念</h2>\\n<p>vuex是一个专为 Vue.js 应用程序开发的状态管理模式， 采用集中式存储管理应用的所有组件的状态，解决多组件数据通信。(简单来说就是管理数据的,相当于一个仓库,里面存放着各种需要共享的数据,所有组件都可以拿到里面的数据)</p>\\n<p>vuex解决的问题：</p>\\n<ul>\\n<li>多个组件依赖于同一状态时，对于多层嵌套的组件的传参将会非常繁琐，并且对于兄弟组件间的状态传递无能为力。</li>\\n<li>来自不同组件的行为需要变更同一状态。以往采用父子组件直接引用或者通过事件来变更和同步状态的多份拷贝。以上的这些模式非常脆弱，通常会导致无法维护的代码。</li>\\n</ul>\"}")
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
