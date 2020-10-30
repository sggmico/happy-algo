var arr = [6, 4, 5, 2, 9, 3, 8, 7, 1]

// 快排 - 简单版
function quickSort(arr) {
    if (!arr || !arr.length) return [];
    var targetIdx = Math.floor(Math.random() * arr.length),
        target = arr[targetIdx],
        left = [],
        right = []
    for (var i = 0; i < arr.length; i++) {
        // if (i === targetIdx) continue
        if (target > arr[i]) {
            left.push(arr[i])
        } else if (target < arr[i]) {
            right.push(arr[i])
        }
    }
    left = quickSort(left)
    right = quickSort(right)
    left.push(target)
    return left.concat(right)
}

var arr1 = quickSort(arr)

console.log(arr1)

// 快排 - 标准版

// ...