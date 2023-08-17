import { delayedReturnName } from "../UseCases/document/DebounceSaveText"
import { deleteDocument } from "../UseCases/document/DeleteDocument"
import { findDocument, updateTextEditor } from "../UseCases/document/DocumentsDbGeneral"
import { addConnection, findConnection, getUsersDocument, removeConnection } from "../utils/documentConnections"

function registerEventsDocument(socket, io) {
    socket.on("selectDocument", async ({ documentName, userName }, returnName ) => {
        const document = await findDocument(documentName)

        if (document) {
            const connectionFound = findConnection({ documentName, userName });

            if (!connectionFound) {
                socket.join(documentName);

                addConnection({ documentName, userName });

                socket.data = {
                    userOnDocument: true,
                };

                const usersOnDocument = getUsersDocument(documentName);

                io.to(documentName).emit("usersOnDocument", usersOnDocument);

                delayedReturnName(document.text, returnName);
            } else {
                socket.emit("userAlreadyOnDocument", "User already connected to this document");
            }
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
            if (socket.data.userOnDocument) return;
            
            removeConnection({ documentName, userName });

            const usersOnDocument = getUsersDocument(documentName);

            io.to(documentName).emit("usersOnDocument", usersOnDocument);
        })
    })
}

export { registerEventsDocument }