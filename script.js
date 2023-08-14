import { newId } from './utils.js'
import { cartItems } from './products.js'

const productContainer = document.getElementById('productsContainer')

// добавляем id
const cartItemsWithIndex = cartItems.map((product, index) => ({
  ...product,
  id: newId(),
}))

// создаем html элементы(компоненты)
const arrayOfProducts = cartItemsWithIndex
  .map(
    (product) => `
    <div class="productCard">
<h2>${product.name}</h2
<p> price: ${product.price}</p>
<p> amount: ${product.quantity}</p>
    </div>`
  )
  .join('')

// добавляем в наш файл
productContainer.innerHTML = arrayOfProducts

// ДОМАШНЕЕ ЗАДАНИЕ
// создать две кнопки
// одна сортирует по увеличению
// другая по уменьшению
// выводить общее количество товаров
// через функцию reduce выводить общую сумму товаров(price)
// в карточке добаить кпопку в корзину
