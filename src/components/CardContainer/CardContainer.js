import Box from "@mui/material/Box";
import { useState } from "react";
import CardInformation from "../CardInformation/CardInformation";
//import NewDropDown from "../NewDropDown/NewDropDown";
//import SelectDropdown from "../SelectDropdown/SelectDropdown";
//import DropDownPrueba from "../DropDownPrueba/DropDownPrueba";
import DropDownPrueba2 from "../DropDownPrueba2/DropDownPrueba2";

const CardContainer = ({
  title,
  description,
  imgUrl,
  options,
  handleContactSelection,
  dropdowndata,
  appName,
}) => {
  const [openCollapse, setOpenCollapse] = useState(false);

  //console.log(dropdowndata);

  return (
    <Box
      sx={{
        width: "283.4px",
        height: openCollapse ? "433px" : "355.1px",
        background: "#FFFFFF",
        border: "2px solid #DFE3EB",
        borderRadius: "2px",
        boxSizing: "border-box",
      }}
    >
      <CardInformation
        sx={{}}
        title={title}
        description={description}
        imgUrl={imgUrl}
      />

      <Box
        sx={{
          marginTop: "35px",
        }}
      >
        <DropDownPrueba2
          handleContactSelection={handleContactSelection}
          title={title}
          options={options}
          setOpenCollapse={setOpenCollapse}
          openCollapse={openCollapse}
          dropdowndata={dropdowndata}
          appName={appName}
        />
      </Box>
    </Box>
  );
};

export default CardContainer;
