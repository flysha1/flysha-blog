<template><div><h1 id="freeze" tabindex="-1"><a class="header-anchor" href="#freeze"><span>freeze</span></a></h1>
<p><code v-pre>Object.freeze()</code> 方法用于冻结一个对象。</p>
<h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法"><span>语法</span></a></h2>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">Object</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">freeze</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">o</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">)</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// o 将被冻结的对象</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 返回被冻结的对象</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法说明" tabindex="-1"><a class="header-anchor" href="#方法说明"><span>方法说明</span></a></h3>
<p>一个被冻结的对象再也不能被修改。</p>
<p>冻结了一个对象则不能向这个对象添加新的属性，不能删除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。此外，冻结一个对象后该对象的原型也不能被修改。</p>
<p>数据属性的值不可更改，访问器属性（有 <code v-pre>getter</code> 和 <code v-pre>setter</code>）也同样（但由于是函数调用，给人的错觉是还是可以修改这个属性）。</p>
<p>如果一个属性的值是个对象，则这个对象中的属性是可以修改的，除非它也是个冻结对象。</p>
<p>数组作为一种对象，被冻结，其元素不能被修改。没有数组元素可以被添加或移除。</p>
</div></template>


