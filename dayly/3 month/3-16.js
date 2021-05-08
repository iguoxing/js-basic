// 手写一个截取url参数然后生成map关系映射的函数
let url = 'https://mp.weixin.qq.com/cgi-bin/home?t=home/index&lang=zh_CN&token=139088253'

const getUrl = function(url) {
    let m = new Map()
    let t = url.substring(url.indexOf('?') + 1)
    let arr = t.split('&')
    for (let item of arr) {
        let s = item.indexOf('=')
        m[item.substring(0, s)] = item.substring(s + 1)
    }
    console.log(m);
}

getUrl(url)