import React, { useState } from "react";
import {
  //Avatar,
  Box,
  Checkbox,
  Collapse,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  //ListItemIcon,
  ListItemText,
} from "@mui/material";
//import { useDispatch } from "react-redux";
//import Icono1 from "../../assets/Dropdown/Icono1.jpg";
//import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
//import { ok } from "../../assets/Dropdown/ok.jpg";

const array = ["Family", "Work Friends", "Another Label"];

const DropDownPrueba = () => {
  const [openCollapse, setOpenCollapse] = useState(false);

  //const dispatch = useDispatch();

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
      }}
    >
      <List>
        <ListItem>
          <ListItemButton>
            <Box>{"<"}</Box>
            <Box>
              <ListItemText primary={"All contacts"} />
            </Box>

            <ListItemIcon onClick={() => setOpenCollapse(!openCollapse)}>
              {">"}
            </ListItemIcon>
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
            <ListItem>
              <Box>
                <FormControl component="fieldset">
                  <FormGroup aria-label="position" row>
                    <FormControlLabel
                      value="start"
                      control={<Checkbox color="primary" />}
                    />
                  </FormGroup>
                </FormControl>
                {/* <ListItemIcon>{}</ListItemIcon> */}
              </Box>

              <ListItemButton>
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
