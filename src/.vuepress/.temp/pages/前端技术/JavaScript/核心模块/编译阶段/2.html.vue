<template><div><h1 id="词法作用域" tabindex="-1"><a class="header-anchor" href="#词法作用域"><span>词法作用域</span></a></h1>
<p>作用域就是变量（标识符）适用范围，控制着变量的可见性。</p>
<p>《You don‘t know js》对作用域的定义：</p>
<blockquote>
<p>使用一套严格的规则来分辨哪些标识符对哪些语法有访问权限。</p>
</blockquote>
<p>《JavaScript 权威指南》中对变量作用域的描述：</p>
<blockquote>
<p>一个变量的作用域（Scope）是程序源代码中定义这个变量的区域。全局变量拥有全局作用域，在 JavaScript 代码中的任何地方都是有定义的。然而在函数内声明的变量只在函数体内有定义。它们是局部变量，作用域是局部性的。函数参数也是局部变量，它们只是在函数体内有定义。</p>
</blockquote>
<p>作用域共有两种主要的工作模式：</p>
<ul>
<li>词法作用域/静态作用域</li>
<li>动态作用域</li>
</ul>
<p>JavaScript 采用 <strong>词法作用域</strong>（Lexical Scope），也称为 <strong>静态作用域</strong>。</p>
<p>因为 JavaScript 采用的是词法作用域，因此函数的作用域在函数定义的时候就决定了。</p>
<p>而与词法作用域相对的是动态作用域，函数的作用域是在函数调用的时候才决定的。</p>
<h2 id="词法作用域-静态作用域" tabindex="-1"><a class="header-anchor" href="#词法作用域-静态作用域"><span>词法作用域/静态作用域</span></a></h2>
<p>大部分标准语言编译器的第一个工作阶段叫作 <strong>词法化</strong>（也叫单词化）。词法化的过程会对源代码中的字符进行检查，如果是有状态的解析过程，还会赋予单词语义。</p>
<p>简单来说，词法作用域就是定义在词法阶段的作用域。换句话来说，词法作用域是由你在写代码时将变量和块作用域写在哪里来决定的，因此当词法分析器处理代码时会保持作用域不变（大部分情况下时这样的）。</p>
<p>🌰 代码示例：</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> foo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  var</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> b</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> a</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> *</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> brc</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">c</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">    console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">, </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">c</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  bar</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">b</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> *</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">foo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">); </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 2, 4, 12</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中有三个逐级嵌套的作用域。为了帮助理解，可以将它们想象成几个逐级包含的气泡。</p>
<figure><img src="https://www.freeimg.cn/i/2024/06/05/665fd68ef1c98.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<ul>
<li>包含着整个全局作用域，其中只有一个标识符：<code v-pre>foo</code></li>
<li>包含着 <code v-pre>foo</code> 所创建的作用域，其中有三个标识符：<code v-pre>a</code>、<code v-pre>bar</code> 和 <code v-pre>b</code></li>
<li>包含着 <code v-pre>bar</code> 所创建的作用域，其中只有一个标识符：c
作用域气泡由其对应的作用域代码写在哪里决定，它们是 <strong>逐级包含</strong> 的。现在只需要假设每一个函数都会创建一个新的作用域气泡就好了。</li>
</ul>
<p><code v-pre>bar</code> 的气泡被完全包含在 <code v-pre>foo</code> 所创建的气泡中，唯一的原因是那里就是我们希望定义函数 <code v-pre>bar</code> 的位置。</p>
<h3 id="查找" tabindex="-1"><a class="header-anchor" href="#查找"><span>查找</span></a></h3>
<p>作用域气泡的结构和互相之间的位置关系给引擎提供了足够的位置信息，引擎利用这些信息来查找标识符的位置。</p>
<p>在上个代码片段中，引擎执行 <code v-pre>console.log</code> 声明，并依次查找 <code v-pre>a</code>、<code v-pre>b</code> 和 <code v-pre>c</code> 三个变量的引用。</p>
<ul>
<li>它首先从最内部的作用域，也就是 <code v-pre>bar</code> 函数的作用域气泡开始查找</li>
<li>引擎无法在这里找到 <code v-pre>a</code>，因此会去上一级到所嵌套的 <code v-pre>foo</code> 的作用域中继续查找。在这里找到了 <code v-pre>a</code>，因此引擎使用了这个引用</li>
<li>对 <code v-pre>b</code> 来讲也是一样的</li>
<li>而对 <code v-pre>c</code> 来说，引擎在 <code v-pre>bar</code> 中就找到了它</li>
</ul>
<p>如果 <code v-pre>a</code>、<code v-pre>c</code> 都存在于 <code v-pre>bar</code> 和 <code v-pre>foo</code> 的内部，<code v-pre>console.log</code> 就可以直接使用 <code v-pre>bar</code> 中的变量，而无需到外面的 <code v-pre>foo</code> 中查找。</p>
<h3 id="遮蔽" tabindex="-1"><a class="header-anchor" href="#遮蔽"><span>遮蔽</span></a></h3>
<p><strong>作用域查找会在找到第一个匹配的标识符时停止。</strong></p>
<p>在多层嵌套作用域中允许定义同名标识符，称为 遮蔽效应（内部的标识符遮蔽了外部的标识符）。</p>
<p>抛开遮蔽效应，作用域查找始终从运行时所处的最内部作用域开始，逐级向外或者说向上层作用域进行查询，直到遇见第一个匹配的标识符为止。</p>
<p>全局变量会自动成为全局对象的属性（比如浏览器中的 Window 对象），因此可以不直接使用全局对象的词法名称，而是间接地通过对全局对象属性的引用来对其进行访问。</p>
<p>🌰 代码示例：</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">window</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>通过这种技术可以访问那些被同名变量所遮蔽的全局变量。但非全局的变量如果被遮蔽了，无论如何都无法被访问到。</p>
<p>无论函数在哪里被调用，也无论它如何被调用，它的词法作用域都只由函数被声明时所处的位置决定。</p>
<p>词法作用域查找只会查找一级标识符，比如 <code v-pre>a</code>、<code v-pre>b</code> 和 <code v-pre>c</code>。如果代码中引用了 <code v-pre>foo.bar.baz</code>，词法作用域查找只会试图查找 foo 标识符，找到这个变量后，对象属性访问规则会分别接管对 <code v-pre>bar</code> 和 <code v-pre>baz</code> 属性的访问。</p>
<h2 id="动态作用域" tabindex="-1"><a class="header-anchor" href="#动态作用域"><span>动态作用域</span></a></h2>
<p>词法作用域最重要的特征是它的定义过程发生在代码的书写阶段。</p>
<blockquote>
<p>那为什么要介绍动态作用域呢？</p>
</blockquote>
<p>实际上动态作用域是 JavaScript 另一个重要机制 <code v-pre>this</code> 的表亲。作用域混乱多数是因为词法作用域和 <code v-pre>this</code> 机制相混淆。</p>
<p><strong>动态作用域</strong> 并不关心函数和作用域是如何声明以及在何处声明，它只关心它们从何处调用。</p>
<p>换句话说，<strong>作用域链</strong> 是基于 <strong>调用栈</strong> 的，而不是代码中的作用域嵌套。</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> a</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> foo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">  console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> bar</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">  const</span><span style="--shiki-light:#986801;--shiki-dark:#E5C07B"> a</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> 3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  foo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">bar</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>如果处于词法作用域，变量 <code v-pre>a</code> 首先在 <code v-pre>foo</code> 函数中查找，没有找到。于是 <strong>顺着作用域链到全局作用域</strong> 中查找，找到并赋值为 <code v-pre>2</code>。所以控制台输出 <code v-pre>2</code></li>
<li>如果处于动态作用域，同样地，变量 <code v-pre>a</code> 首先在 foo 中查找，没有找到。这里会 <strong>顺着调用栈</strong> 在调用 <code v-pre>foo</code> 函数的地方，也就是 <code v-pre>bar</code> 函数中查找，找到并赋值为 <code v-pre>3</code>。所以控制台输出 <code v-pre>3</code></li>
</ul>
<p>对于两种作用域的区别，简而言之，词法作用域是在 <strong>定义</strong> 时确定的，而动态作用域是在 <strong>运行</strong> 时确定的。</p>
</div></template>


