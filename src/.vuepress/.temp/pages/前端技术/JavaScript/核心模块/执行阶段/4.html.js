import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/JavaScript/核心模块/执行阶段/4.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/JavaScript/%E6%A0%B8%E5%BF%83%E6%A8%A1%E5%9D%97/%E6%89%A7%E8%A1%8C%E9%98%B6%E6%AE%B5/4.html\",\"title\":\"当前执行上下文 this\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":4,\"date\":\"2018-01-01T00:00:00.000Z\",\"category\":[\"前端技术\"],\"tag\":[\"JavaScript\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"调用位置\",\"slug\":\"调用位置\",\"link\":\"#调用位置\",\"children\":[]},{\"level\":2,\"title\":\"绑定规则\",\"slug\":\"绑定规则\",\"link\":\"#绑定规则\",\"children\":[{\"level\":3,\"title\":\"默认绑定\",\"slug\":\"默认绑定\",\"link\":\"#默认绑定\",\"children\":[]},{\"level\":3,\"title\":\"隐式绑定\",\"slug\":\"隐式绑定\",\"link\":\"#隐式绑定\",\"children\":[]},{\"level\":3,\"title\":\"显式绑定\",\"slug\":\"显式绑定\",\"link\":\"#显式绑定\",\"children\":[]},{\"level\":3,\"title\":\"构造调用绑定\",\"slug\":\"构造调用绑定\",\"link\":\"#构造调用绑定\",\"children\":[]}]},{\"level\":2,\"title\":\"优先级\",\"slug\":\"优先级\",\"link\":\"#优先级\",\"children\":[{\"level\":3,\"title\":\"隐式绑定和显式绑定\",\"slug\":\"隐式绑定和显式绑定\",\"link\":\"#隐式绑定和显式绑定\",\"children\":[]},{\"level\":3,\"title\":\"构造调用绑定和隐式绑定\",\"slug\":\"构造调用绑定和隐式绑定\",\"link\":\"#构造调用绑定和隐式绑定\",\"children\":[]}]},{\"level\":2,\"title\":\"绑定例外\",\"slug\":\"绑定例外\",\"link\":\"#绑定例外\",\"children\":[{\"level\":3,\"title\":\"忽略指向\",\"slug\":\"忽略指向\",\"link\":\"#忽略指向\",\"children\":[]},{\"level\":3,\"title\":\"软绑定\",\"slug\":\"软绑定\",\"link\":\"#软绑定\",\"children\":[]},{\"level\":3,\"title\":\"指向变更\",\"slug\":\"指向变更\",\"link\":\"#指向变更\",\"children\":[]},{\"level\":3,\"title\":\"箭头函数\",\"slug\":\"箭头函数\",\"link\":\"#箭头函数\",\"children\":[]}]},{\"level\":2,\"title\":\"应用场景总结\",\"slug\":\"应用场景总结\",\"link\":\"#应用场景总结\",\"children\":[]}],\"readingTime\":{\"minutes\":13.76,\"words\":4129},\"filePathRelative\":\"前端技术/JavaScript/核心模块/执行阶段/4.md\",\"localizedDate\":\"2018年1月1日\",\"excerpt\":\"\\n<p>业界没有 <strong>当前执行上下文</strong> 的叫法，但是笔者私自把 <code>this</code> 的指向理解为执行时所指向的执行上下文。</p>\\n<h2>调用位置</h2>\\n<p>在理解 <code>this</code> 的绑定过程之前，首先要理解 <code>this</code> 的<strong>调用位置</strong>：调用位置就是函数在代码中被调用的位置（而不是声明的位置）。</p>\\n<p>而要理解 <code>this</code> 的调用位置，最重要的是要 <strong>分析调用栈</strong>（就是为了到达当前执行位置所调用的所有函数）。我们关心的调用位置就在当前正在执行的函数的前一个调用中。</p>\"}")
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
