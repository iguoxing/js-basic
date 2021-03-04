// 1000个6位长度的纯数字验证码，数组形式输出（最简单的方法来做）

// let arr=[]
// for(let i=0;i<1000;i++){
//     let a=(Math.random()+'').substring(2,8)
//     arr.push(a)
// }

// 解法2
// let arr=[]
// let i=1000;
// while(i>0){
//     arr.push(((Math.random()+'').substring(2,8)))
//     i--
// }

// 解法3
let arr=new Array(1000).fill('').map(i=>((Math.random()+'').substring(2,8)))


console.log(arr);