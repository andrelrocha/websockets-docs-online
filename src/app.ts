import express from 'express'
import path from 'path'

import { db } from "./db/dbConnect";

db.on("error", console.log.bind(console, "Database connection error!"));
db.once("open", () => console.log("Database connected!"));

const app = express()
app.use(express.json())

// Obtém o caminho do arquivo atual
const currentPath = path.dirname(__filename)
// Navega até o diretório 'public' a partir do diretório atual
const publicDir = path.join(currentPath, "..", "public");
// Utiliza o diretório 'public' para servir arquivos estáticos
app.use(express.static(publicDir));

export { app }
