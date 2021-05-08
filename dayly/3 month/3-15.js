// 如果有n个接口，需要按接口顺序渲染dom，怎么实现(提供get(id), render(id)方法)
// async await 同时并发，顺序执行
let api = ['api-1', 'api-2']

async function renderDom(urls) {
    // 并发读取远程URL
    const textPromises = urls.map(async url => {
        const response = await get(url);
        return response.text();
    });

    // 按次序输出
    for (const textPromise of textPromises) {
        await render(textPromise)
    }
}

renderDom(api)