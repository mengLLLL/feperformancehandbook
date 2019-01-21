var Benchmark = require('benchmark');

function add1(i){
    let arr = [1,2,3,4,5,6,7,8,9,10]
    arr.push(i)    
}

function add2(i){
    let arr = [1,2,3,4,5,6,7,8,9,10]
    arr = arr.concat([i])   
}

function add3(i) {
    let arr = [1,2,3,4,5,6,7,8,9,10]
    arr[arr.length] = i
}

function del1(i) {
    let arr = [1,2,3,4,5,6,7,8,9,10]
    let index = arr.indexOf(i)
    if (index > -1) {
        arr.splice(index,1)
    }
}

function del2(i) {
    let arr = [1,2,3,4,5,6,7,8,9,10]
    delete arr[arr.indexOf(i)]
}

function del3(i) {
    let arr = [1,2,3,4,5,6,7,8,9,10]
    arr = arr.filter(item => {
        return item != 7
    })
}

function delRepeat1(arr) {
    let newArr = []
    for(let i=0, len = arr.length; i < len; i ++) {
        if (newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i])
        }
    }
    return newArr
}

function delRepeat2(ar) {
    var tmp = {},
        ret = [];
    for (var i = 0, j = ar.length; i < j; i++) {
        if (!tmp[ar[i]]) {
            tmp[ar[i]] = 1;
            ret.push(ar[i]);
        }
    }
    return ret;
}

function delRepeat3(ar) {
    var ret = [];
    ar.forEach(function(e, i, ar) {
        if (ar.indexOf(e) === i) {
            ret.push(e);
        }
    });
    return ret;
}

function delRepeat4(ar) {
    var ret = [],
        end;
    ar.sort();
    end = ar[0];
    ret.push(ar[0]);
    for (var i = 1; i < ar.length; i++) {
        if (ar[i] != end) {
            ret.push(ar[i]);
            end = ar[i];
        }
    }
    return ret;
}

function delRepeat5(ar){
    for(var i=0;i<ar.length;i++){
        for(var j=i+1;j<ar.length;j++){
            if(ar[j]==ar[i]){
                ar.splice(j,1)
                j--
            }
        }
    }
    return ar
}

function delRepeat6(arr) {
    return[...new Set(arr)]
}

function delRepeat7(arr) {
    const delre = arr => {
        var obj ={}
        arr.forEach(value => {
            obj[value]=0;
        })
        return Object.keys(obj);
    }
    return delre(arr)
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
    .add('del3', () => del3(), {
        'onComplete': (e) => onComplete(e)
    })
    .run({'async': true})
}

function testDelRepeat() {
    var suite = new Benchmark.Suite
    try{
        var arr = [1,2,3,4,5,6,7,8,9,10,1,2,2,3,3,656,2]
        suite.add('delRepeat1', () =>  delRepeat1(arr), {
            'onComplete': (e) => onComplete(e)
        })
        .add('delRepeat2', () => delRepeat2(arr), {
            'onComplete': (e) => onComplete(e)
        })
        .add('delRepeat3', () => delRepeat3(arr), {
            'onComplete': (e) => onComplete(e)
        })
        .add('delRepeat4', () => delRepeat4(arr), {
            'onComplete': (e) => onComplete(e)
        })
        .add('delRepeat5', () => delRepeat5(arr), {
            'onComplete': (e) => onComplete(e)
        })
        .add('delRepeat6', () => delRepeat6(arr), {
            'onComplete': (e) => onComplete(e)
        })
        .add('delRepeat7', () => delRepeat7(arr), {
            'onComplete': (e) => onComplete(e)
        }).run({'async': true})
    } catch (err) {
        console.log(err.message)
    }
    
}

module.exports = {
    testAdd,
    testDel,
    testDelRepeat
}