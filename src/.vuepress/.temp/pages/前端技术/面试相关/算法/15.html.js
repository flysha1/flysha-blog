import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/面试相关/算法/15.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/%E9%9D%A2%E8%AF%95%E7%9B%B8%E5%85%B3/%E7%AE%97%E6%B3%95/15.html\",\"title\":\"15. 买卖股票的最佳时机\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2024-01-01T00:00:00.000Z\",\"category\":[\"前端技术\",\"面经\"],\"tag\":[\"算法\",\"贪心\",\"动态规划\"],\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":1.06,\"words\":317},\"filePathRelative\":\"前端技术/面试相关/算法/15.md\",\"localizedDate\":\"2024年1月1日\",\"excerpt\":\"\\n<p><a href=\\\"https://leetcode.cn/problems/best-time-to-buy-and-sell-stock/description/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\"><strong>题目</strong>：给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。你只能选择 某一天 买入这只股票，并选择在 未来的某一个不同的日子 卖出该股票。设计一个算法来计算你所能获取的最大利润。返回你可以从这笔交易中获取的最大利润。如果你不能获取任何利润，返回 0 。</a></p>\"}")
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
