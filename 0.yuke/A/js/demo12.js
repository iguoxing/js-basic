var length = 10;

function fn() {
    console.log(this.length);
}
// var yideng = {
//     length: 5,
//     method: function(fn) {
//         fn();
//         console.log(arguments); //fu,1
//         arguments[0]();
//     }
// };
// yideng.method(fn, 1);


// 我的答案
// 10

// arguments fu,1

// arguments[0]
// function fn() {
//     console.log(this.length);
// }

// fn().length=2
// [[FunctionLocation]]
// [[Scopes]]