function yideng() {
    console.log(1);
}
(function() {
    if (false) {
        function yideng() {
            console.log(2);
        }
    }
    yideng();
})();

// undefined

// demo5.js:10 Uncaught TypeError: yideng is not a function