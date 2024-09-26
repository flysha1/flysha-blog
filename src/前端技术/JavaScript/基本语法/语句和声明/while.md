---
order: 12
date: 2018-01-03
category:
  - 前端技术
tag:
  - JavaScript
---

# while 语句

`while` 语句可以在某个条件表达式为真的前提下，循环执行指定的一段代码，直到那个表达式不为 `true` 时结束循环。

## 语法

```js
while (expression) statement;
```

注意：使用 `break` 语句在 `expression` 计算结果为真之前停止循环。

## 示例

```js
var i = 0;
while (i < 10) {
  i += 2;
}

var cars = ["BMW", "Volvo", "Saab", "Ford"];
var text = "";
var i = 0;
while (i < cars.length) {
  text += cars[i] + "<br>";
  i++;
}
```
