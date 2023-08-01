import { Document } from "../db/models/Document"

async function findDocument(documentName: string) {
    const documents = await Document.findOne({ name: documentName })
    return documents
}

export { findDocument }