alert(a) //undefined
a(); //10
var a = 3;

function a() {
    alert(10)
}
alert(a) //3
a = 6;
a(); //a is not a function


//function a()
//10
//3
//Uncaught TypeError: a is not a function


// 【拓展1】
// console.log(x)
//     // debugger
// console.log(x());
// var x = 1;
// var x = 100;

// function x() {
//     console.log(5);
// }

// function x() {
//     console.log(3);
//     // 函数的返回值没有定义，所有是unfinded
// 猜测是函数默认声明（防止报错了）
//     // return ''
// }
// console.log(x)
// console.log(x()); //此时x变


// 【拓展2】
// var x = 1,
//     y = 0,
//     z = 0;

// function add(x) {
//     return (x = x + 1);
// }
// y = add(x);
// console.log(y)

// function add(x) {
//     return (x = x + 3);
// }
// z = add(x);
// console.log(z)

// 【我的答案】
// 4
// 4