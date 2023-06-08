import React from 'react';
import '../css/MessageList.css';

const MessageList = ({ messages }) => {
  return (
    <div className="message-list-container">
      {messages.map((message, index) => (
        <div className={`message ${message.sender}`} key={index}>
          <span className="message-text">{message.text}</span>
        </div>
      ))}
    </div>
  );
};

export default MessageList;
