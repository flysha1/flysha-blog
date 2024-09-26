---
date: 2018-01-03
category:
  - 前端技术
tag:
  - JavaScript
---

# isExtensible

`Object.isExtensible()` 方法用于检测指定对象是否可扩展。

## 语法

语法：

```js
Object.isExtensible(o);
// o 指定用于检测的对象
// 返回 Boolean类型的值表示用于检测的对象是否可扩展
```

## 方法说明

默认情况下，对象是可扩展的：即可以为他们添加新的属性。

`Object.preventExtensions`、`Object.seal` 或 `Object.freeze` 方法都可以标记一个对象为不可扩展（non-extensible）。

## 代码示例

```js
let foo = {
  a: 1,
};
console.log(Object.isExtensible(foo));
// true

foo.b = 2;

console.log(foo);
// {a: 1, b: 2}

console.log(Object.preventExtensions(foo));
// { a: 1, b: 2}

// 由于对象 foo 禁止扩展，所以该赋值语句静默失败
foo.c = 3;

console.log(Object.isExtensible(foo));
// false

console.log(foo);
// { a: 1, b: 2}
```
