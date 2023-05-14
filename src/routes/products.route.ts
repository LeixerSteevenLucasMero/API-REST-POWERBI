import {Router} from 'express';

import {productsController} from '../controllers'

const router = Router();

router.get('/',productsController.getAllProducts);

router.post('/',productsController.create);

router.patch('/:id',productsController.update);

router.delete('/:id', productsController.delete);

export default router;