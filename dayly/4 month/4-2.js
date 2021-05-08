// https://leetcode-cn.com/problems/merge-intervals/
// 乱序区间合并  a = [[1,4],[3,8], [10,15], [11,18], [20,27], [14,15],[19,28]] =>[[1, 8], [10,18],[19,28]]
// 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。
// 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
// 输出：[[1,6],[8,10],[15,18]]
// 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].

let intervals = [[1,4],[3,8], [10,15], [11,18], [20,27], [14,15],[19,28]]
let res=[intervals[0]]
const mergeArr=function(arr){
    let tmp=arr[0]
    for(let i=1;i<arr.length;i++){
        console.log('tmp:'+tmp+'  arr[i]:'+arr[i]);
        if(tmp[1]>=arr[i][0]){
            if(tmp[1]>=arr[i][1]){
                // tmp[0]=arr[i][0]
                if(res[res.length-1].toString()!=tmp.toString()){
                    res.push(tmp)
                }
            }else{
                tmp[0]=(tmp[0]<arr[i][0])?tmp[0]:arr[i][0]
                tmp[1]=arr[i][1]
                if(res[res.length-1].toString()!=tmp.toString()){
                    res[res.length-1]=tmp
                }
            }
            // tmp[1]=()?tmp[1]:arr[i][1]
            if(res[res.length-1].toString()!=tmp.toString()){
                res.push(tmp)
            }
            tmp=res[res.length-1]
        }else{
            tmp=arr[i]
            if(res[res.length-1].toString()!=arr[i].toString()){
                res.push(arr[i])
            }
        }
    }

    console.log(res);
}

mergeArr(intervals)