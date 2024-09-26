---
date: 2018-01-03
category:
  - 前端技术
tag:
  - JavaScript
---

# globalThis

全局属性 `globalThis` 包含全局的 `this` 值，类似于全局对象（global object）。

## 语法

```js
globalThis;
```

## 说明

在以前，从不同的 JavaScript 环境中获取全局对象需要不同的语句。在 Web 中，可以通过 `window`、`self` 或者 `frames` 取到全局对象，但是在 Web Workers 中，只有 `self` 可以。在 Node.js 中，它们都无法获取，必须使用 `global`。

在松散模式下，可以在函数中返回 this 来获取全局对象，但是在严格模式和模块环境下，`this` 会返回 `undefined`。你也可以使用 `Function('return this')()`，但那些禁用 `eval()` 的环境，如在浏览器中的 CSP，不允许这样使用 `Function`。

`globalThis` 提供了一个标准的方式来获取不同环境下的全局 `this` 对象（也就是全局对象自身）。不像 `window` 或者 `self` 这些属性，它确保可以在有无窗口的各种环境下正常工作。所以，你可以安心的使用 globalThis，不必担心它的运行环境。为便于记忆，你只需要记住，全局作用域中的 `this` 就是 `globalThis`

## 示例

判断当前环境是否有 `setTimeout` 方法

```js
if (typeof globalThis.setTimeout !== "function") {
  //  此环境中没有 setTimeout 方法！
}
```
