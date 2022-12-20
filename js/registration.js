async function handleFormSubmit(event) {
    event.preventDefault()

    const form = document.querySelector('#registerForm');
    const usernameInput = form.querySelector('#username');
    const emailInput = form.querySelector('#email');
    const passwordInput = form.querySelector('#password');

    const data = {
        username: usernameInput.value,
        email: emailInput.value,
        password: passwordInput.value
    };

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    console.log(data)

    fetch('http://52.192.85.84/registration', options)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
}
const applicantForm = document.getElementById('registerForm')
applicantForm.addEventListener('submit', handleFormSubmit)
