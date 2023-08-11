function registerEventsCreateUser(socket, io) {
    socket.on('createUser', (data) => {
        console.log(data);
        io.emit('createUser', data);
    });
}

export { registerEventsCreateUser };