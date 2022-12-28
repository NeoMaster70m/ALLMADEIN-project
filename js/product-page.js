const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('productId');
console.log(productId);
/* const productId = 1; */
// Get the product details from the server or database
fetch(`http://127.0.0.1:8000/products/${productId}`, { method: 'GET' })
  .then(response => response.json())
  .then(data => {
    // Set the text content of the elements
    document.getElementById('product-title').textContent = data.data.product_details.name;
    document.getElementById('product-location').textContent = data.data.product_details.location;
    document.getElementById('product-description').textContent = data.data.product_details.description;
    document.getElementById('product-price').textContent = '$' + data.data.product_details.original_price;
    document.getElementById('seller-name').textContent = data.data.business_details.name;
    document.getElementById('seller-email').textContent = data.data.business_details.email;

    const imgdiv = document.getElementById('product-info');
    const image = imgdiv.querySelector('img');
    // Set the src attribute of the image element
    image.src = data.data.product_details.product_image;
  });