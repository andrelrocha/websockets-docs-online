import { emitDeleteDocument, emitTextEditor, selectDocument } from "./document.js"

const params = new URLSearchParams(window.location.search)
const documentName = params.get("nome")

const titleDocument = document.getElementById("document-title")
const textEditor = document.getElementById("text-editor")
const deleteDocument = document.getElementById("delete-document")
const listConnectedUsers = document.getElementById("connected-users")

titleDocument.textContent = documentName

function handleAuthorizationSuccess(payloadToken) {
    selectDocument({
        documentName,
        userName: payloadToken.userName
    })
}

function updateInterfaceUsersOnDocument(usersOnDocument) {
    listConnectedUsers.innerHTML = ""
    usersOnDocument.forEach(user => {
        listConnectedUsers.innerHTML += `
            <li class="list-group-item">${user}</li>
        `
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


export { handleAuthorizationSuccess, updateInterfaceUsersOnDocument, setTextEditor }