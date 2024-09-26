---
date: 2018-01-03
category:
  - 前端技术
tag:
  - JavaScript
---

# getOwnPropertySymbols

`Object.getOwnPropertySymbols()` 方法用于获取一个给定对象自身的所有 `Symbol Property` 的数组。

## 语法

```js
Object.getOwnPropertySymbols(o)
// o 用于获取 Symbol Property 键名的目标对象
// 返回目标对象 Symbol 组成的数组
```

## 代码示例

```js
const foo = {}
const a = Symbol('a')
const b = Symbol('b')

foo[a] = 'localSymbol'
foo[b] = 'globalSymbol'

const bar = Object.getOwnPropertySymbols(foo)

console.log(bar.length)
// 2
console.log(bar)
// [Symbol(a), Symbol(b)]
console.log(bar[0])
// Symbol(a)
```
