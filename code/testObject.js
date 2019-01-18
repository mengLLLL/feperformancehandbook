var Benchmark = require('benchmark')

function onComplete(e) {
  console.log('执行速度', String(e.target))
  console.log('出错边界', e.currentTarget.stats.moe)
}

// 创建一个 Object 的实例
function object() {
  var person = new Object()
  person.name = 'Mengliang'
  person.age = 29
  person.job = 'Software Engineer'
  person.sayName = function() {
    // ...
  }
}

// 对象字面量创建对象
function literal() {
  var person = {
    name: 'Mengliang',
    age: 29,
    job: 'Software Engineer',
    sayName: function() {
      // ...
    }
  }
}

function onComplete(e) {
  console.log('执行速度', String(e.target))
  console.log('出错边界', e.currentTarget.stats.moe)
}

function test() {
  var suite = new Benchmark.Suite
  suite.add('object', () => object(), {
    'onComplete': (e) => onComplete(e)
  })
  .add('literal', () => literal(), {
    'onComplete': (e) => onComplete(e)
  })
  .run({'async': true})
}

module.exports = {
  test
}