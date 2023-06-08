import React, { useState } from 'react';
import "../css/MessageForm.css";

const MessageForm = ({ onSendMessage }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSendMessage(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="message-form-container">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter your message"
        className="message-input"
      />
      <button type="submit" className="send-button">Send</button>
    </form>
  );
};

export default MessageForm;
