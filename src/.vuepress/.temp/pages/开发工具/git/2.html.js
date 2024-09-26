import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/开发工具/git/2.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%BC%80%E5%8F%91%E5%B7%A5%E5%85%B7/git/2.html\",\"title\":\"rebase、reset、revert区别？\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2017-12-10T00:00:00.000Z\",\"category\":[\"开发工具\"],\"tag\":[\"git\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"1. rebase\",\"slug\":\"_1-rebase\",\"link\":\"#_1-rebase\",\"children\":[]},{\"level\":2,\"title\":\"2. reset\",\"slug\":\"_2-reset\",\"link\":\"#_2-reset\",\"children\":[]},{\"level\":2,\"title\":\"3. revert\",\"slug\":\"_3-revert\",\"link\":\"#_3-revert\",\"children\":[]},{\"level\":2,\"title\":\"区别总结\",\"slug\":\"区别总结\",\"link\":\"#区别总结\",\"children\":[]}],\"readingTime\":{\"minutes\":1.48,\"words\":443},\"filePathRelative\":\"开发工具/git/2.md\",\"localizedDate\":\"2017年12月10日\",\"excerpt\":\"\\n<h2>1. rebase</h2>\\n<p><code>git rebase</code> 用于将一个分支的提交移到另一个分支上，并重新应用这些提交。主要有两种用途：</p>\\n<ul>\\n<li>\\n<p><strong>整理提交历史</strong>：将多个小的提交合并成一个更为清晰的提交历史，避免不必要的历史混乱。</p>\\n</li>\\n<li>\\n<p><strong>将本地提交与远程同步</strong>：在拉取远程更改之前，通过 <code>rebase</code> 将本地提交移动到远程提交的后面，使历史更为干净。</p>\\n</li>\\n</ul>\\n<div class=\\\"language-cmd line-numbers-mode\\\" data-highlighter=\\\"shiki\\\" data-ext=\\\"cmd\\\" data-title=\\\"cmd\\\" style=\\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\\"><pre class=\\\"shiki shiki-themes one-light one-dark-pro vp-code\\\"><code><span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"># 从当前分支拉取最新的远程变更并应用到本地分支</span></span>\\n<span class=\\\"line\\\"><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\">git </span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">pull</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> --</span><span style=\\\"--shiki-light:#E45649;--shiki-dark:#E06C75\\\">rebase</span><span style=\\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\\"> origin branch_name</span></span></code></pre>\\n<div class=\\\"line-numbers\\\" aria-hidden=\\\"true\\\" style=\\\"counter-reset:line-number 0\\\"><div class=\\\"line-number\\\"></div><div class=\\\"line-number\\\"></div></div></div>\"}")
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
