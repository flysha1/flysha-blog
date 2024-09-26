<template><div><h1 id="_1-html简述" tabindex="-1"><a class="header-anchor" href="#_1-html简述"><span>1. HTML简述</span></a></h1>
<h2 id="什么是-html" tabindex="-1"><a class="header-anchor" href="#什么是-html"><span>什么是 HTML?</span></a></h2>
<p><strong>HTML</strong>：（HyperText Markup Language，<em><strong>超文本标记语言</strong></em>）是一种用来告知浏览器如何组织页面的标记语言。HTML 可复杂、可简单，一切取决于 web 开发者。HTML 由一系列的元素组成，这些元素可以用来包围或标记不同部分的内容，使其以某种方式呈现或者工作。两端的标签可以使内容变成超链接，以连接到另一个页面；使字体表现为斜体等。</p>
<p><strong>注意</strong>：HTML 标签不区分大小写。也就是说，输入标签时既可以使用大写字母也可以使用小写字母。例如，标签 <code v-pre>&lt;title&gt;</code> 可以写作 <code v-pre>&lt;title&gt;</code>、<code v-pre>&lt;TITLE&gt;</code>、<code v-pre>&lt;Title&gt;</code>、<code v-pre>&lt;TiTlE&gt;</code> 等，也都可以正常工作。不过，从一致性、可读性来说，最好仅使用小写字母。</p>
<h2 id="剖析一个-html-元素" tabindex="-1"><a class="header-anchor" href="#剖析一个-html-元素"><span>剖析一个 HTML 元素</span></a></h2>
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>这是一段话&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>这个元素的主要部分有：</p>
<ul>
<li>
<p><strong>开始标签</strong>（Opening tag）：包含元素的名称（本例为 p），被左、右角括号所包围。开头标签标志着元素开始或开始生效的地方。在这个示例中，它在段落文本的开始之前。</p>
</li>
<li>
<p><strong>内容</strong>（Content）：元素的内容，本例中就是段落的文本。</p>
</li>
<li>
<p><strong>结束标签</strong>（Closing tag）：与开始标签相似，只是其在元素名之前包含了一个斜杠。这标志着该元素的结束。没有包含关闭标签是一个常见的初学者错误，它可能会产生奇特的结果。</p>
</li>
</ul>
<p>整个元素即指开始标签、内容、结束标签三部分组成的整体。</p>
<h2 id="元素属性" tabindex="-1"><a class="header-anchor" href="#元素属性"><span>元素属性</span></a></h2>
<p>元素也可以拥有属性，属性看起来像这样：</p>
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> class</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"text"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>这是一段话&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>属性包含元素的额外信息，这些信息不会出现在实际的内容中。在上述例子中，这个 <code v-pre>class</code> 属性是一个识别名称，以后为元素设置样式信息时更加方便。</p>
<p>属性必须包含：</p>
<ul>
<li>一个空格，它在属性和元素名称之间。如果一个元素具有多个属性，则每个属性之间必须由空格分隔。</li>
<li>属性名称，后面跟着一个等于号。</li>
<li>一个属性值，由一对引号（&quot;&quot;）引起来。</li>
</ul>
<h3 id="布尔属性" tabindex="-1"><a class="header-anchor" href="#布尔属性"><span>布尔属性</span></a></h3>
<p>有时你会看到没有值的属性，这也是完全可以接受的。这些属性被称为布尔属性。布尔属性只能有一个值，这个值一般与属性名称相同。例如，考虑 <code v-pre>disabled</code> 属性，你可以将其分配给表单输入元素。用它来禁用表单输入元素，这样用户就不能输入了。被禁用的元素通常有一个灰色的外观。示例如下：</p>
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">input</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"text"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> disabled</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"disabled"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> /></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">&#x3C;!-- 可以简写为--></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">input</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> type</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"text"</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> disabled</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> /></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="关于属性的引号" tabindex="-1"><a class="header-anchor" href="#关于属性的引号"><span>关于属性的引号</span></a></h3>
<p>建议始终添加引号——这样可以避免很多问题，并且使代码更易读。<code v-pre>''</code>（单引号）和 <code v-pre>&quot;&quot;</code>（双引号）都能使用。</p>
<h2 id="剖析-html-文档" tabindex="-1"><a class="header-anchor" href="#剖析-html-文档"><span>剖析 HTML 文档</span></a></h2>
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;!</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">doctype</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">html</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> lang</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"zh-CN"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">head</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">meta</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66"> charset</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">"utf-8"</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> /></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">title</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>我的测试站点&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">title</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">head</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">body</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">    &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>这是我的页面&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  &#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">body</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">html</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>
<p><code v-pre>&lt;!DOCTYPE html&gt;</code>: 声明文档类型。文档类型是一个历史遗留问题，需要包含它才能使其他东西正常工作。现在，只需要知道 <code v-pre>&lt;!DOCTYPE html&gt;</code> 是最短的有效文档声明！</p>
</li>
<li>
<p><code v-pre>&lt;html&gt;</code>：这个元素包裹了页面中所有的内容，有时被称为<em><strong>根元素</strong></em>。</p>
</li>
<li>
<p><code v-pre>&lt;head&gt;</code>：这个元素是一个容器，它包含了所有你想包含在 HTML 页面中但不在 HTML 页面中显示的内容。这些内容包括你想在搜索结果中出现的关键字和页面描述、CSS 样式、字符集声明等等。以后的章节中会学到更多相关的内容。</p>
</li>
<li>
<p><code v-pre>&lt;meta&gt;</code>：这个元素代表了不能由其他 HTML 元相关元素表示的元数据，比如 <code v-pre>&lt;base&gt;</code>、<code v-pre>&lt;link&gt;</code>、<code v-pre>&lt;script&gt;</code>、<code v-pre>&lt;style&gt;</code> 或 <code v-pre>&lt;title&gt;</code>。<code v-pre>charset</code> 属性将你的文档的字符集设置为 <code v-pre>UTF-8</code>，其中包括绝大多数人类书面语言的大多数字符。有了这个设置，页面现在可以处理它可能包含的任何文本内容。没有理由不对它进行设置，它可以帮助避免以后的一些问题。</p>
</li>
<li>
<p><code v-pre>&lt;title&gt;</code>：这个元素设置了页面的标题，也就是出现在该页面加载的浏览器标签中的内容。当页面被加入书签时，页面标题也被用来描述该页面。</p>
</li>
<li>
<p><code v-pre>&lt;body&gt;</code>：这个元素包含了你访问页面时所有显示在页面上的内容，包含文本、图片、视频、游戏、可播放音频轨道等等。</p>
</li>
</ol>
<h2 id="在-html-中包含特殊字符" tabindex="-1"><a class="header-anchor" href="#在-html-中包含特殊字符"><span>在 HTML 中包含特殊字符</span></a></h2>
<p>在 HTML 中，字符 <code v-pre>&lt;</code>、<code v-pre>&gt;</code>、<code v-pre>&quot;</code>、<code v-pre>'</code> 和 <code v-pre>&amp;</code> 是特殊字符。想要在文本中显示这些特殊字符我们必须使用字符引用——表示字符的特殊编码，它们可以在那些情况下使用。每个字符引用以符号 &amp; 开始，以分号（;）结束。</p>
<table>
<thead>
<tr>
<th style="text-align:center">原义字符</th>
<th style="text-align:left">等价字符引用</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">半方大的空白</td>
<td style="text-align:left"><code v-pre>&amp;ensp;</code></td>
</tr>
<tr>
<td style="text-align:center">全方大的空白</td>
<td style="text-align:left"><code v-pre>&amp;emsp;</code></td>
</tr>
<tr>
<td style="text-align:center">不断行的空白格</td>
<td style="text-align:left"><code v-pre>&amp;nbsp;</code></td>
</tr>
<tr>
<td style="text-align:center">&lt;</td>
<td style="text-align:left"><code v-pre>&amp;lt;</code></td>
</tr>
<tr>
<td style="text-align:center">&gt;</td>
<td style="text-align:left"><code v-pre>&amp;gt;</code></td>
</tr>
<tr>
<td style="text-align:center">&quot;</td>
<td style="text-align:left"><code v-pre>&amp;quot;</code></td>
</tr>
<tr>
<td style="text-align:center">'</td>
<td style="text-align:left"><code v-pre>&amp;apos;</code></td>
</tr>
<tr>
<td style="text-align:center">&amp;</td>
<td style="text-align:left"><code v-pre>&amp;amp;</code></td>
</tr>
</tbody>
</table>
<p>在下面的实时输出中，你会看到第一段是错误的，因为浏览器会认为第二个 <code v-pre>&lt;p&gt;</code> 是开始一个新的段落！第二段是正确的，因为我们用字符引用来代替了角括号（<code v-pre>&lt;</code> 和 <code v-pre>&gt;</code> 符号）。</p>
<CodeDemo id="code-demo-205" type="normal" title="%E5%9C%A8%20HTML%20%E4%B8%AD%E5%8C%85%E5%90%AB%E7%89%B9%E6%AE%8A%E5%AD%97%E7%AC%A6" code="eJyrVsooyc1RslKyKbDzCPH1UXiyY+3zKSsUgFyFZ3OXPl0368nOzmfrtr6YsPdpa/PzLQseNzTZ6BfYxeTF5KFpUcspsS5QSy+xxq4RpkupFgAABzqe">
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>HTML 中用 &#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">> 来定义段落元素。&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>HTML 中用 </span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">&#x26;lt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">p</span><span style="--shiki-light:#986801;--shiki-dark:#E06C75">&#x26;gt;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> 来定义段落元素&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeDemo>
<h2 id="html-注释" tabindex="-1"><a class="header-anchor" href="#html-注释"><span>HTML 注释</span></a></h2>
<p>为了将一段 HTML 中的内容置为注释，你需要将其用特殊的记号 <code v-pre>&lt;!--</code> 和 <code v-pre>--&gt;</code> 包裹起来，比如：</p>
<CodeDemo id="code-demo-214" type="normal" title="HTML%20%E6%B3%A8%E9%87%8A" code="eJyrVsooyc1RslKyKbB71jHx6ZwVzzaveNne9XTJtPd7Gm30C+xi8mLybBR1dRXQVbS1QlUo6OoCVSnVAgCYVSSQ">
<div class="language-html line-numbers-mode" data-highlighter="shiki" data-ext="html" data-title="html" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">>我在注释外！&#x3C;/</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">p</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">></span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">&#x3C;!-- &#x3C;p>我在注释内！&#x3C;/p> --></span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeDemo>
</div></template>


