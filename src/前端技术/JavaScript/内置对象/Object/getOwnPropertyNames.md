---
date: 2018-01-03
category:
  - 前端技术
tag:
  - JavaScript
---

# getOwnPropertyNames

`Object.getOwnPropertyNames()` 方法用于获取指定对象的所有自身 Property 的键名（包括不可枚举属性但不包括 Symbol 值作为名称的属性）组成的数组。

## 语法

语法：

```js
Object.getOwnPropertyNames(o);
```

类型声明：

```js
interface ObjectConstructor {
  getOwnPropertyName(o: any): string[];
}
```

参数说明：

|参数|说明|类型|
|:---|:---|:---|
|o|用于获取 Property 键名的目标对象|object|

返回值：

返回 Properties 键名组成的数组。

## 方法说明

如果只需要获取可枚举属性，可以使用 [Object.keys](/blog/前端技术/JavaScript/内置对象/Object/keys.html) 或用 [for-in](/blog/前端技术/JavaScript/基本语法/语句和声明/for-in语句.html) 语句（还会获取到原型链上的可枚举属性，不过可以使用 [Object.prototype.hasOwnProperty](/blog/前端技术/JavaScript/内置对象/Object/hasOwnProperty.html) 方法过滤）。

## 代码示例

### 数组

```js
const foo = ['a', 'b', 'c'];
console.log(Object.getOwnPropertyNames(foo).sort());
// ['0', '1', '2', 'length']
```

### 类数组

```js
// 类数组对象
const foo = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.getOwnPropertyNames(foo).sort());
// ['0', '1', '2']

// 使用 Array.forEach 输出属性名和属性值
Object.getOwnPropertyNames(foo).forEach(function (val, idx, array) {
  console.log(`${val}:${foo[val]}`);
});
// 0:a
// 1:b
// 2:c
```

### 不可枚举属性

```js
// 不可枚举属性
const foo = Object.create(
  {},
  {
    getBar: {
      value: function () {
        return this.bar;
      },
      enumerable: false,
    },
  }
);
foo.bar = 1;

console.log(Object.getOwnPropertyNames(foo).sort());
// ['foo', 'getBar']
```

### 仅获取自有 Property

```js
function SuperClass() {}
SuperClass.prototype.inheritedMethod = function () {};

function SubClass() {
  this.prop = 5;
  this.method = function () {};
}

SubClass.prototype = new SuperClass();
SubClass.prototype.prototypeMethod = function () {};

Object.getOwnPropertyNames(new SubClass());
// ['prop', 'method']
```

### 只获取不可枚举 Property

使用 [Array.prototype.filter](/blog/前端技术/JavaScript/内置对象/Array/filter.html) 方法，从所有的 Property 键名数组（使用 `Object.getOwnPropertyNames` 方法获取）中去除可枚举的属性（使用 [Object.keys](/blog/前端技术/JavaScript/内置对象/Object/keys.html) 方法获取），剩余的属性便是不可枚举的属性。

```js
const enum_and_nonenum = Object.getOwnPropertyNames(target);
const enum_only = Object.keys(target);
const nonenum_only = enum_and_nonenum.filter(function (key) {
  const indexInEnum = enum_only.indexOf(key);
  if (indexInEnum === -1) {
    return true;
  } else {
    return false;
  }
});
```
