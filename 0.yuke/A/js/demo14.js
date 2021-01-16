// 请问你知道什么是写屏障么？
Object.prototype.c = "京程一灯"

var ydObj = {
    c: 2
};
var myObj = Object.create(ydObj);
console.log(ydObj);
//{c:2}
console.log(myObj);
// 指针指过去，但并没有建立原型
//{}
console.log(ydObj.hasOwnProperty('c'));
//true
console.log(myObj.hasOwnProperty('c'));
// false
myObj.c++;
console.log(myObj);
// 但现在有计算的时候，会根据指针去找
//{c:3} 
console.log(ydObj.c);
// 2