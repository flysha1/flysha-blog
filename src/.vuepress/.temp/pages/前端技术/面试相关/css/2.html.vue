<template><div><h1 id="_2-display属性有哪些值" tabindex="-1"><a class="header-anchor" href="#_2-display属性有哪些值"><span>2. display属性有哪些值</span></a></h1>
<p>CSS display 属性设置元素是否被视为块或者内联元素以及用于子元素的布局，例如流式布局、网格布局或弹性布局。</p>
<p>形式上，display 属性设置元素的内部和外部的显示类型。外部类型设置元素参与流式布局；内部类型设置子元素的布局。一些 display 值在它们自己的单独规范中完整定义；例如，在 CSS 弹性盒模型的规范中，定义了声明 display: flex 时会发生的细节。</p>
<div class="language-css line-numbers-mode" data-highlighter="shiki" data-ext="css" data-title="css" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* precomposed values */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">display: block;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">display: inline;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">display: </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">inline-block</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">display: flex;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">display: </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">inline-flex</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">display: grid;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">display: </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">inline-grid</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">display: </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">flow-root</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* box generation */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">display: none;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">display: contents;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* two-value syntax */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">display: block flow;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">display: inline flow;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">display: inline </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">flow-root</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">display: block flex;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">display: inline flex;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">display: block grid;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">display: inline grid;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">display: block </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">flow-root</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* other values */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">display: table;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">display: </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">table-row</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">;</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic"> /* all table elements have an equivalent CSS display value */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">display: </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">list-item</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">/* Global values */</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">display: inherit;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">display: initial;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">display: revert;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">display: </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">revert-layer</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">display: unset;</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关键值可以被分为六个种类：</p>
<ol>
<li>外部表现</li>
</ol>
<p>这些关键字规定元素的外部显示类型，实际上就是其在流式布局中的角色：</p>
<p><code>block</code>
该元素生成一个块级元素盒，在正常的流中，该元素之前和之后产生换行</p>
<p><code>inline</code>
该元素生成一个或多个内联元素盒，它们之前或者之后并不会产生换行。在正常的流中，如果有空间，下一个元素将会在同一行上。</p>
<ol start="2">
<li>内部表现</li>
</ol>
<p>这些关键字规定了元素的内部显示类型，其定义了该内容布局时的格式上下文的类型（假设它是一个非替换元素）：</p>
<p><code>float</code>
该元素使用流式布局（块和内联布局）来排布它的内容。</p>
<p>如果它的外部显示类型是 inline 或 run-in，并且它参与一个块或者内联格式上下文，那么它将生成一个内联盒子。否则它将生成一个块容器盒。</p>
<p>根据其他属性的值（例如 position、float 或 overflow）以及它自身是否参与到块或者内联格式化上下文，它要么为它的内容建立新的区块格式化上下文（BFC），要么将其内容集成到其父元素的格式化上下文中。</p>
<p><code>float-root</code>
该元素生成一个块级元素盒，其会建立一个新的区块格式化上下文，定义格式化上下文的根元素。</p>
<p><code>table</code>
该元素的行为类似于 HTML 中的 <code>&lt;table&gt;</code> 元素。它定义了一个块级别的盒子。</p>
<p><code>flex</code>
该元素的行为类似块级元素并且根据弹性盒模型布局它的内容。</p>
<p><code>grid</code>
该元素的行为类似块级元素并且根据网格模型布局它的内容。</p>
<p><code>ruby</code>
该元素的行为类似内联元素并且根据 ruby 格式化模型布局它的内容。它的行为像关联的 HTML 的 <code>&lt;ruby&gt;</code> 元素。</p>
<ol start="3">
<li>列表元素</li>
</ol>
<p><code>list-item</code>
的单独值将导致元素的行为类似于一个列表元素。其可以与 list-style-type 和 list-style-position 一起使用。</p>
<ol start="4">
<li>内部</li>
</ol>
<p>一些布局模型，例如 table 和 ruby 有一个复杂的内置结构，它们的子孙后代可以扮演几个不同的角色。本节定义的这些“内部”display 值，仅在特定的布局模式下有用。</p>
<p><code>table-row-group</code>
该元素的行为类似于 HTML 的 <code>&lt;tbody&gt;</code> 元素。</p>
<p><code>table-footer-group</code>
该元素的行为类似于 HTML 的 <code>&lt;tfoot&gt;</code> 元素。</p>
<p><code>table-row-group</code>
该元素的行为类似于 HTML 的 <code>&lt;tbody&gt;</code> 元素。</p>
<p><code>table-row</code>
该元素的行为类似于 HTML 的 <code>&lt;tr&gt;</code> 元素。</p>
<p><code>table-cell</code>
该元素的行为类似于 HTML 的 <code>&lt;td&gt;</code> 元素。</p>
<p><code>table-row-group</code>
该元素的行为类似于 HTML 的 <code>&lt;tbody&gt;</code> 元素。</p>
<p><code>table-column-group</code>
该元素的行为类似于 HTML 的 <code>&lt;colgroup&gt;</code> 元素。</p>
<p><code>table-column</code>
该元素的行为类似于 HTML 的 <code>&lt;col&gt;</code> 元素。</p>
<p><code>table-caption</code>
该元素的行为类似于 HTML 的 <code>&lt;caption&gt;</code> 元素。</p>
<p><code>ruby-base</code>
该元素的行为类似于 HTML 的 <code>&lt;rb&gt;</code> 元素。</p>
<p><code>ruby-text</code>
该元素的行为类似于 HTML 的 <code>&lt;rt&gt;</code> 元素。</p>
<p><code>ruby-base-container</code>
该元素是作为匿名盒子生成的。</p>
<p><code>ruby-text-container</code>
该元素的行为类似于 HTML 的 <code>&lt;rtc&gt;</code> 元素。</p>
<ol start="5">
<li>盒</li>
</ol>
<p>这些关键词定义一个元素到底是否产生 display 盒</p>
<p><code>contents</code>
这些元素自身不会产生特定的盒子。它们被伪盒子（pseudo-box）和子盒子取代。请注意，CSS Display Level 3 规范中定义了 contents 值如何影响“异常元素”——这些元素不是纯粹由 CSS 盒模型概念呈现的（例如替换元素）。</p>
<p><code>none</code>
使元素不再显示，其对布局不会有影响（文档渲染得好像这个元素并不存在）。所有的后代元素也不会再显示。为了使元素占据一个它通常占据的空间，但实际上没有渲染任何东西，应该使用 visibility 属性。</p>
<ol start="6">
<li>预组合</li>
</ol>
<p>CSS 2 为 display 属性使用单关键字的预组合的语法，对相同布局模式的块级和内联级变体需要单独的关键字。</p>
<p><code>inline-block</code>
该元素生成块级元素盒，如果它是一个单独的内联盒，它将和周围的内容一起流动（行为类似于替换元素）。
它等同于 <code>inline flow-root</code></p>
<p><code>inline-table</code>
inline-table 值在 HTML 中没有直接的映射。它行为类似于 HTML 的 <code>&lt;table&gt;</code> 元素，但实际是一个内联盒，而不是一个块级盒子。table 盒内部是一个块级上下文。</p>
<p>它等同于 <code>inline table</code></p>
<p><code>inline-flex</code>
元素的行为类似于内联元素并且它的内容根据弹性盒模型布局。</p>
<p>它等同于 <code>inline flex</code></p>
<p><code>inline-grid</code>
元素的行为类似于内联元素并且它的内容根据网格盒模型布局。</p>
<p>它等同于 <code>inline grid</code></p>
</div></template>


