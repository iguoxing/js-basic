// 统计所有小于非负整数n的质数的数量
// 输入：10
// 输出：4
// 解释：2，3，5，7

const getNum = function(n) {
    if (n < 2) return 0
    let v = 0;
    for (let i = 2; i < n - 1; i++) {
        let s = false;
        if (i > 2 && i % 2 == 0) {
            s = true
        }
        if (!s) {
            for (let j = 2; j < Math.sqrt(i); j++) {
                if (i % j == 0) {
                    s = true
                }
            }
        }
        if (!s) {
            console.log('i:' + i);
            v += 1;
        }
    }
    return v;
}

console.log(getNum(10));