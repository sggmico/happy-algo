var arr = [6, 4, 5, 2, 9, 3, 8, 7, 1]

// ① 比较
function compare(left, right) {
    return left > right
}

// ② 交换
function exchange(arr, leftIdx, rightIdx) {
    var temp = arr[leftIdx]
    arr[leftIdx] = arr[rightIdx]
    arr[rightIdx] = temp
}

// ③ 排序算法
function sort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - 1 - i; j++) {
            if (compare(arr[j], arr[j + 1])) {
                exchange(arr, j, j + 1)
            }
        }
    }
}

// var beginTime = Date.now()
sort(arr)
// var endTime = Date.now()
// console.log('castTime -> ' + (endTime - beginTime))
console.log(arr) // 看结果