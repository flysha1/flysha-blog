---
order: 6
date: 2018-01-03
category:
  - 前端技术
tag:
  - JavaScript
---

# decodeURI

`decodeURI()` 函数用于对已编码的统一资源标识符(URI)进行解码，并返回其非编码形式。

该函数属于 `Global` 对象，所有主流浏览器均支持该函数。

## 语法

```js
decodeURI(encodedURIString);
// encodedURIString 已编码的 `URI` 字符串
```

`decodeURI()` 函数的返回值是 `string` 类型，返回一个已经解码的 `URI`。

将已编码 `URI` 中所有能识别的转义序列转换成原字符，但不能解码那些不会被 `encodeURI` 编码的内容（例如 `#`）。

## 示例

```js
let a = "Hello JavaScript!";
let b = encodeURI(a);

console.log(b);
// return '%E4%BD%A0%E5%A5%BDJavascript!'

let c = decodeURI(b);
// return '你好Javascript!'
```
