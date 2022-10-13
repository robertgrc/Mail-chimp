import React from "react";

import Box from "@mui/material/Box";
import CardInformation from "../CardInformation/CardInformation";
import SelectDropdown from "../SelectDropdown/SelectDropdown";
import DropDownPrueba from "../DropDownPrueba/DropDownPrueba";

const CardContainer = ({ title, description, imgUrl }) => {
  return (
    <Box
      sx={{
        width: 283.4,
        height: 355.1,
        background: "#FFFFFF",
        border: "2px solid #DFE3EB",
        borderRadius: "2px",
      }}
    >
      <CardInformation
        title={title}
        description={description}
        imgUrl={imgUrl}
      />
      <SelectDropdown />
      <br />
      <DropDownPrueba />
    </Box>
  );
};

export default CardContainer;
