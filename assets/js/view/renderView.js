function renderProducts(products) {
  const container = document.getElementById("product-list");
  container.innerHTML = "";

  products.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";

    div.innerHTML = `
      <h2>${product.name}</h2>
      <p>${product.price}</p>
      <a href="${product.link}" target="_blank">Comprar</a>
    `;

    container.appendChild(div);
  });
}
