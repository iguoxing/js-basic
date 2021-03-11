// 给你一个按升序排序的整数数组 num（可能包含重复数字），请你将它们分割成一个或多个长度为 3 的子序列，其中每个子序列都由连续整数组成。

// 如果可以完成上述分割，则返回 true ；否则，返回 false 。

// 示例：

// 输入: [1,2,3,3,4,5]
// 输出: True
// 解释:
// 你可以分割出这样两个连续子序列 : 
// 1, 2, 3
// 3, 4, 5

let arr = [1, 2, 3, 3, 5, 6];

const isSeries = function(tmp) {
    let s = true;
    if (s) {
        s = (tmp[1] == tmp[0] + 1) ? true : false
    }
    if (s) {
        s = (tmp[2] == tmp[1] + 1) ? true : false
    }
    return s
}

const isThree = function(arr) {
    let state = true;
    let tmp = []
    for (let i in arr) {
        if (state) {
            if (i % 3 == 0) {
                if (tmp.length == 0) {
                    tmp.push(arr[i])
                } else {
                    console.log(tmp.length == 3);
                }
            } else {
                tmp.push(arr[i])
                if (i % 3 == 2) {
                    if (tmp.length == 3) {
                        state = isSeries(tmp)
                        if (state) {
                            tmp = []
                        }
                    }
                }
            }
        }
    }
    return state;
}
console.log(isThree(arr));