// 实现斐波那契加到10000，注意报栈和超过数字范围限制的问题(普通数字想加为infinity)
const getF = function (n) {
    if(n==1||n==2) return 1
    let a=getF(n-1)+getF(n-2)
    n--
    return a
}
console.log(getF(50))
// 50
// 12586269025