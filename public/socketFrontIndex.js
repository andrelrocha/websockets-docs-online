import { insertLinkDocument } from "./index.js"
import { getCookie } from "./utils/cookies.js";

const socket = io("/users", {
    auth: {
        token: getCookie("tokenJwt")
    }
});

socket.on("connect_error", (err) => {
    alert("Non authorized");
    window.location.href = "/login/index.html";
});

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