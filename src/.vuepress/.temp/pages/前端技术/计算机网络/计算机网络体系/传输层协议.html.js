import comp from "D:/code/vuepress/flysha-blog/src/.vuepress/.temp/pages/前端技术/计算机网络/计算机网络体系/传输层协议.html.vue"
const data = JSON.parse("{\"path\":\"/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C%E4%BD%93%E7%B3%BB/%E4%BC%A0%E8%BE%93%E5%B1%82%E5%8D%8F%E8%AE%AE.html\",\"title\":\"传输层协议\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2017-12-11T00:00:00.000Z\",\"order\":2,\"category\":[\"前端技术\"],\"tag\":[\"计算机网络\"],\"gitInclude\":[]},\"headers\":[{\"level\":2,\"title\":\"TCP\",\"slug\":\"tcp\",\"link\":\"#tcp\",\"children\":[{\"level\":3,\"title\":\"数据包结构\",\"slug\":\"数据包结构\",\"link\":\"#数据包结构\",\"children\":[]},{\"level\":3,\"title\":\"三次握手\",\"slug\":\"三次握手\",\"link\":\"#三次握手\",\"children\":[]},{\"level\":3,\"title\":\"四次挥手\",\"slug\":\"四次挥手\",\"link\":\"#四次挥手\",\"children\":[]},{\"level\":3,\"title\":\"重传机制\",\"slug\":\"重传机制\",\"link\":\"#重传机制\",\"children\":[]},{\"level\":3,\"title\":\"拥塞控制机制\",\"slug\":\"拥塞控制机制\",\"link\":\"#拥塞控制机制\",\"children\":[]},{\"level\":3,\"title\":\"流量控制机制\",\"slug\":\"流量控制机制\",\"link\":\"#流量控制机制\",\"children\":[]},{\"level\":3,\"title\":\"可靠传输机制\",\"slug\":\"可靠传输机制\",\"link\":\"#可靠传输机制\",\"children\":[]}]},{\"level\":2,\"title\":\"UDP\",\"slug\":\"udp\",\"link\":\"#udp\",\"children\":[{\"level\":3,\"title\":\"特点\",\"slug\":\"特点\",\"link\":\"#特点\",\"children\":[]},{\"level\":3,\"title\":\"实践\",\"slug\":\"实践\",\"link\":\"#实践\",\"children\":[]}]},{\"level\":2,\"title\":\"数据通信形式\",\"slug\":\"数据通信形式\",\"link\":\"#数据通信形式\",\"children\":[]},{\"level\":2,\"title\":\"TCP 与 UDP\",\"slug\":\"tcp-与-udp\",\"link\":\"#tcp-与-udp\",\"children\":[]}],\"readingTime\":{\"minutes\":11.65,\"words\":3495},\"filePathRelative\":\"前端技术/计算机网络/计算机网络体系/传输层协议.md\",\"localizedDate\":\"2017年12月11日\",\"excerpt\":\"\\n<p>传输层（Transport Layer）的主要任务就是负责向两台主机进程之间的通信提供通用的 <strong>数据传输服务</strong>。应用进程利用该服务传送应用层报文。</p>\\n<p>网络协议族中有两个具有代表性的传输层协议，分别是 TCP 和 UDP。</p>\\n<ul>\\n<li>传输控制协议 TCP：提供面向连接的，可靠的数据传输服务</li>\\n<li>用户数据协议 UDP：提供无连接的，尽最大努力的数据传输服务（不保证数据传输的可靠性）</li>\\n</ul>\\n<h2>TCP</h2>\\n<p><strong>传输控制协议</strong>（Transmission Control Protocol，简称 TCP）是一种 <strong>面向连接</strong>（连接导向）的、可靠的、 基于 IP 协议的传输层协议。</p>\"}")
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
