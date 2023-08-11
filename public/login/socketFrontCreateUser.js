const socket = io();

function emitCreateUser(data) {
    socket.emit('createUser', data);
}

export { emitCreateUser }