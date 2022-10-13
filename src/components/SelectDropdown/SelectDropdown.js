import { Avatar, Box, ListItemText } from "@mui/material";
import React from "react";
import Icono1 from "../../assets/Dropdown/Icono1.jpg";
import Polygon2 from "../../assets/Dropdown/Polygon2.jpg";

const SelectDropdown = () => {
  return (
    <Box
      sx={{
        width: 216.72,
        height: 44.46,
        background: "#F5F8FA",
        border: "1px solid #CBD6E2",
        borderRadius: "2px",
      }}
    >
      <Avatar src={Icono1} alt="Icono" sx={{}} />
      <ListItemText primary="All contacts" sx={{}} />
      <Avatar
        src={Polygon2}
        alt="Polygon"
        sx={{
          background: "#7C99B6",
          borderRadius: "1px",
        }}
      />
    </Box>
  );
};

export default SelectDropdown;
