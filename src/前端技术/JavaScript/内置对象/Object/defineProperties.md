---
date: 2018-01-03
category:
  - 前端技术
tag:
  - JavaScript
---

# defineProperties

`Object.defineProperties()` 方法用于为一个对象定义 `Properties` 或修改已有的 `Properties` 的 `Attributes`。

## 语法

```js
Object.defineProperties(o, properties)
// o 添加或修改 properties 的目标对象
// properties 要定义其可枚举属性或修改的属性描述符的对象
```

Attributes 值说明：

| Attributes   | 说明                 | 默认值    |
| :----------- | :------------------- | :-------- |
| `configurable` | 对象的可配置性       | `false`     |
| `enumerable`   | 对象的可枚举性       | `false`     |
| `writable`     | 对象的可写性         | `false`     |
| `value`        | 对象的属性值         | `undefined` |
| `get`          | 对象的读取访问器属性 | `undefined` |
| `set`          | 对象的写入访问器属性 | `undefined` |

返回值：

返回变更后的对象。

## 代码示例

```js
const abc = { a: 1, b: 2, c: 3 }

Object.defineProperties(abc, {
  a: {
    value: 'One',
    writable: false,
    enumerable: false,
    configurable: false,
  },
  e: {
    value: 4,
  },
  f: {
    value: 5,
  },
})

console.log(abc)
// {
// b: "Two",
// c: 3,
// a: "One",
// d: "Three",
// e: 4,
// f: 5,
// }

abc.a = 10

console.log(abc.a)
// 'One'
```
