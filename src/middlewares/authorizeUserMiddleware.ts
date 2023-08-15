import jwt from 'jsonwebtoken';

function authorizeUser (socket, next) {
    const tokenJwt = socket.handshake.auth.token;

    try {
        jwt.verify(tokenJwt, process.env.JWT_SECRET);

        next();
    } catch (err) {
        next(err);
    }
}

export { authorizeUser }