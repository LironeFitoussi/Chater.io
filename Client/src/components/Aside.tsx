import React from "react";
import appLogo from "../assets/app-logo.jpg";
import styles from "./Aside.module.css";
// react-router-dom
import { Link, useLocation  } from "react-router-dom";

// Icons
import TextsmsIcon from "@mui/icons-material/Textsms";
import GroupIcon from "@mui/icons-material/Group";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import SettingsIcon from "@mui/icons-material/Settings";

import UserPic from "./UserPic";
import { styled } from "@mui/material/styles";
import Switch, { SwitchProps } from "@mui/material/Switch";

interface AsideProps {
  // Add any props you need here
}
const styleCol = "flex flex-col items-center gap-4"
const Android12Switch = styled(Switch)(({ theme }) => ({
  padding: 8,
  "& .MuiSwitch-track": {
    borderRadius: 22 / 2,
    "&::before, &::after": {
      content: '""',
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      width: 16,
      height: 16,
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "none",
    width: 16,
    height: 16,
    margin: 2,
  },
}));

const Aside: React.FC<AsideProps> = (
  {
    /* Destructure props here */
  }
) => {
  const { pathname } = useLocation();
  console.log(pathname);
  
  return (
    <aside>
      <div className="flex flex-col justify-between h-full box-border">
        <div className={styleCol}>
          <Link to="/" className={`w-10 rounded-lg ${pathname === "/" ? "active-tab" : ""}`}>
            <img src={appLogo} alt="" />
          </Link>
          <Link to="/messages" className={`${styles["tab-icon"]} ${pathname === "/messages" ? "active-tab" : ""}`}>
            <TextsmsIcon />
          </Link>
          <Link to="/groups" className={`${styles["tab-icon"]} ${pathname === "/groups" ? "active-tab" : ""}`}>
            <GroupIcon />
          </Link>
          <Link to="/phone" className={`${styles["tab-icon"]} ${pathname === "/phone" ? "active-tab" : ""}`}>
            <LocalPhoneIcon />
          </Link>
          <Link to="/settings" className={`${styles["tab-icon"]} ${pathname === "/settings" ? "active-tab" : ""}`}>
            <SettingsIcon />
          </Link>
        </div>

        <div className={styleCol}>
          <Android12Switch />
          <UserPic imageUrl="https://via.placeholder.com/150" altText="User" />
        </div>
      </div>
    </aside>
  );
};

export default Aside;
