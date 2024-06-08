import express from 'express'

import protectRoute from '../middlewares/protectRoute.js'
import { sendMessage, getMessages } from '../controllers/messages.controller.js';

const router = express.Router();

router.get('/:id', protectRoute, getMessages);
router.post('/send/:id', protectRoute, sendMessage);

export default router