import SearchIcon from "@mui/icons-material/Search";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import React from "react";

const SearchBar = () => {
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("search");
  };
  return (
    <TextField
      variant="outlined"
      placeholder="Search..."
      size="small"
      InputProps={{
        sx: { backgroundColor: "#fff" },
        endAdornment: (
          <InputAdornment position="start">
            <IconButton onClick={handleSearch} size="small">
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
