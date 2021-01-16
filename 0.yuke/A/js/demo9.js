// 同步异步
// async函数自带执行器。也就是说，async函数的执行，与普通函数一模一样，只要一行
// async函数的await命令后面，可以是 Promise 对象和原始类型的值（数值、字符串和布尔值，但这时会自动转成立即 resolved 的 Promise 对象）。

// 【按顺序完成异步操作 】

// async function logInOrder(urls) {
//     // 并发读取远程URL
//     const textPromises = urls.map(async url => {
//       const response = await fetch(url);
//       return response.text();
//     });

//     // 按次序输出
//     for (const textPromise of textPromises) {
//       console.log(await textPromise);
//     }
//   }

// 虽然map方法的参数是async函数，但它是并发执行的，因为只有async函数内部是继发执行，外部不受影响。后面的for..of循环内部使用了await，因此实现了按顺序输出。