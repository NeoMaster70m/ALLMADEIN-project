const url = `http://127.0.0.1:8000/products/all`;
fetch(url, { method: 'GET' })
.then(response => response.json())
.then(data => {
console.log(data)
const container = document.getElementById('card-container');
container.innerHTML = '';

// Check if data.data is an array before iterating over it
if (Array.isArray(data.data)) {
data.data.forEach(product => {
    const name = product.name;
    const newPrice = product.new_price;
    const productImage = product.product_image;

    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    const productPicture = document.createElement('div');
    productPicture.classList.add('product-picture');

    const imageElement = document.createElement('img');
    imageElement.src = productImage;
    productPicture.appendChild(imageElement);

    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');

    const priceElement = document.createElement('h6');
    priceElement.classList.add('price');
    priceElement.textContent = newPrice;
    productInfo.appendChild(priceElement);

    const nameElement = document.createElement('p');
    nameElement.classList.add('title');
    nameElement.textContent = name;
    productInfo.appendChild(nameElement);

    productCard.appendChild(productPicture);
    productCard.appendChild(productInfo);
    container.appendChild(productCard);
});
}
});