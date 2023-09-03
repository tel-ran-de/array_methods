// 0. JavaScript  многопоточный или однопоточный?
// Однопоточный язык

// 0.1 Что такое микротаски ?

// 0.2 Что такое макротаски?

// 0.3 Объясните как работает event loop

// 1.0 статусы у промиса?
// pending - ожидание
// resolved - выполненный (разрешенный)
// rejected - отклоненный

// 1.1 какой тип данных возвращает then
// promise

// 1.2 Разница между then и catch
// catch = then(null, errorCallback)
// .catch(e => ) - ловит ошибку

// 1.3 в чем разница между этим примером
let promise = request()
promise.then(
  function (data) {
    console.log(data)
  },
  function (error) {
    console.error(error)
  }
)

// и этим
let promise = request()
promise

  .then(function (data) {
    console.log(data)
  })

  .catch(function (error) {
    console.error(data)
  })

// 1.4 Для чего нужен finally
then()
  .then()
  .catch((e) => console.log(e))
  .finally()
// для того чтобы вне зависимости от исхода промиса мы выполняем какое-то действие

// 2.1 Что выведет следующий код
// промис создается но не вызывается
console.log('start')

// Промис создается, но не выполняется
// потому что это объявление но не выполнение
const promise1 = new Promise((resolve, reject) => {
  // интерпретация кода и получается что у меня лог синхронный
  console.log(1)
})

const fn1 = () => {
  console.log('3')
}
console.log('end')

// 2.2 Какой результат выполнения этого кода?
// промис создается и вызывается
console.log('start')

const promise1 = new Promise((resolve, reject) => {
  // в объявлении функции
  console.log(1)
  resolve(200) // двойка не просто так написана
})

// вызов! микротаска --> в обход синхронного кода
promise1.then((response) => {
  console.log(response)
})

console.log('end')

// 2.3 Какой результат выполнения этого кода?
// промис без resolve
console.log('start')

const promise1 = new Promise((resolve, reject) => {
  console.log(1)
})

// вызываем промис, без колбэка
promise1.then((res) => {
  console.log(2) //pending
})

console.log('end')

// 2.4 Какой результат выполнения этого кода?
// c setTimeout
console.log('start') // синхронно

setTimeout(() => {
  console.log('setTimeout') // макротаска --> самая последняя
})

//Promise.resolve() = вызов
Promise.resolve().then(() => {
  console.log('resolve') // результат выполнения промисса! --> микротаскаа
})

console.log('end') // синхронно

// 3.1 функция job должна вернуть promise new Promise()
// промис должен разрешиться(resolve) через 2 секунды после
// вызывая job в дата должно быть 'hello world'

function job() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello world')
    }, 2000)
  })
}

job().then((data) => console.log(data))

// 3.2 Функция всегда возвращает промис, если это не число то он rejected с ошибкой "error"
// (isNan(data))
// если нечетное то разрешается resolve через 1 секунду с "odd"
// если число четное то через две секунды возвращает отклоненный reject с 'even'

function job(data) {
  return new Promise((resolve, reject) => {
    if (isNaN(data)) {
      reject('error')
    } else if (data % 2 === 0) {
      setTimeout(() => {
        reject('even')
      }, 2000)
    } else {
      setTimeout(() => {
        resolve('odd')
      }, 1000)
    }
  })
}

job('aasd')
  .then((data) => console.log(data))
  .catch((error) => console.log(error))

job(2)
  .then((data) => console.log(data))
  .catch((error) => console.log('rejected: ' + error))

job(3).then((data) => console.log(data))
