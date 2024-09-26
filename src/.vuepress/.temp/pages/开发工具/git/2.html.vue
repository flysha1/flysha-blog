<template><div><h1 id="rebase、reset、revert区别" tabindex="-1"><a class="header-anchor" href="#rebase、reset、revert区别"><span>rebase、reset、revert区别？</span></a></h1>
<h2 id="_1-rebase" tabindex="-1"><a class="header-anchor" href="#_1-rebase"><span>1. rebase</span></a></h2>
<p><code v-pre>git rebase</code> 用于将一个分支的提交移到另一个分支上，并重新应用这些提交。主要有两种用途：</p>
<ul>
<li>
<p><strong>整理提交历史</strong>：将多个小的提交合并成一个更为清晰的提交历史，避免不必要的历史混乱。</p>
</li>
<li>
<p><strong>将本地提交与远程同步</strong>：在拉取远程更改之前，通过 <code v-pre>rebase</code> 将本地提交移动到远程提交的后面，使历史更为干净。</p>
</li>
</ul>
<div class="language-cmd line-numbers-mode" data-highlighter="shiki" data-ext="cmd" data-title="cmd" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"># 从当前分支拉取最新的远程变更并应用到本地分支</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">git </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">pull</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> --</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">rebase</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> origin branch_name</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-reset" tabindex="-1"><a class="header-anchor" href="#_2-reset"><span>2. reset</span></a></h2>
<p><code v-pre>git reset</code> 用于移动 HEAD 指针和当前分支的引用，主要有三种模式：</p>
<ul>
<li><strong>-soft</strong>：只移动 HEAD 指针，不改变工作目录和暂存区，保留更改。</li>
</ul>
<div class="language-cmd line-numbers-mode" data-highlighter="shiki" data-ext="cmd" data-title="cmd" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">git </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">reset</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> --</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">soft</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> commit_hash</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>-mixed（默认）</strong>：移动 HEAD 指针和暂存区，但不改变工作目录，将更改放回工作目录。</li>
</ul>
<div class="language-cmd line-numbers-mode" data-highlighter="shiki" data-ext="cmd" data-title="cmd" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">git </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">reset</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> --</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">mixed</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> commit_hash</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>-hard</strong>：移动 HEAD 指针、暂存区和工作目录，将所有更改丢弃。</li>
</ul>
<div class="language-cmd line-numbers-mode" data-highlighter="shiki" data-ext="cmd" data-title="cmd" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">git </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">reset</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> --</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75">hard</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF"> commit_hash</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_3-revert" tabindex="-1"><a class="header-anchor" href="#_3-revert"><span>3. revert</span></a></h2>
<p><code v-pre>git revert</code> 用于创建一个新的提交，用来撤销之前的提交。与 <code v-pre>reset</code> 不同，<code v-pre>revert</code> 不修改提交历史，而是创建新的提交来撤销之前的更改。</p>
<div class="language-cmd line-numbers-mode" data-highlighter="shiki" data-ext="cmd" data-title="cmd" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34"><pre v-pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF">git revert commit_hash</span></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>在撤销多个提交时，可能会遇到冲突，需要手动解决冲突后再提交。</p>
<h2 id="区别总结" tabindex="-1"><a class="header-anchor" href="#区别总结"><span>区别总结</span></a></h2>
<ul>
<li>
<p><code v-pre>rebase</code> 用于修改提交历史的顺序，将一系列提交重新应用到新的基底上。</p>
</li>
<li>
<p><code v-pre>reset</code> 用于移动 HEAD 指针，可以用来撤销提交、取消暂存区的更改或者彻底丢弃更改。</p>
</li>
<li>
<p><code v-pre>revert</code> 用于创建新的提交，撤销之前的提交，不改变历史。</p>
</li>
</ul>
</div></template>


