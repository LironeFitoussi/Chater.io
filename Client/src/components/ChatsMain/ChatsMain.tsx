import React from "react";
import { useSearchParams } from "react-router-dom";

// Import Dummy Data
import DUMMY_CHAT_DATA from "../../DUMMY_DATA/DUUMY_CHAT_DATA.json";

// Import Atoms
import ChatCard from "../Atoms/ChatCard/ChatCard";

interface Props {
  // Define your component props here
}

const ChatsMain: React.FC<Props> = () => {
  // Add your component logic here
  //   console.log(DUMMY_CHAT_DATA);
  const [searchParams, setSearchParams] = useSearchParams();

  const clickHandler = (conversationId: string) => {
    setSearchParams({ conversation: conversationId });
  };

  return (
    <div className="flex flex-col items-start">
      <h2 className="font-semibold">Pinned</h2>
      <div></div>
      <h2 className="font-semibold">All Chats</h2>
      <div>
        {DUMMY_CHAT_DATA.map((chat) => (
          <ChatCard
            key={chat.userId}
            chatData={chat}
            clickHandler={clickHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default ChatsMain;
