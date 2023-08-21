import { newId } from './utils.js'
import { cartItems } from './products.js'

// Добавляем в наш массив объектов id для товаров
let currentCartItems = cartItems.map((el) => ({ ...el, id: newId() }))

// Все селектор из html находятся в верзней части документа в одном месте
const productContainer = document.getElementById('productsContainer')
const buttonAscend = document.getElementById('ascButton')
const buttonDescend = document.getElementById('descButton')

// корзина
const cart = []
let toCartButtons
const totalAmountContainer = document.getElementById('totalAmount')
const totalPriceContainer = document.getElementById('totalPrice')

const countTotalAmount = (arr) => {
  const totalAmount = arr.reduce((acc, obj) => acc + obj.quantity, 0)
  totalAmountContainer.innerText = totalAmount
}

const countTotalPrice = (arr) => {
  const totalPrice = arr.reduce((acc, obj) => acc + obj.price * obj.quantity, 0)
  totalPriceContainer.innerText = totalPrice
}

countTotalAmount(cart)
countTotalPrice(cart)

// Функция которая рендерит список продуктов в корзине

// Функция по созданию карточек продуктов на странице
const createNewArray = (arr) => {
  const newArr = arr
    .map(
      (product) => `
    <div class="productCard" data-id="${product.id}">
      <h2>${product.name}</h2>
      <p> price: ${product.price}</p>
      <p> amount: ${product.quantity}</p>
      <button class="deleteButton" data-id="${product.id}">Delete</button>
      <button class="cartButton" data-id="${product.id}">To cart</button>
    </div>`
    )
    .join('')

  productContainer.innerHTML = newArr

  // обращаемся к элементами после создания в DOM дереве
  toCartButtons = document.querySelectorAll('.cartButton')

  // Добавляем в корзину + пересчитываем количество и стоимость
  toCartButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      // e.target - цель нашего события
      // getAttribute - выбирает нужный аттрибут который мы хотим
      const currentProductId = e.target.getAttribute('data-id')
      // find находит нужный элемент по условию колбек функции !
      const currentProduct = currentCartItems.find((product) => product.id === currentProductId)
      cart.push(currentProduct) // добавляем обхект в корзину

      countTotalAmount(cart) // обновляем переменную общего количества
      countTotalPrice(cart) // обновляем цену
    })
  })

  // Добавить кнопку удаления товара
}

// вызываем функция для рендера элементов на странице
createNewArray(currentCartItems)

// Сортировка
buttonAscend.addEventListener('click', () => {
  currentCartItems = [...currentCartItems].sort((a, b) => a.price - b.price)
  createNewArray(currentCartItems)
})

buttonDescend.addEventListener('click', () => {
  currentCartItems = [...currentCartItems].sort((a, b) => b.price - a.price)
  createNewArray(currentCartItems)
})

// Домашнее задание:
// написать функции, которые будут пересчитывать количество и сумму товаров
// в корзине при добавлении товаров

const arr = [
  { name: 'olya', age: 29, id: 9 },
  { name: 'Petya', age: 70, id: 10 },
  { name: 'ivan', age: 90, id: 15 },
]

const v = arr.find((el) => el.id === 10)

console.log(v)
