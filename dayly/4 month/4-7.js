// const p = new Promise((resolve, reject) => {
//     resolve()
//     console.log(1)
//     reject()
// })

//我的答案 1  在主线程里
//运行结果  1   

// case 2
// const p = Promise.reject()

// p.catch(() => console.log(1))
// p.catch(() => console.log(2))
// p.then(() => console.log(3))
// p.catch(() => console.log(4))


//我的答案 3
//运行结果  1   2


// // case 3
// const p = Promise.reject()

// p.catch(() => console.log(4))
// .catch(() => console.log(5))
// .then(() => console.log(6))

// 我的答案 4 6  理由是已经catch一次了
//运行结果  4 6