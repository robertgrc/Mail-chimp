import React, { useState } from "react";
import {
  Avatar,
  Box,
  Checkbox,
  Collapse,
  IconButton,
  ListItemText,
  MenuItem,
} from "@mui/material";

import newIcon from "../../assets/Dropdown/newIcon.svg";
import Polygon2 from "../../assets/Dropdown/Polygon2.svg";

const NewDropDown = (props) => {
  const {
    options,
    openCollapse,
    setOpenCollapse,
    title,
    handleContactSelection,
  } = props;

  const [optionChecked, setOptionChecked] = useState([...options]);
  const toggleCollapse = () => setOpenCollapse(!openCollapse);
  const handleSelectOption = (index) => {
    const newGmail = [...optionChecked];
    newGmail[index].checked = !newGmail[index].checked;
    const selected = newGmail.filter((option) => option.checked === true);
    handleContactSelection({ platform: title, selected: selected });
    setOptionChecked([...newGmail]);
  };

  return (
    <Box
      sx={{
        width: "216.72px",
        height: "44.46px",
        marginTop: "24px",
        marginLeft: "33px",
        background: "#F5F8FA",
        border: "1px solid #CBD6E2",
        borderRadius: "2px",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {/* <Box sx={{ width: "15.55", height: "11.65px" }}>{"<"}</Box> */}
      <MenuItem sx={{ display: "flex" }}>
        <IconButton>
          <Avatar
            sx={{ width: "15.55px", height: "11.65px", marginLeft: "3px" }}
            //sx={{ width: "15.55", height: "11.65px", background: "#7C99B6" }}
            src={newIcon}
          />
        </IconButton>
        <ListItemText
          sx={{
            fontFamily: "Noto Sans",
            fontStyle: "normal",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "22px",
            color: "#33475B",
            marginLeft: "15.8px",
          }}
          primary={"All contacts"}
        />
        <Avatar
          sx={{
            width: "15px",
            height: "10.24px",
            borderRadius: "1px",
            marginLeft: "40.11px",
            transform: openCollapse && "rotate(180deg)",
          }}
          onClick={toggleCollapse}
          src={Polygon2}
        />
      </MenuItem>
      <Collapse
        in={openCollapse}
        sx={{
          overflow: "auto",
          maxWidth: "217px",
          height: "110px",
          background: "#F5F8FA",
          border: "1px solid #CBD6E2",
          borderRadius: "2px",
          display: "flex",
          flexWrap: "wrap",

          //borderTop: "none",
          "&::-webkit-scrollbar": {
            width: "3 rem",
          },
          "&::-webkit-scrollbar-trank": {
            backgroundColor: "rgb(24, 24, 29)",
            //boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.00)",
            //WebkitBoxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.00)",
          },
          "&::-webkit-scrollbar-thumb": {
            //backgroundColor: "rgba(0, 0, 0, .1)",
            background: "red",
            border: "5px, solid, transparent",
            borderRadius: "9px",
            backgroundClip: "contentBox",
          },
        }}
      >
        {options.map(({ name, checked = false }, index) => (
          <MenuItem
            key={`${title}${index}`}
            sx={{}}
            onClick={() => handleSelectOption(index)}
          >
            <Checkbox sx={{}} checked={checked} />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Collapse>
    </Box>
  );
};
export default NewDropDown;
