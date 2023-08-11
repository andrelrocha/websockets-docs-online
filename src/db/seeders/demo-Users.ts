import { User } from "../models/User";
const users = [
    {
        name: "Alice",
        userName: "alice123",
        password: "password123"
    },
    {
        userName: "bob456",
        password: "securepass"
    },
    {
        name: "Charlie",
        userName: "charlie789",
        password: "myp@ssw0rd"
    },
    {
        userName: "david987",
        password: "strongPassword"
    },
    {
        userName: "emily654",
        password: "12345678"
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