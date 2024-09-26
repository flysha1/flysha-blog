<template><div><h1 id="赋值运算符" tabindex="-1"><a class="header-anchor" href="#赋值运算符"><span>赋值运算符</span></a></h1>
<p>一个 <strong>赋值运算符</strong>（assignment operator）将它右边操作数的值赋给它左边的操作数。</p>
<p>下列为 ECMAScript 标准规范的 Assignment Operator：</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">*</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> /=</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> %=</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> +=</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> -=</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD"> &#x3C;&#x3C;=</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD"> >>=</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD"> >>>=</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD"> &#x26;=</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD"> ^=</span><span style="--shiki-light:#0184BC;--shiki-dark:#C678DD"> |=</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> **=</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th style="text-align:left">运算名称</th>
<th style="text-align:left">简写的操作符</th>
<th style="text-align:left">分解含义</th>
<th style="text-align:left">符号</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">赋值</td>
<td style="text-align:left"><code v-pre>x = y</code></td>
<td style="text-align:left"><code v-pre>x = y</code></td>
<td style="text-align:left"><code v-pre>=</code></td>
</tr>
<tr>
<td style="text-align:left">加法赋值</td>
<td style="text-align:left"><code v-pre>x += y</code></td>
<td style="text-align:left"><code v-pre>x = x + y</code></td>
<td style="text-align:left"><code v-pre>+=</code></td>
</tr>
<tr>
<td style="text-align:left">减法赋值</td>
<td style="text-align:left"><code v-pre>x -= y</code></td>
<td style="text-align:left"><code v-pre>x = x - y</code></td>
<td style="text-align:left"><code v-pre>-=</code></td>
</tr>
<tr>
<td style="text-align:left">乘法赋值</td>
<td style="text-align:left"><code v-pre>x *= y</code></td>
<td style="text-align:left"><code v-pre>x = x * y</code></td>
<td style="text-align:left"><code v-pre>*=</code></td>
</tr>
<tr>
<td style="text-align:left">除法赋值</td>
<td style="text-align:left"><code v-pre>x /= y</code></td>
<td style="text-align:left"><code v-pre>x = x / y</code></td>
<td style="text-align:left"><code v-pre>/=</code></td>
</tr>
<tr>
<td style="text-align:left">求余赋值</td>
<td style="text-align:left"><code v-pre>x %= y</code></td>
<td style="text-align:left"><code v-pre>x = x % y</code></td>
<td style="text-align:left"><code v-pre>%=</code></td>
</tr>
<tr>
<td style="text-align:left">求幂赋值</td>
<td style="text-align:left"><code v-pre>x ** y</code></td>
<td style="text-align:left"><code v-pre>x = x ** y</code></td>
<td style="text-align:left"><code v-pre>**</code></td>
</tr>
<tr>
<td style="text-align:left">左移位赋值</td>
<td style="text-align:left"><code v-pre>x &lt;&lt;= y</code></td>
<td style="text-align:left"><code v-pre>x = x &lt;&lt; y</code></td>
<td style="text-align:left"><code v-pre>&lt;&lt;=</code></td>
</tr>
<tr>
<td style="text-align:left">右移位赋值</td>
<td style="text-align:left"><code v-pre>x &gt;&gt;= y</code></td>
<td style="text-align:left"><code v-pre>x = x &gt;&gt; y</code></td>
<td style="text-align:left"><code v-pre>&gt;&gt;=</code></td>
</tr>
<tr>
<td style="text-align:left">无符号右移位赋值</td>
<td style="text-align:left"><code v-pre>x &gt;&gt;&gt;= y</code></td>
<td style="text-align:left"><code v-pre>x = x &gt;&gt;&gt; y</code></td>
<td style="text-align:left"><code v-pre>&gt;&gt;&gt;=</code></td>
</tr>
<tr>
<td style="text-align:left">按位与赋值</td>
<td style="text-align:left"><code v-pre>x &amp; y</code></td>
<td style="text-align:left"><code v-pre>x = x &amp; y</code></td>
<td style="text-align:left"><code v-pre>&amp;</code></td>
</tr>
<tr>
<td style="text-align:left">按位异赋值</td>
<td style="text-align:left"><code v-pre>x ^= y</code></td>
<td style="text-align:left"><code v-pre>x = x ^ y</code></td>
<td style="text-align:left"><code v-pre>^=</code></td>
</tr>
<tr>
<td style="text-align:left">按位或赋值</td>
<td style="text-align:left"><code v-pre>x |= y</code></td>
<td style="text-align:left"><code v-pre>x = x | y </code></td>
<td style="text-align:left"><code v-pre>|y</code></td>
</tr>
</tbody>
</table>
</div></template>


