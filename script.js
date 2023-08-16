import { newId } from './utils.js'
import { cartItems } from './products.js'

let currentCartItems = cartItems.map((el) => ({ ...el, id: newId() })) // Create a separate array to store cart items

const productContainer = document.getElementById('productsContainer')
const buttonAscend = document.getElementById('ascButton')
const buttonDescend = document.getElementById('descButton')
const totalAmountContainer = document.getElementById('totalAmount')
const totalPriceContainer = document.getElementById('totalPrice')

let deleteButtons

const createNewArray = (arr) => {
  const newArr = arr

    .map(
      (product) => `
    <div class="productCard" data-id="${product.id}">
      <h2>${product.name}</h2>
      <p> price: ${product.price}</p>
      <p> amount: ${product.quantity}</p>
      <button class="deleteButton" data-id="${product.id}">Delete</button>
      <button class="basketButton" data-id="${product.id}">To cart</button>
    </div>`
    )
    .join('')

  productContainer.innerHTML = newArr
  deleteButtons = document.querySelectorAll('.deleteButton')
  attachDeleteButtonListeners()
}

createNewArray(currentCartItems)

function attachDeleteButtonListeners() {
  deleteButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const productId = event.target.getAttribute('data-id')
      currentCartItems = currentCartItems.filter((el) => el.id !== productId)
      createNewArray(currentCartItems)
    })
  })
}

buttonAscend.addEventListener('click', () => {
  currentCartItems = [...currentCartItems].sort((a, b) => a.price - b.price)
  createNewArray(currentCartItems)
})

buttonDescend.addEventListener('click', () => {
  currentCartItems = [...currentCartItems].sort((a, b) => b.price - a.price)
  createNewArray(currentCartItems)
})

const totalAmount = currentCartItems.reduce((acc, obj) => acc + obj.quantity, 0)
totalAmountContainer.innerText = totalAmount
const totalPrice = currentCartItems.reduce((acc, obj) => acc + obj.price * obj.quantity, 0)
totalPriceContainer.innerText = totalPrice

// Сделать форму
// Сделать добавление в корзину
