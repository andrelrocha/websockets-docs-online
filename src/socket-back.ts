import { registerEventsCreateUser } from "./registerEvents/createUser";
import { registerEventsDocument } from "./registerEvents/documentPage";
import { registerEventsIndex } from "./registerEvents/indexPage";
import { registerEventsLogin } from "./registerEvents/loginPage";
import { io } from "./server";

import dotenv from "dotenv";
dotenv.config();

io.on("connection", (socket) => {
    console.log(`Usuário conectado no socket ${socket.id}`)

    registerEventsIndex(socket, io)

    registerEventsDocument(socket, io)    

    registerEventsCreateUser(socket, io)

    registerEventsLogin(socket, io)

    socket.on("disconnect", () => {
        console.log(`Usuário desconectado no socket ${socket.id}`)
    })    
})
