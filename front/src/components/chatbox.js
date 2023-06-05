import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/chatbox.css';

const ChatBox = () => {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  useEffect(() => {
    // Fetch initial messages from the server
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await axios.get('/api/messages'); // Replace with your server API endpoint
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const sendMessage = async () => {
    try {
      const response = await axios.post('/api/messages', { message: inputMessage }); // Replace with your server API endpoint
      setMessages([...messages, response.data]);
      setInputMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="chatbox-container">
      <div className="chatbox-messages">
        {messages.map((message) => (
          <div className="message" key={message.id}>
            <span className="username">{message.username}:</span> {message.text}
          </div>
        ))}
      </div>
      <div className="chatbox-input">
        <input
          type="text"
          placeholder="Type your message"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatBox;
