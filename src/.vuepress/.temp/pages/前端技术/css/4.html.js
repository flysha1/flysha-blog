import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/css/4.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/css/4.html\",\"title\":\"定位\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2017-12-01T00:00:00.000Z\",\"order\":4,\"category\":[\"前端技术\"],\"tag\":[\"CSS\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"position\",\"slug\":\"position\",\"link\":\"#position\",\"children\":[{\"level\":3,\"title\":\"absolute跟正常流有什么不同？\",\"slug\":\"absolute跟正常流有什么不同\",\"link\":\"#absolute跟正常流有什么不同\",\"children\":[]},{\"level\":3,\"title\":\"脱离文档流\",\"slug\":\"脱离文档流\",\"link\":\"#脱离文档流\",\"children\":[]},{\"level\":3,\"title\":\"sticky\",\"slug\":\"sticky\",\"link\":\"#sticky\",\"children\":[]}]},{\"level\":2,\"title\":\"z-index\",\"slug\":\"z-index\",\"link\":\"#z-index\",\"children\":[{\"level\":3,\"title\":\"失效场景\",\"slug\":\"失效场景\",\"link\":\"#失效场景\",\"children\":[]}]}],\"readingTime\":{\"minutes\":7.11,\"words\":2133},\"filePathRelative\":\"前端技术/css/4.md\",\"localizedDate\":\"2017年12月1日\",\"excerpt\":\"\\n<h2>position</h2>\\n<p><code>position</code> 用于指定一个元素在文档中的定位方式。</p>\\n<table>\\n<thead>\\n<tr>\\n<th>属性值</th>\\n<th>说明</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td><code>static</code></td>\\n<td>默认值。没有定位，元素出现在正常的文档流中（忽略 top、bottom、left、right 和 z-index 声明）</td>\\n</tr>\\n<tr>\\n<td><code>absolute</code></td>\\n<td>生成绝对定位的元素，相对于 <code>static</code> 定位以外的第一个父元素 进行定位，如果父级不是，会一直往上到 body，脱离文档流</td>\\n</tr>\\n<tr>\\n<td><code>fixed</code></td>\\n<td>生成固定定位的元素，相对于 浏览器窗口 进行定位，脱离文档流。（老 IE 不支持）</td>\\n</tr>\\n<tr>\\n<td><code>relative</code></td>\\n<td>生成相对定位的元素，相对于其正常位置进行定位，不脱离文档流</td>\\n</tr>\\n<tr>\\n<td><code>sticky</code></td>\\n<td>粘性定位可以被认为是相对定位和固定定位的混合。元素在跨越特定阈值前为相对定位，之后为固定定位。主要用于 <code>scroll</code> 事件的监听上</td>\\n</tr>\\n<tr>\\n<td><code>unset</code></td>\\n<td></td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
