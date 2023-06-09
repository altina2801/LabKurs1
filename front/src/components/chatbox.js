import React, { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import MessageList from './MessageList';
import MessageForm from './MessageForm';
import '../css/chatbox.css';

const Chatbox = ({ currentUser, recipientUser }) => {
  const [messages, setMessages] = useState([]);
  const socketRef = useRef(null);

  useEffect(() => {
    // Connect to the server using socket.io
    socketRef.current = io('http://localhost:5000');

    // Listen for incoming messages
    socketRef.current.on('message', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Clean up the socket connection when the component unmounts
    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const handleSendMessage = (text) => {
    const message = {
      text,
      timestamp: new Date().getTime(),
      sender: currentUser,
      recipient: recipientUser,
    };

    // Send the message to the server
    socketRef.current.emit('message', message);

    // Update the messages state immediately to show the sent message
    setMessages((prevMessages) => [...prevMessages, message]);
  };

  return (
    <div className="chatbox-container">
      <div className="chatbox-messages">
        <MessageList messages={messages} currentUser={currentUser} />
      </div>
      <div className="chatbox-form">
        <MessageForm onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default Chatbox;
