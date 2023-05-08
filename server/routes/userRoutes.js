import express from 'express';
import { getAllUsers, loginUser, logoutUser, registerUser } from '../controllers/userController.js';

const router = express.Router();

router.get('/', getAllUsers)
router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/logout', logoutUser)

export default router