// 数字对，位置对，公牛，用A表示
// 数字对，位置不对，奶牛，用B表示
let secret = "1123"
let guess = "0111"

const guessFun = function(s, g) {
    let A = 0,
        B = 0;

    let s1 = '',
        g1 = '';

    for (let i = 0; i < s.length; i++) {
        if (s[i] == g[i]) {
            A += 1
        } else {
            s1 += s[i]
            g1 += g[i]
        }
    }

    for (let j = 0; j < s1.length; j++) {
        if (g1.indexOf(s1[j]) > -1) {
            B += 1
        }
    }
    return A + 'A' + B + 'B'
}

console.log(guessFun(secret, guess));