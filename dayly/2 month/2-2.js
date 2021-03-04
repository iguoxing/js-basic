// 给定一个正整数，返回它在Excel中的相对应的列名称
// 比如，
// 1-A
// 2->B 
// 27->AB 

const getExcel=function(num){
    if(num<=0) return '请输入大于0的正整数' 
    let res=String.fromCharCode((num-1)%26+65)
    return res;
}
console.log(getExcel(27));