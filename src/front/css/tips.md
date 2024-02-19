---
date: 2018-02-01
category:
  - 前端技术
  - 面经
tag:
  - css
---
# CSS高频面试题

## 1.浮动和清除浮动

::: normal-demo 1.在受浮动影响的父元素容器的伪元素上进行清除浮动

```html
<div class="parent">
    <div class="child"></div>
    <div class="child"></div>
    <div class="child"></div>
</div>
```

```css
.parent {
    background: #ccc;
}
.parent::after{
    content: '';
    display: block;
    clear: both;
}
.child {
    float: left;
    width: 100px;
    height: 100px;
    background: aqua;
    margin: 10px;
}
```

:::

::: normal-demo 2.对受浮动影响的父元素容器设置BFC

```html
<div class="parent">
    <div class="child"></div>
    <div class="child"></div>
    <div class="child"></div>
</div>
```

```css
.parent {
    background: #ccc;
    display:flex
}
.child {
    float: left;
    width: 100px;
    height: 100px;
    background: aqua;
    margin: 10px;
}
```

:::

## 2. 什么是BFC

"BFC容器"通常是指"块级格式化上下文容器"（Block Formatting Context Container）。块级格式化上下文（BFC）是在CSS中用来管理和控制元素在页面上布局和排列的一种机制。BFC容器是一种具有特定规则的HTML元素或CSS属性，它们会创建一个独立的上下文，影响其内部元素的布局和排列方式。BFC容器是CSS布局中的一个重要概念，可以帮助开发人员更精确地控制元素的布局和排列

BFC的作用：

1. 清除浮动：BFC容器可以用来清除浮动元素的影响，确保父元素包含浮动子元素的高度，从而避免出现高度塌陷问题。这是BFC最常见的应用之一，特别是在创建多列布局或类似网格的布局时非常有用。

2. 防止外边距重叠：在同一个BFC容器内的相邻块级元素的外边距不会发生重叠，这有助于更精确地控制元素之间的间距。这对于垂直外边距塌陷问题的解决非常有帮助。

如何创建BFC：

``` css
float: right || left;
position: absolute || fixed;
display: flex || inline-flex || inline-block || table-cell;
overflow: hidden || auto || overly || scroll;
```

## 3. display属性有哪些值

CSS display 属性设置元素是否被视为块或者内联元素以及用于子元素的布局，例如流式布局、网格布局或弹性布局。

形式上，display 属性设置元素的内部和外部的显示类型。外部类型设置元素参与流式布局；内部类型设置子元素的布局。一些 display 值在它们自己的单独规范中完整定义；例如，在 CSS 弹性盒模型的规范中，定义了声明 display: flex 时会发生的细节。

```css
/* precomposed values */
display: block;
display: inline;
display: inline-block;
display: flex;
display: inline-flex;
display: grid;
display: inline-grid;
display: flow-root;

/* box generation */
display: none;
display: contents;

/* two-value syntax */
display: block flow;
display: inline flow;
display: inline flow-root;
display: block flex;
display: inline flex;
display: block grid;
display: inline grid;
display: block flow-root;

/* other values */
display: table;
display: table-row; /* all table elements have an equivalent CSS display value */
display: list-item;

/* Global values */
display: inherit;
display: initial;
display: revert;
display: revert-layer;
display: unset;
```

关键值可以被分为六个种类：

1. 外部表现

这些关键字规定元素的外部显示类型，实际上就是其在流式布局中的角色：

<code>block</code>
    该元素生成一个块级元素盒，在正常的流中，该元素之前和之后产生换行

<code>inline</code>
    该元素生成一个或多个内联元素盒，它们之前或者之后并不会产生换行。在正常的流中，如果有空间，下一个元素将会在同一行上。

2. 内部表现

这些关键字规定了元素的内部显示类型，其定义了该内容布局时的格式上下文的类型（假设它是一个非替换元素）：

<code>float</code>
    该元素使用流式布局（块和内联布局）来排布它的内容。

如果它的外部显示类型是 inline 或 run-in，并且它参与一个块或者内联格式上下文，那么它将生成一个内联盒子。否则它将生成一个块容器盒。

根据其他属性的值（例如 position、float 或 overflow）以及它自身是否参与到块或者内联格式化上下文，它要么为它的内容建立新的区块格式化上下文（BFC），要么将其内容集成到其父元素的格式化上下文中。

<code>float-root</code>
    该元素生成一个块级元素盒，其会建立一个新的区块格式化上下文，定义格式化上下文的根元素。

<code>table</code>
    该元素的行为类似于 HTML 中的 <code>\<table></code> 元素。它定义了一个块级别的盒子。

<code>flex</code>
    该元素的行为类似块级元素并且根据弹性盒模型布局它的内容。

<code>grid</code>
    该元素的行为类似块级元素并且根据网格模型布局它的内容。

<code>ruby</code>
    该元素的行为类似内联元素并且根据 ruby 格式化模型布局它的内容。它的行为像关联的 HTML 的 <code>\<ruby></code> 元素。

3. 列表元素

<code>list-item</code>
    的单独值将导致元素的行为类似于一个列表元素。其可以与 list-style-type 和 list-style-position 一起使用。

4. 内部

一些布局模型，例如 table 和 ruby 有一个复杂的内置结构，它们的子孙后代可以扮演几个不同的角色。本节定义的这些“内部”display 值，仅在特定的布局模式下有用。

<code>table-row-group</code>
    该元素的行为类似于 HTML 的 <code>\<tbody></code> 元素。

<code>table-footer-group</code>
    该元素的行为类似于 HTML 的 <code>\<tfoot></code> 元素。

<code>table-row-group</code>
    该元素的行为类似于 HTML 的 <code>\<tbody></code> 元素。

<code>table-row</code>
    该元素的行为类似于 HTML 的 <code>\<tr></code> 元素。

<code>table-cell</code>
    该元素的行为类似于 HTML 的 <code>\<td></code> 元素。

<code>table-row-group</code>
    该元素的行为类似于 HTML 的 <code>\<tbody></code> 元素。

<code>table-column-group</code>
    该元素的行为类似于 HTML 的 <code>\<colgroup></code> 元素。

<code>table-column</code>
    该元素的行为类似于 HTML 的 <code>\<col></code> 元素。

<code>table-caption</code>
    该元素的行为类似于 HTML 的 <code>\<caption></code> 元素。

<code>ruby-base</code>
    该元素的行为类似于 HTML 的 <code>\<rb></code> 元素。

<code>ruby-text</code>
    该元素的行为类似于 HTML 的 <code>\<rt></code> 元素。

<code>ruby-base-container</code>
    该元素是作为匿名盒子生成的。

<code>ruby-text-container</code>
    该元素的行为类似于 HTML 的 <code>\<rtc></code> 元素。

5. 盒

这些关键词定义一个元素到底是否产生 display 盒

<code>contents</code>
    这些元素自身不会产生特定的盒子。它们被伪盒子（pseudo-box）和子盒子取代。请注意，CSS Display Level 3 规范中定义了 contents 值如何影响“异常元素”——这些元素不是纯粹由 CSS 盒模型概念呈现的（例如替换元素）。

<code>none</code>
    使元素不再显示，其对布局不会有影响（文档渲染得好像这个元素并不存在）。所有的后代元素也不会再显示。为了使元素占据一个它通常占据的空间，但实际上没有渲染任何东西，应该使用 visibility 属性。

6. 预组合

CSS 2 为 display 属性使用单关键字的预组合的语法，对相同布局模式的块级和内联级变体需要单独的关键字。

<code>inline-block</code>
    该元素生成块级元素盒，如果它是一个单独的内联盒，它将和周围的内容一起流动（行为类似于替换元素）。
    它等同于 <code>inline flow-root</code>

<code>inline-table</code>
    inline-table 值在 HTML 中没有直接的映射。它行为类似于 HTML 的 <code>\<table></code> 元素，但实际是一个内联盒，而不是一个块级盒子。table 盒内部是一个块级上下文。

它等同于 <code>inline table</code>

<code>inline-flex</code>
    元素的行为类似于内联元素并且它的内容根据弹性盒模型布局。

它等同于 <code>inline flex</code>

<code>inline-grid</code>
    元素的行为类似于内联元素并且它的内容根据网格盒模型布局。

它等同于 <code>inline grid</code>

## 4. 讲一下flex弹性布局

Flex是Flexible Box的缩写，意为”弹性布局”，用来为盒状模型提供最大的灵活性。
任何一个容器都可以指定为Flex布局。

采用Flex布局的元素，称为Flex容器（flex container），简称”容器”。它的所有子元素自动成为容器成员，称为Flex项目（flex item），简称”项目”。

容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做main start，结束位置叫做main end；交叉轴的开始位置叫做cross start，结束位置叫做cross end。

项目默认沿主轴排列。单个项目占据的主轴空间叫做main size，占据的交叉轴空间叫做cross size。

1. 容器的属性

<code>flex-direction</code>
    决定主轴的方向（即项目的排列方向）。

::: normal-demo flex-direction

```html
<div class="flex body">
    <div class="card">
        <h3>flex-direction: row</h3>
        <div class="flex row">
            <div class="item red">1</div>
            <div class="item blue">2</div>
            <div class="item orange">3</div>
            <div class="item purple">4</div>
        </div>
    </div>
    <div class="card">
        <h3>flex-direction: row-reverse</h3>
        <div class="flex row-reserve">
            <div class="item red">1</div>
            <div class="item blue">2</div>
            <div class="item orange">3</div>
            <div class="item purple">4</div>
        </div>
    </div>
    <div class="card">
        <h3>flex-direction: column</h3>
        <div class="flex column">
            <div class="item red">1</div>
            <div class="item blue">2</div>
            <div class="item orange">3</div>
            <div class="item purple">4</div>
        </div>
    </div>
    <div class='card'>
        <h3>flex-direction: column-reverse</h3>
        <div class="flex column-reverse">
            <div class="item red">1</div>
            <div class="item blue">2</div>
            <div class="item orange">3</div>
            <div class="item purple">4</div>
        </div>
    </div>
</div>
```

```css
.body{
    flex-wrap:wrap;
    --bg-red:#ff7f7f;
    --bg-blue:#4299eb;
    --bg-orange:#ffa500;
    --bg-purple:#ff70ff;
}
h5{
    margin-bottom:10px;
}
.card{
    width:50%
}
.flex {
    display:flex;
    
}
.row{
    flex-direction:row;
}
.row-reserve{
    flex-direction:row-reverse;
}
.column{
    flex-direction:column;
}
.column-reverse{
    flex-direction:column-reverse;
}
.item {
    width: 50px;
    height: 50px;
    background: aqua;
    display:flex;
    justify-content:center;
    align-items:center
}
.red{
    background:var(--bg-red);
}
.blue{
    background:var(--bg-blue);
}
.orange{
    background:var(--bg-orange);
}
.purple{
    background:var(--bg-purple);
}
```

:::

<code>flex-wrap</code>
    默认情况下，项目都排在一条线（又称”轴线”）上。flex-wrap属性定义，如果一条轴线排不下，如何换行。

::: normal-demo flex-wrap

```html
<div class="flex body">
    <div class="card">
        <h3>flex-wrap: nowrap</h3>
        <div class="flex nowrap">
            <div class="item red">1</div>
            <div class="item blue">2</div>
            <div class="item orange">3</div>
            <div class="item purple">4</div>
            <div class="item red">5</div>
            <div class="item blue">6</div>
            <div class="item orange">7</div>
            <div class="item purple">8</div>
             <div class="item red">9</div>
            <div class="item blue">10</div>
            <div class="item orange">11</div>
            <div class="item purple">12</div>
        </div>
    </div>
    <div class="card">
        <h3>flex-wrap: wrap</h3>
        <div class="flex wrap">
           <div class="item red">1</div>
            <div class="item blue">2</div>
            <div class="item orange">3</div>
            <div class="item purple">4</div>
            <div class="item red">5</div>
            <div class="item blue">6</div>
            <div class="item orange">7</div>
            <div class="item purple">8</div>
             <div class="item red">9</div>
            <div class="item blue">10</div>
            <div class="item orange">11</div>
            <div class="item purple">12</div>
        </div>
    </div>
    <div class="card">
        <h3>flex-wrap: wrap-reverse</h3>
        <div class="flex wrap-reverse">
           <div class="item red">1</div>
            <div class="item blue">2</div>
            <div class="item orange">3</div>
            <div class="item purple">4</div>
            <div class="item red">5</div>
            <div class="item blue">6</div>
            <div class="item orange">7</div>
            <div class="item purple">8</div>
             <div class="item red">9</div>
            <div class="item blue">10</div>
            <div class="item orange">11</div>
            <div class="item purple">12</div>
        </div>
    </div>
</div>
```

```css
.body{
    flex-wrap:wrap;
    --bg-red:#ff7f7f;
    --bg-blue:#4299eb;
    --bg-orange:#ffa500;
    --bg-purple:#ff70ff;
}
.card{
    width: 45%;
    padding: 0 10px;
}
.flex {
    display:flex;
    
}
.nowrap{
    flex-wrap:nowrap;
}
.wrap{
    flex-wrap:wrap;
}
.wrap-reverse{
    flex-wrap:wrap-reverse;
}
.item {
    width: 50px;
    height: 50px;
    background: aqua;
    display:flex;
    justify-content:center;
    align-items:center
}
.red{
    background:var(--bg-red);
}
.blue{
    background:var(--bg-blue);
}
.orange{
    background:var(--bg-orange);
}
.purple{
    background:var(--bg-purple);
}
```

:::

<code>flex-flow</code>
    flex-flow属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。

```css
.box {
  flex-flow: <flex-direction> <flex-wrap>;
}
```

<code>justify-content</code>
    justify-content属性定义了项目在主轴上的对齐方式。

::: normal-demo justify-content

```html
<div class="flex body">
    <div class="card">
        <h5>(默认值)左对齐</h5>
        <h5>justify-content: flex-start</h5>
        <div class="flex flex-start">
            <div class="item red w20">1</div>
            <div class="item blue w10">2</div>
            <div class="item orange w30">3</div>
        </div>
    </div>
    <div class="card">
        <h5>右对齐</h5>
        <h5>justify-content: flex-end</h5>
        <div class="flex flex-end">
           <div class="item red w20">1</div>
            <div class="item blue w10">2</div>
            <div class="item orange w30">3</div>
        </div>
    </div>
    <div class="card">
        <h5>居中</h5>
        <h5>justify-content: center</h5>
        <div class="flex center">
            <div class="item red w20">1</div>
            <div class="item blue w10">2</div>
            <div class="item orange w30">3</div>
        </div>
    </div>
    <div class='card'>
        <h5>每个项目两侧的间隔相等</h5>
        <h5>justify-center: space-around</h5>
        <div class="flex space-around">
           <div class="item red w20">1</div>
            <div class="item blue w10">2</div>
            <div class="item orange w30">3</div>
        </div>
    </div>
    <div class='card'>
        <h5>两端对齐，项目之间的间隔都相等</h5>
        <h5>justify-center: space-between</h5>
        <div class="flex space-between">
           <div class="item red w20">1</div>
            <div class="item blue w10">2</div>
            <div class="item orange w30">3</div>
        </div>
    </div>
</div>
```

```css
.body{
    flex-wrap:wrap;
    --bg-red:#ff7f7f;
    --bg-blue:#4299eb;
    --bg-orange:#ffa500;
    --bg-purple:#ff70ff;
}
.card{
    width:50%
}
.flex {
    display:flex;
    
}
.flex-start{
    justify-content:flex-start;
}
.flex-end{
    justify-content:flex-end;
}
.center{
    justify-content:center;
}
.space-around{
    justify-content:space-around;
}
.space-between{
    justify-content:space-between;
}
.item {
    height: 50px;
    background: aqua;
    display:flex;
    justify-content:center;
    align-items:center
}
.w10{
    width:10%
}
.w20{
     width:20%
}
.w30{
     width:30%
}
.red{
    background:var(--bg-red);
}
.blue{
    background:var(--bg-blue);
}
.orange{
    background:var(--bg-orange);
}
.purple{
    background:var(--bg-purple);
}
```

:::

<code>align-items</code>
   align-items属性定义项目在交叉轴上如何对齐。

::: normal-demo align-items

```html
<div class="flex body">
    <div class='card'>
        <h5>(默认值)如果项目未设置高度或设为auto，将占满整个容器的高度</h5>
        <h5>stretch</h5>
        <div class="flex stretch">
           <div class="item red h40">1</div>
            <div class="item blue h20">2</div>
            <div class="item orange h50">3</div>
            <div class="item purple h40">4</div>
        </div>
    </div>
    <div class="card">
        <h5>交叉轴的起点对齐</h5>
        <h5>flex-start</h5>
        <div class="flex flex-start">
            <div class="item red h40">1</div>
            <div class="item blue h20">2</div>
            <div class="item orange h50">3</div>
            <div class="item purple h40">4</div>
        </div>
    </div>
    <div class="card">
        <h5>交叉轴的终点点对齐</h5>
        <h5>flex-end</h5>
        <div class="flex flex-end">
           <div class="item red h40">1</div>
            <div class="item blue h20">2</div>
            <div class="item orange h50">3</div>
            <div class="item purple h40">4</div>
        </div>
    </div>
    <div class="card">
        <h5>交叉轴的中点对齐</h5>
        <h5>center</h5>
        <div class="flex center">
            <div class="item red h40">1</div>
            <div class="item blue h20">2</div>
            <div class="item orange h50">3</div>
            <div class="item purple h40">4</div>
        </div>
    </div>
    <div class='card'>
        <h5>项目的第一行文字的基线对齐</h5>
        <h5>baseline</h5>
        <div class="flex baseline">
             <div class="item red h40">1</div>
            <div class="item blue h20">2</div>
            <div class="item orange h50">3</div>
            <div class="item purple h40">4</div>
        </div>
    </div>
</div>
```

```css
h5{
    margin:0;
}
.body{
    flex-wrap:wrap;
    --bg-red:#ff7f7f;
    --bg-blue:#4299eb;
    --bg-orange:#ffa500;
    --bg-purple:#ff70ff;
}
.card{
    width:45%;
    padding:0 10px;
}
.card>.flex{
    height:120px;
}
.flex {
    display:flex;
    
}
.stretch{
    align-items:stretch;
}
.flex-start{
    align-items:flex-start;
}
.flex-end{
    align-items:flex-end;
}
.center{
    align-items:center;
}
.baseline{
    align-items:baseline;
}
.item {
    width: 50px;
    background: aqua;
    display:flex;
    justify-content:center;
    align-items:center
}
.h20{
     height:20%
}
.h40{
     height:40%
}
.h50{
    height:50%;
}
.red{
    background:var(--bg-red);
}
.blue{
    background:var(--bg-blue);
}
.orange{
    background:var(--bg-orange);
}
.purple{
    background:var(--bg-purple);
}
```

:::

<code>align-content</code>
   align-content属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

```css
flex-start：与交叉轴的起点对齐。
flex-end：与交叉轴的终点对齐。
center：与交叉轴的中点对齐。
space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
stretch（默认值）：轴线占满整个交叉轴。
```

2. 项目的属性

<code>order</code>
   order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。

::: normal-demo order

```html
<div class="flex body">
    <div class="card">
        <div class="flex">
            <div class="item red order3">3</div>
            <div class="item blue order2">2</div>
            <div class="item orange order1">1</div>
            <div class="item purple order2">2</div>
             <div class="item red order1">1</div>
        </div>
    </div>
    <div class="card">
        <div class="flex row-reserve">
             <div class="item red order1">1</div>
            <div class="item blue order5">5</div>
            <div class="item orange order2">2</div>
            <div class="item purple order-1">-1</div>
        </div>
    </div>
    <div class="card">
        <div class="flex column">
            <div class="item red order99">99</div>
            <div class="item blue order2">2</div>
            <div class="item orange order2">2</div>
        </div>
    </div>
</div>
```

```css
.body{
    flex-wrap:wrap;
    --bg-red:#ff7f7f;
    --bg-blue:#4299eb;
    --bg-orange:#ffa500;
    --bg-purple:#ff70ff;
}
h5{
    margin-bottom:10px;
}
.card{
    width:50%;
    margin-bottom:10px;
}
.flex {
    display:flex;
    
}
.column{
    flex-direction:column;
}

.order-1{
    order:-1;
}
.order1{
    order:1;
}
.order2{
    order:2;
}
.order3{
    order:3;
}
.order5{
    order:5;
}
.order99{
    order:99;
}
.item {
    width: 50px;
    height: 50px;
    background: aqua;
    display:flex;
    justify-content:center;
    align-items:center
}
.red{
    background:var(--bg-red);
}
.blue{
    background:var(--bg-blue);
}
.orange{
    background:var(--bg-orange);
}
.purple{
    background:var(--bg-purple);
}
```

:::

<code>flex-grow</code>
   flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。

<code>flex-shrink</code>
   flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。
   如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。
负值对该属性无效

<code>flex-basis</code>
   flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。

<code>flex</code>
    flex属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可选。

<code>align-self</code>
    align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。