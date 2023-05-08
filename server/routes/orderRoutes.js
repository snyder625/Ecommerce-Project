import express from 'express';
import { getAllOrders, getOrder, getOrderByUser, postOrder } from '../controllers/orderController';

const router = express.Router();

router.get('/', getAllOrders)
router.post('/:id', postOrder)
router.get('/:id', getOrder)
router.delete('/:userId', getOrderByUser)
router.post('/', )

export default router