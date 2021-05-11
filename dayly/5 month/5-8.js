// 数组全排列
// var arr = [1,2,3];
// 预期结果
// [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
let arr = []
const rankArray = function(item){
    for(let i=0;i<item.length;i++){
        for(let j=0;j<item.length;j++){
            for(let m=0;m<item.length;m++){
                if(item[i]!=item[j]&&item[i]!=item[m]&&item[j]!=item[m]){
                    arr.push([item[i],item[j],item[m]])
                }
            }
        }
    }
    console.log(arr);
}

rankArray([1,2,3])