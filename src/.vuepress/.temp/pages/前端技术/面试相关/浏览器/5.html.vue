<template><div><h1 id="_5-cookie、localstorage、sessionstorage" tabindex="-1"><a class="header-anchor" href="#_5-cookie、localstorage、sessionstorage"><span>5. Cookie、LocalStorage、SessionStorage</span></a></h1>
<h2 id="cookie" tabindex="-1"><a class="header-anchor" href="#cookie"><span>Cookie</span></a></h2>
<ul>
<li>
<p>大小只有4kb</p>
</li>
<li>
<p>跨域不能共享</p>
</li>
<li>
<p>不安全，容易被劫持</p>
</li>
<li>
<p>只存在请求头中</p>
</li>
</ul>
<h2 id="sessionstorage" tabindex="-1"><a class="header-anchor" href="#sessionstorage"><span>SessionStorage</span></a></h2>
<ul>
<li>
<p>存储在内存中，体积相对较大</p>
</li>
<li>
<p>页面关闭，数据会消失</p>
</li>
<li>
<p>相对Cookie安全</p>
</li>
</ul>
<h2 id="localstorage" tabindex="-1"><a class="header-anchor" href="#localstorage"><span>LocalStorage</span></a></h2>
<ul>
<li>
<p>体积大，可以存储更多内容。</p>
</li>
<li>
<p>生命周期长，除非手动删除，不然会一直存在</p>
</li>
<li>
<p>存储在硬盘中，不会像Cookie一样被请求携带</p>
</li>
</ul>
</div></template>


