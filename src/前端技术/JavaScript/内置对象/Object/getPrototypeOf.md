---
date: 2018-01-03
category:
  - 前端技术
tag:
  - JavaScript
---

# getPrototypeOf

`Object.getPrototypeOf()` 方法用于获取指定对象的原型（内部 `[[Prototype]]` 属性的值）。

## 语法

语法：

```js
Object.getPrototypeOf(o);
```

类型声明：

```js
interface ObjectConstructor {
  getPrototypeOf(o: any): any;
}
```

参数说明：

|参数|说明|类型|
|:---|:---|:---|
|o|目标对象|object|

返回值：

返回目标对象的原型对象。

## 代码示例

### 基本示例

```js
const proto = {};

const foo = Object.create(proto);
Object.getPrototypeOf(foo) === proto;
// true

const reg = /a/;
Object.getPrototypeOf(reg) === Regexp.prototype;
// true
```

### 标准内置对象

```js
const foo = new Object();

Object.getPropertyOf(Object);
// f () { [native code] }
Object.getPropertyOf(Function);
// f () { [native code] }

Object.getPropertyOf(Object) === Function.prototype;
// true

const bar = new Object();
Object.prototype === Object.getPrototypeOf(bar);
// true
Obejct.prototype === Object.getPrototypeOf({});
// true
```
