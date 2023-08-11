import { Document } from "../../db/models/Document"

async function addDocument(documentName: string) {
    try {
        const documentAlreadyExists = await Document.findOne({ name: documentName })

        if (documentAlreadyExists) {
            throw new Error("Document already exists")
        }

        const name = documentName.charAt(0).toUpperCase() + documentName.slice(1)

        const newDocument = await Document.create({ 
            name,
        })

        return newDocument
    } catch (err) {
        console.log(err)
        throw new Error("Error while adding document")
    }
}

export { addDocument }