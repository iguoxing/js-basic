// 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数；
// 举例，
// 输入：[1,2,3]，k=1
// 输出：[2,3,1]

// 需要想出3种方案，要求使用空间复杂度为O(1)的原地算法

let a=[1,2,3,4,5,6]
// // 解法1
// const move=function(arr,v){
//     let res=[];
//     let l=[...arr].slice(v,arr.length)
//     let r=[...arr].slice(0,v)
//     res=l.concat(r);
//     return res;
// }
// console.log(move(a,2));

// 解法2
// const move=function(arr,v){
//     let res=[];
//     let len=arr.length
//     res=arr.concat(arr).slice(v,len+v);
//     return res;
// }
// console.log(move(a,2));

// 解法3
const move=function(arr,v){
    let l=[],r=[]
    for(k in arr){
        if(k<v){
            r.push(arr[k])
        }else{
            l.push(arr[k])
        }
    }
    return l.concat(r);
}
console.log(move(a,2));