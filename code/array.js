var Benchmark = require('benchmark');

function add1(i){
    let arr = [1]
    arr.push(i)    
}

function add2(i){
    let arr = [1]
    arr = arr.concat([i])   
}

function add3(i) {
    let arr = [1]
    arr[arr.length] = i
}

function del1(i) {
    let arr = [1,2,3]
    let index = arr.indexOf(i)
    if (index > -1) {
        arr.splice(index,1)
    }
}

function del2(i) {
    let arr = [1,2,3]
    delete arr[arr.indexOf(i)]
}

function onComplete(e) {
    console.log('执行速度', String(e.target))
    console.log('出错边界', e.currentTarget.stats.moe)
}

function testAdd() {
    var suite = new Benchmark.Suite
    suite.add('add1', () =>  add1(), {
        'onComplete': (e) => onComplete(e)
    })
    .add('add2', () => add2(), {
        'onComplete': (e) => onComplete(e)
    })
    .add('add3', () => add3(), {
        'onComplete': (e) => onComplete(e)
    })
    .run({'async': true})
}

function testDel() {
    var suite = new Benchmark.Suite
    suite.add('del1', () =>  del1(), {
        'onComplete': (e) => onComplete(e)
    })
    .add('del2', () => del2(), {
        'onComplete': (e) => onComplete(e)
    })
    .run({'async': true})
}

module.exports = {
    testAdd,
    testDel
}