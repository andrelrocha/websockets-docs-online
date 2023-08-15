const socket = io();

function emitCreateUser(data) {
    socket.emit('createUser', data);
}

socket.on("createUserSucessful", () => {
    alert("Usuário criado com sucesso!");

    document.getElementById('input-user').value = '';
    document.getElementById('input-password').value = '';
})

socket.on("createUserError", () => {
    alert("Erro ao criar usuário!\n");
});

export { emitCreateUser }