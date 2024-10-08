<template><div><h1 id="面向对象编程" tabindex="-1"><a class="header-anchor" href="#面向对象编程"><span>面向对象编程</span></a></h1>
<p><strong>面向对象程序设计</strong>（Object Oriented Programming）作为一种新方法，其本质是以建立模型体现出来的抽象思维过程和面向对象的方法。模型是用来反映现实世界中事物特征的。任何一个模型都不可能反映客观事物的一切具体特征，只能对事物特征和变化规律的一种抽象，且在它所涉及的范围内更普遍、更集中、更深刻地描述客体的特征。通过建立模型而达到的抽象是人们对客体认识的深化。</p>
<h2 id="名词解释" tabindex="-1"><a class="header-anchor" href="#名词解释"><span>名词解释</span></a></h2>
<p>面向对象程序设计中的概念主要包括：对象（Object）、类（Class）、数据抽象、继承、动态绑定、数据封装（Encapsulation）、多态性、消息传递。通过这些概念面向对象的思想得到了具体的体现。</p>
<ul>
<li><strong>对象</strong>：可以对其做事情的一些东西。一个对象有状态、行为和标识三种属性。</li>
<li><strong>类</strong>：一个共享相同结构和行为的对象的集合。 类定义了一件事物的抽象特点。通常来说，类定义了事物的属性和它可以做到的（它的行为）。举例来说，“狗”这个类会包含狗的一切基础特征，例如它的孕育、毛皮颜色和吠叫的能力。类可以为程序提供模版和结构。一个类的方法和属性被称为“成员”。</li>
<li><strong>封装</strong>：第一层意思：将数据和操作捆绑在一起，创造出一个新的类型的过程。第二层意思：将接口与实现分离的过程。</li>
<li><strong>继承</strong>：类与类之间的关系，在这种关系中，一个类共享了一个或多个其他类定义的结构和行为。继承描述了类之间的“是一种”关系。子类可以对基类的行为进行扩展、覆盖、重定义。</li>
<li><strong>组合</strong>：既是类与类之间的关系也是对象与对象之间的关系。在这种关系中一个对象或者类包含了其他的对象和类。组合描述了“有”关系。</li>
<li><strong>多态</strong>：类型理论中的一个概念，一个名称可以表示很多不同类的对象，这些类和一个共同超类有关。因此，这个名称表示的任何对象可以以不同的方式响应一些共同的操作集合。</li>
<li><strong>动态绑定</strong>：也称动态类型，指的是一个对象或者表达式的类型直到运行时才确定。通常由编译器插入特殊代码来实现。与之对立的是静态类型。</li>
<li><strong>静态绑定</strong>：也称静态类型，指的是一个对象或者表达式的类型在编译时确定。</li>
<li><strong>消息传递</strong>：指的是一个对象调用了另一个对象的方法（或者称为成员函数）。</li>
<li><strong>方法</strong>：也称为成员函数，是指对象上的操作，作为类声明的一部分来定义。方法定义了可以对一个对象执行那些操作。</li>
</ul>
<h2 id="不同语言间的对比" tabindex="-1"><a class="header-anchor" href="#不同语言间的对比"><span>不同语言间的对比</span></a></h2>
<table>
<thead>
<tr>
<th style="text-align:left">Java</th>
<th style="text-align:left">JavaScript</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">静态类型</td>
<td style="text-align:left">动态类型</td>
</tr>
<tr>
<td style="text-align:left">使用类，接口和枚举来定义类型</td>
<td style="text-align:left">使用函数和原型来定义类型</td>
</tr>
<tr>
<td style="text-align:left">在运行时类型无法改变</td>
<td style="text-align:left">类型可以在运行时变更</td>
</tr>
<tr>
<td style="text-align:left">需要给所有变量声明类型（强类型校验）</td>
<td style="text-align:left">声明变量时不需要指定类型（弱类型校验）</td>
</tr>
<tr>
<td style="text-align:left">构造器时特殊的方法</td>
<td style="text-align:left">构造器也是一个函数，与其他函数没有区别</td>
</tr>
<tr>
<td style="text-align:left">类和对象是不同的实体</td>
<td style="text-align:left">包括构造器，函数原型在内的一切都是对象</td>
</tr>
<tr>
<td style="text-align:left">支持静态方法和实例</td>
<td style="text-align:left">不直接支持静态方法和实例</td>
</tr>
<tr>
<td style="text-align:left">通过抽象类和接口支持抽象类型</td>
<td style="text-align:left">不直接支持抽象类型</td>
</tr>
<tr>
<td style="text-align:left">通过 <code v-pre>private</code>、<code v-pre>package</code>、<code v-pre>protected</code>、<code v-pre>public</code> 定义对象的作用域</td>
<td style="text-align:left">只支持 <code v-pre>public</code> 成员</td>
</tr>
<tr>
<td style="text-align:left">提供丰富的继承机制</td>
<td style="text-align:left">通过原型实现继承</td>
</tr>
<tr>
<td style="text-align:left">支持方法级的重写和重载机制</td>
<td style="text-align:left">不直接支持重写和重载</td>
</tr>
<tr>
<td style="text-align:left">提供丰富的反射特性</td>
<td style="text-align:left">具有一些反射特性</td>
</tr>
<tr>
<td style="text-align:left">提供包提供模块化支持</td>
<td style="text-align:left">没有直接的模块化支持</td>
</tr>
</tbody>
</table>
</div></template>


