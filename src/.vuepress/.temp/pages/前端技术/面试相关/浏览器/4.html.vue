<template><div><h1 id="_4-浏览器渲染" tabindex="-1"><a class="header-anchor" href="#_4-浏览器渲染"><span>4. 浏览器渲染</span></a></h1>
<h2 id="_1-常见浏览器所用内核" tabindex="-1"><a class="header-anchor" href="#_1-常见浏览器所用内核"><span>1. 常见浏览器所用内核</span></a></h2>
<ul>
<li>
<p>IE浏览器内核，<code v-pre>Trident</code> 内核，也是俗称的IE内核</p>
</li>
<li>
<p>Chrome 浏览器内核，以前是 <code v-pre>Webkit</code> 内核，现在是 <code v-pre>Blink</code> 内核</p>
</li>
<li>
<p>Firefox 浏览器内核：<code v-pre>Gecko</code> 内核，俗称 Firefox 内核</p>
</li>
<li>
<p>Safari 浏览器内核：<code v-pre>Webkit</code> 内核</p>
</li>
<li>
<p>360浏览器、猎豹浏览器内核：<code v-pre>IE + Chrome</code> 双内核</p>
</li>
</ul>
<h2 id="_2-浏览器的渲染过程" tabindex="-1"><a class="header-anchor" href="#_2-浏览器的渲染过程"><span>2. 浏览器的渲染过程</span></a></h2>
<ol>
<li>
<p>解析文档，生成 <code v-pre>DOM</code> 树</p>
</li>
<li>
<p>解析 <code v-pre>CSS</code> ，根据 <code v-pre>CSS</code> 规则生成 <code v-pre>CSSOM</code> 规则树</p>
</li>
<li>
<p>在 <code v-pre>CSSOM</code> 树和 <code v-pre>DOM</code> 树生成完后，合并 <code v-pre>DOM</code> 、 <code v-pre>CSSOM</code> 树构建渲染树</p>
</li>
<li>
<p>渲染树构建完成后，开始计算元素大小和位置【回流发生在这个阶段】</p>
</li>
<li>
<p>根据计算好的位置信息将内容渲染到屏幕上【重绘发生在这个阶段】</p>
</li>
</ol>
<h2 id="_3-浏览器渲染优化" tabindex="-1"><a class="header-anchor" href="#_3-浏览器渲染优化"><span>3. 浏览器渲染优化</span></a></h2>
<ul>
<li>
<p>优化 <code v-pre>javaScript</code> ，<code v-pre>JavaScript</code> 会阻塞 <code v-pre>HTML</code> 的解析，改变 <code v-pre>JavaScrip</code> 加载方式。</p>
<ul>
<li>
<p>将 <code v-pre>JavaScript</code> 放到 <code v-pre>body</code> 最后面</p>
</li>
<li>
<p>尽量使用异步加载JS资源，这样不会阻塞 <code v-pre>DOM</code> 解析，如 <code v-pre>defer</code> 、 <code v-pre>async</code></p>
</li>
</ul>
</li>
<li>
<p>优化 <code v-pre>CSS</code> 加载</p>
<ul>
<li>
<p><code v-pre>CSS</code> 样式少，使用内嵌样式</p>
</li>
<li>
<p>导入外部样式使用 <code v-pre>link</code> ，而不是 <code v-pre>@import</code> ，因为它会阻塞渲染。</p>
</li>
</ul>
</li>
<li>
<p>减少回流重绘</p>
<ul>
<li>
<p>避免频繁操作样式</p>
</li>
<li>
<p>避免频繁操作 <code v-pre>DOM</code></p>
</li>
<li>
<p>复杂动画使用定位脱离文当流</p>
</li>
<li>
<p>使用 <code v-pre>transform</code> 替代动画</p>
</li>
</ul>
</li>
</ul>
<h2 id="_4-回流与重绘" tabindex="-1"><a class="header-anchor" href="#_4-回流与重绘"><span>4. 回流与重绘</span></a></h2>
<p><strong>回流</strong>：当DOM变化影响了元素，比如元素的尺寸、布局、显示隐藏等改变了，需要重写构建。每个页面至少需要一次回流，就是在页面第一次加载的时候，这个时候一定会发生回流。</p>
<p><strong>重绘</strong>：当一个元素的外观发生变化，但是没有改变布局，重新渲染元素的外观。比如 <code v-pre>background-color</code> 、 <code v-pre>color</code></p>
<p><strong>如何避免回流重绘</strong>：</p>
<ul>
<li>
<p>避免使用 <code v-pre>table</code> 布局</p>
</li>
<li>
<p>尽可能在 <code v-pre>DOM</code> 树的最末端改变 <code v-pre>class</code></p>
</li>
<li>
<p>不要频繁的操作元素的样式</p>
</li>
<li>
<p>避免设置多层内联样式</p>
</li>
<li>
<p>开启 <code v-pre>GPU</code> 加速</p>
</li>
<li>
<p>使用 <code v-pre>absolute</code> 或者 <code v-pre>fixed</code> ，脱离标准文档流</p>
</li>
</ul>
<p><strong>注意</strong>：回流必将引起重绘，而重绘不一定会引起回流</p>
</div></template>


