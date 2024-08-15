import React from "react";
import styles from "./SearchBar.module.css";

// Icons imports
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";

interface Props {
  // Add your component props here
}

const SearchBar: React.FC<Props> = () => {
  return (
    <div className={styles.container}>
      <div>
        <SearchIcon className="pr-2 text-text-placeholder" />
        <input
          placeholder="Search"
          className="placeholder-text-placeholder text-sm"
          type="text"
        />
      </div>
      <FilterListIcon className="text-main-grey mr-2" />
    </div>
  );
};

export default SearchBar;
