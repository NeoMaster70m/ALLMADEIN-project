// const xhr = new XMLHttpRequest();
// xhr.open("POST", "");
// xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
// // const username = document.getElementById('username');
// // const email = document.getElementById('email');
// // const password = document.getElementById('password')
// // let username_value = username.value;
// // let email_value = email.value;
// // let password_value = password.value;
// //
//
// const formElement = document.getElementById('registrationForm'); // извлекаем элемент формы
// formElement.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const formData = new FormData(formElement); // создаём объект FormData, передаём в него элемент формы
//     // теперь можно извлечь данные
//     const username = formData.get('username');
//     const email = formData.get('email');
//     const password = formData.get('password')
// });
// let body_string =
//     '"username": "${username_value}",\n' +
//     '"email": "${email_value}",\n' +
//     '"password": "${password_value}"'
// const body = JSON.stringify({
//
// });
// xhr.onload = () => {
//     if (xhr.readyState === 4 && xhr.status === 201) {
//         console.log(JSON.parse(xhr.responseText));
//     } else {
//         console.log(`Error: ${xhr.status}`);
//     }
// };
// console.log(body_string);
function handleFormSubmit(event) {
    // Просим форму не отправлять данные самостоятельно
    event.preventDefault()
    console.log('Отправка!')
}
const applicantForm = document.getElementById('registrationForm')
applicantForm.addEventListener('submit', handleFormSubmit)