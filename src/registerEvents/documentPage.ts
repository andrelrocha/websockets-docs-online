import { delayedReturnName } from "../UseCases/document/DebounceSaveText"
import { deleteDocument } from "../UseCases/document/DeleteDocument"
import { findDocument, updateTextEditor } from "../UseCases/document/DocumentsDbGeneral"
import { addConnection, getUsersDocument } from "../UseCases/utils/documentConnections"

function registerEventsDocument(socket, io) {
    socket.on("selectDocument", async ({ documentName, userName }, returnName ) => {
        const document = await findDocument(documentName)

        if (document) {
            socket.join(documentName);

            addConnection({ documentName, userName });

            const usersOnDocument = getUsersDocument(documentName);

            io.to(documentName).emit("usersOnDocument", usersOnDocument);

            delayedReturnName(document.text, returnName);
        }

        socket.on("textEditor", async ({ text, documentName }) => {    
            const update = await updateTextEditor(documentName, text)
    
            if (update.modifiedCount > 0) {
                socket.to(documentName).emit("textEditorClients", text)
            }
        })
    
        socket.on("deleteDocument", async ( documentName ) => {
            const result = await deleteDocument(documentName)
    
            if (result) {
                io.emit("deleteDocumentClientsInterface", documentName)
            }
        })

        socket.on("disconnect", () => {
            
        })
    })
}

export { registerEventsDocument }