import {Router} from 'express';

import {salesController} from '../controllers'

const router = Router();

router.get('/',salesController.getAllSales);

router.post('/',salesController.createSale);

router.patch('/:id',salesController.updateSale);

router.delete('/:id', salesController.deleteSale);

router.put('/updateAll', salesController.actualizarFechaVentas);


export default router;