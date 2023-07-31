import { setTextEditor } from "./socketFront.js";

const socket = io();

function selectDocument(name) {
    socket.emit("selectDocument", name, (text) => {
        setTextEditor(text)
    })
}

function emitTextEditor(data) {
    socket.emit("textEditor", data)
}

socket.on("textEditorClients", (text) => {
    setTextEditor(text)
})

export { emitTextEditor, selectDocument }