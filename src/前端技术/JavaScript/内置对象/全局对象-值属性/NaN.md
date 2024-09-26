---
date: 2018-01-03
category:
  - 前端技术
tag:
  - JavaScript
---

# NaN

全局属性 `NaN` 的值表示不是一个数字（Not-A-Number）。

## 说明

- `NaN` 是一个全局对象的属性。
- `NaN` 属性的初始值就是 `NaN`，和 `Number.NaN` 的值一样。
- 编码中很少直接使用到 `NaN`。通常都是在计算失败时，作为 `Math` 的某个方法的返回值出现的（例如：`Math.sqrt(-1)`）或者尝试将一个字符串解析成数字但失败了的时候（例如：`parseInt('blabla')`）。

返回 `NaN` 的情况总结：

- 无穷大除以无穷大
- 给任意负数做开方运算
- 算术运算符与不是数字或无法转换为数字的操作数一起使用
- 字符串解析为数字

### 静默逃逸的 NaN 值

`NaN` 通过数学运算进行传播，因此通常在计算结束时测试 `NaN` 一次就足以检测错误条件。`NaN` 被静默转义的唯一情况是使用指数为 `0` 求幂时，它立即返回 `1` 而不测试基数的值。

```js
NaN ** 0 === 1; // true
```

> [!warning]
> 一些数组方法不能找到 `NaN`，而另一些可以。也就是说，查找索引的（`indexOf()`、`lastIndexOf()`）不能找到 `NaN`，而查找值的（`includes()`）可以

```js
const arr = [2, 4, NaN, 12];
arr.indexOf(NaN); // -1
arr.includes(NaN); // true

// 接受正确定义的断言的方法总是能够找到 NaN
arr.findIndex((n) => Number.isNaN(n)); // 2
```

## 示例

### 值校验

不可使用等号运算符来判断一个值是否为 `NaN`。必须采用 `Number.isNaN()` 或 `isNaN()`函数进行判断。

在执行自比较中，`NaN` 是唯一与自身不全等的值。

```js
NaN === NaN;
// false

Number.NaN === NaN;
// false

isNaN(NaN);
// true;

isNaN(Number.NaN);
// true;

function valueIsNaN(v) {
  return v !== v;
}
valueIsNaN(1);
// false
valueIsNaN(NaN);
// true
valueIsNaN(Number.NaN);
// true
```

使用 `isNaN()` 前先检查一下这个值是否是数字类型，即可避免隐式类型转换的问题。

```js
function detectIsNaN(value) {
  return typeof value === "number" && isNaN(value);
}
```

更推荐使用 `Number.isNaN()` 如果输入不是数字类型，则返回 `false`。它是全局 `isNaN()` 函数更健壮的版本。

```js
function typeOfNaN(x) {
  if (Number.isNaN(x)) {
    return "Number NaN";
  }
  if (isNaN(x)) {
    return "NaN";
  }
}

console.log(typeOfNaN("100F"));
// Expected output: "NaN"

console.log(typeOfNaN(NaN));
// Expected output: "Number NaN"
```
