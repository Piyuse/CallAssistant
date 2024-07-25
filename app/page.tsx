// app/page.tsx
import React from "react";
import ChatMessage from "../app/components/ChatMessage";

interface Message {
  id: string;
  text: string;
  message: string;
}

const Home: React.FC = () => {
  const messages: Message[] = [
    { id: "1", text: "User1", message: "Hello there!" },
    { id: "2", text: "User2", message: "Hi, how are you?" },
    { id: "3", text: "User1", message: "I am good, thanks!" },
  ];

  return (
    <div>
      <h1>Chat Messages</h1>
      {messages.map((msg) => (
        <ChatMessage
          key={msg.id}
          id={msg.id}
          text={msg.text}
          message={msg.message}
        />
      ))}
    </div>
  );
};

export default Home;
