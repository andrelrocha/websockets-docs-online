import { Document } from "../../db/models/Document"

async function deleteDocument(documentName: string) {
    try {
        const document = await Document.findOne({ name: documentName })

        if (!document) {
            throw new Error("Document not found")
        }
        
        document.deleteOne() 

        return true
    } catch (err) {
        console.log(err)
        throw new Error("Error while deleting document")
    }
}

export { deleteDocument }