import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/面试相关/算法/12.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/%E9%9D%A2%E8%AF%95%E7%9B%B8%E5%85%B3/%E7%AE%97%E6%B3%95/12.html\",\"title\":\"12. 三数之和\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2024-01-01T00:00:00.000Z\",\"category\":[\"前端技术\",\"面经\"],\"tag\":[\"算法\",\"双指针\"],\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":1.3,\"words\":389},\"filePathRelative\":\"前端技术/面试相关/算法/12.md\",\"localizedDate\":\"2024年1月1日\",\"excerpt\":\"\\n<p><a href=\\\"https://leetcode.cn/problems/3sum/description/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\"><strong>题目</strong>：给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，同时还满足 nums[i] + nums[j] + nums[k] == 0 。请你返回所有和为 0 且不重复的三元组。</a></p>\\n<p><em><strong>注意</strong></em>：答案中不可以包含重复的三元组。</p>\"}")
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
