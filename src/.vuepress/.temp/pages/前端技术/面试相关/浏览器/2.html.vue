<template><div><h1 id="_2-进程和线程" tabindex="-1"><a class="header-anchor" href="#_2-进程和线程"><span>2. 进程和线程</span></a></h1>
<h2 id="_1-进程-process" tabindex="-1"><a class="header-anchor" href="#_1-进程-process"><span>1. 进程（Process）</span></a></h2>
<p>进程是计算机中正在运行的程序的实例，<strong>一个进程就是一个程序运行实例</strong>。它拥有独立的内存空间、代码和数据，并且由操作系统负责调度和管理。<strong>每个进程在执行时都会分配独立的内存空间，不同进程之间的内存是隔离的，一个进程的错误不会直接影响其他进程</strong>。 进程之间通过进程间通信（IPC）机制来交换数据和进行通信，常见的IPC方式包括管道、消息队列、共享内存等。进程的切换开销较大，因为需要保存和恢复进程的完整状态，涉及到内存保护和虚拟内存的切换。</p>
<h2 id="_2-线程-thread" tabindex="-1"><a class="header-anchor" href="#_2-线程-thread"><span>2. 线程（Thread）</span></a></h2>
<p><strong>线程是进程的子任务，一个进程可以包含多个线程</strong>。它们共享相同的代码和数据，但拥有独立的执行栈和寄存器集合。<strong>多个线程可以在同一进程内并发执行</strong>，共享进程的资源，如内存空间、打开的文件等。线程间的通信和数据交换比进程间的通信更加方便，因为它们共享相同的地址空间。线程的切换开销较小，因为线程共享进程的地址空间，切换时不需要切换内存页表，速度较快。</p>
<h2 id="_3-区别" tabindex="-1"><a class="header-anchor" href="#_3-区别"><span>3. 区别</span></a></h2>
<ul>
<li>
<p>进程和线程都可以实现并发执行，但进程是独立的执行实体，而<strong>线程是依赖于进程</strong>的。</p>
</li>
<li>
<p>进程之间资源相互隔离，<strong>线程共享所属进程的资源</strong>。</p>
</li>
<li>
<p>创建和销毁线程的开销较小，而创建和销毁进程的开销较大。</p>
</li>
<li>
<p>多线程程序的编程复杂度通常比单线程程序高，但多线程可以更好地利用多核处理器来提高程序的执行效率。</p>
</li>
</ul>
<h2 id="_4-浏览器有哪些进程" tabindex="-1"><a class="header-anchor" href="#_4-浏览器有哪些进程"><span>4. 浏览器有哪些进程</span></a></h2>
<ul>
<li>
<p><strong>主进程</strong>：负责处理用户输入、渲染页面等主要任务。</p>
</li>
<li>
<p><strong>渲染进程</strong>：渲染进程负责解析<code v-pre>HTML</code>、<code v-pre>CSS</code>和<code v-pre>JavaScript</code>，并将网页渲染成可视化内容。</p>
</li>
<li>
<p><strong>GPU进程</strong>：负责处理浏览器中的<code v-pre>GPU</code>加速任务。</p>
</li>
<li>
<p><strong>网络线程</strong>：网络进程负责处理浏览器中的网络请求和响应，包括下载网页和资源等。</p>
</li>
<li>
<p><strong>插件进程</strong>：负责浏览器插件运行。</p>
</li>
</ul>
</div></template>


