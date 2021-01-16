// 请用一句话遍历变量a。(禁止用for 已知var a = “abc”)

const showA = function(val) {
    // return Array.prototype.splice.call(val)
    return [...new Set(val)]
        // return Array.from(val)
}

console.info(showA('abc'))