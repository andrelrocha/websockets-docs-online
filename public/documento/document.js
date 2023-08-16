import { getCookie } from "../utils/cookies.js";
import { handleAuthorizationSuccess, setTextEditor } from "./socketFrontDocument.js";

const socket = io("/users", {
    auth: {
        token: getCookie("tokenJwt")
    }
});

socket.on("user-authorized", handleAuthorizationSuccess);

socket.on("connect_error", (err) => {
    alert("Non authorized: " + err);
    window.location.href = "/login/index.html";
});

socket.on("textEditorClients", (text) => {
    setTextEditor(text)
})

socket.on("deleteDocumentClientsInterface", (name) => {
    window.location.href = "/index.html";
})

function selectDocument(data) {
    socket.emit("selectDocument", data, (text) => {
        setTextEditor(text)
    })
}

function emitTextEditor(data) {
    socket.emit("textEditor", data)
}

function emitDeleteDocument(name) {
    socket.emit("deleteDocument", name)
}

export { emitTextEditor, selectDocument, emitDeleteDocument }