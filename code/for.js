// 测试影响for循环的因素
var Benchmark = require('benchmark');

// 制作测试变量
let testArrs = []
let i = 0
while (i < 400000) {
  testArrs.push(i)
  i ++
}

// 编写相应测试方法
// 没有声明变量的for循环
function testNoDeclare() {
  let newArrs = []
  for (let i = 0; i < testArrs.length; i++) {
    newArrs.push(i)
  }
}

// 声明变量的for循环
function testUseDeclare() {
  let newArrs = []
  for (let i = 0, len = testArrs.length; i < len; i++) {
    newArrs.push(i)
  }
}

// for...in
function testForIn() {
  let newArrs = []
  for (let i in testArrs) {
    newArrs.push(i)
  }
}

// forEach
function testForEach() {
  let newArrs = []
  testArrs.forEach((data) => {
    newArrs.push(data)
  })
}

// for...of
function testForOf() {
  let newArrs = []
  for(let data of testArrs) {
    newArrs.push(data)
  }
}

function onComplete(e) {
  console.log('执行速度', String(e.target))
  console.log('出错边界', e.currentTarget.stats.moe)
}

function test() {
    var suite = new Benchmark.Suite
    suite.add('testNoDeclare', () => testNoDeclare(), {
      'onComplete': (e) => onComplete(e)
    })
    .add('testUseDeclare', () => testUseDeclare(), {
      'onComplete': (e) => onComplete(e)
    })
    .add('testForIn', () => testForIn(), {
      'onComplete': (e) => onComplete(e)
    })
    .add('testForEach', () => testForEach(), {
      'onComplete': (e) => onComplete(e)
    })
    .add('testForOf', () => testForOf(), {
      'onComplete': (e) => onComplete(e)
    })
    .run({'async': true})
}

module.exports = {
  test
}