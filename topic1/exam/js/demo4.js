// 清写出以下代码输出值，并解释原因。(5分)
// 【考察的是原型链】
Object.prototype.a = 'a';
Function.prototype.a = 'a1';


function Person() {};
var yideng = new Person();
// console.log(Person.a);
// // a1
// console.log(yideng.a);
// // a  对象的的原型链是Object

// console.log(1..a);
// a   不懂....

// console.log(1. a);


// console.log(yideng.__proto__.__proto__.__proto__);
// // null
// console.log(yideng.__proto__.__proto__);
// // Object
// console.log(yideng.__proto__.__proto__.constructor);
// // Object()
// console.log(yideng.__proto__.__proto__.constructor.constructor);
// // // Function()
// console.log(yideng.__proto__.__proto__.constructor.constructor.constructor);
// // // Function() 不明白，为什么还是指向Function()

// console.log(Object);
// console.log(Object.prototype);
// console.log(Function);
// console.log(Function.prototype);

// // ƒ Object() { [native code] }
// // {a: "a", constructor: ƒ, __defineGetter__: ƒ, __defineSetter__: ƒ, hasOwnProperty: ƒ, …}a: "a"constructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
// // ƒ Function() { [native code] }
// // ƒ () { [native code] }

// Object.prototype 和 Function.prototype 打印的内容差距很大原因是什么呢？