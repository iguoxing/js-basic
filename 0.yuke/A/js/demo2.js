// this.a = 20;

// function go() {
//     console.log(this.a);
//     this.a = 30;
// }
// go.prototype.a = 40;
// var test = {
//     a: 50,
//     init: function(fn) {
//         fn();
//         console.log(this.a);
//         return fn;
//     }
// };
// console.log((new go()).a);
// test.init(go);
// var p = test.init(go);
// p();

// 我的答案

// 40
// undefined
// 50
// 20

this.a = 20;

function go() {
    console.log(this.a);
    this.a = 30;
}
go.prototype.a = 40;

// console.log((new go()).a);
// 自身找不到，会向上找原型链 
//40
//再在构造函数内部找到了
// 30

var test = {
    a: 50,
    init: function(fn) {
        fn();
        // debugger
        console.log(this.a);
        return fn;
    }
};
// console.info(go)
// test.init(go);
// 这里的this指向的是全局的 this
//  20
// init中的this指向的是局部的this
// 50

var p = test.init(go);
p();

//为什么执行p()的时候返回的是30？
// 因为go函数在内存中加载过，所以this.a=30