// 手写一个new操作符
// 1、创建了一个新的实例对象。
// 2、该对象的__proto__属性与构造函数（Student）的prototype全等（hanson.__proto === Student.prototype）
// 3、改变this指向，使其指向新创建的实例对象

// 通过new操作符实现的实例对象，即可访问构造函数的属性，也可以访问构造函数原型上的属性。

function Student(name, age) {
    this.class = '3.5';
    return {
        name: name,
        age: age
    }
}

function myNew() {
    const obj = new Object();
    console.log(arguments);
    console.log(arguments.length);
    Constructor = Array.prototype.shift.call(arguments);
    console.log(arguments);
    obj.__proto__ = Constructor.prototype;
    let ret = Constructor.apply(obj, arguments); // 判断构造函数是否存在返回值
    return typeof ret === 'object' ? ret : obj;
}

let newPerson1 = new Student('hanson', 18)
let newPerson2 = myNew(Student, 'hanson', 18)
console.log(newPerson1.name) // hanson
console.log(newPerson2.name) // undefined