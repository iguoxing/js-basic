// 两个有序数组的合并
// 归并排序
let nums1 = [1, 2, 3];
let nums2 = [2, 5, 6];

const mergeArr = function(arr1, arr2) {
    let m = arr1.length;
    let n = arr2.length;
    let p = m - 1;
    let q = n - 1;
    let l = m + n - 1;
    let res = Array(l).fill('');
    while (p >= 0) {
        if (arr1[p] <= arr2[q]) {
            res[l] = arr2[q];
            q--;
        } else {
            res[l] = arr1[p];
            p--;
        }
        l--;
    }
    return res
}

console.log(mergeArr(nums1, nums2));