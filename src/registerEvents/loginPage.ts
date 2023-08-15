import { authenticateUser } from "../UseCases/user/AuthenticateUser";

function registerEventsLogin(socket, io) {
    socket.on('authenticateUser', async (data) => {
        const authenticated = await authenticateUser(data)

        if (authenticated) {
            socket.emit('authenticateUserSuccess')
        } else {
            socket.emit('authenticateUserError')
        }
    })
}

export { registerEventsLogin }