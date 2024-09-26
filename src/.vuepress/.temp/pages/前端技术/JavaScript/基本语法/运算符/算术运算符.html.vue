<template><div><h1 id="算术运算符" tabindex="-1"><a class="header-anchor" href="#算术运算符"><span>算术运算符</span></a></h1>
<p>算术运算符使用数值（字面量或者变量）作为操作数进行运算并返回一个数值。</p>
<p>标准的算术运算符就是加减乘除 <code v-pre>+</code>、<code v-pre>-</code>、<code v-pre>*</code> 和 <code v-pre>/</code>。</p>
<p>当操作数是浮点数时，这些运算符表现得跟它们在大多数编程语言中一样（特殊要注意的是，除零会产生 <code v-pre>Infinity</code> ）。</p>
<table>
<thead>
<tr>
<th style="text-align:left">运算符</th>
<th style="text-align:left">描述</th>
<th style="text-align:left">示例</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>+</code></td>
<td style="text-align:left">加法</td>
<td style="text-align:left"><code v-pre>1 + 1 = 2</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>-</code></td>
<td style="text-align:left">减法</td>
<td style="text-align:left"><code v-pre>2 - 1 = 1</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>*</code></td>
<td style="text-align:left">乘法</td>
<td style="text-align:left"><code v-pre>3 * 3 = 9</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>/</code></td>
<td style="text-align:left">除法</td>
<td style="text-align:left"><code v-pre>10 / 5 = 2</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>%</code></td>
<td style="text-align:left">求余，返回相除后余值</td>
<td style="text-align:left"><code v-pre>12 % 5 = 2</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>++</code></td>
<td style="text-align:left">自增（更新运算符），分为前自增和后自增</td>
<td style="text-align:left">具体参考 <RouteLink to="/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/JavaScript/%E5%9F%BA%E6%9C%AC%E8%AF%AD%E6%B3%95/%E8%BF%90%E7%AE%97%E7%AC%A6/%E6%9B%B4%E6%96%B0%E8%BF%90%E7%AE%97%E7%AC%A6.html">更新运算符</RouteLink></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>--</code></td>
<td style="text-align:left">自减（更新运算符），分为前自减和后自减</td>
<td style="text-align:left">具体参考 <RouteLink to="/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/JavaScript/%E5%9F%BA%E6%9C%AC%E8%AF%AD%E6%B3%95/%E8%BF%90%E7%AE%97%E7%AC%A6/%E6%9B%B4%E6%96%B0%E8%BF%90%E7%AE%97%E7%AC%A6.html">更新运算符</RouteLink></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>-</code></td>
<td style="text-align:left">一元负值符，返回操作数的负值</td>
<td style="text-align:left"><code v-pre>-</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>+</code></td>
<td style="text-align:left">一元正值符，若操作数在操作前非数字类型，将试图将其转换成数字类型</td>
<td style="text-align:left"><code v-pre>+foo</code></td>
</tr>
<tr>
<td style="text-align:left"><code v-pre>**</code></td>
<td style="text-align:left">指数运算符，计算 base（底数） 的 exponent（指数）次方</td>
<td style="text-align:left"><code v-pre>2 ** 3 = 8</code></td>
</tr>
</tbody>
</table>
<h2 id="实践示例" tabindex="-1"><a class="header-anchor" href="#实践示例"><span>实践示例</span></a></h2>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">-</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">9</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> %</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// -1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> +</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> -+</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">+</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">+-+</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)))</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 2</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="实现指数运算符" tabindex="-1"><a class="header-anchor" href="#实现指数运算符"><span>实现指数运算符</span></a></h3>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> calculateExponent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">base</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">exponent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">exponent</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> ===</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> base</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  } </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">else</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    return</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> base</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> *</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> calculateExponent</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">base</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">exponent</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> -</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


