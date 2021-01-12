function yideng() {
    console.log(1);
}
(function() {
    if (false) {
        function yideng() {
            console.log(2);
        }
    }
    console.info(yideng)
    yideng();
})();

// 函数提升时，是以变量名的形式提升的，而非函数

// undefined

// demo5.js:10 Uncaught TypeError: yideng is not a function