import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    userName: {
        type: String,
        required: true,
        unique: true 
    },
    password: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    }
});

const User = mongoose.model("User", userSchema);

export { User };