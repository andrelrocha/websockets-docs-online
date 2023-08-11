import { User } from "../models/User"; // Verifique o caminho correto para o modelo User

const users = [
    {
        name: "Alice",
    },
    {
        name: "Bob",
    },
    {
        name: "Charlie",
    },
    {
        name: "Dave",
    },
    {
        name: "Eve",
    },
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