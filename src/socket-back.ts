import { io } from "./server";
import { Document } from "./db/models/Document";

async function findDocument(documentName: string) {
    const documents = await Document.findOne({ name: documentName })
    return documents
}

io.on("connection", (socket) => {
    console.log(`Usuário conectado no socket ${socket.id}`)

    socket.on("selectDocument", async ( documentName, returnName ) => {
        socket.join(documentName)

        const document = await findDocument(documentName)


        console.log(document)

        /*
        if (document) {
            //socket.emit("textEditorServer", document.text)
            returnName(document.text)
        }
        */
    })
    socket.on("textEditor", ({ text, documentName }) => {
        const document = findDocument(documentName)
        /*
        if (document) {
            document.text = text
            socket.to(documentName).emit("textEditorClients", text)
        }
        */

        //manda para todos os clientes conectados no socket
        //socket.broadcast.emit("textEditorClients", text)
        //manda para todos os clientes conectados na sala
        //io.to(documentName).emit("textEditorClients", text)
    })

    socket.on("disconnect", () => {
        console.log(`Usuário desconectado no socket ${socket.id}`)
    })
})