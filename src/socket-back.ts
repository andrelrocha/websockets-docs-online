import { registerEventsCreateUser } from "./registerEvents/createUser";
import { registerEventsDocument } from "./registerEvents/documentPage";
import { registerEventsIndex } from "./registerEvents/indexPage";
import { io } from "./server";

io.on("connection", (socket) => {
    console.log(`Usuário conectado no socket ${socket.id}`)

    registerEventsIndex(socket, io)

    registerEventsDocument(socket, io)    

    registerEventsCreateUser(socket, io)

    socket.on("disconnect", () => {
        console.log(`Usuário desconectado no socket ${socket.id}`)
    })    
})
