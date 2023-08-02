import { io } from "./server";
import { addDocument } from "./UseCases/AddDocument";
import { delayedReturnName } from "./UseCases/DebounceSaveText";
import { findDocument, updateTextEditor } from "./UseCases/DocumentsDbGeneral";
import { getAllDocumentsName } from "./UseCases/GetAllDocumentsName";

io.on("connection", (socket) => {

    socket.on("getDocuments", async ( returnDocuments ) => {
        const documentsNames = await getAllDocumentsName()
        returnDocuments(documentsNames)
    })

    socket.on("addDocument", async ( documentName ) => {
        const result = await addDocument(documentName)

        if (result) {
            io.emit("addDocumentClientsInterface", documentName)
        }
    })

    socket.on("selectDocument", async ( documentName, returnName ) => {
        socket.join(documentName)

        const document = await findDocument(documentName)

        if (document) {
            delayedReturnName(document.text, returnName);
        }
    })

    socket.on("textEditor", async ({ text, documentName }) => {    
        const update = await updateTextEditor(documentName, text)

        if (update.modifiedCount > 0) {
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