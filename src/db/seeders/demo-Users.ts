import { User } from "../models/User";
const users = [
    {
        userName: "indiana",
        password: "secure123"
    },
    {
        userName: "papoco",
        password: "pass1234"
    },
    {
        userName: "andre",
        password: "strongpass"
    },
    {
        userName: "lucio",
        password: "password2023"
    },
    {
        userName: "andre lucio",
        password: "mypassword"
    }
];

async function populateUserCollection() {
    try {
        await User.insertMany(users);
        console.log("Collection 'User' populated successfully");
    } catch (error) {
        console.error("Error populating collection 'User':", error);
    }
}

export { populateUserCollection };