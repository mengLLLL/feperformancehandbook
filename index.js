var Benchmark = require('benchmark');
var suite = new Benchmark.Suite
var ifElse = require('./code/ifElse')

suite.add('ifElse', function() {
    ifElse.ifElse()
}).add('objectType', function() {
    ifElse.objectType()
}).add('switchCase', function() {
    ifElse.switchCase()
}).on('cycle', function(event) {
    console.log(String(event.target))
}).run({'async': true})

// bench.run() // 开始测试

// console.log(bench.hz) // 每秒运行数
// console.log(bench.stats.moe) // 出错边界
// console.log(bench.stats.variance) // 样本方差