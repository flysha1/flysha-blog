<template><div><h1 id="css简述" tabindex="-1"><a class="header-anchor" href="#css简述"><span>CSS简述</span></a></h1>
<h2 id="什么是-css" tabindex="-1"><a class="header-anchor" href="#什么是-css"><span>什么是 CSS？</span></a></h2>
<p>和 HTML 类似，CSS 也不是真正的编程语言，甚至不是标记语言。<strong>CSS 是一门样式表语言</strong>，这也就是说人们可以用它来选择性地为 HTML 元素添加样式。举例来说，以下 CSS 代码选择了所有的段落文字，并将它们设置为红色。</p>
<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  color: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">red</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="css-规则集-详解" tabindex="-1"><a class="header-anchor" href="#css-规则集-详解"><span>“CSS 规则集”详解</span></a></h2>
<p>让我们来剖析一下红色段落文字的 CSS 代码，了解它是如何工作的：</p>
<figure><img src="https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/CSS_basics/css-declaration-small.png" alt="Alt" tabindex="0" loading="lazy"><figcaption>Alt</figcaption></figure>
<p>整个结构称为 <strong>规则集</strong>（规则集通常简称规则），注意各个部分的名称：</p>
<h3 id="选择器-selector" tabindex="-1"><a class="header-anchor" href="#选择器-selector"><span>选择器（Selector）</span></a></h3>
<p>HTML 元素的名称位于规则集开始。它选择了一个或多个需要添加样式的元素（在这个例子中就是 <code v-pre>&lt;p&gt;</code> 元素）。要给不同元素添加样式，只需要更改选择器。</p>
<h3 id="声明-declaration" tabindex="-1"><a class="header-anchor" href="#声明-declaration"><span>声明（Declaration）</span></a></h3>
<p>一个单独的规则，如 <code v-pre>color: red;</code> 用来指定添加样式元素的属性。</p>
<h3 id="属性-properties" tabindex="-1"><a class="header-anchor" href="#属性-properties"><span>属性（Properties）</span></a></h3>
<p>改变 HTML 元素样式的途径（本例中 <code v-pre>color</code> 就是 <code v-pre>&lt;p&gt;</code> 元素的属性）。CSS 中，由编写人员决定修改哪个属性以改变规则。</p>
<h3 id="属性的值-property-value" tabindex="-1"><a class="header-anchor" href="#属性的值-property-value"><span>属性的值（Property value）</span></a></h3>
<p>在属性的右边，冒号后面即属性的值，它从指定属性的众多外观中选择一个值（我们除了 <code v-pre>red</code> 之外还有很多属性值可以用于 <code v-pre>color</code> ）。</p>
<p>注意其他重要的语法：</p>
<ul>
<li>除了选择器部分，每个规则集都应该包含在成对的大括号里（<code v-pre>{}</code>）。</li>
<li>在每个声明里要用冒号（<code v-pre>:</code>）将属性与属性值分隔开。</li>
<li>在每个规则集里要用分号（<code v-pre>;</code>）将各个声明分隔开。</li>
</ul>
</div></template>


