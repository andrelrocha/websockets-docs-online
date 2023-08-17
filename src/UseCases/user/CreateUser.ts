import { User } from "../../db/models/User";
import { createHashSaltPassword } from "../../utils/createHashSaltPassword";


interface IRequestCadastro {
    userName: string;
    password: string;
}

async function createUser({ userName, password }: IRequestCadastro) {
    try {
        if (!userName || !password) {
            throw new Error("Missing required fields");
        }

        const user = await User.findOne({ userName});
        
        if (user) {
            throw new Error("User already exists");
        }

        const { hashedPassword, salt } = createHashSaltPassword(password);

        await User.create({ 
            userName, 
            password: hashedPassword,
            salt
        });
        
        console.log("User created successfully");
        return true;
    } catch (error) {
        console.error("Error creating user:", error);
        return false
    }
}

export { createUser };