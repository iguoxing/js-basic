var num = 1;

function yideng() {
    "use strict";
    console.log(this.num++);
}

function yideng2() {
    console.log(++this.num);
}

(function() {
    "use strict";
    yideng2();
})();

yideng();

// 我的答案
// 2
// undefined

// 2
// demo2-1.js:5 Uncaught TypeError: Cannot read property 'num' of undefined

// 原因是
// 匿名函数中不会影响到作用域
// 严格模式下，只允许读取函数作用域中的值