import { emitCreateUser } from "./socketFrontCreateUser.js";

const form = document.getElementById('form-login');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const userName = form["input-user"].value;
    const password = form["input-password"].value;
    
    emitCreateUser({ userName, password })
})