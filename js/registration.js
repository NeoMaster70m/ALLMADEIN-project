let xhr = new XMLHttpRequest();
xhr.open("POST", "https://v3bpy2.deta.dev/docs#/registration");
xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Content-Type", "application/json");

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        console.log(xhr.status);
        console.log(xhr.responseText);
    }};

let data = `{
  "username": "string",
  "email": "string",
  "password": "string"
}`;

xhr.send(data);
