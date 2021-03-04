// 函数实现一个大位数乘法，可以计算出诸如1865459497823＊6349526719336的结果

// 答案  11844784925266255224005528
let a = 1865459497823

let b = 6349526719336+''

console.log(6);

const getResult = function (a, b) {
    let obj =[]
    console.log(b.length);
    let len=b.length

    for(let i=0;i<len;i++){
        obj.push({n:b[i],times:len-i})
        console.log(b[i]);
    }
    // for(let k of b){
    //     console.log(k);
    //     obj.push({k:k,v:b[k]})
    // }
    // let t=String(b).split('')
    console.log(obj);
    // console.log(t[0]);
    return a*9;
}
console.log(getResult(a, b))