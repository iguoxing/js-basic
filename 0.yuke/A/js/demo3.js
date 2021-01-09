// var list_li = document.getElementsByTagName("li");
// for (var i = 0; i < list_li.length; i++) {
//     list_li[i].onclick = function() {
//         console.log(i);
//     }
// }
// console.info(list_li)

// 第一种 用到闭包，且查节点内的数据
// var list_li = document.getElementsByTagName("li");
// for (var i = 0; i < list_li.length; i++) {
//     (function(i) {
//         list_li[i].onclick = function() {
//             console.log(list_li[i].innerHTML);
//         }
//     })(i);

// }

//  第二种 用到闭包，且把i+1
// var list_li = document.getElementsByTagName("li");
// for (var i = 0; i < list_li.length; i++) {
//     (function(i) {
//         list_li[i].onclick = function() {
//             console.log(i + 1);
//         }
//     })(i);

// }


//  第三种 用到闭包，且把i+1
var list_li = document.getElementsByTagName("li");
for (var i = 0; i < list_li.length; i++) {
    list_li[i].onclick = function() {
        console.log(this.innerHTML);
    }

}