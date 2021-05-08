// ['a', 'b', 'c', 'd']转{a: {b: { c: 'd'}}}
let arr=['a', 'b','c','d','e','f']
let target={}

const setObj=function(arr,obj){
    let name=arr.pop()
    let o={}
    o[name]=obj
    return o
}

const toObj=function(arr){
    if(JSON.stringify(target) === '{}'){
        let val=arr.pop()
        let name=arr.pop()
        target[name]=val
    }
    
    while(arr.length>0){
        target=setObj(arr,target)
    }
    console.log(target);
}

toObj(arr)
