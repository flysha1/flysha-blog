---
date: 2018-01-03
category:
  - 前端技术
tag:
  - JavaScript
---

# isFrozen

`Object.isFrozen()` 方法用来检测指定对象是否已被冻结。

## 语法

语法：

```js
Object.isFrozen(o);
// o 指定用于检测的对象
// 返回Boolean类型的值表示用于检测的对象是否被冻结
```

## 方法说明

被冻结的对象不可扩展，所有 `Property` 均不可配置，且所有数据属性（即没有 `getter` 或 `setter` 组件的访问器的属性 ）都是不可写的。

## 代码

### 基本用法

```js
let foo = {
  a: 1,
  b: 2,
};

console.log(Object.isFrozen(foo));
// false

console.log(Object.freeze(foo));
// {a: 1, b: 2}

console.log(Object.isFrozen(foo));
// true

foo.a = 3;

console.log(foo);
// { a: 1, b: 2 }
```

`Object.freeze` 方法实际上会在现有对象上调用 `Object.seal()` 方法，并把所有现有属性的 `writable` 描述符置为 `false`。

```js
let foo = {
  a: 1,
};

// { value: 1, writable: true, enumerable: true, configurable: true }
console.log(Object.getOwnPropertyDescriptor(foo, 'a'));

console.log(Object.freeze(foo));
// { a: 1 }

// { value: 1, writable: false, enumerable: true, configurable: false }
console.log(Object.getOwnPropertyDescriptor(foo, 'a'));
```
