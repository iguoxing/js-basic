// 请问变量a会被GC回收么，为什么呢？(12分)
// eval() 函数会将传入的字符串当做 JavaScript 代码进行执行
function test() {
    var a = "yideng";
    return function() {
        eval("");
        // eval("console.log(a)");
    }
}

// console.log(a);
test()();

// 直观感觉是会，因为返回到全局作用域中