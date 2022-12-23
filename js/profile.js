// Make an HTTP request to the server to retrieve the JSON file
fetch('http://52.192.85.84/user/me', {
        method: 'POST',
        headers: {
                Authorization: `Bearer ${sessionStorage.token}`,
        },
})
    .then((response) => response.json())
    .then((data) => {
            if (data) {
                    // Set cookie and redirect to profile page
                    const username = data.data.username;
                    const email = data.data.email;
                    const verified = data.data.verified;
                    const joinDate = data.data.join_date;
                    const logo = data.data.logo;

                    // Display the data on the HTML page
                    document.getElementById('username').innerHTML = username;
                    document.getElementById('email').innerHTML = email;
                    document.getElementById('verified').innerHTML = verified;
                    document.getElementById('join-date').innerHTML = joinDate;
                    document.getElementById('logo').src = logo;
            }
    })
    .catch((error) => console.error(error));