// 实现一个LazyMan，可以按照以下方式调用:
// LazyMan('Hank')输出:
// Hi! This is Hank!
// LazyMan('Hank').sleep(10).eat('dinner')输出
// Hi! This is Hank!
// //等待10秒..
// Wake up after 10
// Eat dinner~
// LazyMan('Hank').sleep(10).eat('dinner').eat('supper')输出
// Hi This is Hank!
// Eat dinner~
// Eat supper~
// LazyMan('Hank').sleepFirst(5).eat('supper')输出
// //等待5秒
// Wake up after 5
// Hi This is Hank!
// Eat supper~
// 以此类推。
class _LazyMan {
    constructor(name) {
        this.taskQueue = [];
        this.name = name;
        this.timer = null;
        this.sayHi();
    }
    // 每次调用时清楚timer，上一次设置的执行taskQueue就不会运行。
    // 重新设置timer,会在下一次调用完后进入执行。
    // 当所有调用结束后，就会顺利执行taskQueue队列里的事件
    next() {
        clearTimeout(this.timer);
        this.timer = setTimeout(async () => {
            // 执行taskQueue队列里的事件
            for (let i = 0; i < this.taskQueue.length; i++) {
                await this.taskQueue[i]();
            }
        });
        return this;
    }
    sayHi() {
        this.taskQueue.push(() => {
            console.log('Hi! This is ' + this.name);
        });
        return this.next();
    }
    eat(str) {
        this.taskQueue.push(() => {
            console.log('Eat ' + str);
        });
        return this.next();
    }
    beforSleep(time) {
        // unshift插入到事件的第一个
        this.taskQueue.unshift(() => this.sleepPromise(time));
        return this.next();
    }
    sleep(time) {
        this.taskQueue.push(() => this.sleepPromise(time));
        return this.next();
    }
    // sleep的Promise对象，用于给async/await来阻塞后续代码执行
    sleepPromise(time) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('wake up after ' + time);
                resolve();
            }, time * 1000);
        });
    }
}

function LazyMan(name) {
    return new _LazyMan(name);
}

// 链式调用
LazyMan('Hank').sleep(1)

// LazyMan(“Hank”)调用，而不是new LazyMan(“Hank”)创建 => 工厂方法返回new对象
// 链式调用实现 => 每次调用返回this
// sleep需要等待10s => setTimeout实现sleep
// setTimeout会放到事件列表中排队，继续执行后面的代码，但是题目中sleep需要阻塞后续操作。 => 考虑将sleep封装成promise，使用async/await等待sleep，实现阻塞。
// sleepFirst每次在最开始执行，考虑将sleepFirst插入到事件第一个执行。

// https://juejin.cn/post/6844903992711987208