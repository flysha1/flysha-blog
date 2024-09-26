---
order: 8
date: 2018-01-03
category:
  - 前端技术
tag:
  - JavaScript
---

# label 语句

标记语句可以和 `break` 或 `continue` 语句一起使用。标记就是在一条语句前面加个可以引用的标识符。

> [!warning]
> 标记的循环或块非常罕见。通常可以使用函数调用而不是循环跳转。

## 语法

```js
identifier: statement;
```

### 描述

可使用一个标签来唯一标记一个循环，然后使用 `break` 或 `continue` 语句来指示程序是否中断循环或继续执行。

## 示例

### 标注示例

用作标签的 `identifier` 必须是一个合法的 JavaScript 标识符，而不能是一个保留字。

```js
var i, j;

loop1: for (i = 0; i < 3; i++) {
  // The first for statement is labeled "loop1"

  loop2: for (j = 0; j < 3; j++) {
    // The second for statement is labeled "loop2"
    if (i == 1 && j == 1) {
      continue loop1;
    }

    console.log("i = " + i + ", j = " + j);
  }
}
```
