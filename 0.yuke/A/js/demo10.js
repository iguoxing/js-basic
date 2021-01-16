var regex = /yideng/g;
// console.log(regex);
// console.log(regex.lastIndex);
// console.log(regex.test('yideng'));
// console.log(regex.lastIndex);
// console.log(regex.test('yideng'));
// console.log(regex.lastIndex);
// console.log(regex.test('yideng'));
// console.log(regex.test('yideng'));

// 正则匹配
// test的时候， lastIndex的位置会变

// 如何进行正则的拷贝？
function cloneReg(target, isDeep) {
    console.log(target.constructor);
    console.log(target.source);
    let regFlag = /\w*$/;
    // [0-9a-zA-Z_]
    let result = new target.constructor(target.source, regFlag.exec(target))
    if (isDeep) {
        result.lastIndex = 0;
    } else {
        result.lastIndex = target.lastIndex;
    }
    return target
}
var reg2 = cloneReg(regex)
console.log(reg2);