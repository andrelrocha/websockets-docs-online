import { User } from "../../db/models/User";

import { scryptSync, timingSafeEqual } from "crypto";

interface IRequestLogin {
    userName: string;
    password: string;
}

async function authenticateUser({ userName, password }: IRequestLogin) {
    try {
        if(!userName || !password) throw new Error('You must complete all fields for valid credentials');

        const user = await User.findOne({ userName });

        if (!user) throw new Error('Invalid credentials. No user found with the provided username');

        const testHash = scryptSync(password, user.salt, 64);
        const realHash = Buffer.from(user.password, "hex");

        //importante usar essa comparação de buffer para invasores não descobrirem informações sensíveis
        const userAuthenticated = timingSafeEqual(testHash, realHash);

        return userAuthenticated;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export { authenticateUser }