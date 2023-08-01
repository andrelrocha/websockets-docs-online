import { insertLinkDocument } from "./index.js"

const socket = io();

socket.emit("getDocuments", (documents) => {
    documents.forEach((document) => {
        insertLinkDocument(document.name);
    })
});