// assets/js/view/renderView.js

const productList = document.getElementById('product-list');

function renderProducts(products) {
  productList.innerHTML = ''; // limpa antes de renderizar

  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="product-image">
      <h3>${product.name}</h3>
      <p>${product.price}</p>
      <a href="${product.link}" target="_blank">Comprar</a>
    `;

    productList.appendChild(productCard);
  });
}

// renderiza os produtos assim que a página carrega
renderProducts(products);
