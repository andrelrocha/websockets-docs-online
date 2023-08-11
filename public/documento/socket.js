import { setTextEditor } from "./socketFrontDocument.js";

const socket = io();

socket.on("textEditorClients", (text) => {
    setTextEditor(text)
})

socket.on("deleteDocumentClientsInterface", (name) => {
    window.location.href = "/index.html";
})

function selectDocument(name) {
    socket.emit("selectDocument", name, (text) => {
        setTextEditor(text)
    })
}

function emitTextEditor(data) {
    socket.emit("textEditor", data)
}

function emitDeleteDocument(name) {
    socket.emit("deleteDocument", name)
}

export { emitTextEditor, selectDocument, emitDeleteDocument }