// 对几种拼接字符串方法的测试
var Benchmark = require('benchmark')

// 制作测试变量
const str1 = '1.A benchmarking library that supports high-resolution timers & returns statistically significant results.Benchmark.js’ only hard dependency is lodash. Include platform.js to populate Benchmark.platform.'
const str2 = '2.Benchmark.js’ only hard dependency is lodash. Include platform.js to populate Benchmark.platform.The Benchmark constructor exposes a handful of lodash methods to make working with arrays, collections, and objects easier. The lodash methods are:'

// 使用连接符 + 
function plussignConnect() {
  var str = str1 + str2
  // console.log(str)
}

// 使用concat
function concatConnect() {
  var str = str1.concat(str2)
  // console.log(str)
}

// 使用模版字符串
function templateConnect() {
  var str = `${str1}${str2}`
  // console.log(str)
}

function onComplete(e) {
  console.log('执行速度', String(e.target))
  console.log('出错边界', e.currentTarget.stats.moe)
}

function test() {
  var suite = new Benchmark.Suite
  suite.add('plussignConnect', () => plussignConnect(), {
    'onComplete': (e) => onComplete(e)
  })
  .add('concatConnect', () => concatConnect(), {
    'onComplete': (e) => onComplete(e)
  })
  .add('templateConnect', () => templateConnect(), {
    'onComplete': (e) => onComplete(e)
  })
  .run({'async': true})
}

module.exports = {
  test
}