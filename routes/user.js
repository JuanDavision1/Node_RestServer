import { Router } from 'express';
import { userGet, usuariosPost, usuariosPut,usuariosPatch ,usuariosDelete} from '../controllers/user.js';
const router = Router();

router.get('/',userGet );
//esto se pone para que cada ruta del tipo put despues del slash /10 lo tome como valido
router.put('/:id',usuariosPut );
router.post('/',usuariosPost);
router.delete('/',usuariosDelete);
router.patch('/',usuariosPatch );
export default router;