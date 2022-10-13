import React, { useState } from "react";
import {
  Avatar,
  //Avatar,
  Box,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  //ListItemIcon,
  ListItemText,
} from "@mui/material";
//import Icono1 from "../../assets/Dropdown/Icono1.jpg";
//import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
const array = ["Family", "Work Friends", "Another Label"];

const DropDownPrueba = () => {
  const [openCollapse, setOpenCollapse] = useState(false);

  return (
    <Box>
      <List>
        <ListItem divider>
          <ListItemButton onClick={() => setOpenCollapse(true)}>
            <ListItemText primary={"All contacts"} />
            <ListItemIcon>{">"}</ListItemIcon>
          </ListItemButton>
        </ListItem>
      </List>
      <Collapse in={openCollapse}>
        <List
          sx={{
            width: 216.72,
            height: 44.46,
            background: "#F5F8FA",
            border: "1px solid #CBD6E2",
            borderRadius: "2px",
          }}
        >
          {array.map((listElem) => (
            <ListItem divider>
              <ListItemButton onClick={() => setOpenCollapse(false)}>
                <ListItemText primary={listElem} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </Box>
  );
};

export default DropDownPrueba;
