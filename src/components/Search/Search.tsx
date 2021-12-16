import React from "react";
import { Input } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

import "./search.scss";

const Search = () => {
  return (
    <div className="search__box">
      <div className="search__box__wrapper">
        <Input placeholder="Search Countries" disableUnderline={true} />
        <SearchIcon style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
};

export default Search;
