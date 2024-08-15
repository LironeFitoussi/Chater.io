import React from "react";
import styels from "./ChatNav.module.css";

// Components imports
import ChatsHeader from "../../../ChatsHeader/ChatsHeader";
import ChatsMain from "../../../ChatsMain/ChatsMain";
// Atoms imports
import Divider from "../../../Atoms/Divider";

interface Props {
  // Define your component props here
}

const ChatNav: React.FC<Props> = () => {
  // Add your component logic here

  return (
    <div className={`${styels.container} px-6 py-6`}>
      <ChatsHeader title="Chats" />
      <Divider />
      <ChatsMain />
    </div>
  );
};

export default ChatNav;
