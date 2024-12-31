import Message from "../models/message.model";

const chatbotService = {
  async getBotResponse(message: string): Promise<string> {
    // Default bot response
    let botResponse = 'I am a chatbot. How can I assist you?';

    // Determine response based on keywords
    if (message.toLowerCase().includes('hello')) {
      botResponse = 'Hello! How can I help you today?';
    } else if (message.toLowerCase().includes('bye')) {
      botResponse = 'Goodbye! Have a great day!';
    } else if (message.toLowerCase().includes('status')) {
      botResponse = 'I am fully operational!';
    }

    try {
      // Store the user message and bot response in the database
      const userMessage = new Message({
        sender: 'user',
        message,
        timestamp: new Date(), // Adding timestamp for tracking messages
      });

      const botMessage = new Message({
        sender: 'bot',
        message: botResponse,
        timestamp: new Date(),
      });

      // Save both messages in the database
      await userMessage.save();
      await botMessage.save();
    } catch (error) {
      console.error('Error saving messages to the database:', error);
      throw new Error('Could not save messages to the database');
    }

    return botResponse;
  },
};

export default chatbotService;
