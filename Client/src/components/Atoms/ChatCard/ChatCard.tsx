import React from "react";

interface ChatCardProps {
  chatData: {
    name: string;
    userId: string;
    isUserOnline: boolean;
    isArchived: boolean;
    conversationId: string;
    lastMessage: {
      content: string;
      time: string;
      from: string;
    };
  };
  clickHandler: (userId: string) => void;
}
// TODO: Add styles for the ChatCard component
const ChatCard: React.FC<ChatCardProps> = ({ chatData, clickHandler }) => {
  return (
    <div
      className="chat-card"
      onClick={() => clickHandler(chatData.conversationId)}
    >
      <div className="chat-card-header">
        <h2>{chatData.name}</h2>
        {chatData.isUserOnline ? (
          <span className="online">Online</span>
        ) : (
          <span className="offline">Offline</span>
        )}
      </div>
      <div className="chat-card-body">
        <p>{chatData.lastMessage.content}</p>
        <span className="time">{chatData.lastMessage.time}</span>
      </div>
    </div>
  );
};

export default ChatCard;
