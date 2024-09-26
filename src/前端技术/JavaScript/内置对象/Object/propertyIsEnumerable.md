---
date: 2018-01-03
category:
  - 前端技术
tag:
  - JavaScript
---

# propertyIsEnumerable

`Object.prototype.propertyIsEnumerable()` 方法用于检测指定 Property 是否可枚举。

## 语法

语法：

```js
obj.propertyIsEnumerable(V);
// V 需要检测的 Property 键名字符串
// 返回表示指定 Property 键名是否可枚举的 Boolean 类型值
```

## 代码示例

### 基本用法

```js
const foo = {};
const bar = [];

foo.a = 'is enumerable';
bar[0] = 'is enumerable';

foo.propertyIsEnumerable('a');
// true
bar.propertyIsEnumerable(0);
// true
```

### 自有属性与继承属性

原型链上 的 Properties 不被 `propertyIsEnumerable` 考虑。

```js
const a = [];

a.propertyIsEnumerable('constructor');

function b() {
  this.property = 'b';
}

b.prototype.firstMethod = function () {};

function c() {
  this.method = function method() {
    return 'c';
  };
}

c.prototype = new b();
c.prototype.constructor = c;

const d = new c();

d.arbitraryProperty = 'd';

d.propertyIsEnumerable('arbitraryProperty');
// true
d.propertyIsEnumerable('method');
// true
d.propertyIsEnumerable('property');
// false

d.property = 'd';

d.propertyIsEnumerable('property');
// true
```
