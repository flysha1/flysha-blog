---
order: 2
date: 2018-01-01
category:
  - 前端技术
tag:
  - JavaScript
---

# instanceof

`instanceof` 运算符用于测试构造函数的 `prototype` 属性是否出现在对象的原型链中的任何位置。

代码示例：

```js
target instanceof constructor;
```

## 检测类型

`instanceof` 可以检测某个对象是否是另一个对象的 **实例**。

```js
const Person = function () {};
const student = new Person();

console.log(student instanceof Person);
// true
```

`instanceof` 可以检测父类型。

```js
function Person() {}
function Student() {}

const p = new Person();

// 继承原型
Student.prototype = p;

const s = new Student();

console.log(s instanceof Student);
// true
console.log(s instanceof Person);
// true
```

其他例子：

```js
// 数字类型
console.log(1 instanceof Number);
// false
conosole.log(Infinity instanceof Number);
// false
console.log(Number(2) instanceof Number);

// 布尔值
console.log(true instanceof Boolean);
// false

// BigInt
console.log(99999999999n instanceof BigInt);
// false

// 字符串
console.log('' instanceof String);
// false

// 函数类型
const fn = () => console.log('Hello world!');
console.log(fn instanceof Function);
// true
```

## 模拟实现

```js
function simulateInstanceof(left, right) {
  if (left === null || (typeof left !== 'object' && typeof left !== 'function')) return false;

  // 递归原型链
  while (true) {
    // Object.prototype.__proto__ === null
    if (left === null) return false;

    // 这里重点：当 left 严格等于 prototype 时，返回 true
    if (left === right.prototype) return true;

    left = left.__proto__;
  }
}
```
