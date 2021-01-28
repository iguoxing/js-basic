const pro = new Promise((resolve, reject) => {
    const innerpro = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(1);
        })
        console.log(2);
        resolve(3);
    })
    innerpro.then(res => console.log(res));
    resolve(4);
    console.log("yideng");
})
pro.then(res => console.log(res));
console.log("end");

// 2
// 3
// 4
// yideng
// end
// 1


// 1 不见了， 好奇怪..
// resolve 放到了微任务中