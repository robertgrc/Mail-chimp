import React, { useState } from "react";
import {
  Avatar,
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
  ListItemText,
  MenuItem,
} from "@mui/material";
//import { useDispatch } from "react-redux";
//import Icono1 from "../../assets/Dropdown/Icono1.jpg";
//import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import newIcon from "../../assets/Dropdown/newIcon.svg";
import Polygon2 from "../../assets/Dropdown/Polygon2.svg";

const array = [
  "Family",
  "Work Friends",
  "Another Label",
  "Family",
  "Work Friends",
  "Another Label",
];
//"New contact","Service",
//const [openCollapse, setOpenCollapse] = useState(false);
//const [contactSelectOptions, setContactSelectOptions] = useState([])
// const handleOptionSelected = ()=>{

// }

const DropDownPrueba2 = ({
  handleContactSelection,
  setOpenCollapse,
  openCollapse,
  gmailDropdownData = [],
}) => {
  const [optionChecked, setOptionChecked] = useState(false);

  // const { label, selected, id } = gmailDropdownData;
  // console.log(label);

  const handleOptionCheked = (index) => {
    console.log("handleOptionCheked: ", index);
    // setOptionChecked(e.target.checked);
  };

  // let arregloLabel = gmailDropdownData.map(function (elem) {
  //   let returnObject = {
  //     label: elem.label,
  //   };
  //   return returnObject;
  // });
  // console.log(arregloLabel);

  const dropDownOptionsArray = gmailDropdownData.map((item) => item.label);

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
          onClick={() => setOpenCollapse(!openCollapse)}
          src={Polygon2}
        />
      </MenuItem>
      <Collapse in={openCollapse}>
        <List
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
          {dropDownOptionsArray.map((listElem, index) => (
            <ListItem key={index}>
              <Box>
                <FormControl component="fieldset">
                  <FormGroup aria-label="position" row>
                    <FormControlLabel
                      sx={{
                        width: "20px",
                        height: "14px",
                        paddingLeft: "6px",
                      }}
                      value="start"
                      // label="otro"
                      onClick={() => handleOptionCheked(index)}
                      control={
                        <Checkbox
                          color="primary"
                          checked={false}
                          // onChange={handleOptionCheked(index)}
                          //sx={{ backgroundColor: "red" }}
                        />
                      }
                    />
                  </FormGroup>
                </FormControl>
              </Box>

              <ListItemButton
                sx={{
                  width: "14px",
                  height: "14px",
                  marginLeft: "7px",
                  fontFamily: "Noto Sans",
                  fontStyle: "normal",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "22px",
                  color: "#33475B",
                }}
              >
                <ListItemText primary={listElem} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Collapse>
    </Box>
  );
};

export default DropDownPrueba2;
