import { Router } from 'express';
import chatbotController from '../controllers/chatbot.controller';

const router = Router();

// Route to send a message and get bot response
router.post('/message', async (req, res, next) => {
  try {
    await chatbotController.sendMessage(req, res, next);
  } catch (error) {
    next(error);  // Proper error handling
  }
});

// Route to get chat history
router.get('/history', async (req, res, next) => {
  try {
    await chatbotController.getChatHistory(req, res, next);
  } catch (error) {
    next(error);  // Proper error handling
  }
});

export default router;