import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/JavaScript/核心模块/函数类型/函数防抖.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/JavaScript/%E6%A0%B8%E5%BF%83%E6%A8%A1%E5%9D%97/%E5%87%BD%E6%95%B0%E7%B1%BB%E5%9E%8B/%E5%87%BD%E6%95%B0%E9%98%B2%E6%8A%96.html\",\"title\":\"函数防抖\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":9,\"date\":\"2018-01-01T00:00:00.000Z\",\"category\":[\"前端技术\"],\"tag\":[\"JavaScript\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"实现原理\",\"slug\":\"实现原理\",\"link\":\"#实现原理\",\"children\":[]},{\"level\":2,\"title\":\"代码实现\",\"slug\":\"代码实现\",\"link\":\"#代码实现\",\"children\":[]},{\"level\":2,\"title\":\"应用场景\",\"slug\":\"应用场景\",\"link\":\"#应用场景\",\"children\":[]},{\"level\":2,\"title\":\"应用实践\",\"slug\":\"应用实践\",\"link\":\"#应用实践\",\"children\":[{\"level\":3,\"title\":\"注册实时验证\",\"slug\":\"注册实时验证\",\"link\":\"#注册实时验证\",\"children\":[]}]}],\"readingTime\":{\"minutes\":4.77,\"words\":1431},\"filePathRelative\":\"前端技术/JavaScript/核心模块/函数类型/函数防抖.md\",\"localizedDate\":\"2018年1月1日\",\"excerpt\":\"\\n<p><strong>函数防抖</strong>：在频繁触发的情况下，只有足够的空闲时间，才执行代码一次，如果没有执行完就清除掉，重新执行逻辑。简单来说，当触发后再次触发，会取消上一次触发的执行，直到最后一次触发后过去设定时间后才执行。</p>\\n<p>🏕 <strong>生活中的实例</strong>：</p>\\n<p>假设你正在乘电梯上楼，当电梯门关闭之前发现有人也要乘电梯，礼貌起见，你会按下开门开关，然后等他进电梯；如果在电梯门块关闭之前，又有人来了，你会继续开门；这样一直进行下去，假定电梯没有容量限制，你可能需要等待几分钟，等到最终没人进电梯了，才会关闭电梯门，然后上楼。</p>\\n<p>函数防抖规定函数再次执行需要满足两个条件：</p>\"}")
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
