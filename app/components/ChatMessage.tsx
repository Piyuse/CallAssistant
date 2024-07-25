// components/ChatMessage.tsx
import React from "react";

interface ChatMessageProps {
  id: string;
  text: string;
  message: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ id, text, message }) => {
  return (
    <div className="chat-message">
      <p>
        <strong>{id}</strong>: {text}
      </p>
      <p>{message}</p>
    </div>
  );
};

export default ChatMessage;
