function test(m) {
    // console.info(m)
    // 这里会涉及到重写，地址会变
    m = { v: 5 }
        // m.v = 50
        // console.info(m)

}
var m = { k: 30 };

test(m);

// console.info(m);

alert(m.v);

// 我的答案
// {v:5}

// 答案
// undefined

// 😌
// 会覆盖掉之前的，所以结果是m={k:5}