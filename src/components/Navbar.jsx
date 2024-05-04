import { Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";
const Navbar = () => (
  <Grid
    sx={{
      background: "#000",
      padding: "10px",
      position: "sticky",
      top: 0,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    }}
  >
    <Link to={"/"}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar />
  </Grid>
);

export default Navbar;
