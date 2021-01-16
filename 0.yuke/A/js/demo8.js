// 请在下面写出JavaScript面向对象编程的混合式继承。并写出ES6版本的继承。
// 要求：汽车是父类，Cruze是子类。父类有颜色、价格属性，有售卖的方法。Cruze子
// 类实现父类颜色是红色，价格是140000,售卖方法实现输出如下语句：将 红色的
// Cruze买给了小王价格是14万。

"use strict";

// class Car {
//     constructor(color) {
//         this.color = color
//     }
//     static price = 30;
//     log() {
//         console.log('内部方法');
//     }
// }

// class BMW extends Car {
//     constructor(color) {
//         super(color)
//     }
// }

// ES6 语法糖 会覆盖掉内部方法
// Car.prototype.log = function() {
//     console.log("外部方法");
// }
// const car = new Car()
// car.log()

// js 在继承的时候，可以继承静态属性
// console.log(BMW.price)  //30

function Car(color) {
    this.color = color
}
Car.color = 'red'
Car.price = '14000'
Car.sale = function() {
    console.log("将红色的BMW买给了小王价格是14万");
}

function BMW(color) {
    Car.call(this, color);
}

// 不让修改的继承
// Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。
BMW.prototype = Object.create(Car.prototype, {
    constructor: {
        value: BMW,
        writable: false
    },
    xx: {
        value: function() {}
    }
})

// BMW.prototype.constructor == 123
var statickeys = Object.entries(Car);
for (let i = 0; i < statickeys.length; i++) {
    var key = statickeys[i][0]
    var value = statickeys[i][1]
    BMW[key] = value
}

// Object.entries()方法返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 for...in 循环遍历该对象时返回的顺序一致（区别在于 for-in 循环还会枚举原型链中的属性）。
console.info(BMW.color)
console.info(BMW.price)
BMW.sale()
    // console.log(statickeys)
    // console.log(statickeys.length)
    // new BMW('red')