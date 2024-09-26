---
date: 2018-01-03
category:
  - 前端技术
tag:
  - JavaScript
---

# getOwnPropertyDescriptors

⭐️ ES2017(ES8)新特性

`Object.getOwnPropertyDescriptors()` 方法用于获取一个对象的所有自身 `Property` 的 `Attributes`。

## 语法

```js
Object.getOwnPropertyDescriptors(obj)
// obj 用于获取 Property 的 Attributes 的对象
```

## 代码示例

```js
const a = {
  name: 'Ben',
  get age() {
    return '18'
  },
}

Object.getOwnPropertyDescriptors(a)

// {
//   age: {
//     configurable: true,
//     enumerable: true,
//     get: function age() {
//       return '18'
//     },
//     set:undefined,
//   },
//   name:{
//     configurable:true,
//     enumerable:true,
//     value:"Ben",
//     writable:true
//   }
// }
```
