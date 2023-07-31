import { setTextEditor } from "./socketFront.js";

const socket = io();

function emitTextEditor(text) {
    socket.emit("textEditor", text)
}

socket.on("textEditorClients", (text) => {
    setTextEditor(text)
})

export { emitTextEditor }