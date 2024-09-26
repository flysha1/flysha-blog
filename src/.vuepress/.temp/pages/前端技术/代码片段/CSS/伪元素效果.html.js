import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/代码片段/CSS/伪元素效果.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/%E4%BB%A3%E7%A0%81%E7%89%87%E6%AE%B5/CSS/%E4%BC%AA%E5%85%83%E7%B4%A0%E6%95%88%E6%9E%9C.html\",\"title\":\"巧用伪元素before和after制作绚丽效果\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2022-12-21T00:00:00.000Z\",\"order\":1,\"category\":[\"前端技术\"],\"tag\":[\"CSS\",\"代码片段\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"1. 伪类光圈\",\"slug\":\"_1-伪类光圈\",\"link\":\"#_1-伪类光圈\",\"children\":[]},{\"level\":2,\"title\":\"2. 伪类括号效果\",\"slug\":\"_2-伪类括号效果\",\"link\":\"#_2-伪类括号效果\",\"children\":[]},{\"level\":2,\"title\":\"3. 炫酷丝带效果\",\"slug\":\"_3-炫酷丝带效果\",\"link\":\"#_3-炫酷丝带效果\",\"children\":[{\"level\":3,\"title\":\"双边丝带\",\"slug\":\"双边丝带\",\"link\":\"#双边丝带\",\"children\":[]},{\"level\":3,\"title\":\"右边丝带\",\"slug\":\"右边丝带\",\"link\":\"#右边丝带\",\"children\":[]},{\"level\":3,\"title\":\"箭头丝带\",\"slug\":\"箭头丝带\",\"link\":\"#箭头丝带\",\"children\":[]},{\"level\":3,\"title\":\"多个箭头丝带\",\"slug\":\"多个箭头丝带\",\"link\":\"#多个箭头丝带\",\"children\":[]},{\"level\":3,\"title\":\"悬挂标签\",\"slug\":\"悬挂标签\",\"link\":\"#悬挂标签\",\"children\":[]}]},{\"level\":2,\"title\":\"4. 绚丽流动边框\",\"slug\":\"_4-绚丽流动边框\",\"link\":\"#_4-绚丽流动边框\",\"children\":[]},{\"level\":2,\"title\":\"5. Tooltip提示\",\"slug\":\"_5-tooltip提示\",\"link\":\"#_5-tooltip提示\",\"children\":[]}],\"readingTime\":{\"minutes\":5.17,\"words\":1550},\"filePathRelative\":\"前端技术/代码片段/CSS/伪元素效果.md\",\"localizedDate\":\"2022年12月21日\",\"excerpt\":\"\\n<p><strong>CSS :before选择器</strong> ：向选定的元素前插入内容。使用content 属性来指定要插入的内容。</p>\\n<p><strong>CSS :after选择器</strong>：向选定的元素之后插入内容。使用content 属性来指定要插入的内容。</p>\\n<p>这两个伪元素会在真正页面元素之前和之后插入一个额外的元素，从技术角度上讲，它们与下面的HTML标记是等效的。</p>\\n<h2>1. 伪类光圈</h2>\\n\\n<h2>2. 伪类括号效果</h2>\\n\\n<h2>3. 炫酷丝带效果</h2>\\n<h3>双边丝带</h3>\\n\\n<h3>右边丝带</h3>\\n\\n<h3>箭头丝带</h3>\"}")
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
