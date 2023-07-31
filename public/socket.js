const socket = io();

const textEditor = document.getElementById("text-editor")

textEditor.addEventListener("keyup", () => {
    console.log(textEditor.value)
    socket.emit("textEditor", textEditor.value)
})

socket.on("textEditorClients", (text) => {
    textEditor.value = text
})