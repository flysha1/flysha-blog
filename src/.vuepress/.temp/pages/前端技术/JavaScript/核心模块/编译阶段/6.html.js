import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/JavaScript/核心模块/编译阶段/6.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/JavaScript/%E6%A0%B8%E5%BF%83%E6%A8%A1%E5%9D%97/%E7%BC%96%E8%AF%91%E9%98%B6%E6%AE%B5/6.html\",\"title\":\"闭包\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":6,\"date\":\"2018-01-01T00:00:00.000Z\",\"category\":[\"前端技术\"],\"tag\":[\"JavaScript\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"定义\",\"slug\":\"定义\",\"link\":\"#定义\",\"children\":[]},{\"level\":2,\"title\":\"执行过程分析\",\"slug\":\"执行过程分析\",\"link\":\"#执行过程分析\",\"children\":[]},{\"level\":2,\"title\":\"应用场景\",\"slug\":\"应用场景\",\"link\":\"#应用场景\",\"children\":[]},{\"level\":2,\"title\":\"优缺点\",\"slug\":\"优缺点\",\"link\":\"#优缺点\",\"children\":[]}],\"readingTime\":{\"minutes\":7.01,\"words\":2104},\"filePathRelative\":\"前端技术/JavaScript/核心模块/编译阶段/6.md\",\"localizedDate\":\"2018年1月1日\",\"excerpt\":\"\\n<p>在了解闭包之前，先要熟悉以下几点：</p>\\n<ol>\\n<li>首先要理解执行环境（<a href=\\\"/blog/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/JavaScript/%E6%A0%B8%E5%BF%83%E6%A8%A1%E5%9D%97/%E6%89%A7%E8%A1%8C%E9%98%B6%E6%AE%B5/1.html\\\" target=\\\"_blank\\\">执行上下文栈</a>），执行环境定义了变量或函数有权访问的其他数据。</li>\\n<li>每个执行环境都有一个与之关联的 <a href=\\\"/blog/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/JavaScript/%E6%A0%B8%E5%BF%83%E6%A8%A1%E5%9D%97/%E6%89%A7%E8%A1%8C%E9%98%B6%E6%AE%B5/2.html\\\" target=\\\"_blank\\\">变量对象</a>，环境中定义的所有变量和函数都保存在这个对象中。</li>\\n<li>每个函数都有自己的执行环境，当执行流进入一个函数时，函数的环境就会被推入到一个环境栈中。而在函数执行之后，栈将其环境弹出，把控制权返回给之前的执行环境。</li>\\n<li>当某个函数被调用时，会创建一个执行环境及其相应的 <strong>作用域链</strong>。然后使用 <code>arguments</code> 和其他命名参数的值来初始化函数的活动对象。在函数中，活动对象作为变量对象使用（作用域链是由每层的变量对象使用链结构链接起来的）。</li>\\n<li>在作用域链中，外部函数的活动对象始终处于第二位，外部函数的外部函数的活动对象处于第三位，直到作用域链终点即全局执行环境。</li>\\n<li><strong>作用域链的本质是一个指向变量对象的指针列表，它只引用但不实际包含变量对象。</strong></li>\\n</ol>\"}")
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
