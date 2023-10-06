import {Schema,model} from 'mongoose';
    
 const UsuarioSchema =Schema({
    nombre:{
        type:String,
        require:[true,'El Nombre Es obligatorio']
    },
    correo:{
        type:String,
        require:[true,'El correo Es obligatorio'],
        unique:true
    },
    password:{
        type:String,
        require:[true,'El contraela Es obligatorio']

    },
    img:{
        type:String,

    },
    rol:{
        type:String,
        require:[true],
        emun:['ADMIN_ROLE','USER_ROLE']
    },
    estado:{
        type:Boolean,
      default:true
    },
    google:{
        type:Boolean,
default:false
    },
})
UsuarioSchema.methods.toJSON = function () {
    const {__v,password,...usuario}= this.toObject();
    
    return usuario;
}

const Usuario = model('Usuarios', UsuarioSchema);

export default Usuario;