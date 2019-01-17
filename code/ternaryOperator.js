// 三元运算符和if...else的性能比较
var Benchmark = require('benchmark')

function useIf() {
  let j = 0
  for (let i=0; i < 100000; i ++) {
    if (i < 5000) {
      j += 1
    } else {
      j += 2
    }
  }
}

function useTernary() {
  let j = 0
  for (let i=0; i < 100000; i ++) {
    j = i < 5000 ? j+1 : j+2
  }
}

function onComplete(e) {
  console.log('执行速度', String(e.target))
  console.log('出错边界', e.currentTarget.stats.moe)
}

function testTernary() {
  var suite = new Benchmark.Suite
  suite.add('useIf', () => useIf(), {
    'onComplete': (e) => onComplete(e)
  })
  .add('useTernary', () => useTernary(), {
    'onComplete': (e) => onComplete(e)
  })
  .run({'async': true})
}

module.exports = {
  testTernary
}