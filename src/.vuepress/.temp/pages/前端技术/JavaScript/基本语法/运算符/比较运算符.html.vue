<template><div><h1 id="比较运算符" tabindex="-1"><a class="header-anchor" href="#比较运算符"><span>比较运算符</span></a></h1>
<p>比较运算符比较它的操作数并返回一个基于表达式是否为 <code v-pre>true</code> 的逻辑值。</p>
<p>比较运算符分为 <strong>关系运算符</strong>（Relational Operators）和 <strong>等值运算符</strong>（Equality Operators）。</p>
<ul>
<li>操作数可以是数字，字符串，逻辑，对象值。</li>
<li>字符串比较是基于标准的字典顺序，使用 Unicode 值。</li>
<li>在多数情况下，如果两个操作数不是相同的类型， JavaScript 会尝试转换它们为恰当的类型来比较。这种行为通常发生在数字作为操作数的比较。</li>
<li>类型转换的例外是使用 <code v-pre>===</code> 和 <code v-pre>!==</code> 操作符，它们会执行严格的相等和不相等比较。这些运算符不会在检查相等之前转换操作数的类型。下面的表格描述了该示例代码中的各比较运算符。</li>
</ul>
<h2 id="关系运算符" tabindex="-1"><a class="header-anchor" href="#关系运算符"><span>关系运算符</span></a></h2>
<table>
<thead>
<tr>
<th style="text-align:left">运算符</th>
<th style="text-align:left">描述</th>
<th style="text-align:left">返回 <code v-pre>true</code> 的示例</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">大于 <code v-pre>&gt;</code></td>
<td style="text-align:left">左边的操作数大于右边的操作数返回 <code v-pre>true</code></td>
<td style="text-align:left"><code v-pre>b &gt; a</code></td>
</tr>
<tr>
<td style="text-align:left">大于等于 <code v-pre>&gt;=</code></td>
<td style="text-align:left">左边的操作数大于或等于右边的操作数返回 <code v-pre>true</code></td>
<td style="text-align:left"><code v-pre>b &gt;= a</code> <code v-pre>a &gt;= 1</code></td>
</tr>
<tr>
<td style="text-align:left">小于 <code v-pre>&lt;</code></td>
<td style="text-align:left">左边的操作数小于右边的操作数返回 <code v-pre>true</code></td>
<td style="text-align:left"><code v-pre>a &lt; b</code> <code v-pre>1 &lt; 2</code></td>
</tr>
<tr>
<td style="text-align:left">小于等于 <code v-pre>&lt;=</code></td>
<td style="text-align:left">左边的操作数小于或等于右边的操作数返回 <code v-pre>true</code></td>
<td style="text-align:left"><code v-pre>a &lt;= b</code> <code v-pre>b &lt;= 5</code></td>
</tr>
</tbody>
</table>
<h2 id="等值运算符" tabindex="-1"><a class="header-anchor" href="#等值运算符"><span>等值运算符</span></a></h2>
<table>
<thead>
<tr>
<th style="text-align:left">运算符</th>
<th style="text-align:left">描述</th>
<th style="text-align:left">返回 <code v-pre>true</code> 的示例</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">等于 <code v-pre>==</code></td>
<td style="text-align:left">如果两边操作数相等时返回 <code v-pre>true</code></td>
<td style="text-align:left"><code v-pre>a == 1</code> <code v-pre>'1' == 2</code> <code v-pre>1 == '1'</code></td>
</tr>
<tr>
<td style="text-align:left">不等于 <code v-pre>!=</code></td>
<td style="text-align:left">如果两边操作数不相等时返回 <code v-pre>true</code></td>
<td style="text-align:left"><code v-pre>a != 2</code> <code v-pre>b != '1'</code></td>
</tr>
<tr>
<td style="text-align:left">全等 <code v-pre>===</code></td>
<td style="text-align:left">两边操作数相等且类型相同时返回 <code v-pre>true</code></td>
<td style="text-align:left"><code v-pre>a === 1</code></td>
</tr>
<tr>
<td style="text-align:left">不全等 <code v-pre>!==</code></td>
<td style="text-align:left">两边操作数不相等或类型不同时返回 <code v-pre>true</code></td>
<td style="text-align:left"><code v-pre>a !== '1'</code> <code v-pre>1 !== '1'</code></td>
</tr>
</tbody>
</table>
<h3 id="抽象相等比较算法" tabindex="-1"><a class="header-anchor" href="#抽象相等比较算法"><span>抽象相等比较算法</span></a></h3>
<ul>
<li>若 Type(x) 与 Type(y) 相同，则
<ul>
<li>若 Type(x) 为 <code v-pre>Undefined</code>，返回 <code v-pre>true</code></li>
<li>若 Type(x) 为 <code v-pre>Null</code>，返回 <code v-pre>true</code></li>
<li>若 Type(x) 为 <code v-pre>Number</code>，则
<ul>
<li>若 x 为 <code v-pre>NaN</code>，返回 <code v-pre>false</code></li>
<li>若 y 为 <code v-pre>NaN</code>，返回 <code v-pre>false</code></li>
<li>若 x 与 y 为相等数值，返回 <code v-pre>true</code></li>
<li>若 x 为 +0 且 y 为 -0，返回 <code v-pre>true</code></li>
<li>若 x 为 -0 且 y 为 +0，返回 <code v-pre>true</code></li>
<li>返回 <code v-pre>false</code></li>
</ul>
</li>
<li>若 Type(x) 为 <code v-pre>String</code>
<ul>
<li>当 x 和 y 为完全相同的字符序列（长度相等且相同字符在相同位置）时返回 <code v-pre>true</code></li>
<li>否则，返回 <code v-pre>false</code></li>
</ul>
</li>
<li>若 Type(x) 为 <code v-pre>Boolean</code>
<ul>
<li>当 x 和 y 为同为 <code v-pre>true</code> 或者同为 <code v-pre>false</code> 时返回 <code v-pre>true</code></li>
<li>否则，返回 <code v-pre>false</code></li>
</ul>
</li>
<li>当 x 和 y 为引用用一对象时返回 <code v-pre>true</code>。否则，返回 <code v-pre>false</code>。</li>
</ul>
</li>
<li>若 x 为 <code v-pre>null</code> 且 y 为 <code v-pre>undefined</code>，返回 <code v-pre>true</code></li>
<li>若 x 为 <code v-pre>undefined</code> 且 y 为 <code v-pre>null</code>，返回 <code v-pre>true</code></li>
<li>若 Type(x) 为 <code v-pre>Number</code> 且 Type(y) 为 <code v-pre>String</code>，返回比较 <code v-pre>x == ToNumber(y)</code> 的结果</li>
<li>若 Type(x) 为 <code v-pre>String</code> 且 Type(y) 为 <code v-pre>Number</code>，返回比较 <code v-pre>ToNumber(x) == y</code> 的结果</li>
<li>若 Type(x) 为 <code v-pre>Boolean</code>，返回比较 <code v-pre>ToNumber(x) == y</code> 的结果</li>
<li>若 Type(y) 为 <code v-pre>Boolean</code>，返回比较 <code v-pre>x == ToNumber(y)</code> 的结果</li>
<li>若 Type(x) 为 <code v-pre>String</code> 或 <code v-pre>Number</code>，且 Type(y) 为 <code v-pre>Object</code>，返回比较 <code v-pre>x == ToPrimitive(y)</code> 的结果</li>
<li>若 Type(x) 为 <code v-pre>Object</code> 且 Type(y) 为 <code v-pre>String</code> 或 <code v-pre>Number</code>，返回比较 <code v-pre>ToPrimitive(x) == y</code> 的结果</li>
<li>返回 <code v-pre>false</code></li>
</ul>
<p>按以上相等之定义：</p>
<ul>
<li>字符串比较可以按这种方式强制执行：<code v-pre>'' + a == '' + b</code></li>
<li>数值比较可以按这种方式强制执行：<code v-pre>+a == +b</code></li>
<li>布尔值比较可以按这种方式强制执行：<code v-pre>!a == !b</code></li>
</ul>
<p>等值比较操作保证以下不变：</p>
<ul>
<li><code v-pre>A !== B</code> 等价于 <code v-pre>!(A == B)</code></li>
<li><code v-pre>A == B</code> 等价于 <code v-pre>B == A</code>，除了 A 与 B 的执行顺序。</li>
</ul>
<p>相等运算符不总是传递的。例如，两个不同的 String 对象，都表示相同的字符串值；== 运算符认为每个 String 对象都与字符串值相等，但是两个字符串对象互不相等。</p>
<ul>
<li><code v-pre>new String('a') == 'a'</code> 和 <code v-pre>'a' == new String('a')</code> 皆为 <code v-pre>true</code></li>
<li><code v-pre>new String('a') == new String('a')</code> 为 <code v-pre>false</code></li>
</ul>
<p>字符串比较使用的方式是简单地检测字符编码单元序列是否相同。不会做更复杂的、基于语义的字符或者字符串相等的定义以及 Unicode 规范中定义的 Collating Order。所以 Unicode 标准中认为相等的 String 值可能被检测为不等。实际上这一算法认为两个字符串已经是经过规范化的形式。</p>
<h3 id="引用数据类型间比较" tabindex="-1"><a class="header-anchor" href="#引用数据类型间比较"><span>引用数据类型间比较</span></a></h3>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> a</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> function</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {};</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> b</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> function</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">a</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> ===</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">([] </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">===</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> []);</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">({} </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2">===</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {});</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// false</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们访问引用数据类型（对象、数组、函数等等）的值时，首先从栈中获得该对象的 <strong>地址指针</strong>，然后再从 <strong>堆内存</strong> 中取得所需的数据。</p>
<p>变量 <code v-pre>a</code> 实际保存的是指向堆内存中对象的一个指针，而变量 <code v-pre>b</code> 保存的是指向堆内存中的另一个对象的指针，虽然这两个对象的值时一样的，但它们是独立的两个对象，占了两份内存空间，所以它们互不相等。</p>
<p>而当将一个为引用数据类型的值的变量赋值给另一个变量时，即拷贝了前者的内存空间的地址指针，因此它们都指向堆内存中同一个对象。</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">let</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> x</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">let</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> y</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> x</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">x</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> ===</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> y</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// true</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


