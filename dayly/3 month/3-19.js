// [{id:1, parentId: 0}, {id:2, parentId:1},{id:3, parentId:1}]
// 把这个数组从顶级分类递归查找子分类，最终构建一个树状数组。结果输出如下
// {id:1, parentId: 0,children:[{id:2, parentId:1},{id:3, parentId:1}]}]，
// parentId为0 的是根节点
// let expect = { id: 1, parentId: 0, children: [{ id: 2, parentId: 1 }, { id: 3, parentId: 1 }] }

let arr = [{ id: 1, parentId: 0 }, { id: 2, parentId: 1 }, { id: 3, parentId: 1 }]

const getTree = function(arr) {
    console.log(arr);
    let tmp = arr[0]
    tmp.children = []
    for (let i = 1; i < arr.length; i++) {
        if (arr[0].id == arr[i].parentId) {
            tmp.children.push(arr[i])
        }
    }
    console.log(tmp);
}
getTree(arr)

// 0
// 1
// 2 3