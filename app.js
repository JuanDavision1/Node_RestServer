import { Server } from "./models/server.js";
 
const server = new Server();
 
server.listener();
// Moongose es para la conexion a la base de datos, mongodb