// 给定一个指定数组，类似于[1,3,4,9,19]，数组数量不定，找出最接近平均数的数字。
let arr = [1, 3, 4, 9, 19]
const sum = function(arr) {
    let v = 0
    arr.forEach(element => {
        v += element
    });
    return (v / arr.length).toFixed(2);
}

const getNum = function(average, arr) {
    let num = 0;
    let diff = 0;
    for (let i = 0; i < arr.length; i++) {
        let tmp = Math.abs(arr[i] - average)
        if (i == 0) {
            diff = tmp
        } else {
            if (tmp < diff) {
                diff = tmp
                num = arr[i]
            }
        }
    }
    return num
}
console.log(getNum(sum(arr), arr));