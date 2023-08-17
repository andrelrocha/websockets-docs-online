import { emitDeleteDocument, emitTextEditor, selectDocument } from "./document.js"

const params = new URLSearchParams(window.location.search)
const documentName = params.get("nome")

const titleDocument = document.getElementById("document-title")
const textEditor = document.getElementById("text-editor")
const deleteDocument = document.getElementById("delete-document")

titleDocument.textContent = documentName

function handleAuthorizationSuccess(payloadToken) {
    selectDocument({
        documentName,
        userName: payloadToken.userName
    })
}

textEditor.addEventListener("keyup", () => {
    emitTextEditor({
        text: textEditor.value, 
        documentName
    })
})

deleteDocument.addEventListener("click", () => {
    emitDeleteDocument(documentName)
})

function setTextEditor(text) {
    textEditor.value = text
}


export { handleAuthorizationSuccess, setTextEditor }