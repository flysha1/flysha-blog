---
order: 11
date: 2018-01-03
category:
  - 前端技术
tag:
  - JavaScript
---

# do-while 语句

`do-while` 语句创建一个执行指定语句的循环，直到 `condition` 值为 `false`。在执行 `statement` 后检测 `condition`，所以指定的 `statement` 至少执行一次。

## 语法

```js
do {
  statement;
} while (expression);
```

### 描述

- 像 `do-while` 这种后测试循环语句最常用于循环体中的代码至少要被执行一次的情形。
- `do/while` 循环和普通 `while` 循环之间有两点语法方面的不同之处。
  - `do` 循环要求必须使用关键字 `do` 来标识循环的开始，用 `while` 来标识循环的结尾并进入循环条件判断。
  - 和 `while` 循环不同，`do` 循环是用分号结尾的。
  - 如果 `while` 的循环体使用花括号括起来的话，则 `while` 循环也不用使用分号做结尾。

## 示例

```js
var i = 0;
do {
  i += 2;
} while (i < 10);

console.log(i); // 10
```
