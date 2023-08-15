import { defineCookie } from "../utils/cookies.js";

const socket = io();

function emitAuthenticateUser(data) {
    socket.emit('authenticateUser', data);
}

socket.on('authenticateUserSuccess', (tokenJwt) => {
    defineCookie('tokenJwt', tokenJwt);

    alert('Login realizado com sucesso!');
    window.location.href = '/';
});

socket.on('authenticateUserError', () => {
    alert('Login ou senha incorretos!');
    document.getElementById('input-password').value = '';
});

export { emitAuthenticateUser }