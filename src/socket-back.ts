import { io } from "./server";

io.on("connection", (socket) => {
    console.log(`Usuário conectado no socket ${socket.id}`)

    socket.on("textEditor", ( text ) => {
        socket.broadcast.emit("textEditorClients", text)
    })
})