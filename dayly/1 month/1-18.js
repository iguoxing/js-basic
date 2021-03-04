// 找出两个数组的交集
let arr1 = [1, 2, 2, 3, 4, 5, 6];
let arr2 = [2, 5, 5]
const findArr = function(a1, a2) {
    let set = new Set();
    let arr = a1.length > a2.length ? a2 : a1
    for (let v of arr) {
        if (a1.indexOf(v) > -1) {
            set.add(v)
        }
    }
    return set
}

console.log(findArr(arr1, arr2));