var arr = [6, 4, 5, 2, 9, 3, 8, 7, 1]

// ① 比较
function compare(left, right) {
    return left < right
}

// ② 交换
function exchange(arr, leftIdx, rightIdx) {
    var temp = arr[leftIdx]
    arr[leftIdx] = arr[rightIdx]
    arr[rightIdx] = temp
}

// ③ 排序算法
function selectSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        var maxIdx = 0
        for (var j = 0; j < arr.length - i; j++) {
            if (compare(arr[maxIdx], arr[j])) {
                maxIdx = j
            }
        }
        exchange(arr, maxIdx, arr.length - 1 - i)
    }
}

selectSort(arr)

console.log(arr)