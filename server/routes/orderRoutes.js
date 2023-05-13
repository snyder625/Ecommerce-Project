import express from 'express';
import { getAllOrders, getOrder, getOrderByUser, postOrder } from '../controllers/orderController.js';

const router = express.Router();

router.get('/', getAllOrders)
router.post('/:id', postOrder)
router.get('/:id', getOrder)
router.delete('/:userId', getOrderByUser)

export default router