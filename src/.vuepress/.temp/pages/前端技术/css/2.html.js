import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/css/2.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/css/2.html\",\"title\":\"选择符与优先级\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2017-12-01T00:00:00.000Z\",\"order\":2,\"category\":[\"前端技术\"],\"tag\":[\"CSS\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"选择符\",\"slug\":\"选择符\",\"link\":\"#选择符\",\"children\":[{\"level\":3,\"title\":\"1. 元素选择符\",\"slug\":\"_1-元素选择符\",\"link\":\"#_1-元素选择符\",\"children\":[]},{\"level\":3,\"title\":\"2. 关系选择符\",\"slug\":\"_2-关系选择符\",\"link\":\"#_2-关系选择符\",\"children\":[]},{\"level\":3,\"title\":\"3. 属性选择符\",\"slug\":\"_3-属性选择符\",\"link\":\"#_3-属性选择符\",\"children\":[]},{\"level\":3,\"title\":\"4. 伪类选择符\",\"slug\":\"_4-伪类选择符\",\"link\":\"#_4-伪类选择符\",\"children\":[]},{\"level\":3,\"title\":\"5. 伪元素选择符\",\"slug\":\"_5-伪元素选择符\",\"link\":\"#_5-伪元素选择符\",\"children\":[]}]},{\"level\":2,\"title\":\"优先级顺序\",\"slug\":\"优先级顺序\",\"link\":\"#优先级顺序\",\"children\":[{\"level\":3,\"title\":\"权重值比较规则\",\"slug\":\"权重值比较规则\",\"link\":\"#权重值比较规则\",\"children\":[]},{\"level\":3,\"title\":\"!important\",\"slug\":\"important\",\"link\":\"#important\",\"children\":[]}]}],\"readingTime\":{\"minutes\":6.88,\"words\":2064},\"filePathRelative\":\"前端技术/css/2.md\",\"localizedDate\":\"2017年12月1日\",\"excerpt\":\"\\n<h2>选择符</h2>\\n<p>选择符分为五类：</p>\\n<ul>\\n<li>元素选择符 Element Selectors</li>\\n<li>关系选择符 Relationship Selectors</li>\\n<li>属性选择符 Attribute Selectors</li>\\n<li>伪类选择符 Pseudo-Classes Selectors</li>\\n<li>伪元素选择符 Pseudo-Element Selectors</li>\\n</ul>\\n<h3>1. 元素选择符</h3>\\n<table>\\n<thead>\\n<tr>\\n<th>选择符</th>\\n<th>选择符名称</th>\\n<th>描述</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td><code>*</code></td>\\n<td>通配选择符</td>\\n<td>所有元素对象</td>\\n</tr>\\n<tr>\\n<td><code>E</code></td>\\n<td>类型选择符</td>\\n<td>以文档语言对象类型作为选择符</td>\\n</tr>\\n<tr>\\n<td><code>E#id</code></td>\\n<td>ID 选择符</td>\\n<td>以唯一标识符 ID 属性的 E 元素作为选择符</td>\\n</tr>\\n<tr>\\n<td><code>E.class</code></td>\\n<td>类选择符</td>\\n<td>以 <code>class</code> 属性的 E 元素作为选择符</td>\\n</tr>\\n</tbody>\\n</table>\"}")
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
