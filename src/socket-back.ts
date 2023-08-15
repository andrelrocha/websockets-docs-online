import { authorizeUser } from "./middlewares/authorizeUserMiddleware";
import { registerEventsCreateUser } from "./registerEvents/createUser";
import { registerEventsDocument } from "./registerEvents/documentPage";
import { registerEventsIndex } from "./registerEvents/indexPage";
import { registerEventsLogin } from "./registerEvents/loginPage";
import { io } from "./server";

import dotenv from "dotenv";
dotenv.config();

const nspUsers = io.of("/users");

//middleare de autenticação
nspUsers.use(authorizeUser);

nspUsers.on("connection", (socket) => {   
    registerEventsIndex(socket, nspUsers)
    registerEventsDocument(socket, nspUsers)    
})

io.of("/").on("connection", (socket) => {
    registerEventsCreateUser(socket, io)
    registerEventsLogin(socket, io)
})
