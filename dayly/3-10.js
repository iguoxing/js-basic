// 给定二叉搜索树（BST）的根节点和要插入树中的值，将值插入二叉搜索树。 返回插入后二叉搜索树的根节点。 输入数据保证，新值和原始二叉搜索树中的任意节点值都不同。
// 注意，可能存在多种有效的插入方式，只要树在插入后仍保持为二叉搜索树即可。 你可以返回任意有效的结果。
// 例如
// 给定二叉搜索树:

//         4
//        / \
//       2   7
//      / \
//     1   3

// 和 插入的值: 5
// 你可以返回这个二叉搜索树:
//          4
//        /   \
//       2     7
//      / \   /
//     1   3  5
// 或者这个树也是有效的:
//          5
//        /   \
//       2     7
//      / \   
//     1   3
//          \
//           4

// let tree={
//     name:4,
//     child:{
//         left:{
//             name:2,
//             child:{
//                 left:{
//                     name:1
//                 },
//                 right:{
//                     name:3
//                 }
//             }
//         },
//         right:{
//             name:7
//         }
//     }
// }
// console.log(tree);

// const insertTree=function(tree,v){
//     let obj={}
//     function insert(o){
//         console.log('-o-');
//         console.log(o);
//         console.log(o.left);
//         console.log(o.right);
//         if(!o.left){
//             o.left={name:v}
//             return
//         }
//         if(!o.right){
//             o.right={name:v}
//             return
//         }
//         if(o.left){
//             if(o.left.child){
//                 insert(o.left.child)
//             }else{
//                 insert({child:{}})
//             }
//         }
//         if(o.right){
//             if(o.right.child){
//                 insert(o.right.child)
//             }else{
//                 insert({child:{}})
//             }
//         }
//         return o
//     }
//     if(tree.child){
//         obj=insert(tree.child)
//     }
    
//     return obj
// }
// console.log(insertTree(tree,5));