<template><div><h1 id="运算符优先级" tabindex="-1"><a class="header-anchor" href="#运算符优先级"><span>运算符优先级</span></a></h1>
<p>运算符的优先级决定了表达式中运算执行的先后顺序，优先级高的运算符最先被执行。</p>
<h2 id="结合性" tabindex="-1"><a class="header-anchor" href="#结合性"><span>结合性</span></a></h2>
<p>结合性决定了拥有相同优先级的运算符的执行顺序。考虑下面这个表达式：</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">a</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> OP</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> b</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> OP</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> c</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>
<p>左结合（左到右）相当于把左边的子表达式加上小括号 <code v-pre>(a OP b) OP c</code></p>
</li>
<li>
<p>右关联（右到左）相当于 <code v-pre>a OP (b OP c)</code></p>
</li>
</ul>
<p>赋值运算符是右关联的，所以你可以这么写：</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">a</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> b</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>结果：<code v-pre>a</code> 和 <code v-pre>b</code> 的值都会成为 <code v-pre>5</code>。这是因为赋值运算符的返回结果就是赋值运算符右边的那个值，具体过程是：<code v-pre>b</code> 被赋值为 <code v-pre>5</code>，然后 <code v-pre>a</code> 也被赋值为 <code v-pre>b = 5</code> 的返回值，也就是 <code v-pre>5</code>。</p>
<h2 id="汇总表" tabindex="-1"><a class="header-anchor" href="#汇总表"><span>汇总表</span></a></h2>
<p>以下示例中使用 <code v-pre>foo</code> 和 <code v-pre>bar</code> 作为演示变量或表达式。</p>
<table>
<thead>
<tr>
<th style="text-align:left">优先级</th>
<th style="text-align:left">运算类型</th>
<th style="text-align:left">关联性</th>
<th style="text-align:left">运算符示例</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">20</td>
<td style="text-align:left">分组表达式</td>
<td style="text-align:left">N/A</td>
<td style="text-align:left"><code v-pre>(foo)</code></td>
</tr>
<tr>
<td style="text-align:left">19</td>
<td style="text-align:left">属性访问器</td>
<td style="text-align:left">从左到右</td>
<td style="text-align:left"><code v-pre>foo.bar</code></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left">属性访问器</td>
<td style="text-align:left">从左到右</td>
<td style="text-align:left"><code v-pre>foo[bar]</code></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left">实例化对象（带参数列表）</td>
<td style="text-align:left">N/A</td>
<td style="text-align:left"><code v-pre>new Foo(bar)</code></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left">函数调用</td>
<td style="text-align:left">从左到右</td>
<td style="text-align:left"><code v-pre>foo()</code></td>
</tr>
<tr>
<td style="text-align:left">18</td>
<td style="text-align:left">实例化对象（无参数列表）</td>
<td style="text-align:left">从左到右</td>
<td style="text-align:left"><code v-pre>new Foo</code></td>
</tr>
<tr>
<td style="text-align:left">17</td>
<td style="text-align:left">更新表达式（后置递增）</td>
<td style="text-align:left">N/A</td>
<td style="text-align:left"><code v-pre>foo++</code></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left">更新表达式（后置递减）</td>
<td style="text-align:left">N/A</td>
<td style="text-align:left"><code v-pre>foo--</code></td>
</tr>
<tr>
<td style="text-align:left">16</td>
<td style="text-align:left">逻辑运算符（逻辑非）</td>
<td style="text-align:left">从右到左</td>
<td style="text-align:left"><code v-pre>!foo</code></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left">按位非</td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>~foo</code></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left">一元加法</td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>+foo</code></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left">一元减法</td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>-foo</code></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left">更新表达式（前置递增）</td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>++foo</code></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left">更新表达式（前置递减）</td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>--foo</code></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left">typeof</td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>typeof foo</code></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left">void</td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>void foo</code></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left">delete</td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>delete foo</code></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left">await</td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>await foo</code></td>
</tr>
<tr>
<td style="text-align:left">15</td>
<td style="text-align:left">算术运算符（幂）</td>
<td style="text-align:left">从右到左</td>
<td style="text-align:left"><code v-pre>foo ** bar</code></td>
</tr>
<tr>
<td style="text-align:left">14</td>
<td style="text-align:left">算术运算符（乘法）</td>
<td style="text-align:left">从左到右</td>
<td style="text-align:left"><code v-pre>foo * bar</code></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left">算术运算符（除法）</td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>foo / bar</code></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left">算术运算符（取模）</td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>foo % bar</code></td>
</tr>
<tr>
<td style="text-align:left">13</td>
<td style="text-align:left">算术运算符（加法）</td>
<td style="text-align:left">从左到右</td>
<td style="text-align:left"><code v-pre>foo + bar</code></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left">算术运算符（减法）</td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>foo - bar</code></td>
</tr>
<tr>
<td style="text-align:left">12</td>
<td style="text-align:left">按位左移</td>
<td style="text-align:left">从左到右</td>
<td style="text-align:left"><code v-pre>foo &lt;&lt; bar</code></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left">按位右移</td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>foo &gt;&gt; bar</code></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left">无符号右移</td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>... &gt;&gt;&gt; bar</code></td>
</tr>
<tr>
<td style="text-align:left">11</td>
<td style="text-align:left">小于</td>
<td style="text-align:left">从左到右</td>
<td style="text-align:left"><code v-pre>foo &lt; bar</code></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left">小于等于</td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>foo &lt;= bar</code></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left">大于</td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>foo &gt; bar</code></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left">大于等于</td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>foo &gt;= bar</code></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left">in</td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>foo in bar</code></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left">instanceof</td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>foo instance bar</code></td>
</tr>
<tr>
<td style="text-align:left">10</td>
<td style="text-align:left">等号</td>
<td style="text-align:left">从左到右</td>
<td style="text-align:left"><code v-pre>foo == bar</code></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left">非等号</td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>foo !== bar</code></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left">全等号</td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>foo === bar</code></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left">非全等号</td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>foo !== bar</code></td>
</tr>
<tr>
<td style="text-align:left">9</td>
<td style="text-align:left">按位与</td>
<td style="text-align:left">从左到右</td>
<td style="text-align:left"><code v-pre>foo &amp; bar</code></td>
</tr>
<tr>
<td style="text-align:left">8</td>
<td style="text-align:left">按位异或</td>
<td style="text-align:left">从左到右</td>
<td style="text-align:left"><code v-pre>foo ^ bar</code></td>
</tr>
<tr>
<td style="text-align:left">7</td>
<td style="text-align:left">按位或</td>
<td style="text-align:left">从左到右</td>
<td style="text-align:left"><code v-pre>foo | bar</code></td>
</tr>
<tr>
<td style="text-align:left">6</td>
<td style="text-align:left">逻辑运算符（逻辑与）</td>
<td style="text-align:left">从左到右</td>
<td style="text-align:left"><code v-pre>foo &amp;&amp; bar</code></td>
</tr>
<tr>
<td style="text-align:left">5</td>
<td style="text-align:left">逻辑运算符（逻辑或）</td>
<td style="text-align:left">从左到右</td>
<td style="text-align:left"><code v-pre>foo || bar</code></td>
</tr>
<tr>
<td style="text-align:left">4</td>
<td style="text-align:left">条件运算符</td>
<td style="text-align:left">从右到左</td>
<td style="text-align:left"><code v-pre>foo ? foo : bar</code></td>
</tr>
<tr>
<td style="text-align:left">3</td>
<td style="text-align:left">赋值运算符</td>
<td style="text-align:left">从右到左</td>
<td style="text-align:left"><code v-pre>foo = bar</code></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left">赋值运算符</td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>foo += bar</code></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left">赋值运算符</td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>foo -= bar</code></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left">赋值运算符</td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>foo *= bar</code></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left">赋值运算符</td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>foo /= bar</code></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left">赋值运算符</td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>foo %= bar</code></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left">赋值运算符</td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>foo &lt;&lt;= bar</code></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left">赋值运算符</td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>foo &gt;&gt;= bar</code></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left">赋值运算符</td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>foo &gt;&gt;&gt;= bar</code></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left">赋值运算符</td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>foo &amp;= bar</code></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left">赋值运算符</td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>foo ^= bar</code></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left">赋值运算符</td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>foo |= bar</code></td>
</tr>
<tr>
<td style="text-align:left">2</td>
<td style="text-align:left"><code v-pre>yield</code></td>
<td style="text-align:left">从右到左</td>
<td style="text-align:left"><code v-pre>yield foo</code></td>
</tr>
<tr>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>yield*</code></td>
<td style="text-align:left"></td>
<td style="text-align:left"><code v-pre>yield* foo</code></td>
</tr>
<tr>
<td style="text-align:left">1</td>
<td style="text-align:left">扩展运算符</td>
<td style="text-align:left">N/A</td>
<td style="text-align:left"><code v-pre>...foo</code></td>
</tr>
<tr>
<td style="text-align:left">0</td>
<td style="text-align:left">逗号运算符</td>
<td style="text-align:left">从左到右</td>
<td style="text-align:left"><code v-pre>foo, bar</code></td>
</tr>
</tbody>
</table>
</div></template>


