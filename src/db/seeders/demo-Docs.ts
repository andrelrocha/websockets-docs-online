import { Document } from "../models";

const docs = [
    {
      name: "JavaScript",
      text: "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma.",
    },
    {
      name: "Node",
      text: "Node.js é um interpretador de código JavaScript com o código aberto, focado em migrar o Javascript do lado do cliente para servidores.",
    },
    {
      name: "Socket.io",
      text: "Socket.IO é uma biblioteca JavaScript para aplicativos da web em tempo real. Permite a comunicação bidirecional em tempo real entre clientes e servidores da Web.",
    },
  ];

async function populateCollection() {
    try {
        await Document.insertMany(docs);
        console.log("Collection 'Document' populated successfully");
    } catch (error) {
        console.log(error);
    }
} 

export { populateCollection }