---
date: 2018-01-03
category:
  - 前端技术
tag:
  - JavaScript
---

# seal

`Object.seal` 方法用于标识指定对象为不可扩展，且所有现有 Property 均不可配置。

## 语法

语法：

```js
Object.seal(o);
// o 将要被密封的对象
// 返回处理后的对象
```

## 代码示例

`Object.seal` 处理后的对象将不可扩展。

同时，现有的所有 Property 也不可配置（也就是不能修改 `configurable`、`enumerable`、`writable`）。

```js
const foo = { a: 1, b: 2 };

console.log(Object.getOwnPropertyDescriptors(foo));
// {
// a: { configurable: true, enumerable: true, writable: true }
// b: { configurable: true, enumerable: true, writable: true }
// }

Object.seal(foo);

foo.c = 3;

console.log(foo);
// { a: 1, b: 2}
console.log(Object.isExtensible(foo));
// false

console.log(Object.getOwnPropertyDescriptors(foo));
// {
// a: { configurable: false, enumerable: true, writable: true }
// b: { configurable: false, enumerable: true, writable: true }
// }

console.log(Object.isSealed(foo));
// true
```
