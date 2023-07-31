import { emitTextEditor } from "./socket.js"

const params = new URLSearchParams(window.location.search)
const nameDocument = params.get("nome")

const titleDocument = document.getElementById("document-title")
const textEditor = document.getElementById("text-editor")

titleDocument.textContent = nameDocument

textEditor.addEventListener("keyup", () => {
    emitTextEditor(textEditor.value)
})

function setTextEditor(text) {
    textEditor.value = text
}

export { setTextEditor }