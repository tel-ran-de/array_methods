import { newId } from './utils.js'
import { cartItems } from './products.js'

// Добавляем в наш массив объектов id для товаров
let currentCartItems = cartItems.map((el) => ({ ...el, id: newId() }))

// Все селектор из html находятся в верзней части документа в одном месте
const productContainer = document.getElementById('productsContainer')

// Кнопки
const buttonAscend = document.getElementById('ascButton')
const buttonDescend = document.getElementById('descButton')
let deleteButtons

// Форма
const addProductForm = document.getElementById('productForm')
const productNameValue = document.getElementById('productName')
const productPriceValue = document.getElementById('productPrice')
const productInStockValue = document.getElementById('productQuantity')

// корзина
const cart = []
let toCartButtons
const totalAmountContainer = document.getElementById('totalAmount')
const totalPriceContainer = document.getElementById('totalPrice')

const countTotalAmount = (arr) => {
  const totalAmount = arr.reduce((acc, obj) => acc + obj.inStock, 0)
  totalAmountContainer.innerText = totalAmount
}

const countTotalPrice = (arr) => {
  const totalPrice = arr.reduce((acc, obj) => acc + obj.price * obj.inStock, 0)
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
      <div class="quantity-container">
      <button>-</button>
      <p> amount: ${product.inStock}</p>
      <button>+</button>
         </div>
      <button class="deleteButton" data-id="${product.id}">Delete</button>
      <button class="cartButton" data-id="${product.id}">To cart</button>
    </div>`
    )
    .join('')

  productContainer.innerHTML = newArr

  // обращаемся к элементами после создания в DOM дереве
  toCartButtons = document.querySelectorAll('.cartButton')
  deleteButtons = document.querySelectorAll('.deleteButton')

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
  deleteButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const currentProductId = e.target.getAttribute('data-id')
      console.log(currentProductId)
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

// Добавление товара в список
addProductForm.addEventListener('submit', (event) => {
  event.preventDefault()

  const product = {
    name: productNameValue.value,
    price: Number(productPriceValue.value),
    inStock: Number(productInStockValue.value),
    id: newId(),
  }
  console.log(product)
  currentCartItems.unshift(product) // push()
  // массив обновился,
  //вызываю функцию чтобы обновить ui
  console.log(currentCartItems)
  createNewArray(currentCartItems)

  productNameValue.value = ''
  productPriceValue.value = ''
  productInStockValue.value = ''
})
