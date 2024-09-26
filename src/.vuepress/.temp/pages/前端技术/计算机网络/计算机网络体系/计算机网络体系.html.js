import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/计算机网络/计算机网络体系/计算机网络体系.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C%E4%BD%93%E7%B3%BB/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C%E4%BD%93%E7%B3%BB.html\",\"title\":\"计算机网络体系\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2017-12-11T00:00:00.000Z\",\"order\":1,\"category\":[\"前端技术\"],\"tag\":[\"计算机网络\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"OSI 七层模型\",\"slug\":\"osi-七层模型\",\"link\":\"#osi-七层模型\",\"children\":[]},{\"level\":2,\"title\":\"TCP/IP 概念层模型\",\"slug\":\"tcp-ip-概念层模型\",\"link\":\"#tcp-ip-概念层模型\",\"children\":[]}],\"readingTime\":{\"minutes\":2.61,\"words\":784},\"filePathRelative\":\"前端技术/计算机网络/计算机网络体系/计算机网络体系.md\",\"localizedDate\":\"2017年12月11日\",\"excerpt\":\"\\n<figure><img src=\\\"/blog/assets/images/iso.cbce9765.gif\\\" alt=\\\"\\\" tabindex=\\\"0\\\" loading=\\\"lazy\\\"><figcaption></figcaption></figure>\\n<figure><img src=\\\"/blog/assets/images/computer-network.jpg\\\" alt=\\\"\\\" tabindex=\\\"0\\\" loading=\\\"lazy\\\"><figcaption></figcaption></figure>\\n<h2>OSI 七层模型</h2>\\n<ol>\\n<li><strong>应用层</strong> ：允许访问 OSI 环境的手段（应用协议数据单元 APDU）</li>\\n<li><strong>表示层</strong> ：对数据进行翻译、加密和压缩（表示协议数据单元 PPDU）</li>\\n<li><strong>会话层</strong> ：建立、管理和终止会话（会话协议数据单元 SPDU）</li>\\n<li><strong>传输层</strong> ：提供端到端的可靠报文传递和错误恢复（段 Segment）</li>\\n<li><strong>网络层</strong> ：负责数据包从源到宿的传递和网际互连（包 PackeT）</li>\\n<li><strong>数据链路层</strong> ：将比特组装成帧和点到点的传递（帧 Frame）</li>\\n<li><strong>物理层</strong> ：通过媒介传输比特,确定机械及电气规范（比特 Bit）</li>\\n</ol>\"}")
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
