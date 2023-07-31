import http from 'http'
import { Server } from 'socket.io';

import { app } from "./app";

const serverHttp = http.createServer(app)

const port = process.env.port || 3000

serverHttp.listen(port, () => { console.log(`Server is listening on port ${port}`) })

const io = new Server(serverHttp)

export { io }