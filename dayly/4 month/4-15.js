// 给定一个数组，最终返回一个二维数组，每个小数组由3个和为 0 的元素组成。全罗列。
//   如 [1, 0, -1, 1, 2, -1, -4] // 返回 [[-1,0,1], [-1, -1, 2]]
let arr =[1, 0, -1, 1, 2, -1, -4]
let res=[]
let set=new Set()
arr.forEach((item,index)=>{
    arr.forEach((m,i)=>{
        let t=arr.indexOf(-item-m)
        if(t>-1&&index!=i&&t!=index&&t!=i){
            let tmp=[item,m,-item-m].sort().join(',')
            set.add(tmp)
        }
    })
})
set.forEach((item)=>{
    res.push(item.split(','))
})
console.log(res);

