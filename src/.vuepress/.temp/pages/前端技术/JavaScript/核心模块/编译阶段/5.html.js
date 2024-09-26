import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/JavaScript/核心模块/编译阶段/5.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/JavaScript/%E6%A0%B8%E5%BF%83%E6%A8%A1%E5%9D%97/%E7%BC%96%E8%AF%91%E9%98%B6%E6%AE%B5/5.html\",\"title\":\"声明提升\",\"lang\":\"zh-CN\",\"frontmatter\":{\"order\":5,\"date\":\"2018-01-01T00:00:00.000Z\",\"category\":[\"前端技术\"],\"tag\":[\"JavaScript\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"变量声明提升\",\"slug\":\"变量声明提升\",\"link\":\"#变量声明提升\",\"children\":[]},{\"level\":2,\"title\":\"函数声明提升\",\"slug\":\"函数声明提升\",\"link\":\"#函数声明提升\",\"children\":[]},{\"level\":2,\"title\":\"函数覆盖\",\"slug\":\"函数覆盖\",\"link\":\"#函数覆盖\",\"children\":[{\"level\":3,\"title\":\"重复声明无效\",\"slug\":\"重复声明无效\",\"link\":\"#重复声明无效\",\"children\":[]},{\"level\":3,\"title\":\"函数声明优先\",\"slug\":\"函数声明优先\",\"link\":\"#函数声明优先\",\"children\":[]},{\"level\":3,\"title\":\"函数声明覆盖\",\"slug\":\"函数声明覆盖\",\"link\":\"#函数声明覆盖\",\"children\":[]}]}],\"readingTime\":{\"minutes\":3.95,\"words\":1184},\"filePathRelative\":\"前端技术/JavaScript/核心模块/编译阶段/5.md\",\"localizedDate\":\"2018年1月1日\",\"excerpt\":\"\\n<p>JavaScript 程序的运行阶段分为 <strong>预编译阶段</strong> 和 <strong>执行阶段</strong>。</p>\\n<p>在预编译阶段，JavaScript 引擎会做一件事情，那就是 <strong>读取变量的定义</strong> 并 <strong>确定其作用域</strong> 即生效范围。</p>\\n<ul>\\n<li>变量定义\\n使用 <code>var</code> 或 <code>let</code> 关键字定义的变量，在未赋值的情况下，该变量的值是 <code>undefined</code>\\n使用 <code>const</code> 关键字定义变量却不赋值，将会抛出错误</li>\\n<li>变量作用域\\n全局变量的作用域遍布全局\\n局部变量的作用域仅在于函数内部及其嵌套函数的作用域\\n函数内部的同名变量或参数优先级高于全局同名变量</li>\\n</ul>\"}")
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
