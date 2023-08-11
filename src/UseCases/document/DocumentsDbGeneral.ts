import { Document } from "../../db/models/Document"

async function findDocument(documentName: string) {
    try {
        const documents = await Document.findOne({ name: documentName })
        return documents
    } catch (error) {
        console.log(error)
        throw new Error("Error while trying to find document")
    }
}

async function updateTextEditor(documentName: string, text: string) {
    try {
        const upp = await Document.updateOne({ name: documentName }, { text: text })
        return upp
    } catch (error) {
        console.log(error)
        throw new Error("Error while trying to update text editor")
    }
}


export { findDocument, updateTextEditor }