import React from 'react';
import { TextField } from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search";

const Search = () => {
    return (
        <div className="search__box">
            <div className="search__box__wrapper">
                <TextField label="Search Countries" />
                <SearchIcon />
            </div>
        </div>
    )
}

export default Search
