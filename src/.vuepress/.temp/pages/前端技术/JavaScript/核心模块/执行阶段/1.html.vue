<template><div><h1 id="执行上下文栈" tabindex="-1"><a class="header-anchor" href="#执行上下文栈"><span>执行上下文栈</span></a></h1>
<figure><img src="https://www.freeimg.cn/i/2024/06/26/667b753160d56.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>当我们调用一个函数时（激活），一个新的执行上下文就会被创建。</p>
<p>一个执行上下文的生命周期可分为 <strong>创建阶段</strong> 和 <strong>代码执行阶段</strong> 两个阶段。</p>
<p><strong>创建阶段</strong>：在这个阶段中，执行上下文会分别进行以下操作</p>
<ul>
<li>创建 <RouteLink to="/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/JavaScript/%E6%A0%B8%E5%BF%83%E6%A8%A1%E5%9D%97/%E6%89%A7%E8%A1%8C%E9%98%B6%E6%AE%B5/2.html">变量对象</RouteLink></li>
<li>建立 <RouteLink to="/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/JavaScript/%E6%A0%B8%E5%BF%83%E6%A8%A1%E5%9D%97/%E6%89%A7%E8%A1%8C%E9%98%B6%E6%AE%B5/3.html">作用域链</RouteLink></li>
<li>确定 <RouteLink to="/%E5%89%8D%E7%AB%AF%E6%8A%80%E6%9C%AF/JavaScript/%E6%A0%B8%E5%BF%83%E6%A8%A1%E5%9D%97/%E6%89%A7%E8%A1%8C%E9%98%B6%E6%AE%B5/4.html">this</RouteLink> 的指向</li>
</ul>
<p><strong>代码执行阶段</strong>：创建完成之后，就会开始执行代码，并依次完成以下步骤</p>
<ul>
<li>变量赋值</li>
<li>函数引用</li>
<li>执行其他代码</li>
</ul>
<figure><img src="https://www.freeimg.cn/i/2024/06/26/667b780244ba4.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<h2 id="可执行代码" tabindex="-1"><a class="header-anchor" href="#可执行代码"><span>可执行代码</span></a></h2>
<p>每次当控制器转到可执行代码的时候，就会进入一个执行上下文。</p>
<p>执行上下文可以理解为当前代码的执行环境，它会形成一个作用域。</p>
<p>JavaScript 中的运行环境大概包括三种情况：</p>
<ul>
<li>全局环境：JavaScript 代码运行起来会首先进入该环境</li>
<li>函数环境：当函数被调用执行时，会进入当前函数中执行代码</li>
<li>eval（不建议使用，可忽略）</li>
</ul>
<p>因此在一个 JavaScript 程序中，必定会产生多个执行上下文，而 JavaScript 引擎会以栈的方式来处理它们，这个栈，我们称其为 <strong>函数调用栈（Call Stack）</strong>。栈底永远都是全局上下文，而栈顶就是当前执行的上下文。</p>
<p>当代码在执行过程中，遇到以上三种情况，都会生成一个执行上下文，放入栈中，而处于栈顶的上下文执行完毕之后，就会自动出栈。</p>
<h2 id="栈堆实现分析" tabindex="-1"><a class="header-anchor" href="#栈堆实现分析"><span>栈堆实现分析</span></a></h2>
<p>JavaScript 引擎通过创建 <strong>执行上下文栈（Execution Context Stack，ECS）</strong> 用于管理执行上下文。</p>
<p>🎯 为了模拟执行上下文栈的行为，让我们类比执行上下文栈是一个数组。</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">ECStack</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [];</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>试想当 JavaScript 开始要解释执行代码的时候，最先遇到的就是全局代码，所以初始化的时候首先就会向执行上下文栈压入一个全局执行上下文，我们用 <code v-pre>globalContext</code> 表示它，并且只有当整个应用程序结束的时候，ECStack 才会被清空，<strong>所以程序结束之前</strong>， ECStack 最底部永远有个 <code v-pre>globalContext</code>。</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">ECStack</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> [</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75">globalContext</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">];</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>现在 JavaScript 遇到下面的这段代码了：</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> fun3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">  console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379">'fun3'</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> fun2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  fun3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">function</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF"> fun1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">() {</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  fun2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">fun1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当执行一个函数的时候，就会创建一个执行上下文，并且压入执行上下文栈，当函数执行完毕的时候，就会将函数的执行上下文从栈中弹出。</p>
<p>知道了这样的工作原理，让我们来看看如何处理上面这段代码：</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// fun1()</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">ECStack</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">push</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">fun1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">> functionContext);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">// fun1 中竟然调用了 fun2，还要创建 fun2 的执行上下文</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">ECStack.push(&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">fun2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">> functionContext);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">// 擦，fun2 还调用了 fun3！</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">ECStack.push(&#x3C;</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">fun3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">> functionContext);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">// fun3 执行完毕</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">ECStack.pop();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">// fun2 执行完毕</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">ECStack.pop();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">// fun1 执行完毕</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">ECStack.pop();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">// JavaScript 接着执行下面的代码，但是 ECStack 底层永远有个 globalContext</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>详细了解了这个过程之后，我们就可以对 执行上下文栈 总结一些结论了。</p>
<p>JavaScript 引擎是单线程的</p>
<ul>
<li>同步执行，只有栈顶的上下文处于执行中，其他上下文需要等待</li>
<li>全局上下文只有唯一的一个，它在浏览器关闭时出栈</li>
<li>函数的执行上下文的个数没有限制</li>
<li>每次某个函数被调用，就会有个新的执行上下文为其创建，即使是调用的自身函数，也是如此</li>
</ul>
</div></template>


