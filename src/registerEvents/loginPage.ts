import { authenticateUser } from "../UseCases/user/AuthenticateUser";
import { generateJwt } from "../utils/generateJwt";

function registerEventsLogin(socket, io) {
    socket.on('authenticateUser', async (data) => {
        const authenticated = await authenticateUser(data)

        if (authenticated) {
            const { userName } = data;
            const userNameObj = { userName };
            const tokenJwt = generateJwt(userNameObj);

            socket.emit('authenticateUserSuccess', tokenJwt)
        } else {
            socket.emit('authenticateUserError')
        }
    })
}

export { registerEventsLogin }