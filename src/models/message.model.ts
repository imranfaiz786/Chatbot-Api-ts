import { Schema, model } from 'mongoose';

interface Message {
  sender: string;
  text: string;
  timestamp: Date;
}

const messageSchema = new Schema<Message>({
  sender: { type: String, required: true },
  text: { type: String, required: true },
  timestamp: { type: Date, required: true },
});

const MessageModel = model<Message>('Message', messageSchema);

export default MessageModel;
 