// 实现一个 SimpleEventEmitter，支持 trigger、once、on、off 方法
let a = 'xiaotuofeng-mingming-shezhi'

// let b = a.replaceAll('-','').toLowerCase()
// console.log(b)
// console.log(arr.map(i=>i[0].toUpperCase()+i.slice(1)))

// const getTouFeng=function(a){
// 	let arr=a.split('-')
// 	let res=[]
// 	for(let i=0;i<arr.length;i++){
// 		if(i>0){
// 			res.push(arr[i][0].toUpperCase()+arr[i].slice(1)) 
// 		}else{
// 			res.push(arr[i])
// 		}
// 	}
// 	return res.join('')
// }
// console.log(getTouFeng(a))


let b = a.replace((/-\w/g),function(v){
    return v.substring(1).toUpperCase()
})
console.log(b)
