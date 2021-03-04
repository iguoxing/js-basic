// 实现   数组里找任意两个数相加值为一个目标值的算法（输出下标）
//     如：   [2,4,5,6,7,1,8]   target = 8   最终输出为[[0,3], [4,5]]

let arr=[2,4,5,6,7,1,8]
const isNumArray=function(arr,val){
    let res=[]
    for(let i=0;i<arr.length;i++){
        let t=8-arr[i]
        let p=arr.indexOf(t)
        if(p>-1&&p!=i&&p>i){
            res.push([i,p])
        }
    }
    return res
}

console.log(isNumArray(arr,8));

