const form = document.getElementById('filter-form');
const minPriceInput = document.getElementById('min-price');
const maxPriceInput = document.getElementById('max-price');
const sortRadio = document.getElementsByName('sort');

minPriceInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    applyFilters();
  }
});

maxPriceInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    applyFilters();
  }
});

for (let i = 0; i < sortRadio.length; i++) {
  sortRadio[i].addEventListener('change', applyFilters);
}

function applyFilters() {
  // Get the current values of the form elements
  const minPrice = minPriceInput.value;
  const maxPrice = maxPriceInput.value;
  let sort;
  for (let i = 0; i < sortRadio.length; i++) {
    if (sortRadio[i].checked) {
      sort = sortRadio[i].value;
      break;
    }
  }

  // Make an HTTP request to the server to get the product data
  fetch('/products')
    .then((response) => response.json())
    .then((products) => {
      // Filter and sort the product cards using the form values
      const filteredAndSortedProducts = filterAndSortCards(products, minPrice, maxPrice, sort);

      // Update the DOM with the filtered and sorted product cards
      updateProductCards(filteredAndSortedProducts);
    })
    .catch((error) => {
      console.error(error);
    });
}

function filterAndSortCards(products, minPrice, maxPrice, sort) {
  // Filter the products by price range
  let filteredProducts = products.filter((product) => {
    return product.price >= minPrice && product.price <= maxPrice;
  });

  // Sort the products by price
  if (sort === 'ascending') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === 'descending') {
    filteredProducts.sort((a, b) => b.price - a.price);
  }

  return filteredProducts;
}

function updateProductCards(products) {
  // Clear the current product cards from the DOM
  const productCardsContainer = document.getElementById('product-cards-container');
  productCardsContainer.innerHTML = '';

  // Create new DOM elements for the filtered and sorted product cards
  products.forEach((product) => {
    const productCard = document.createElement('div');
    productCard.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: ${product.price}</p>
    `;
    productCardsContainer.appendChild(productCard);
  });
}