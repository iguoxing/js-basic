// 计算快乐数  各位数字的平方的和循环，最终等于1，则为快乐数，否则不是
// 比如，19
// 1^2+9^2=82
// 8^2+2^2=68
// 6^2+8^2=100
// 1^2+0^2+0^2=1

const happyNum=function(n){
    if(n<1) return false
    let m=new Map();
    var b=false
    
    function getSum(v){
        let str=v+''
        let sum=0;
        for(let i=0;i<str.length;i++){
            sum+=str[i]*str[i]
        }
        m[v]=sum;
        if(sum==1){
            console.log(m);
            b=true;
        }else{
            if(n==sum){
                console.log(m);
                b=false
            }else{
                getSum(sum)
            }
        } 
        return b
    }
    return getSum(n);
}
console.log(happyNum(4));