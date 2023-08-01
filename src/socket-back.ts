import { io } from "./server";
import { findDocument } from "./UseCases/FindDocument";

io.on("connection", (socket) => {
    console.log(`Usuário conectado no socket ${socket.id}`)

    socket.on("selectDocument", async ( documentName, returnName ) => {
        socket.join(documentName)

        const document = await findDocument(documentName)

        if (document) {
            returnName(document.text)
        }
    })
    socket.on("textEditor", async ({ text, documentName }) => {
        const document = await findDocument(documentName)
        
        if (document) {
            document.text = text
            socket.to(documentName).emit("textEditorClients", text)
        }

        //manda para todos os clientes conectados no socket
        //socket.broadcast.emit("textEditorClients", text)
        //manda para todos os clientes conectados na sala
        //io.to(documentName).emit("textEditorClients", text)
    })

    socket.on("disconnect", () => {
        console.log(`Usuário desconectado no socket ${socket.id}`)
    })
})