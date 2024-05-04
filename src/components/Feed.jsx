import { Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {
  // const [selectedCategory, setSelectedCategory] = useState("New");
  // useEffect(() => {
  //   fetchFromAPI(`/search?part=snippet&q=${selectedCategory}`);
  // }, [selectedCategory]);
  return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid
        item
        xs={1.5}
        sx={{
          height: "100%",
          backgroundColor: "#000",
          overflowY: "auto",
          maxHeight: "100vh",
        }}
      >
        <SideBar />
      </Grid>
      <Grid
        item
        xs={10.5}
        sx={{
          height: "100%",
          backgroundColor: "#000",
          padding: "10px",
          overflowY: "auto",
          maxHeight: "100vh",
        }}
      >
        <Typography variant="h4" sx={{ color: "#fff" }}>
          New Videos
        </Typography>
        <Videos videos={[]} />
      </Grid>
    </Grid>
  );
};

export default Feed;
