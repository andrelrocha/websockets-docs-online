import { insertLinkDocument } from "./index.js"

const socket = io();

//evento padrãdo socket.io
socket.on("connect_error", (err) => {
    alert(err);
    window.location.href = "/login/index.html";
});

socket.on("addDocumentClientsInterface", (documentName) => {
    insertLinkDocument(documentName);
});

socket.emit("getDocuments", (documents) => {
    documents.forEach((document) => {
        insertLinkDocument(document.name);
    })
});

function emitAddDocument(documentName) {
    socket.emit("addDocument", documentName);
}

export { emitAddDocument }