import mongoose from "mongoose";

const documentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    text: {
        type: String,
        default: "",
    },
})

const Document = mongoose.model("Document", documentSchema);

export { Document };