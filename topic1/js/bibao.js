function makePowerFn(power) {

    function powerFn(base) {
        // debugger

        console.log('p:' + power);
        console.log('b:' + base);
        return Math.pow(base, power);
    }
    return powerFn;
}
var square = makePowerFn(2);
console.log(square(3));
console.log(makePowerFn(2)(3));