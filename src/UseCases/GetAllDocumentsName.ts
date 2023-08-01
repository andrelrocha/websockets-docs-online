import { Document } from "../db/models/Document"

async function getAllDocumentsName() {
    try {
        const documents = await Document.find({}, { name: 1, _id: 0 })
        const documentsNames = documents.filter((doc) => doc.name);

        return documentsNames
    } catch (error) {
        console.log(error)
        throw new Error("Error while trying to find document")
    }
}

export { getAllDocumentsName }