<template><div><h1 id="构造函数" tabindex="-1"><a class="header-anchor" href="#构造函数"><span>构造函数</span></a></h1>
<p>在典型的 OOP 语言中，如 Java 都存在类的概念，类就是对象的模版，对象就是类的实例。但是在 JavaScript 中不存在类的概念，JavaScript 不是基于类，而是通过构造函数（constructor）和原型链（prototype chains）实现的。但在 ES6 中引入了类（class） 这个概念，作为对象的模版，新的 <code v-pre>class</code> 写法知识让原型对象的写法更加清晰，这里不重点谈这个。</p>
<h2 id="特点" tabindex="-1"><a class="header-anchor" href="#特点"><span>特点</span></a></h2>
<ol>
<li>构造函数的首字母必须大写，用来区分于普通函数</li>
<li>内部使用的 <code v-pre>this</code> 对象，来指向即将要生成的实例对象</li>
<li>使用 <code v-pre>new</code> 关键字来生成实例对象</li>
</ol>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Person</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">age</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">){</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">  this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> name</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">  this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">age</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> age</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">  this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sayHello</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> function</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(){</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">    console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B">this</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">name</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> +</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379"> "say hello"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> foo</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Person</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'Bella'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">23</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">foo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">sayHello</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// Bella say hello</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点"><span>缺点</span></a></h2>
<ol>
<li>所有实例都会通过原型链引用到 <code v-pre>prototype</code></li>
<li><code v-pre>prototype</code> 相当于特定类型所有实例都可以访问到一个公共容器</li>
<li>那么我们就将重复的东西放到公共容器就好了</li>
</ol>
<h2 id="作用" tabindex="-1"><a class="header-anchor" href="#作用"><span>作用</span></a></h2>
<p><code v-pre>constructor</code> 属性的作用</p>
<ol>
<li>分辨原型对象到底是哪个构造函数</li>
</ol>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Person</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(){};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> person1</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Person</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">person1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">constructor</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> ===</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> Person</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// true</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>从实例中新建另一个实例</li>
</ol>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Person</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(){};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> person1</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> Person</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(){};</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> person2</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B"> person1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">constructor</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">person2</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> instanceof</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> Person</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// true</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>由于 <code v-pre>constructor</code> 属性是一种原型对象和构造函数的关系，所以在修改原型对象对的时候，一定要注意 <code v-pre>constructor</code> 的指向问题，避免 <code v-pre>instanceof</code> 失真。</li>
</ol>
<h2 id="与普通函数对比" tabindex="-1"><a class="header-anchor" href="#与普通函数对比"><span>与普通函数对比</span></a></h2>
<p>在命名规则上，构造函数一般是首字母大写，普通函数遵照小驼峰式命名法。</p>
<p>在函数调用的时候：</p>
<table>
<thead>
<tr>
<th style="text-align:left">构造函数</th>
<th style="text-align:left">普通函数</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left"><code v-pre>new Fn()</code></td>
<td style="text-align:left"><code v-pre>fn()</code></td>
</tr>
<tr>
<td style="text-align:left">构造函数内部会创建一个新的对象，即 <code v-pre>Fn</code> 的实例</td>
<td style="text-align:left">在调用函数的内部不会创建新的对象</td>
</tr>
<tr>
<td style="text-align:left">函数内部的 <code v-pre>this</code> 指向 新创建的 <code v-pre>Fn</code> 的实例</td>
<td style="text-align:left">函数内部的 <code v-pre>this</code> 指向调用函数的对象（如果没有对象调用，默认是 <code v-pre>window</code>）</td>
</tr>
<tr>
<td style="text-align:left">默认的返回值是 <code v-pre>Fn</code> 的实例</td>
<td style="text-align:left">返回值由 <code v-pre>return</code> 语句决定</td>
</tr>
</tbody>
</table>
<p>构造函数的返回值：</p>
<p>有一个默认的返回值，新创建的实例对象。</p>
<p>当手动添加返回值后（<code v-pre>return</code> 语句）：</p>
<ol>
<li>返回值是基本数据类型的话，真正的返回值还是那个新创建的实例对象</li>
<li>返回值是复杂数据类型（对象）的话，真正的返回值是这个对象</li>
</ol>
</div></template>


