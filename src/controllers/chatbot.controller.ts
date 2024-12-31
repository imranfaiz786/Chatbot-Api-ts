import { Request, Response, NextFunction } from 'express';
import chatbotService from '../services/chatbot.service';
import Message from "../models/message.model";

// Example usage of Message type (for type-checking)
import { Message as MessageType } from '../types/message';  // Adjust the path if needed

const chatbotController = {
  // Send a message to the chatbot and get the response
  async sendMessage(req: Request, res: Response, next: NextFunction) {
    try {
      const { message } = req.body;

      if (!message) {
        return res.status(400).json({ message: 'Message is required' });
      }

      const botResponse = await chatbotService.getBotResponse(message);
      
      // Save the user's message in the database
      const userMessage: MessageType = {
        sender: 'male',  // Assuming the sender is a male
        text: message,
        timestamp: new Date(),
      };
      await Message.create(userMessage);

      // Save the bot's response in the database
      const botMessage: MessageType = {
        sender: 'female',  // Assuming the sender is a female (bot)
        text: botResponse,
        timestamp: new Date(),
      };
      await Message.create(botMessage);

      return res.status(200).json({ response: botResponse });
    } catch (error) {
      next(error);
    }
  },

  // Get the chat history
  async getChatHistory(req: Request, res: Response, next: NextFunction) {
    try {
      // Fetch messages from the database
      const messages = await Message.find().sort({ timestamp: 1 });
      return res.status(200).json({ messages });
    } catch (error) {
      next(error);
    }
  }
};

export default chatbotController;
