import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/面试相关/算法/19.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/%E9%9D%A2%E8%AF%95%E7%9B%B8%E5%85%B3/%E7%AE%97%E6%B3%95/19.html\",\"title\":\"19. 求根节点到叶节点数字之和\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2024-01-01T00:00:00.000Z\",\"category\":[\"前端技术\",\"面经\"],\"tag\":[\"算法\",\"DFS\",\"BFS\"],\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":1.06,\"words\":318},\"filePathRelative\":\"前端技术/面试相关/算法/19.md\",\"localizedDate\":\"2024年1月1日\",\"excerpt\":\"\\n<p><a href=\\\"https://leetcode.cn/problems/sum-root-to-leaf-numbers/description/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\"><strong>题目</strong>：你一个二叉树的根节点 root ，树中每个节点都存放有一个 0 到 9 之间的数字。每条从根节点到叶节点的路径都代表一个数字，计算从根节点到叶节点生成的 所有数字之和 。</a></p>\\n<p>示例 1：</p>\\n<figure><img src=\\\"https://assets.leetcode.com/uploads/2021/02/19/num1tree.jpg\\\" alt=\\\"示例1\\\" tabindex=\\\"0\\\" loading=\\\"lazy\\\"><figcaption>示例1</figcaption></figure>\"}")
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
