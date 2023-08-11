import { User } from "../../db/models/User";


interface IRequestLogin {
    userName: string;
    password: string;
}

async function createUser({ userName, password }: IRequestLogin) {
    try {
        if (!userName || !password) {
            throw new Error("Missing required fields");
        }

        const user = await User.findOne({ userName});
        
        if (user) {
            throw new Error("User already exists");
        }

        await User.create({ 
            userName, 
            password
        });
        
        console.log("User created successfully");
        return true;
    } catch (error) {
        console.error("Error creating user:", error);
        return false
    }
}

export { createUser };