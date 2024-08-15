import React from "react";

// Components
import SearchBar from "../SearchBar/SearchBar";

// Icons
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import ArchiveIcon from "@mui/icons-material/Archive";
interface ChatsHeaderProps {
  title: string;
}

const ChatsHeader: React.FC<ChatsHeaderProps> = ({ title }) => {
  return (
    <div>
      <div className="flex flex-row content-center justify-between items-center">
        <h1 className="text-3xl">{title}</h1>
        <SlowMotionVideoIcon className="pt-1" />
      </div>
      <SearchBar />
      <div className="flex flex-row items-center">
        <ArchiveIcon className="text-main-grey mr-2" />
        <p className="text-text-placeholder text-sm">Archived</p>
      </div>
    </div>
  );
};

export default ChatsHeader;
