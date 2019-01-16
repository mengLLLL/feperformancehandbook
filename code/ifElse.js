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

function objectType(month){
    const table = {
        1: 31, 3: 31, 5: 31, 7: 31, 8: 31, 10: 31, 12:31,
        4: 30, 6:30, 9: 30, 11: 30,
        2: 29
    }
    return table[month]
}


const objectFntype = {
    1: () => { return 31 },
    2: () => { return 29 },
    3: () => { return 31 },
    4: () => { return 30 },
    5: () => { return 31 },
    6: () => { return 30 },
    7: () => { return 31 },
    8: () => { return 31 },
    9: () => { return 30 },
    10: () => { return 31 },
    11: () => { return 30 },
    12: () => { return 31 },
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
    }
}


function test() {
    var suite = new Benchmark.Suite
    suite.add('ifElse', function() {
        ifElse()
    }).add('objectType', function() {
        objectType()
    }).add('switchCase', function() {
        switchCase()
    }).on('cycle', function(event) {
        console.log(String(event.target))
    }).run({'async': true})
}

module.exports = {
    test
}