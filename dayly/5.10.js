// function add（a, b）{ return a + b }
// function curry(fn) { }
// curry(add)(a)(b) => 3

function add(a, b,c){ return a +b+c }

function curry(fn){
    // Function.length  属性指明函数的形参个数
    let len=fn.length;
    let arr=[]
    return function c(t){
        arr.push(t)
        if(arr.length===len){
            return fn.apply(this,arr)
        }
        return c
    }
}

console.log(curry(add)(1)(2)(3));