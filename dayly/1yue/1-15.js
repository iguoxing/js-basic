const getArr = function(arr) {
    let count = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != arr[i + 1]) {
            count.push(arr[i])
        } else {
            arr.splice(i, 1, '')
        }
    }
    return count.length
}

const getArr = function(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        // debugger
        if (arr[count] != arr[i]) {
            count++;
            arr[count] = arr[i]
            console.log(arr);
        }
    }
    return ++count
}

console.info(getArr([1, 2, 2, 2, 3]))