const setOrder = function(val) {
    let len = val.length;
    let arr = [];
    let res = 0;
    for (let i = 0; i < len; i++) {
        if (!arr[val[i]]) {
            arr[val[i]] = 0
        }
        arr[val[i]] = arr[val[i]] + 1;
    }
    let tmp = val
    for (let n = 1; n <= arr.length; n++) {
        if (arr[n] > 0) {
            let arrLen = arr[n]
            for (let j = 0; j < arrLen; j++) {
                if (n != tmp[0]) {
                    res += 1;
                } else {
                    arr[n] = arr[n] - 1
                }
                tmp = tmp.splice(1)
            }
        }
    }
    return res;
}
setOrder([1, 2, 2, 2, 3, 4, 5])
    // setOrder([1, 1, 4, 2, 1, 3])

// 【其他解法】
// var heightChecker = function(heights) {
//     let arr = [...heights]
//     arr.sort((a,b)=>{a-b});
//     let count = 0
//     for(let i = 0;i<heights.length-1;i++){
//         if(arr[i] != heights[i]){
//             count++;
//         }
//     }
//     return count
//  };