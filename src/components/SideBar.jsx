import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { categories } from "../utils/constants";

const SideBar = () => (
  <Stack
    direction={"row"}
    sx={{
      height: { sx: "auto", md: "95%" },
      flexDirection: "column",
    }}
  >
    {categories.map((category, index) => (
      <Grid
        display={"flex"}
        alignItems={"center"}
        gap="20px"
        padding={"10px"}
        sx={{
          cursor: "pointer",
          transition: "background-color 0.3s ease",
          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          },
        }}
        key={index}
      >
        <Grid sx={{ color: "red" }}>{category.icon}</Grid>
        <Typography
          variant="body1"
          sx={{ color: "#fff", fontFamily: "Roboto" }}
        >
          {category.name}
        </Typography>
      </Grid>
    ))}
  </Stack>
);

export default SideBar;
