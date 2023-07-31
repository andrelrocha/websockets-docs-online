import { io } from "./server";

const docs = [
    {
        name: "JavaScript",
        text: "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma."    
    },
    {
        name: "Node",  
        text: "Node.js é um interpretador de código JavaScript com o código aberto, focado em migrar o Javascript do lado do cliente para servidores."
    },
    {
        name: "Socket.io",
        text: "Socket.IO é uma biblioteca JavaScript para aplicativos da web em tempo real. Permite a comunicação bidirecional em tempo real entre clientes e servidores da Web."
    }
]

function findDocument(documentName: string) {
    const documents = docs.find(doc => doc.name === documentName)
    return documents
}

io.on("connection", (socket) => {
    console.log(`Usuário conectado no socket ${socket.id}`)

    socket.on("selectDocument", ( documentName, returnName ) => {
        socket.join(documentName)

        const document = findDocument(documentName)

        if (document) {
            //socket.emit("textEditorServer", document.text)
            returnName(document.text)
        }
    })

    socket.on("textEditor", ({ text, documentName }) => {
        socket.to(documentName).emit("textEditorClients", text)
        
        //manda para todos os clientes conectados no socket
        //socket.broadcast.emit("textEditorClients", text)

        //manda para todos os clientes conectados na sala
        //io.to(documentName).emit("textEditorClients", text)
    })

    socket.on("disconnect", () => {
        console.log(`Usuário desconectado no socket ${socket.id}`)
    })
})