import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/JavaScript/核心模块/函数类型/函数节流.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/JavaScript/%E6%A0%B8%E5%BF%83%E6%A8%A1%E5%9D%97/%E5%87%BD%E6%95%B0%E7%B1%BB%E5%9E%8B/%E5%87%BD%E6%95%B0%E8%8A%82%E6%B5%81.html\",\"title\":\"函数节流\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":8,\"date\":\"2018-01-01T00:00:00.000Z\",\"category\":[\"前端技术\"],\"tag\":[\"JavaScript\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"目的\",\"slug\":\"目的\",\"link\":\"#目的\",\"children\":[]},{\"level\":2,\"title\":\"代码实现\",\"slug\":\"代码实现\",\"link\":\"#代码实现\",\"children\":[]},{\"level\":2,\"title\":\"应用实践\",\"slug\":\"应用实践\",\"link\":\"#应用实践\",\"children\":[{\"level\":3,\"title\":\"原生实现应用\",\"slug\":\"原生实现应用\",\"link\":\"#原生实现应用\",\"children\":[]},{\"level\":3,\"title\":\"React 应用\",\"slug\":\"react-应用\",\"link\":\"#react-应用\",\"children\":[]},{\"level\":3,\"title\":\"应用场景\",\"slug\":\"应用场景\",\"link\":\"#应用场景\",\"children\":[]},{\"level\":3,\"title\":\"页面滚动事件\",\"slug\":\"页面滚动事件\",\"link\":\"#页面滚动事件\",\"children\":[]}]}],\"readingTime\":{\"minutes\":4.46,\"words\":1339},\"filePathRelative\":\"前端技术/JavaScript/核心模块/函数类型/函数节流.md\",\"localizedDate\":\"2018年1月1日\",\"excerpt\":\"\\n<p><strong>函数节流</strong>：规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只有一次能生效。简单来说，触发后立即执行，但如果要执行下一次，需要在离上次执行时间间隔设定时间后再出发才能执行。</p>\\n<p>🏕 <strong>生活中的实例</strong>：</p>\\n<p>我们知道目前的一种说法是当 1 秒内连续播放 24 张以上的图片时，在人眼的视觉中就会形成一个连贯的动画，所以在电影的播放中基本是以每秒 24 张的速度播放的，为什么不是 100 张或更多呢，主要是因为 24 张就可以满足人类视觉需求的时候，100 张就会显得很浪费资源。</p>\"}")
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
