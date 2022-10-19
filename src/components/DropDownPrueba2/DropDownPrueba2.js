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
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  //ListItemIcon,
  ListItemText,
  MenuItem,
} from "@mui/material";
//import { useDispatch } from "react-redux";
//import Icono1 from "../../assets/Dropdown/Icono1.jpg";
//import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import newIcon from "../../assets/Dropdown/newIcon.svg";
import Polygon2 from "../../assets/Dropdown/Polygon2.svg";

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
        justifyContent: "space-between",
      }}
    >
      {/* <Box sx={{ width: "15.55", height: "11.65px" }}>{"<"}</Box> */}
      <MenuItem sx={{ display: "flex" }}>
        <IconButton>
          <Avatar
            sx={{ width: "15.55px", height: "11.65px" }}
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
          }}
          primary={"All contacts"}
        />
        <Avatar
          sx={{
            width: "16.27px",
            height: "10.24px",
            borderRadius: "1px",

            //transform: "rotate(180deg)",
          }}
          onClick={() => setOpenCollapse(!openCollapse)}
          src={Polygon2}
        />
      </MenuItem>
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
