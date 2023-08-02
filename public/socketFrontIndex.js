import { insertLinkDocument } from "./index.js"

const socket = io();

socket.emit("getDocuments", (documents) => {
    documents.forEach((document) => {
        insertLinkDocument(document.name);
    })
});

socket.on("addDocumentClientsInterface", (documentName) => {
    insertLinkDocument(documentName);
});

function emitAddDocument(documentName) {
    socket.emit("addDocument", documentName);
}

export { emitAddDocument }