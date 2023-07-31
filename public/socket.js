const socket = io();

function selectDocument(name) {
    socket.emit("selectDocument", name)
    console.log("está vindo daqui o nome do documento: " + name)
}

function emitTextEditor(text, documentName) {
    socket.emit("textEditor", text, documentName)
}

socket.on("textEditorClients", (text) => {
    textEditor.value = text
})

export { emitTextEditor, selectDocument }