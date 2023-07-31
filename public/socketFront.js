import { emitTextEditor, selectDocument } from "./socket.js"

const socket = io()

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


socket.on("connect", () => {
    selectDocument(nameDocument)})

export { setTextEditor }