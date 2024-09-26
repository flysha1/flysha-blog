import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/面试相关/算法/18.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/%E9%9D%A2%E8%AF%95%E7%9B%B8%E5%85%B3/%E7%AE%97%E6%B3%95/18.html\",\"title\":\"18. 最长回文子串\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2024-01-01T00:00:00.000Z\",\"category\":[\"前端技术\",\"面经\"],\"tag\":[\"算法\",\"动态规划\"],\"gitInclude\":[]},\"headers\":[],\"readingTime\":{\"minutes\":0.91,\"words\":272},\"filePathRelative\":\"前端技术/面试相关/算法/18.md\",\"localizedDate\":\"2024年1月1日\",\"excerpt\":\"\\n<p><a href=\\\"https://leetcode.cn/problems/longest-palindromic-substring/description/\\\" target=\\\"_blank\\\" rel=\\\"noopener noreferrer\\\"><strong>题目</strong>：给你一个字符串 s，找到 s 中最长的回文子串。</a></p>\\n<p>如果字符串的反序与原始字符串相同，则该字符串称为回文字符串。</p>\\n<ul>\\n<li>示例 1：</li>\\n</ul>\\n<p>输入：s = \\\"babad\\\"</p>\\n<p>输出：\\\"bab\\\"</p>\\n<p>解释：\\\"aba\\\" 同样是符合题意的答案。</p>\"}")
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
