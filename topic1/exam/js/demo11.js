// 请描述你理解的函数式编程，并书写如下代码结果。那么你能使用
// Zone+RX 写出一段FRP的代码么？（10分）
var Container = function(x) {
        this.__value = x;
    }
    // debugger
Container.of = x => new Container(x);
Container.prototype.map = function(f) {
    return Container.of(f(this.__value))
}
let a = Container.of(3)
    .map(x => x + 1)
    .map(x => 'Result is ' + x);

console.log(a);

// Result is 4

// 没返回... 纳尼