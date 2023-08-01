import mongoose from "mongoose";

const documentSchema = new mongoose.Schema({
    name: String,
    text: {
        type: String,
        default: "",
        required: true
    },
})

const Document = mongoose.model("Document", documentSchema);

export { Document };