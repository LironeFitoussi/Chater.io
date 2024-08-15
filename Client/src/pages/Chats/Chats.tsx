import React from "react";
import { Outlet } from "react-router-dom";

import ChatsNav from "../../components/Main Components/Navigators/ChatNav/ChatNav";
interface Props {
  // Define your component props here
}

const Chats: React.FC<Props> = () => {
  // Add your component logic here

  return (
    <div>
      <ChatsNav />
      <Outlet />
    </div>
  );
};

export default Chats;
