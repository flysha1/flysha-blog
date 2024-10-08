<template><div><h1 id="取值与单位" tabindex="-1"><a class="header-anchor" href="#取值与单位"><span>取值与单位</span></a></h1>
<h2 id="长度" tabindex="-1"><a class="header-anchor" href="#长度"><span>长度</span></a></h2>
<p>长度值适用于 水平 或 垂直 方向的尺寸。长度值表示为 <code v-pre>&lt;length&gt;</code>。长度值的格式是：</p>
<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">number </span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">+</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> 长度单位 = length</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>说明：</p>
<ul>
<li>注意一定要有单位，除非这个值是 0。如果长度值是 0，单位可有可无；</li>
<li>有些特性支持负的长度值。但是如果给一个不支持负长度值的特性设置一个负的值，那么这个声明会被忽略；</li>
<li>长度单位可分为 相对长度单位 和 绝对长度单位。</li>
</ul>
<h3 id="相对长度单位" tabindex="-1"><a class="header-anchor" href="#相对长度单位"><span>相对长度单位</span></a></h3>
<p>相对长度单位又可以分为 <strong>文本相对长度单位</strong> 和 <strong>视口相对长度单位</strong></p>
<ul>
<li>文本相对长度单位（Font-relative Length Units）</li>
</ul>
<table>
<thead>
<tr>
<th>长度单位</th>
<th>说明</th>
<th>版本</th>
</tr>
</thead>
<tbody>
<tr>
<td>em</td>
<td>相对于当前对象内文本的字体尺寸。</td>
<td>CSS1</td>
</tr>
<tr>
<td>ex</td>
<td>相对于字符 x 的高度。通常为字体高度的一半。</td>
<td>CSS1</td>
</tr>
<tr>
<td>ch</td>
<td>相当于数字 0 的宽度。</td>
<td>CSS3</td>
</tr>
<tr>
<td>rem</td>
<td>相对于根元素（即 <code v-pre>&lt;html&gt;</code> 元素）font-size 计算值的倍数</td>
<td>CSS3</td>
</tr>
</tbody>
</table>
<ul>
<li>视口相对长度单位（Viewport-relative Length Units）</li>
</ul>
<table>
<thead>
<tr>
<th>长度单位</th>
<th>说明</th>
<th>版本</th>
</tr>
</thead>
<tbody>
<tr>
<td>vw</td>
<td>相对于视口的宽度。视口被均分为 100 单位的 <code v-pre>vw</code></td>
<td>CSS3</td>
</tr>
<tr>
<td>vh</td>
<td>相对于视口的高度。视口被均分为 100 单位的 <code v-pre>vh</code></td>
<td>CSS3</td>
</tr>
<tr>
<td>vmax</td>
<td>相对于视口的宽度或高度，总是相对于大的那个。视口的宽度或高度被均分为 100 单位的 <code v-pre>vmax</code></td>
<td>CSS3</td>
</tr>
<tr>
<td>vmin</td>
<td>相对于视口的宽度或高度，总是相对于小的那个。视口的宽度或高度被均分为 100 单位的 <code v-pre>vmin</code></td>
<td>CSS3</td>
</tr>
</tbody>
</table>
<h3 id="绝对长度单位-absolute-length-units" tabindex="-1"><a class="header-anchor" href="#绝对长度单位-absolute-length-units"><span>绝对长度单位（Absolute Length Units）</span></a></h3>
<table>
<thead>
<tr>
<th>长度单位</th>
<th>说明</th>
<th>版本</th>
</tr>
</thead>
<tbody>
<tr>
<td>px</td>
<td>像素（Pixels）</td>
<td>CSS1</td>
</tr>
<tr>
<td>pt</td>
<td>点（Points）</td>
<td>CSS1</td>
</tr>
<tr>
<td>pc</td>
<td>派卡（Picas）</td>
<td>CSS1</td>
</tr>
<tr>
<td>cm</td>
<td>厘米</td>
<td>CSS1</td>
</tr>
<tr>
<td>mm</td>
<td>毫米</td>
<td>CSS1</td>
</tr>
<tr>
<td>q</td>
<td>1/4 毫米</td>
<td>CSS1</td>
</tr>
<tr>
<td>in</td>
<td>英寸（Inches）</td>
<td>CSS1</td>
</tr>
</tbody>
</table>
<h2 id="角度" tabindex="-1"><a class="header-anchor" href="#角度"><span>角度</span></a></h2>
<table>
<thead>
<tr>
<th>角度单位</th>
<th>说明</th>
<th>版本</th>
</tr>
</thead>
<tbody>
<tr>
<td>deg</td>
<td>度（Degrees）</td>
<td>CSS3</td>
</tr>
<tr>
<td>grad</td>
<td>梯度（Gradians）</td>
<td>CSS3</td>
</tr>
<tr>
<td>rad</td>
<td>弧度（Radians）</td>
<td>CSS3</td>
</tr>
<tr>
<td>turn</td>
<td>转、圈（Turns）</td>
<td>CSS3</td>
</tr>
</tbody>
</table>
<h2 id="时间" tabindex="-1"><a class="header-anchor" href="#时间"><span>时间</span></a></h2>
<p><code v-pre>&lt;time&gt;</code> 表达时间单位。</p>
<table>
<thead>
<tr>
<th>时间单位</th>
<th>说明</th>
<th>版本</th>
</tr>
</thead>
<tbody>
<tr>
<td>s</td>
<td>秒</td>
<td>CSS3</td>
</tr>
<tr>
<td>ms</td>
<td>浩渺</td>
<td>CSS3</td>
</tr>
</tbody>
</table>
<p><strong>注意</strong>：</p>
<ul>
<li>时间不允许有负值</li>
<li>时间单位包括有：<code v-pre>ms</code>、<code v-pre>s</code></li>
<li>单位换算：<code v-pre>1s = 1000ms</code></li>
</ul>
<h2 id="颜色" tabindex="-1"><a class="header-anchor" href="#颜色"><span>颜色</span></a></h2>
<table>
<thead>
<tr>
<th>名称</th>
<th>说明</th>
<th>版本</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>&lt;color&gt;</code></td>
<td>用于表示颜色的关键字或者数值规则</td>
<td>CSS1/CSS3</td>
</tr>
<tr>
<td>Color Name</td>
<td>用颜色名称来指定颜色。包括基本颜色关键字、系统颜色、SVG 颜色关键字等。</td>
<td>CSS1</td>
</tr>
<tr>
<td>HEX</td>
<td>十六进制记法。语法如 <code v-pre>#rrggbb</code> 或 <code v-pre>#rgb</code></td>
<td>CSS1</td>
</tr>
<tr>
<td>RGB</td>
<td>RGB 记法</td>
<td>CSS1</td>
</tr>
<tr>
<td>RGBA</td>
<td>RGBA 记法</td>
<td>CSS3</td>
</tr>
<tr>
<td>HSL</td>
<td>HSL 记法</td>
<td>CSS3</td>
</tr>
<tr>
<td>HSLA</td>
<td>HSLA 记法</td>
<td>CSS3</td>
</tr>
<tr>
<td>transparent</td>
<td>全透明</td>
<td>CSS1/CSS3</td>
</tr>
<tr>
<td>currentColor</td>
<td>当前颜色</td>
<td>CSS3</td>
</tr>
</tbody>
</table>
<h2 id="文本" tabindex="-1"><a class="header-anchor" href="#文本"><span>文本</span></a></h2>
<table>
<thead>
<tr>
<th>名称</th>
<th>说明</th>
<th>版本</th>
</tr>
</thead>
<tbody>
<tr>
<td>inherit</td>
<td>该值使得属性能够继承祖先设置。</td>
<td>CSS2.1</td>
</tr>
<tr>
<td>initial</td>
<td>属性初始值。</td>
<td>CSS3</td>
</tr>
<tr>
<td>unset</td>
<td>擦除属性申明。</td>
<td>CSS3</td>
</tr>
<tr>
<td><code v-pre>&lt;string&gt;</code></td>
<td>字符串（含转义字符串）。</td>
<td>CSS2</td>
</tr>
<tr>
<td><code v-pre>&lt;url&gt;</code></td>
<td>在网页上提供一个资源地址。（图像、声频、视频或浏览器支持的其他任何资源）</td>
<td>CSS2</td>
</tr>
<tr>
<td><code v-pre>&lt;identifier&gt;</code></td>
<td>使用用户自定义标识名作为组件取值。</td>
<td>CSS2</td>
</tr>
</tbody>
</table>
<h2 id="图像" tabindex="-1"><a class="header-anchor" href="#图像"><span>图像</span></a></h2>
<table>
<thead>
<tr>
<th>名称</th>
<th>说明</th>
<th>版本</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>&lt;image&gt;</code></td>
<td>用来表示一个 2D 图像</td>
<td>CSS1/CSS3</td>
</tr>
<tr>
<td><code v-pre>image()</code></td>
<td>用于指定图像或着图像替代</td>
<td>CSS3</td>
</tr>
<tr>
<td><code v-pre>image-set()</code></td>
<td>根据用户设备的分辨率匹配合适的图像</td>
<td>CSS3</td>
</tr>
<tr>
<td><code v-pre>&lt;gradient&gt;</code></td>
<td>使用简单的语法实现颜色渐变，以便 UA 在渲染页面自动生成图像</td>
<td>CSS3</td>
</tr>
<tr>
<td><code v-pre>linear-gradient()</code></td>
<td>用线性渐变创建图像</td>
<td>CSS3</td>
</tr>
<tr>
<td><code v-pre>radial-gradient()</code></td>
<td>用径向渐变创建图像</td>
<td>CSS3</td>
</tr>
<tr>
<td><code v-pre>repeating-linear-gradient()</code></td>
<td>用重复的线形渐变创建图像</td>
<td>CSS3</td>
</tr>
<tr>
<td><code v-pre>repeating-radial-gradient()</code></td>
<td>用重复的径向渐变创建图像</td>
<td>CSS3</td>
</tr>
</tbody>
</table>
<h2 id="数字" tabindex="-1"><a class="header-anchor" href="#数字"><span>数字</span></a></h2>
<table>
<thead>
<tr>
<th>名称</th>
<th>说明</th>
<th>版本</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>&lt;number&gt;</code></td>
<td>浮点数</td>
<td>CSS2</td>
</tr>
<tr>
<td><code v-pre>&lt;integer&gt;</code></td>
<td>整数</td>
<td>CSS2</td>
</tr>
<tr>
<td><code v-pre>&lt;percentage&gt;</code></td>
<td><code v-pre>&lt;number&gt;</code> 接 <code v-pre>%</code></td>
<td>CSS2</td>
</tr>
</tbody>
</table>
<ul>
<li>百分比总是相对于另一个值才存在的。</li>
</ul>
</div></template>


