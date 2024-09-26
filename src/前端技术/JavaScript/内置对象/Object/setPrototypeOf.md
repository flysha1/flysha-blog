---
date: 2018-01-03
category:
  - 前端技术
tag:
  - JavaScript
---

# setPrototypeOf

`Object.setPrototypeOf()` 方法用于设置一个指定的对象的原型 ( 即，内部 `[[Prototype]]` 属性）到另一个对象或 `null`。

## 语法

语法：

```js
Object.setPrototypeOf(o, proto);
```

类型声明：

```js
interface ObjectConstructor {
  setPrototypeOf(o: any, proto: object | null): any;
}
```

参数说明：

|参数|说明|类型|
|:---|:---|:---|
|o|要设置其原型的对象|object|
|proto|原型对象|object|

返回值：

返回设置原型后的对象。

## 代码示例

```js
if (!Object.setPrototypeOf) {
  Object.setPrototypeOf = function () {};
}
```
