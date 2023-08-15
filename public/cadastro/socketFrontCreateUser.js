const socket = io();

function emitCreateUser(data) {
    socket.emit('createUser', data);
}

socket.on("createUserSucessful", () => {
    alert("Usuário criado com sucesso!");
})

socket.on("createUserError", () => {
    alert("Erro ao criar usuário!\n");
});

export { emitCreateUser }