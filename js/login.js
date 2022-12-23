document.getElementById('login-form').addEventListener('submit', e => {
    e.preventDefault();

    // Extract username and password from form fields
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const body = `username=${username}&password=${password}&submit=Login`;

    // Send POST request to /token/ endpoint
    fetch('http://52.192.85.84/token/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: body,
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.access_token) {
                sessionStorage.setItem('token', data.access_token);
                console.log('Token stored in session storage');
                console.log(data.access_token);
            }
        })
        .catch((error) => console.error(error));

    // Send POST request to /user/me endpoint
    fetch('http://52.192.85.84/user/me', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${sessionStorage.token}`,
        },
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.success) {
                // Set cookie and redirect to profile page
                document.cookie = 'session=active';
                window.location.assign("main_page.html");
            }
        })
        .catch((error) => console.error(error));
});