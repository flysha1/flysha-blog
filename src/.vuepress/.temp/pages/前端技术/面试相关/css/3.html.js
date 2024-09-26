import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/面试相关/css/3.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/%E9%9D%A2%E8%AF%95%E7%9B%B8%E5%85%B3/css/3.html\",\"title\":\"3. flex弹性布局\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2018-01-01T00:00:00.000Z\",\"category\":[\"前端技术\",\"面经\"],\"tag\":[\"CSS\"],\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":7.83,\"words\":2350},\"filePathRelative\":\"前端技术/面试相关/css/3.md\",\"localizedDate\":\"2018年1月1日\",\"excerpt\":\"\\n<p>Flex是Flexible Box的缩写，意为”弹性布局”，用来为盒状模型提供最大的灵活性。\\n任何一个容器都可以指定为Flex布局。</p>\\n<p>采用Flex布局的元素，称为Flex容器（flex container），简称”容器”。它的所有子元素自动成为容器成员，称为Flex项目（flex item），简称”项目”。</p>\\n<p>容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。</p>\"}")
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
