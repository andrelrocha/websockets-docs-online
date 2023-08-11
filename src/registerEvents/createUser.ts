import { createUser } from "../UseCases/user/CreateUser";

function registerEventsCreateUser(socket, io) {
    socket.on('createUser', async (data) => {
        const result = await createUser(data);
    });
}

export { registerEventsCreateUser };