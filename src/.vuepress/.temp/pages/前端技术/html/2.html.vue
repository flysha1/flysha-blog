<template><div><h1 id="_2-html-元信息" tabindex="-1"><a class="header-anchor" href="#_2-html-元信息"><span>2. HTML 元信息</span></a></h1>
<h2 id="什么是-html-头部" tabindex="-1"><a class="header-anchor" href="#什么是-html-头部"><span>什么是 HTML 头部</span></a></h2>
<p>HTML 头部包含 HTML <code v-pre>&lt;head&gt;</code> 元素的内容，与 <code v-pre>&lt;body&gt;</code> 元素内容不同，页面在浏览器加载后它的内容不会在浏览器中显示，它的作用是保存页面的一些元数据。上述示例的头部非常简短：</p>
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">head</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">meta</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> charset</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"utf-8"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> /></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">title</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>我的测试页面&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">title</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">head</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>&lt;title&gt;</code> 元素也可以为文档添加标题，但和 <code v-pre>&lt;h1&gt;</code> 元素并不相同。</p>
<ul>
<li>
<p><code v-pre>&lt;h1&gt;</code> 元素在页面加载完毕时显示在页面中，通常只出现一次，用来标记页面内容的标题（故事名称、新闻摘要等等）。</p>
</li>
<li>
<p><code v-pre>&lt;title&gt;</code> 元素是一项元数据，用于表示整个 HTML 文档的标题（而不是文档内容）。</p>
</li>
</ul>
<h2 id="元数据-meta-元素" tabindex="-1"><a class="header-anchor" href="#元数据-meta-元素"><span>元数据：<code v-pre>&lt;meta&gt;</code> 元素</span></a></h2>
<p>元数据就是描述数据的数据，而 HTML 有一个“官方的”方式来为一个文档添加元数据—— <code v-pre>&lt;meta&gt;</code> 元素</p>
<h3 id="指定文档中的字符编码" tabindex="-1"><a class="header-anchor" href="#指定文档中的字符编码"><span>指定文档中的字符编码</span></a></h3>
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">meta</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> charset</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"utf-8"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> /></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>这个元素简单的指定了文档的字符编码——在这个文档中被允许使用的字符集。<code v-pre>utf-8</code> 是一个通用的字符集，它包含了任何人类语言中的大部分的字符，意味着该 web 页面可以显示任意的语言</p>
<h3 id="添加作者和描述" tabindex="-1"><a class="header-anchor" href="#添加作者和描述"><span>添加作者和描述</span></a></h3>
<p>许多 <code v-pre>&lt;meta&gt;</code> 元素包含了 <code v-pre>name</code> 和 <code v-pre>content</code> 属性：</p>
<ul>
<li><code v-pre>name</code>：指定了 <code v-pre>meta</code> 元素的类型；说明该元素包含了什么类型的信息。</li>
<li><code v-pre>content</code>：指定了实际的元数据内容。</li>
</ul>
<p>指定作者在某些情况下是很有用的：如果你需要联系页面的作者，问一些关于页面内容的问题。一些内容管理系统能够自动获取页面作者的信息，然后用于某些用途。</p>
<p>指定一个包括与你的页面内容有关的关键词的描述是有用的，因为它有可能使你的页面在搜索引擎进行的相关搜索中出现得更多（这些行为在术语上被称为：搜索引擎优化 或 SEO）</p>
<h2 id="在你的站点增加自定义图标" tabindex="-1"><a class="header-anchor" href="#在你的站点增加自定义图标"><span>在你的站点增加自定义图标</span></a></h2>
<p>为了进一步丰富你的网站设计，你可以在元数据中添加对自定义图标的引用，它们会在某些场景下显示。最常见的用例为 <em><strong>favicon</strong></em>（为“favorites icon”的缩写，在浏览器的“收藏夹”及“书签”列表中显示）。</p>
<p>页面添加网页图标的方式有：</p>
<ol>
<li>
<p>将其保存在与网站的索引页面相同的目录中，以 .ico 格式保存（大多数浏览器支持更通用的格式，如 .gif 或 .png）</p>
</li>
<li>
<p>将以下行添加到 HTML 的 <code v-pre>&lt;head&gt;</code> 块中以引用它：</p>
</li>
</ol>
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">link</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> rel</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"icon"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> href</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"favicon.ico"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"image/x-icon"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> /></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>注意</strong>：如果你的网站使用了内容安全策略（Content Security Policy，CSP）来增加安全性，这个策略会应用在 favicon 图标上。如果你遇到了图标没有被加载的问题，你需要确认 <code v-pre>Content-Security-Policy</code> 响应头的 <code v-pre>img-src</code> 指令 (en-US) 没有阻止访问图标。</p>
<h2 id="在-html-中应用-css-和-javascript" tabindex="-1"><a class="header-anchor" href="#在-html-中应用-css-和-javascript"><span>在 HTML 中应用 CSS 和 JavaScript</span></a></h2>
<ul>
<li><code v-pre>&lt;link&gt;</code>元素经常位于文档的头部，它有 2 个属性，<code v-pre>rel=&quot;stylesheet&quot;</code> 表明这是文档的样式表，而 <code v-pre>href</code> 包含了样式表文件的路径：</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">link</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> rel</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"stylesheet"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> href</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"my-css-file.css"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> /></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><code v-pre>&lt;script&gt;</code>元素也应当放在文档的头部，并包含 <code v-pre>src</code> 属性来指向需要加载的 JavaScript 文件路径，同时最好加上 <code v-pre>defer</code> 以告诉浏览器在解析完成 HTML 后再加载 JavaScript。这样可以确保在加载脚本之前浏览器已经解析了所有的 HTML 内容。这样你就不会因为 JavaScript 试图访问页面上不存在的 HTML 元素而产生错误。实际上有很多方法来处理在你的页面上加载 JavaScript，但对于现代浏览器来说，这是最可靠的方法（对于其他方法，请阅读<a href="https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/First_steps/What_is_JavaScript#%E8%84%9A%E6%9C%AC%E8%B0%83%E7%94%A8%E7%AD%96%E7%95%A5" target="_blank" rel="noopener noreferrer">脚本加载策略</a>）。</li>
</ul>
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> src</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"my-js-file.js"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> defer</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">script</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>注意</strong>：<code v-pre>&lt;script&gt;</code> 元素看起来像一个空元素，但它并不是，因此需要一个结束标记。还可以选择将脚本放入 <code v-pre>&lt;script&gt;</code> 元素中，而不是指向外部脚本文件。</p>
<h2 id="为文档设定主语言" tabindex="-1"><a class="header-anchor" href="#为文档设定主语言"><span>为文档设定主语言</span></a></h2>
<p>通过添加 <code v-pre>lang</code> 属性到 HTML 开始的标签中来为站点设定语言.</p>
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">html</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> lang</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"zh-CN"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  …</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


