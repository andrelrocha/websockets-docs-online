import { emitDeleteDocument, emitTextEditor, selectDocument } from "./document.js"

const params = new URLSearchParams(window.location.search)
const nameDocument = params.get("nome")

const titleDocument = document.getElementById("document-title")
const textEditor = document.getElementById("text-editor")
const deleteDocument = document.getElementById("delete-document")

titleDocument.textContent = nameDocument

document.addEventListener("DOMContentLoaded", () => {
    selectDocument(nameDocument);
});

textEditor.addEventListener("keyup", () => {
    emitTextEditor({
        text: textEditor.value, 
        documentName: nameDocument
    })
    selectDocument(nameDocument)
})

deleteDocument.addEventListener("click", () => {
    emitDeleteDocument(nameDocument)
})

function setTextEditor(text) {
    textEditor.value = text
}


export { setTextEditor }