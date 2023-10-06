import { Router } from 'express';
import { check} from 'express-validator'
import { userGet, usuariosPost, usuariosPut,usuariosPatch ,usuariosDelete} from '../controllers/user.js';
import {validarcampos } from '../middlewares/validar-campos.js'
import { esRolValido,existecorreo,existeusuarioid } from '../helpers/db-validators.js';

const router = Router();

router.get('/',userGet );
//esto se pone para que cada ruta del tipo put despues del slash /10 lo tome como valido
router.put('/:id',[
check('id','No es un id valido').isMongoId(),
check('id').custom(existeusuarioid),
check('rol').custom( esRolValido), 
validarcampos
],usuariosPut );

router.post('/',[
    check('nombre','Nombre  es obligatorio').not().isEmpty(),
    check('password','password obligatorio y mas de 6 letras').isLength({min:6}),

    check('correo').custom(existecorreo),
    //check('rol','No no es un rol permitido').isIn(['ADMIN_ROLE','USER_ROLE']),
    check('rol').custom( esRolValido),
    validarcampos
],usuariosPost);
router.delete('/:id',[
    check('id','No es un id valido').isMongoId(),
check('id').custom(existeusuarioid),
validarcampos
],usuariosDelete);
router.patch('/',usuariosPatch );
export default router;