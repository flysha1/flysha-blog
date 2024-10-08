<template><div><h1 id="事件循环" tabindex="-1"><a class="header-anchor" href="#事件循环"><span>事件循环</span></a></h1>
<p>为了协调事件、用户交互、脚本、UI 渲染、网络请求，用户代理必须使用 <strong>事件循环机制</strong>（Event Loop）。</p>
<p>这种事件循环机制是由 JavaScript 的宿主环境来实现的，在浏览器运行环境中由浏览器内核引擎实现，而在 NodeJS 中则由 libuv 引擎实现。</p>
<p>主线程运行时候，产生堆（Heap）和栈（Stack），栈中的代码调用各种外部 API，它们在任务队列中加入各种事件。只要栈中的代码执行完毕，主线程就会通过事件循环机制读取任务队列，依次执行那些事件所对应的回调函数。</p>
<p>运行机制：</p>
<ol>
<li>所有同步任务都在主线程上执行，形成一个 <strong>执行栈</strong>（Execution Context Stack）</li>
<li>主线程之外，还存在一个 <strong>任务队列</strong>（Task Queue）。只要异步任务有了运行结果，就在 <strong>任务队列</strong> 之中放置一个事件</li>
<li>一旦 <strong>执行栈</strong> 中的所有同步任务执行完毕，系统就会读取 <strong>任务队列</strong>，看看里面有哪些待执行事件。那些对应的异步任务，于是结束等待状态，进入执行栈，开始执行</li>
<li>主线程不断重复上面的第三步</li>
</ol>
<h2 id="浏览器环境" tabindex="-1"><a class="header-anchor" href="#浏览器环境"><span>浏览器环境</span></a></h2>
<p>JavaScript 的异步任务根据事件分类分为两种：<strong>宏任务</strong>（MacroTask）和 <strong>微任务</strong>（MicroTask）</p>
<ul>
<li><strong>宏任务</strong>：main script、setTimeout、setInterval、setImmediate（Node.js）、I/O（Mouse Events、Keyboard Events、Network Events）、UI Rendering（HTML Parsing）、MessageChannel</li>
<li><strong>微任务</strong>：Promise.then（非 new Promise）、process.nextTick（Node.js）、MutationObserver</li>
</ul>
<p>宏任务与微任务的区别在于队列中事件的执行优先级。进入整体代码（宏任务）后，开始首次事件循环，当执行上下文栈清空后，事件循环机制会优先检测微任务队列中的事件并推至主线程执行，当微任务队列清空后，才会去检测宏任务队列中的事件，再将事件推至主线程中执行，而当执行上下文栈再次清空后，事件循环机制又会检测微任务队列，如此反复循环。</p>
<p><strong>宏任务与微任务的优先级</strong></p>
<ul>
<li>宏任务的优先级高于微任务</li>
<li>每个宏任务执行完毕后都必须将当前的微任务队列清空</li>
<li>第一个 <code v-pre>&lt;script&gt;</code> 标签的代码是第一个宏任务</li>
<li><code v-pre>process.nextTick</code> 优先级高于 <code v-pre>Promise.then</code></li>
</ul>
<figure><img src="https://www.freeimg.cn/i/2024/07/16/6695c7c7c505f.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>
<p>🌰 代码示例：</p>
<div class="language-js line-numbers-mode" data-highlighter="shiki" data-ext="js" data-title="js" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">setTimeout</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(() </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">  console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">}, </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">let</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75"> promise</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2"> =</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD"> new</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B"> Promise</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">((</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">res</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">  console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">  resolve</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">();</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">})</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  .</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">then</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">((</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">res</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">    console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  })</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  .</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">then</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">((</span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic">res</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD">=></span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">    console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">  });</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#E5C07B">console</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF">log</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66">6</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic">// 1 3 6 4 5 2</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="node-环境" tabindex="-1"><a class="header-anchor" href="#node-环境"><span>Node 环境</span></a></h2>
<p>在 Node 中，事件循环表现出的状态与浏览器中大致相同。不同的是 Node 中有一套自己的模型。Node 中事件循环的实现是依靠的 libuv 引擎。我们知道 Node 选择 Chrome V8 引擎作为 JavaScript 解释器，V8 引擎将 JavaScript 代码分析后去调用对应的 Node API，而这些 API 最后则由 libuv 引擎驱动，执行对应的任务，并把不同的事件放在不同的队列中等待主线程执行。 因此实际上 Node 中的事件循环存在于 libuv 引擎中。</p>
<div class="language-node line-numbers-mode" data-highlighter="shiki" data-ext="node" data-title="node" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>┌───────────────────────┐</span></span>
<span class="line"><span>┌─>│        timers         │</span></span>
<span class="line"><span>│  └──────────┬────────────┘</span></span>
<span class="line"><span>│  ┌──────────┴────────────┐</span></span>
<span class="line"><span>│  │     I/O callbacks     │</span></span>
<span class="line"><span>│  └──────────┬────────────┘</span></span>
<span class="line"><span>│  ┌──────────┴────────────┐</span></span>
<span class="line"><span>│  │     idle, prepare     │</span></span>
<span class="line"><span>│  └──────────┬────────────┘      ┌───────────────┐</span></span>
<span class="line"><span>│  ┌──────────┴────────────┐      │   incoming:   │</span></span>
<span class="line"><span>│  │         poll          │&#x3C;──connections───     │</span></span>
<span class="line"><span>│  └──────────┬────────────┘      │   data, etc.  │</span></span>
<span class="line"><span>│  ┌──────────┴────────────┐      └───────────────┘</span></span>
<span class="line"><span>│  │        check          │</span></span>
<span class="line"><span>│  └──────────┬────────────┘</span></span>
<span class="line"><span>│  ┌──────────┴────────────┐</span></span>
<span class="line"><span>└──┤    close callbacks    │</span></span>
<span class="line"><span>   └───────────────────────┘</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>外部输入数据</li>
<li>轮询阶段（Poll）：等待新的 I/O 事件，Node 在一些特殊情况下会阻塞在这里</li>
<li>检查阶段（Check）：<code v-pre>setImmediate</code> 的回调会在这个阶段执行</li>
<li>关闭事件回调阶段（Close Callback）</li>
<li>定时器检测阶段（Timer）：这个阶段执行定时器队列中的回调</li>
<li>I/O 事件回调阶段（I/O Callbacks）：这个阶段执行几乎所有的回调，但是不包括 <code v-pre>close</code> 事件、定时器和 <code v-pre>setImmediate()</code> 的回调</li>
<li>闲置阶段（Idle Prepare）：仅在内部使用，不必理会</li>
</ul>
<p>当一个消息需要太长时间才能处理完毕时，Web 应用就无法处理用户的交互，例如点击或滚动。浏览器用程序需要过长时间运行的对话框来缓解这个问题。一个很好的做法是缩短消息处理，并在可能的情况下将一个消息裁剪成多个消息。</p>
</div></template>


