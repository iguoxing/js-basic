// 【运算符】


// console.log('[]:' + typeof []);
// console.log([] == false);
// //true
// console.log('{}:' + typeof {});
// console.log({} == false);
// //false

// console.log({} + []);
// // console.log(JSON.stringify({} + []));
// //[Object Object]  不明白

// console.log([] + {});
// console.log({} + {});

// if ([]) {
//     console.log([] == false)
// }
// // 崩溃啊，为啥[]==false 但if([])会执行

// console.log(("b" + "a" + +"a" + "a").toLocaleLowerCase());
// //banana
// console.log(("b" + "a" + +"a" + "a"));
// console.log((+"a")); //NAN
// // NaN（Not a Number，非数）是计算机科学中数值数据类型的一类值，表示未定义或不可表示的值。常在浮点数运算中使用。


// console.log(0 == "0");
// // true

// console.log(Boolean("0") == Boolean(0));
// // false

// console.log(NaN == 0);
// // false

// console.log(NaN <= 0);
// //false

// console.log(null <= 0);
// // true

// console.log(1 + null);
// //1
// // Number

// var obj = {};
// var x = +obj.yideng ?.name ?? '京程⼀灯';
// console.log(x);
// //NAN

var yideng = "京程⼀灯";
// console.log(typeof yideng);
// // String

console.log(yideng instanceof String);
// console.log(yideng instanceof Object);
// false
// 不知道为什么




// 参考资料 {}运算符
// https://segmentfault.com/a/1190000008038678

// 参考资料? ??
// https://juejin.cn/post/6844903897618710535




// 【加餐了，笔试题1】

// setTimeout(function() {
//     console.log(1)
// }, 0);

// new Promise((resolve, reject) => {
//     console.info(2)
//     resolve()
//     console.log(3);
// }).then(() => {
//     console.log(4);
// })

// console.log(5);

// 2, 3, 5, 4, 1

//then之前的在主队列中
// then 是微任务
// 先微任务后宏任务

// 【加餐，笔试题2】
// var x = 3
// var y = 4
// var obj = {
//     x: 1,
//     y: 6,
//     getX: function() {
//         var x = 5;
//         return function() {
//             return this.x;
//         }();
//     },
//     getY: function() {
//         var y = 7;
//         console.log('getY inner:' + y)
//         return this.y;
//     }
// }
// console.log(obj.getX())
// console.log(obj.getY())