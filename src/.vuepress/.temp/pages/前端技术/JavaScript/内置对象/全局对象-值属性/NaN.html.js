import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/JavaScript/内置对象/全局对象-值属性/NaN.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/JavaScript/%E5%86%85%E7%BD%AE%E5%AF%B9%E8%B1%A1/%E5%85%A8%E5%B1%80%E5%AF%B9%E8%B1%A1-%E5%80%BC%E5%B1%9E%E6%80%A7/NaN.html\",\"title\":\"NaN\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2018-01-03T00:00:00.000Z\",\"category\":[\"前端技术\"],\"tag\":[\"JavaScript\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"说明\",\"slug\":\"说明\",\"link\":\"#说明\",\"children\":[{\"level\":3,\"title\":\"静默逃逸的 NaN 值\",\"slug\":\"静默逃逸的-nan-值\",\"link\":\"#静默逃逸的-nan-值\",\"children\":[]}]},{\"level\":2,\"title\":\"示例\",\"slug\":\"示例\",\"link\":\"#示例\",\"children\":[{\"level\":3,\"title\":\"值校验\",\"slug\":\"值校验\",\"link\":\"#值校验\",\"children\":[]}]}],\"readingTime\":{\"minutes\":1.82,\"words\":547},\"filePathRelative\":\"前端技术/JavaScript/内置对象/全局对象-值属性/NaN.md\",\"localizedDate\":\"2018年1月3日\",\"excerpt\":\"\\n<p>全局属性 <code>NaN</code> 的值表示不是一个数字（Not-A-Number）。</p>\\n<h2>说明</h2>\\n<ul>\\n<li><code>NaN</code> 是一个全局对象的属性。</li>\\n<li><code>NaN</code> 属性的初始值就是 <code>NaN</code>，和 <code>Number.NaN</code> 的值一样。</li>\\n<li>编码中很少直接使用到 <code>NaN</code>。通常都是在计算失败时，作为 <code>Math</code> 的某个方法的返回值出现的（例如：<code>Math.sqrt(-1)</code>）或者尝试将一个字符串解析成数字但失败了的时候（例如：<code>parseInt('blabla')</code>）。</li>\\n</ul>\"}")
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
