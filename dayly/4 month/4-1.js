// 写出一个函数trans，将数字转换成汉语的输出，输入为不超过10000亿的数字。
// 例如：trans(123456) ——   十二万三千四百五十六
// trans（100010001）—— 一亿零一万零一

let num=100010001
let res=''
let n=0
const trans=function(num){
    let obj={0:'零',1:'一',2:'二',3:'三',4:'四',5:'五',6:'六',7:'七',8:'八',9:'九'}
    let rank=['','十','百','千','万','十','百','千','亿','十','百','千']
    let zero=['零千','零百','零十']
    let t=num%10
    let v=Math.floor(num/10)
    let str=obj[t]+rank[n]

    if(zero.indexOf(str)==-1){
        res=str+res
    }else{
        res='零'+res
    }
    if(v>0){
        n++
        trans(v)
    }
    return res
}
let tmp=trans(num)
if(tmp.indexOf('一十')==0){
    tmp=tmp.replace('一','')
}
tmp=tmp.replaceAll('零零','')
tmp=tmp.replaceAll('零零零','')
console.log(num+':'+tmp);
