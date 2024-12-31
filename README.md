# Chatbot Api TypeScript

**Chatbot Project** is a simple chatbot application built with **TypeScript**, **Node.js**, **Express**, and **MongoDB**. It stores messages in a database and provides automated responses based on keywords.

---

## Features

- User interaction with bot messages
- Stores messages in MongoDB
- Chat history retrieval
- Bot responses to keywords like "hello", "status", and "bye"

---

## Technologies Used

- **TypeScript** for type checking
- **Node.js** & **Express** for backend server
- **MongoDB** for database
- **Mongoose** for MongoDB ODM
- **dotenv** for environment variables

---

## Installation

1. **Clone the repo:**
    ```bash
    git clone https://github.com/yourusername/chatbot-project.git
    ```

2. **Install dependencies:**
    ```bash
    yarn install
    ```

3. **Set up .env:**
    ```bash
    MONGO_URI=mongodb://localhost:27017/chatbot
    ```

4. **Run the server:**
    ```bash
    yarn dev
    ```

---

## API Endpoints

### POST `/api/message`

Send a message to the chatbot and get a response.

```json
{
  "message": "Hello"
}
```

### GET `/api/history`

```
{
  "messages": [
    { "sender": "user", "text": "Hello", "timestamp": "2024-11-23T10:00:00Z" },
    { "sender": "bot", "text": "Hello! How can I help?", "timestamp": "2024-11-23T10:00:02Z" }
  ]
}
```

## How It Works

- Send a message, and the bot responds.
- Messages are stored in the MongoDB database.
- Retrieve conversation history using the API.

## License

This project is open-source and available under the [MIT License](LICENSE).