import mongoose from "mongoose";

mongoose.Schema.Types.String.set("validate", {
    validator: (value: string) => {
        return value.trim() !== "";
    },
    message: "The field '{PATH}' cannot be empty!"
});