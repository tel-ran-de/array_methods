//1. скопировать массив
const originalArray = [1, 2, 3, 4, 5]
console.log(...originalArray)
const secondArray = [...originalArray]
secondArray[0] = 10
// примитивы сравниваются по значению
// обхекты(массивы, функции) по ссылке

console.log(originalArray === secondArray)
// вот такое сравнение будет необходимо для перерисовки UI

// 2. совместить два массива
const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const mergedArray = [...array1, ...array2]
console.log(mergedArray)
// 3. добавить в массив новые данные
// со spread оператором
const array3 = [4, 5, 6]
const newArray = [...array3, 9, 10]
array3.push(11)
console.log(newArray)

// 4. добавить строки через spread оператор становится
// набором букв в качестве массива
const text = '123'
const charArray = [...text]
console.log(charArray)

// 5. прописать в аргументы функции
const numbers = [1, 2, 3, 4, 5]

function sum(a, b, c, d, e) {
  return a + b + c + d + e
}
console.log(sum(...numbers))

// скопировать объект
const originalObject = { x: 1, y: 2 }
const secondObj = { ...originalObject }
secondObj.x = 5

//добавить в объект новые данные
const changedObj = { ...originalObject, id: 5 }
console.log(changedObj)

// совместить два объекта
const objectA = { x: 1, y: 2 }
const objectB = { y: 3, a: 4 }

const mergedObj = { ...objectB, ...objectA }
console.log(mergedObj)
// совместить два объекта с одинаковым ключом
// то переменная второго(следующего объекта, будет
// перезаписывать предыдущую)

const o = {
  a: 1,
  a: 2,
  a: 3,
}
// не может быть двух одинаковых ключей

console.log(o.hasOwnProperty('a'))
//Почему мы проверяем есть ли у нас эта переменная
// мы считаем количество этих переменных
// складывать умножать и тд

// если мы не проверять наличие этой перменной в объекте
// то тогда она будет перезаписываться

// данные с сервера приходят
// вы не сливаете эти обхекты в один обхект
// а пушите(добавляет в новый обхект или массив)
