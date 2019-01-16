var Benchmark = require('benchmark');
var ifElse = require('./code/ifElse')
var testFor = require('./code/for')



// var bench = new Benchmark(
//     'tableTest',
//     // ifElse.howManyDays3
//     testFor.testFor5
// )


// bench.run() // 开始测试

// console.log(bench.hz) // 每秒运行数
// console.log(bench.stats.moe) // 出错边界
// console.log(bench.stats.variance) // 样本方差

testFor.test()