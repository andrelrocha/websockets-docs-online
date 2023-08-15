import { insertLinkDocument } from "./index.js"
import { getCookie } from "./utils/cookies.js";

const socket = io("/users", {
    auth: {
        token: getCookie("tokenJwt")
    }
});

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