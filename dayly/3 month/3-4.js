// 输入一个int型数组，数组中的一个或多个连续整数组成一个子数组。求所有子数组中和的最大值。输入的数组中保证至少有一个正数。
let arr=[1,2,4,5,7,-1,0,1,-9,-8,9]
const getF = function (arr) {
    let tmp=[]
    let res=[]
    let t=0;

    for(let i=0;i<arr.length;i++){
        if(tmp.indexOf(arr[i])==-1){
            tmp.push(arr[i])
        }
        if(arr[i]+1===arr[i+1]){
            tmp.push(arr[i+1])
        }else{
            for(let j of tmp){
                t+=j
            }
            res.push(t)
            tmp=[]
            t=0
        }
    }
    return Math.max(...res)
}
console.log(getF(arr))
// 50
// 12586269025