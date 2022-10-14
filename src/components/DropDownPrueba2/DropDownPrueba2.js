import React, { useState } from "react";
import {
  Avatar,
  //Avatar,
  Box,
  Checkbox,
  Collapse,
  FormControl,
  FormControlLabel,
  FormGroup,
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
import newIcon from "../../assets/Dropdown/newIcon.jpg";

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
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {/* <Box sx={{ width: "15.55", height: "11.65px" }}>{"<"}</Box> */}
      <Avatar
        sx={{ width: "15.55", height: "11.65px", background: "#7C99B6" }}
        src={newIcon}
      />

      <ListItemText
        sx={{ width: "89.47", height: "22.78px" }}
        primary={"All contacts"}
      />

      <Box sx={{ width: "18.27", height: "11.24px" }}>
        <ListItemIcon onClick={() => setOpenCollapse(!openCollapse)}>
          {">"}
        </ListItemIcon>
      </Box>

      <Box>
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
    </Box>
  );
};

export default DropDownPrueba;
