import { newId } from './utils.js'
import { cartItems } from './products.js'

// Добавляем в наш массив объектов id для товаров
let currentCartItems = cartItems.map((el) => ({ ...el, id: newId() }))

// Все селектор из html находятся в верзней части документа в одном месте
const productContainer = document.getElementById('productsContainer')
const buttonAscend = document.getElementById('ascButton')
const buttonDescend = document.getElementById('descButton')
const totalAmountContainer = document.getElementById('totalAmount')
const totalPriceContainer = document.getElementById('totalPrice')

let toCartButtons

const createNewArray = (arr) => {
  const newArr = arr
    .map(
      (product) => `
    <div class="productCard" data-id="${product.id}">
      <h2>${product.name}</h2>
      <p> price: ${product.price}</p>
      <p> amount: ${product.quantity}</p>
      <button class="cartButton" data-id="${product.id}">To cart</button>
    </div>`
    )
    .join('')

  productContainer.innerHTML = newArr

  // обращаемся к элементами после создания в DOM дереве
  toCartButtons = document.querySelectorAll('.cartButton')

  // На каждую кнопку добавляем событие для добавления товара в корзину
  toCartButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      console.log(e.currentTarget)
      console.log('aaa')
    })
  })
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

// Корзина

const totalAmount = currentCartItems.reduce((acc, obj) => acc + obj.quantity, 0)
totalAmountContainer.innerText = totalAmount
const totalPrice = currentCartItems.reduce((acc, obj) => acc + obj.price * obj.quantity, 0)
totalPriceContainer.innerText = totalPrice

// Домашнее задание:
// написать функции, которые будут пересчитывать количество и сумму товаров
// в корзине при добавлении товаров
