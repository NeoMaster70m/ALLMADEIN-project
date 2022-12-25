const submenuItems = document.querySelectorAll('.submenu-item');

submenuItems.forEach(item => {
  item.addEventListener('click', event => {
    let subcategory = event.target.textContent;
    // Modify the subcategory to match the format expected by the server
    // subcategory = subcategory.replace("’", "'");
    const url = `http://127.0.0.1:8000/products/subcategory?category=${subcategory}`;
    console.log(url);
    fetch(url, { method: 'GET' })
    .then(response => response.json())
    .then(data => {
    console.log(data)
    const container = document.getElementById('card-container');

    // Check if data.data is an array before iterating over it
    if (Array.isArray(data.data)) {
      data.data.forEach(product => {
        const name = product.name;
        const newPrice = product.new_price;
        const productImage = product.product_image;

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const nameElement = document.createElement('p');
        nameElement.textContent = name;
        productCard.appendChild(nameElement);

        const priceElement = document.createElement('p');
        priceElement.textContent = newPrice;
        productCard.appendChild(priceElement);

        const imageElement = document.createElement('img');
        imageElement.src = productImage;
        productCard.appendChild(imageElement);

        container.appendChild(productCard);
      });
    }
  });
  });
});
