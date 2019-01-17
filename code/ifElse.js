var Benchmark = require('benchmark');
function ifElse(month){
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

function ternary(month) {
    return (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) ? 31 : (month === 2 ? 29 : 30)
}

function objectType(month){
    const table = {
        1: 31, 3: 31, 5: 31, 7: 31, 8: 31, 10: 31, 12:31,
        4: 30, 6:30, 9: 30, 11: 30,
        2: 29
    }
    return table[month]
}

function switchCase(month) {
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return 31;
        case 4:
        case 6:
        case 9:
        case 11:
            return 31;
        case 2:
            return 29
        default:
            return 30
    }
}


function onComplete(e) {
    console.log('执行速度', String(e.target))
    console.log('出错边界', e.currentTarget.stats.moe)
}

function test() {
    var suite = new Benchmark.Suite
    suite.add('ifElse', () =>  ifElse(), {
        'onComplete': (e) => onComplete(e)
    })
    .add('ternary', () => ternary(), {
        'onComplete': (e) => onComplete(e)
    })
    .add('objectType', () => objectType(), {
        'onComplete': (e) => onComplete(e)
    })
    .add('switchCase', () => switchCase(), {
        'onComplete': (e) => onComplete(e)
    })
    .run({'async': true})
}

module.exports = {
    test
}