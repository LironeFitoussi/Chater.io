import React from "react";
import { Outlet } from "react-router-dom";

// Components imports
import Aside from "../components/Main Components/Aside/Aside.tsx";
interface Props {
  // Define your component's props here
}

const Root: React.FC<Props> = (props) => {
  // Implement your component logic here

  return (
    <>
      <Aside />
      <Outlet />
    </>
  );
};

export default Root;
