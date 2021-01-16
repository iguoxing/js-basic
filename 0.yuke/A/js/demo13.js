// 请写出如下代码输出值，并说清楚这些属性之间的区别是什么。

Object.prototype.c = "京程一灯"
var ydObj = {};
Object.defineProperty(ydObj, 'a', {
    enumerable: true,
    value: 2,
});
// 设置了不可枚举
Object.defineProperty(ydObj, 'b', {
    enumerable: false,
    value: 3,
});
// console.log(Object);
// console.log(ydObj);

// console.log(Object.keys(ydObj));
//["a"]
// console.log(Object.getOwnPropertyNames(ydObj));
//["a","b"]
console.log(4 in [2, 4, 6]);
// false
console.log(4 in { 2: 1, 4: 1, 6: 1 });
//true
console.log('b' in ydObj);
// false
console.log('c' in ydObj);
//在原型链中能找到 true

console.log(ydObj.hasOwnProperty('b'));
// false


var ydObj2 = {};
ydObj2.c = 3;
console.log(ydObj2.c);
//3
console.log(ydObj.c);
//京程一灯