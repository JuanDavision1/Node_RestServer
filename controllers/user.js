import { response } from 'express';
export const userGet= (req=request, res =response) => {
    const {q, nombre} = req.query;
    res.json({
        msg:'get  API -Coontrolador',
        q,nombre
    });
}

export const usuariosPost =  (req, res) => {
    const body=req.body;
    const {Nombre,edad}= req.body;
    res.status(201).json({
        msg:'post  API -Controller',
        body,
        Nombre
    });
}
export const usuariosPut = (req, res) => {
    const id=req.params.id
    res.json({
        msg:'put  API - Controller',
        id
    });
}
export const usuariosPatch = (req, res) => {
    res.json({
        msg:'patch  API -Controller'
    });
}
export const usuariosDelete =  (req, res) => {
    res.json({
        msg:'delete  API -Controller'
    });
}