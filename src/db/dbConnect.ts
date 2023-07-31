import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI!;

mongoose.connect(MONGODB_URI);

const db = mongoose.connection;

export { db };