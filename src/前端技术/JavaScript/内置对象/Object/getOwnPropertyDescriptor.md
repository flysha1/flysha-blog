---
date: 2018-01-03
category:
  - 前端技术
tag:
  - JavaScript
---

# getOwnPropertyDescriptor

`Object.getOwnPropertyDescriptor()` 方法可以获取对象自有 `Property` 的某个 `Attributes`。

## 语法

```js
Object.getOwnPropertyDescriptor(o, property)
// o 需要查找的目标对象
// property 目标对象的 Property
```

## 代码示例

```js
const foo = { a: 1 }

Object.getOwnPropertyDescriptor(foo, 'a')

//  {
// 	    value: 1,
// 	    writable: true,
// 	    enumerable: true,
// 	    configurable: true,
// }
```
