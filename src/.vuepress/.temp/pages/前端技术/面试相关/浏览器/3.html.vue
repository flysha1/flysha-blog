<template><div><h1 id="_3-协商缓存和强缓存" tabindex="-1"><a class="header-anchor" href="#_3-协商缓存和强缓存"><span>3. 协商缓存和强缓存</span></a></h1>
<h2 id="_1-强缓存" tabindex="-1"><a class="header-anchor" href="#_1-强缓存"><span>1. 强缓存</span></a></h2>
<p>使用强缓存策略时，如果缓存资源有效，浏览器会<strong>从本地读取缓存资源并返回200</strong>，不必再向服务器发起请求。强缓存策略可以通过两种方式来设置，分别是 <code v-pre>http</code> 头信息中的 <code v-pre>Expires</code> 属性和 <code v-pre>Cache-Control</code> 属性。</p>
<p><strong>Expires</strong> 指定资源的过期时间。在过期时间以内，改资源可以被缓存使用，不需要向浏览器发送请求。这个时间依赖于服务器时间，会存在服务器时间和客户端时间不一致。</p>
<p><strong>Cache-Control属性</strong>：</p>
<ul>
<li>
<p><code v-pre>private</code> 仅浏览器可以缓存</p>
</li>
<li>
<p><code v-pre>public</code> 浏览器和代理服务器都可以缓存</p>
</li>
<li>
<p><code v-pre>max-age=xxx</code> 过期时间，单位为秒</p>
</li>
<li>
<p><code v-pre>no-cache</code> 不进行强缓存，但会有协商缓存</p>
</li>
<li>
<p><code v-pre>no-store</code> 不强缓存，也不协商缓存</p>
</li>
</ul>
<p><strong>注意</strong>：当两种方式一起使用时，<code v-pre>Cache-Control</code> 的优先级要高于 <code v-pre>Expires</code>。</p>
<h2 id="_2-协商缓存" tabindex="-1"><a class="header-anchor" href="#_2-协商缓存"><span>2. 协商缓存</span></a></h2>
<p>如果设置强缓存，无需发起请求，直接使用缓存内容。如果没有命中强缓存，设置了协商缓存，也不需要发起请求，使用缓存。</p>
<p>命中协商缓存条件：</p>
<ul>
<li>
<p><code v-pre>Cache-Control: no-cache</code></p>
</li>
<li>
<p><code v-pre>max-age</code> 时间过期</p>
</li>
</ul>
<p>在使用协商缓存时，<strong>会先向服务器发送一个请求，如果资源没有发生修改，则请求返回304状态</strong>，让浏览器使用本地缓存。如果资源发生修改，则返回修改后的内容</p>
<p>在 <code v-pre>request</code> <code v-pre>headers</code> 中的 <code v-pre>Etag</code> 属性和 <code v-pre>Last-Modified</code> 属性，来进行设置。其中，<code v-pre>ETage</code> 优先于 <code v-pre>Last-Modified</code>。</p>
<p><strong>Etag文件改动</strong>：</p>
<p>服务器在返回资源的时候，在头信息中添加 <code v-pre>Etag</code> 属性，这个属性是资源的唯一标识符。当资源改变，这个值也会改变。下次请求资源时，会在请求头中添加 <code v-pre>If-None-Match</code> 属性，为上一次请求的资源的 <code v-pre>Etag</code> 值。服务端会通过这个属性和资源最后一次修改时间进行对比，以此来判断资源是否修改。这种方式比 <code v-pre>Last-Modified</code> 更加准确。</p>
<p><strong>Last-Modified 上次修改时间</strong>：</p>
<p>服务器通过在响应头上添加 <code v-pre>Last-Modified</code> 属性，来指出资源最后一次修改时间。当浏览器发起请求时，会在请求头上添加一个 <code v-pre>IF-Modified-Since</code> 属性，值为上一次资源请求的 <code v-pre>Last-Modified</code> 的值。服务器会通过这个属性和最后修改时间来进行比较，以此来判断资源是否修改。如果没有资源修改，返回304状态，使用本地缓存。如果资源修改，就返回最新资源，200状态。
这种方式有个缺点，<code v-pre>Last-Modified</code> 标记的时间只能精确到1秒，如果文件在1秒内修改，但是 <code v-pre>Last-Modified</code> 却没有改变，这样会造成缓存命中的不准确。</p>
<h2 id="_3-区别" tabindex="-1"><a class="header-anchor" href="#_3-区别"><span>3. 区别</span></a></h2>
<p>强缓存优先级高于协商缓存</p>
<p>协商缓存不论命中与否都会发送一次请求</p>
<p>强缓存返回 <code v-pre>200</code> ，协商缓存命中返回 <code v-pre>304</code></p>
<p><code v-pre>Ctrl+F5</code> 会强制刷新会跳过所有缓存，而F5刷新跳过强缓存，但是会检查协商缓存。</p>
<h2 id="_4-为什么需要浏览器缓存" tabindex="-1"><a class="header-anchor" href="#_4-为什么需要浏览器缓存"><span>4. 为什么需要浏览器缓存</span></a></h2>
<ul>
<li>
<p>减少了服务器的负担，提高了网站的性能</p>
</li>
<li>
<p>加快了客户端网页的加载速度</p>
</li>
<li>
<p>减少了多余网络数据传输</p>
</li>
</ul>
</div></template>


