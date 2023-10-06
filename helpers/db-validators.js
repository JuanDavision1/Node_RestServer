import Role from '../models/rol.js';
import Usuario from '../models/usuario.js';

export const esRolValido = async(rol='')=>{
    const existeRol = await Role.findOne({rol});
    console.log(existeRol)
    if(!existeRol){
        throw new Error(`Eeeel rol ${rol} no esta registrado en la bd`);
    }
}
    //verificar si el correo existe
    //paquete para validar muchas cosas como un correo 
    export const existecorreo = async(correo='')=>{
        const exiteEmail = await Usuario.findOne({correo});
        if(exiteEmail){
            throw new Error(`Este correo  ${correo} ya esta registrado`);
        }
    }
    export const existeusuarioid = async(id='')=>{
        const existeid = await Usuario.findById(id);
        if(!existeid){
            throw new Error(`El id no existe  ${id} y no esta registrado`);
        }
    }
