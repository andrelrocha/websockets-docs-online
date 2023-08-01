import { io } from "./server";
import { findDocument, updateTextEditor } from "./UseCases/DocumentsDbGeneral";

function debounce(func, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
    };
  }

io.on("connection", (socket) => {
    console.log(`Usuário conectado no socket ${socket.id}`)

    function handleReturnName(text, returnName) {
        returnName(text);
    }
    const delayedReturnName = debounce((text, returnName) => {
        handleReturnName(text, returnName);
    }, 500);

    socket.on("selectDocument", async ( documentName, returnName ) => {
        socket.join(documentName)

        const document = await findDocument(documentName)

        if (document) {
            delayedReturnName(document.text, returnName);
        }
    })
    socket.on("textEditor", async ({ text, documentName }) => {    
        await updateTextEditor(documentName, text)
        
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