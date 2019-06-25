

// 把arr按从大到小的顺序排序！

/**
 * 冒泡排序
 * 比较相邻元素=>符合条件=>交换
 */
function BubbleSort() {
    let arr = [2, 3, 1, 6, 5, 9, 12]
    let len = arr.length
    let i = 0
    for (i; i< len; i++) {
        for(let j = 0; j < len - i; j++) {
            if (arr[j] < arr[j+1]) {
                const temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    console.log(arr)
}

/**
 * 选择排序
 * 找到最大（小）的元素放到排好序的数组末尾
 */
function SelectSort() {
    let arr = [2, 3, 1, 6, 5, 9, 12]
    for(let i = 0; i< arr.length; i++) {
        let max = i // 最大元素下标（初始坐标为0）
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > arr[max]){
                max = j
            }
        }
        if (i !== max) { // 说明最大值已经不是最开始的了
            const temp = arr[i] // 交换
            arr[i] = arr[max]
            arr[max] = temp
        }
    }
    console.log(arr)
}

/**
 * 插入排序
 * 把某个元素插入到已经排好序的数组中
 */
function InsertSort() {
    let arr = [2, 3, 1, 6, 5, 9, 12]
    let i = 1
    for (i; i< arr.length; i++) {
        let waitInsert = arr[i] // 待插入的数值
        let j = i
        while(j > 0 && arr[j-1] < waitInsert) { // 全员往后移动
            arr[j] = arr[j-1]
            j--
        }
        arr[j] = waitInsert
    }
    console.log(arr)
}