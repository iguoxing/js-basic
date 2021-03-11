// 代码实现： 实现Array.prototype.reduce方法
Array.prototype.reduce=function(f,v){
    if(Object.prototype.toString.call(f)!='[object Function]') return undefined
    let r=v
    for(let i=0;i<this.length;i++){
        r=f(r,this[i])
    }
	return r
}
let arr=[1,2,3]

function getSum(total, num) {
    return total + num;
}
console.log(arr.reduce(getSum,1))

// 50
// 12586269025