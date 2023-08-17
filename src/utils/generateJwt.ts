import jwt from 'jsonwebtoken';

function generateJwt(payload: object) {    
    const tokenJwt = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: '3 days'
    });

    return tokenJwt;
}

export { generateJwt }