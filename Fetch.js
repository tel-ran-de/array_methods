// data.map() проходимся по всему массиву
// нам создать элемент
// применить к нему стиль
// засунуть в него данные
// и прикрепить append() в наш контейнер productList
// подключить скрипт в html

const productList = document.querySelector('.product-list') // innerHTML

fetch('https://fakestoreapi.com/products') // массив
  .then((res) => res.json())
  .then(
    (data) =>
      (productList.innerHTML = data.map(
        (el) => `
      <div class="item_cart" data-id=${el.id}>
      <img src='${el.image}'/>
      <h1>${el.title}</h1>
      <p>Description:   ${el.description}</p>
      <span>price: ${el.price}</span>
      </div> `
      ))
  )

const productContainer = document.querySelector('.product-list')

fetch('https://fakestoreapi.com/products')
  .then((res) => res.json())
  .then((data) => {
    data.forEach((product) => {
      const productItem = document.createElement('div')

      productItem.innerHTML = `
      <div class="item_cart" data-id=${product.id}>
      <img src='${product.image}'/>
      <h1>${product.title}</h1>
      <p>Description:   ${product.description}</p>
      <span>price: ${product.price}</span>      
      </div> `

      productContainer.appendChild(productItem)
    })
  })
  .catch((error) => {
    console.error('Произошла ошибка:', error)
  })

// response.status === 200 ||  - свойства
// status 200- 201 202 300 - 400 -  500
// status.ok || 200 - 299
// headers - проверить что в заголовке приходит

// text json blob - форматируется в двоичный код
// formData()
