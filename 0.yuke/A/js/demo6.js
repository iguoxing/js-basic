// 请用一句话算出0-100之间学生的学生等级，如90-100输出为1等生、80-90为2等
// 生以此类推。不允许使用if switch等

const getGrade = function(val) {
    return 10 - Math.floor(val / 10)
}

console.info(getGrade(89))