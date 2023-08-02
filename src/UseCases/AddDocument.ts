import { Document } from "../db/models/Document"

async function addDocument(documentName: string) {
    try {
        const documentAlreadyExists = await Document.findOne({ name: documentName })

        if (documentAlreadyExists) {
            throw new Error("Document already exists")
        }

        const newDocument = await Document.create({ 
            name: documentName,
        })

        return newDocument
    } catch (err) {
        console.log(err)
        throw new Error("Error while adding document")
    }
}

export { addDocument }