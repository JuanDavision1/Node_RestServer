//Express es para configurar el web server
//dite env para configurar variables de entorno
//cors generar una restriccion para la rest   

import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoutes from '../routes/user.js';
dotenv.config();
export class Server {
 
    constructor(){
        this.app = express();
        this.port= process.env.PORT || 3000;
        this.usuariosRoutePath ='/api/usuarios';
            //midddlewares
            //añaden otra funcionalidad a mi webserver funcion que se ejecuta cuando deslplegemos el servidor
        this.middlewares()
            //Rutas
        this.routes();
    }
 middlewares(){
    this.app.use(cors());
    //midlleware para recibir cuando se hace un post del frontend
    this.app.use(express.json());
    //directorio publico se llama a la carpeta publica para publicarla
    this.app.use(express.static('public'))
 }
 // al hacer el llamado al folder del html en el publico la funcion de rutas no funciona
    routes(){
        this.app.use('/api/usuarios',userRoutes)
    }
 
    listener(){
        this.app.listen(this.port,()=>{
                 console.log('Servidor corriendo en',this.port)
            
     } ) 
    }
}
 
