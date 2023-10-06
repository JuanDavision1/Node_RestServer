import { query, response } from 'express';
import Usuario from '../models/usuario.js';
import bcryptjs from 'bcryptjs'

export const userGet = async (req = request, res = response) => {
    // const {q, nombre} = req.query;
    const { limite = 5, desde = 0 } = req.query;
//la rta es una coleccion de las dos promesas 
    const [total,usuarios] =await Promise.all([
        Usuario.countDocuments({ estado: true }),
        Usuario.find({ estado: true })
            .skip(Number(desde))
            .limit(Number(limite))
    ])
    res.json({
        msg: 'get  API -Coontrolador',
        total,usuarios
    });
}
//middleware funcion que se ejecuta antes del controlador
export const usuariosPost = async (req, res) => {
    const { nombre, correo, password, rol } = req.body;
    //const {Nombre,edad}= req.body;
    const usuario = new Usuario({ nombre, correo, password, rol });
    //verificar si el correo existe
    //se movio al archivo de validators.js
    //encritptar la contraseña
    const salt = bcryptjs.genSaltSync(10);
    usuario.password = bcryptjs.hashSync(password, salt);
    //guardar
    //Aqui se postea en la base de datos de mongo DB
    await usuario.save();
    console.log(usuario)
    res.json({
        msg: 'post  API -Controller',
        usuario
    });
}
export const usuariosPut = async (req, res) => {
    const id = req.params.id
    const { _id, password, google, correo, ...resto } = req.body;
    if (password) {


        const salt = bcryptjs.genSaltSync(10);
        resto.password = bcryptjs.hashSync(password, salt);
    }
    const newuser = await Usuario.findByIdAndUpdate(id, resto);
    res.json({
        newuser
    });
}
export const usuariosPatch = (req, res) => {
    res.json({
        msg: 'patch  API -Controller'
    });
}
export const usuariosDelete = async(req, res) => {
    const {id} = req.params
    //Fisicamente borrar
    //const usuario = await Usuario.findByIdAndDelete(id)
const usuario = await Usuario.findByIdAndUpdate(id,{estado:false});

    res.json({
        msg: 'delete  API -Controller',
        id,
        usuario
    });
}