// 给你一个数组nums和一个值val，你需要原地移除所有数值等于val的元素；
// 并返回移除后数组的新长度；
// 不要使用额外的数组空间，你必须仅使用O(1)额外空间并原地修改输入数组；
// 元素的顺序可以改变，你不需要考虑数组中超出新长度后面的元素；

let arr = [1, 2, 2, 0, 2, 5, 6, 3];
let val = 2;

// 指针移动
const removeElement = function(arr, val) {
    let v = 0;
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] != val) {
            arr[v] = arr[j];
            v += 1;
        }
    }
    return v;
}

let len = removeElement(arr, val);

console.log('len:' + len);

for (let i = 0; i < len; i++) {
    console.log('arr:' + arr[i]);
}