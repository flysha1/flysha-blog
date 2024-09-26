---
date: 2018-01-03
category:
  - 前端技术
tag:
  - JavaScript
---

# create

`Object.create()` 方法用于创建指定对象为原型对象的新对象。

## 语法

```js
Object.create(o [, properties]);
// o 新创建对象指向的原型对象
// properties 可选参数,添加到新创建对象的可枚举属性（即自身定义的属性，而不是原型链上的枚举属性）
```

> [!warning]
>
> - 如果 `properties` 参数不是 `null` 或对象，则抛出一个 `TypeError` 异常
> - 返回指定原型对象和可枚举属性的新对象

## 代码示例

类式继承

```js
// Shape = Super Class
function Shape() {
  this.x = 0
  this.y = 0
}

// Super Class Methods
Shape.prototype.move = function () {
  this.x += x
  this.y += y
  console.log('Shap moved')
}

// Retangle - Sub Class
function Retangle() {
  Shape.all(this) // call super constructor
}

// 子类继承父类
Retangle.prototype = Object.create(Shape.prototype)
Retangle.prototype.constructor = Retangle

const rect = new Retangle()

console.log(rect instanceof Retangle)
// true
console.log(rect instanceof Shape)
// true
```
