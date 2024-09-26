---
date: 2018-01-03
category:
  - 前端技术
tag:
  - JavaScript
---

# values

⭐️ ES2017(ES8)新特性

`Object.values()` 方法用于指定对象自身的所有可枚举 `Property` 值的数组。

## 语法

```js
Object.values(obj)
// obj	指定对象
// 返回的数组中键值的顺序与使用循环语句获取的键值组合一致
```

## 代码示例

```js
const obj = {
  a: '1',
  b: '2',
  c: '3',
}

console.log(Object.values(obj))
// ['1', '2', '3']
```
