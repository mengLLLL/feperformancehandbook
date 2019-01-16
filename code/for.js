// 测试影响for循环的因素
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function testFor1() {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
  }
}

function testFor2() {
  for (let i = 0, len = arr.length; i < len; i++) {
    console.log(arr[i])
  }
}

function testFor3() {
  for (let i in arr) {
    console.log(arr[i])
  }
}

function testFor4() {
  arr.forEach((data) => {
    console.log(data)
  })
}

function testFor5() {
  for(let data of arr) {
    console.log(data)
  }
}

module.exports = {
  testFor1,
  testFor2,
  testFor3,
  testFor4,
  testFor5
}