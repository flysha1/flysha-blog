<template><div><h1 id="continue-语句" tabindex="-1"><a class="header-anchor" href="#continue-语句"><span>continue 语句</span></a></h1>
<p><code v-pre>continue</code> 语句用于结束当前（或标签）的循环语句的本次迭代，并继续执行循环的下一次迭代。</p>
<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">break</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">labelname</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">];</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h3>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>labelname</code></td>
<td style="text-align:left">可选，与语句标签相关联的标识符。</td>
</tr>
</tbody>
</table>
<h3 id="描述" tabindex="-1"><a class="header-anchor" href="#描述"><span>描述</span></a></h3>
<ul>
<li>与 <code v-pre>break</code> 语句的区别在于，<code v-pre>continue</code> 并不会终止循环的迭代，而是：
<ul>
<li>在 <code v-pre>while</code> 循环中，在循环开始处指定的条件判断语句会重复检测，如果检测结果为 <code v-pre>true</code>，循环体会从头开始执行。</li>
<li>在 <code v-pre>do/while</code> 循环中，程序的执行直接跳到循环结尾处，这时会重新判断循环条件，之后才会继续下一次循环。</li>
<li>在 <code v-pre>for</code> 循环中，首先执行更新语句，然后再次执行判断语句，用以判断是否继续执行循环体。</li>
<li>在 <code v-pre>for/in</code> 循环中，循环开始遍历下一个属性名，这个属性名赋给了指定的变量。</li>
</ul>
</li>
<li><code v-pre>continue</code> 语句可以包含一个可选的标号以控制程序跳转到指定循环的下一次迭代，而非当前循环。此时要求 <code v-pre>continue</code> 语句在对应的循环内部。</li>
<li>不管 <code v-pre>continue</code> 语句带不带标签，它只能在循环体内使用。在其他地方使用将会报语法错误。</li>
<li><code v-pre>continue</code> 语句和 <code v-pre>labelname</code> 之间不能有换行。</li>
</ul>
<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2>
<h3 id="代码示例" tabindex="-1"><a class="header-anchor" href="#代码示例"><span>代码示例</span></a></h3>
<p>在 <code v-pre>for</code> 语句中使用 <code v-pre>continue</code></p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> num</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">for</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> i</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">i</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> &#x3C;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 10</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">; </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">i</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">++</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">i</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> %</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 5</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> ==</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    continue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">  num</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">++</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">num</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 8</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code v-pre>while</code> 语句中使用 <code v-pre>continue</code></p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">i</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">n</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">while</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">i</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> &#x3C;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">  i</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">++</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  if</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> (</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">i</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> ===</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">    continue</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">  n</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> +=</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


