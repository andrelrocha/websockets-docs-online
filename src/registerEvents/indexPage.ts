import { addDocument } from "../UseCases/document/AddDocument"
import { getAllDocumentsName } from "../UseCases/document/GetAllDocumentsName"

function registerEventsIndex(socket, io) {
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
}

export { registerEventsIndex }