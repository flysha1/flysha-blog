<template><div><h1 id="计算机网络体系" tabindex="-1"><a class="header-anchor" href="#计算机网络体系"><span>计算机网络体系</span></a></h1>
<figure><img src="/blog/assets/images/iso.cbce9765.gif" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<figure><img src="/blog/assets/images/computer-network.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="osi-七层模型" tabindex="-1"><a class="header-anchor" href="#osi-七层模型"><span>OSI 七层模型</span></a></h2>
<ol>
<li><strong>应用层</strong> ：允许访问 OSI 环境的手段（应用协议数据单元 APDU）</li>
<li><strong>表示层</strong> ：对数据进行翻译、加密和压缩（表示协议数据单元 PPDU）</li>
<li><strong>会话层</strong> ：建立、管理和终止会话（会话协议数据单元 SPDU）</li>
<li><strong>传输层</strong> ：提供端到端的可靠报文传递和错误恢复（段 Segment）</li>
<li><strong>网络层</strong> ：负责数据包从源到宿的传递和网际互连（包 PackeT）</li>
<li><strong>数据链路层</strong> ：将比特组装成帧和点到点的传递（帧 Frame）</li>
<li><strong>物理层</strong> ：通过媒介传输比特,确定机械及电气规范（比特 Bit）</li>
</ol>
<h2 id="tcp-ip-概念层模型" tabindex="-1"><a class="header-anchor" href="#tcp-ip-概念层模型"><span>TCP/IP 概念层模型</span></a></h2>
<ol>
<li><strong>应用层</strong>（Application Layer）的任务是通过应用进程间的交互来完成特定网络应用。<strong>应用层协议定义的是应用进程（进程：主机中正在运行的程序）间的通信和交互的规则</strong>。对于不同的网络应用需要不同的应用层协议。在互联网中应用层协议很多，如域名系统 DNS，支持万维网应用的 HTTP 协议，支持电子邮件的 SMTP 协议等等</li>
<li><strong>传输层</strong>（Transport Layer）的主要任务就是 <strong>负责向两台主机进程之间的通信提供通用的数据传输服务</strong>。应用进程利用该服务传送应用层报文。</li>
<li><strong>网络层</strong> 的任务就是选择合适的网间路由和交换结点，确保计算机通信的数据及时传送。在发送数据时，网络层把运输层产生的报文段或用户数据报封装成分组和包进行传送。在 TCP/IP 体系结构中，由于网络层使用 IP 协议，因此分组也叫 IP 数据报 ，简称数据报。</li>
<li><strong>数据链路层</strong>（Data Link Layer）通常简称为链路层。两台主机之间的数据传输，总是在一段一段的链路上传送的，这就需要使用专门的链路层的协议。 在两个相邻节点之间传送数据时，数据链路层将网络层接下来的 IP 数据报组装成帧，在两个相邻节点间的链路上传送帧。每一帧包括数据和必要的控制信息（如同步信息，地址信息，差错控制等）。</li>
<li>在 <strong>物理层</strong> 上所传送的数据单位是比特。 物理层（physical layer）的作用是实现相邻计算机节点之间比特流的透明传送，尽可能屏蔽掉具体传输介质和物理设备的差异。使其上面的数据链路层不必考虑网络的具体传输介质是什么。“透明传送比特流”表示经实际电路传送后的比特流没有发生变化，对传送的比特流来说，这个电路好像是看不见的。 在互联网使用的各种协议中最重要和最著名的就是 TCP/IP 两个协议。</li>
</ol>
</div></template>


