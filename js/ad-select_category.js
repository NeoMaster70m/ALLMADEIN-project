const subcategories = {
    category1: ["Women's Clothing", "Men's Clothing", "Children's Clothing"],
    category2: ["Phones and tablets", "Photo and video cameras", "Сomputers", "TV, audio systems"],
    category3: ["Refrigerators", "Stoves and ovens", "Washing machines", "Climatic equipment", "Other appliances"],
    category4: ["Apartment for sale", "Houses for sale", "Apartment rent", "Houses rent"],
    category5: ["Cars", "Motorcycles", "Buses and Trucks", "Special machinery", "Trailers", "Spare parts and wheels", "Accessories and equipment", "Car care products"],
    category6: ["Beds and mattresses", "Tables and Chairs", "Sofas and armchairs", "Kitchen sets", "Storing"],
    category7: ["Services", "Sports and recreation", "Books and hobbies", "Pets", "Job", "Other ungrouped"],
};
const categoriesDropdown = document.getElementById("categories");

categoriesDropdown.addEventListener("change", function() {
    // Get the value of the selected option
    const category = this.value;

    // Get the subcategories dropdown
    const subcategoriesDropdown = document.getElementById("subcategories");

    // Clear any existing options in the subcategories dropdown
    subcategoriesDropdown.innerHTML = "";

    // Get the array of subcategories for the selected category
    const options = subcategories[category];

    // Add a new option element for each subcategory
    options.forEach(function(option) {
        const newOption = document.createElement("option");
        newOption.value = option;
        newOption.text = option;
        subcategoriesDropdown.add(newOption);
    });
});

const select = document.getElementById('categories');
const subselect = document.getElementById('subcategories');

select.addEventListener('change', () => {
    const mainCategoryToSend = select.options[select.selectedIndex].text
    console.log(mainCategoryToSend);
}); 

subselect.addEventListener('change', () => {
    const subCategoryToSend = subselect.options[subselect.selectedIndex].text
    console.log(subCategoryToSend);
}); 

const form = document.getElementById('product-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('title').value;
  const category = mainCategoryToSend
  const originalPrice = document.getElementById('price').value;
  const newPrice = document.getElementById('price').value;
  const offerExpirationDate = document.getElementById('offer-expiration-date').value;
  const file = document.getElementById('file').files[0];

  const data = {
    name: name,
    category: category,
    original_price: originalPrice,
    new_price: newPrice,
    offer_expiration_date: offerExpirationDate
  };

  const formData = new FormData();
  formData.append('product', JSON.stringify(data));
  formData.append('file', file);

  fetch('http://127.0.0.1:8000/uploadfile/product/id', {
    method: 'POST',
    body: formData
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
  console.error(error);
});
});
