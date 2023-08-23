// кратно 2
const numbers = [3, 7, 1, 9, 8, 5, 10]
// возвращает первый элемент с начала который соответствует условию
const neededNumber = numbers.find((el) => el % 2 === 0)
// возвращает первый индекс
// элемента с начала который соответствует условию
const neededNumberIndex = numbers.findIndex((el) => el % 2 === 0)
console.log(neededNumber, neededNumberIndex)

//  кратно 3 и 5
// 9 кратно 3 потому что остаток от деления равен 0
const numbers1 = [6, 10, 11, 9, 12, 25, 30]
const threeFive = numbers1.find((el) => el % 3 === 0 && el % 5 === 0)
const threeFive2 = numbers1.findIndex((el) => el % 3 === 0 && el % 5 === 0)
console.log(threeFive2)

// длина слова больше 5
// слово начинается с буквы K
const words = ['apple', 'banana', 'kiwi', 'grapes', 'pear', 'orange']
const lengthBiggerThanFive = words.find((word) => word.length >= 5)
// word[0]
const beginsWithK = words.find((word) => word[0] === 'g')
console.log(lengthBiggerThanFive, beginsWithK)

// найти по автору Книгу
const books = [
  { title: 'Book 1', author: 'Author A' },
  { title: 'Book 2', author: 'Author B' },
  { title: 'Book 3', author: 'Author A' },
  { title: 'Book 4', author: 'Author C' },
]
const neededAuthor = 'Author A'
const n = books.find((obj) => obj.author === 'Author A')
const n1 = books.findIndex((obj) => obj.author === neededAuthor)
console.log(n, n1)
// find

// найти товар с ценой 25
const products = [
  { name: 'Product A', price: 25 },
  { name: 'Product B', price: 10 },
  { name: 'Product C', price: 18 },
  { name: 'Product D', price: 30 },
]

const p = products.find((product) => product.price === 30)
const p1 = products.findIndex((product) => product.price === 30)
console.log(p, p1)
