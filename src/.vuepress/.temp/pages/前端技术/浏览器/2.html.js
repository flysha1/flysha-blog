import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/浏览器/2.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/%E6%B5%8F%E8%A7%88%E5%99%A8/2.html\",\"title\":\"2. 浏览器引擎\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2017-12-01T00:00:00.000Z\",\"category\":[\"前端技术\"],\"tag\":[\"浏览器\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"渲染引擎（浏览器内核）\",\"slug\":\"渲染引擎-浏览器内核\",\"link\":\"#渲染引擎-浏览器内核\",\"children\":[]},{\"level\":2,\"title\":\"JavaScript引擎\",\"slug\":\"javascript引擎\",\"link\":\"#javascript引擎\",\"children\":[]}],\"readingTime\":{\"minutes\":2.43,\"words\":729},\"filePathRelative\":\"前端技术/浏览器/2.md\",\"localizedDate\":\"2017年12月1日\",\"excerpt\":\"\\n<h2>渲染引擎（浏览器内核）</h2>\\n<p>主流浏览器内核：</p>\\n<ul>\\n<li>\\n<p><strong>Trident</strong>：这种浏览器内核是 IE 浏览器用的内核，因为在早期 IE 占有大量的市场份额，所以这种内核比较流行，以前有很多网页也是根据这个内核的标准来编写的，但是实际上这个内核对真正的网页标准支持不是很好。但是由于 IE 的高市场占有率，微软也很长时间没有更新 Trident 内核，就导致了 Trident 内核和 W3C 标准脱节。还有就是 Trident 内核的大量 Bug 等安全问题没有得到解决，加上一些专家学者公开自己认为 IE 浏览器不安全的观点，使很多用户开始转向其他浏览器。</p>\\n</li>\\n<li>\\n<p><strong>Gecko</strong>：这是 Firefox 和 Flock 所采用的内核，这个内核的优点就是功能强大、丰富，可以支持很多复杂网页效果和浏览器扩展接口，但是代价是也显而易见就是要消耗很多的资源，比如内存。</p>\\n</li>\\n<li>\\n<p><strong>Presto</strong>：Opera 曾经采用的就是 Presto 内核，Presto 内核被称为公认的浏览网页速度最快的内核，这得益于它在开发时的天生优势，在处理 JS 脚本等脚本语言时，会比其他的内核快 3 倍左右，缺点就是为了达到很快的速度而丢掉了一部分网页兼容性。</p>\\n</li>\\n<li>\\n<p><strong>Webkit</strong>：Webkit 是 Safari 采用的内核，它的优点就是网页浏览速度较快，虽然不及 Presto 但是也胜于 Gecko 和 Trident，缺点是对于网页代码的容错性不高，也就是说对网页代码的兼容性较低，会使一些编写不标准的网页无法正确显示。WebKit 前身是 KDE 小组的KHTML 引擎，可以说 WebKit 是 KHTML 的一个开源的分支。</p>\\n</li>\\n<li>\\n<p><strong>Blink</strong>：谷歌在 Chromium Blog 上发表博客，称将与苹果的开源浏览器核心 Webkit 分道扬镳，在 Chromium 项目中研发 Blink 渲染引擎（即浏览器核心），内置于 Chrome 浏览器之中。其实 Blink 引擎就是 Webkit 的一个分支，就像 webkit 是 KHTML 的分支一样。</p>\\n</li>\\n</ul>\"}")
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
