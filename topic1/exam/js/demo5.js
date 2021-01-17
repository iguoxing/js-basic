var a = {},
    b = { key: 'b' },
    c = { key: 'c' };
a[b] = 123;
a[c] = 456;
a[true] = 789;
console.log(a);
// {[object Object]: 456, true: 789}
console.log(a[b]);
//456
console.log(Symbol(b) == Symbol(b));
// false
// - 【请⼿动实现⼀个Symbol】
// https://github.com/mqyqingfeng/Blog/issues/87