var Benchmark = require('benchmark');

function howManyDays(month){
    if(month === 1 ||
        month === 3 ||
        month === 5 ||
        month === 7 ||
        month === 8 ||
        month === 10 ||
        month === 12
    ){
        return 31
    }else if(month === 2){
        return 29
    }else{
        return 30
    }
}

function howManyDays2(month){
    const table = {
        1: 31, 3: 31, 5: 31, 7: 31, 8: 31, 10: 31, 12:31,
        4: 30, 6:30, 9: 30, 11: 30,
        2: 29
    }
    return table[month]
}
var bench = new Benchmark(
    'tableTest',
    howManyDays2,
)

bench.run() // 开始测试

console.log(bench.hz) // 每秒运行数
console.log(bench.stats.moe) // 出错边界
console.log(bench.stats.variance) // 样本方差