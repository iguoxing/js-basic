// 实现maxDeep()  找到数组深度，递归实现
// maxDeep([1,2,3,4,5]) // 1
// maxDeep([1,[2,3],4,[5,6],[7]]) // 2
// maxDeep([1,[2,[3],4],[5,6],[7]]) // 3

// let item = [1,[2,[3],4],[5,6],[7]]
let item = [1,[[[[[3]]]]],4,[2,5]]
let res=0
let tmp=[]

const maxDeep = function(arr,val){
    arr.forEach(element => {
        let t=val?val:1
        if(Object.prototype.toString.call(element)=='[object Array]'){
            t+=1;
            maxDeep(element,t)
        }
    });
    res=(res<val)?val:res
    return res
}
console.log(item,'deep:',maxDeep(item));