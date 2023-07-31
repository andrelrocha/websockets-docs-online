import { emitTextEditor } from "./socket.js"

const textEditor = document.getElementById("text-editor")

textEditor.addEventListener("keyup", () => {
    emitTextEditor(textEditor.value)
})

function setTextEditor(text) {
    textEditor.value = text
}

export { setTextEditor }