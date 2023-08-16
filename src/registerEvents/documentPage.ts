import { delayedReturnName } from "../UseCases/document/DebounceSaveText"
import { deleteDocument } from "../UseCases/document/DeleteDocument"
import { findDocument, updateTextEditor } from "../UseCases/document/DocumentsDbGeneral"

function registerEventsDocument(socket, io) {
    socket.on("deleteDocument", async ( documentName ) => {
        const result = await deleteDocument(documentName)

        if (result) {
            io.emit("deleteDocumentClientsInterface", documentName)
        }
    })

    socket.on("selectDocument", async ({ documentName, userName }, returnName ) => {
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
}

export { registerEventsDocument }