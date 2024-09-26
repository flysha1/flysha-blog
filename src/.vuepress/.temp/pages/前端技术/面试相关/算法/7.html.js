import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/面试相关/算法/7.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/%E9%9D%A2%E8%AF%95%E7%9B%B8%E5%85%B3/%E7%AE%97%E6%B3%95/7.html\",\"title\":\"7. 爬楼梯\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2024-01-01T00:00:00.000Z\",\"category\":[\"前端技术\",\"面经\"],\"tag\":[\"算法\",\"递归\",\"动态规划\"],\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.59,\"words\":176},\"filePathRelative\":\"前端技术/面试相关/算法/7.md\",\"localizedDate\":\"2024年1月1日\",\"excerpt\":\"\\n<p><a href=\\\"https://leetcode.cn/problems/climbing-stairs/description/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\"><strong>题目</strong>：假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？</a></p>\\n<ul>\\n<li>示例 1：</li>\\n</ul>\\n<p>输入：n = 2</p>\\n<p>输出：2</p>\\n<p>解释：有两种方法可以爬到楼顶。</p>\\n<ol>\\n<li>\\n<p>1 阶 + 1 阶</p>\\n</li>\\n<li>\\n<p>2 阶</p>\\n</li>\\n</ol>\"}")
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
