// printPyramid给定一个字符串，将其打印成三角形
let str='asdfad6f4a8e1ac65ew1c6a5e1c6f5s84ef8aew4c6a5e1a6w5e4fa6';

const printPyramid=function(str){
    let len=str.length
    let n=Math.ceil(Math.sqrt(len))
    let left=str.slice((n-1)*(n-1))
    for(let i=0;i<n;i++){
        let tmp=''
        tmp=' '.repeat(n-i)+str.slice(2*i-2,4*i-1)
        console.log(tmp);
    }
    console.log(left);
}

printPyramid(str)
