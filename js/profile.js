// Make an HTTP request to the server to retrieve the JSON file
fetch('http://127.0.0.1:8000/user/me', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${sessionStorage.token}`,
        },
    })
    .then((response) => response.json())
    .then((data) => {
            if (data) {
                console.log(data)
                document.getElementById("profile-photo").src = data.data.logo;
                button.innerHTML = "Replace";
                // console.log(data)
                // Set cookie and redirect to profile page
                const username = data.data.username;
                const email = data.data.email;
                const id = data.data.id
                //     const verified = data.data.verified;
                const joinDate = data.data.join_date;
                const logo = data.data.logo;

                // Display the data on the HTML page
                document.getElementById('username').innerHTML = username;
                document.getElementById('email').innerHTML = email;
                fetch(`http://127.0.0.1:8000/user/products/${id}`, {
                        method: 'GET'
                    })
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
                                        })}
                                    //     document.getElementById('verified').innerHTML = verified;
                                    //     document.getElementById('join-date').innerHTML = joinDate;
                                    //     document.getElementById('logo').src = logo;
                                })
                            }})
                        .catch((error) => console.error(error));