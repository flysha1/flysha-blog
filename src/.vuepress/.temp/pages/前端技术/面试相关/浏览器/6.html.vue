<template><div><h1 id="_6-跨域问题" tabindex="-1"><a class="header-anchor" href="#_6-跨域问题"><span>6. 跨域问题</span></a></h1>
<h2 id="同源策略" tabindex="-1"><a class="header-anchor" href="#同源策略"><span>同源策略</span></a></h2>
<p>跨域问题其实就是浏览器的同源策略造成的。 同源指的是：协议、端口号、域名必须一致。</p>
<h2 id="如何解决跨域问题" tabindex="-1"><a class="header-anchor" href="#如何解决跨域问题"><span>如何解决跨域问题</span></a></h2>
<ul>
<li>
<p>CORS：服务器开启跨域资源共享</p>
</li>
<li>
<p>JSONP：利用 <code v-pre>&lt;script&gt;</code> 标签不存在跨域限制，只支持 <code v-pre>GET</code> 请求，且不安全。</p>
</li>
<li>
<p>nginx 代理跨域</p>
</li>
<li>
<p>nodejs 中间件代理跨域，通过node开启一个代理服务器。</p>
</li>
</ul>
</div></template>


