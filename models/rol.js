import {Schema,model} from 'mongoose';

export const RolesSchema= Schema({
rol:{
    type:String,
    require:[true,'Rol es olbigatorio']
}
})


const Role = model('roles', RolesSchema);

export default Role;