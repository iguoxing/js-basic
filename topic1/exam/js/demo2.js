// function fn() {
//     console.log(this);
//     console.log(this.length);
// }
// var yideng = {
//     length: 5,
//     method: function() {
//         "use strict";
//         fn();
//         arguments[0]()
//     }
// }
// const result = yideng.method.bind(null);
// result(fn, 1);

// // 0  
// // 有length属性，且为0

// 2

// 附加题
function bar() {
    console.log(myName)
}

function foo() {
    var myName = "老袁"
        // console.log(this);
    bar()
}
var myName = "京程⼀灯"
foo()

//输出 京程⼀灯