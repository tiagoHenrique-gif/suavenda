const productList = document.getElementById('product-list');

function renderProducts(products) {
  productList.innerHTML = '';

  products.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('product-card');

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      
      <h3>${product.name}</h3>
      
      <p class="price">${product.price}</p>
      
      <a href="${product.link}" target="_blank" class="btn-buy">
        🚀 Oferta Limitada
      </a>
    `;

    productList.appendChild(card);
  });
}

renderProducts(products);
