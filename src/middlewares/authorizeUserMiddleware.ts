import jwt from 'jsonwebtoken';

function authorizeUser (socket, next) {
    const tokenJwt = socket.handshake.auth.token;

    try {
        const payloadToken = jwt.verify(tokenJwt, process.env.JWT_SECRET);

        socket.emit("user-authorized", payloadToken);

        next();
    } catch (err) {
        next(err);
    }
}

export { authorizeUser }