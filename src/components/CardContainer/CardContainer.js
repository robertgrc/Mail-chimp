import Box from "@mui/material/Box";
import CardInformation from "../CardInformation/CardInformation";
//import SelectDropdown from "../SelectDropdown/SelectDropdown";
//import DropDownPrueba from "../DropDownPrueba/DropDownPrueba";
import DropDownPrueba2 from "../DropDownPrueba2/DropDownPrueba2";

const CardContainer = ({ title, description, imgUrl }) => {
  //const containerWidth =  isDropdownOpen ? '150px' : '100px';

  return (
    <Box
      sx={{
        width: 283.4,
        height: 355.1,
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
      {/* <SelectDropdown />
      <br /> */}
      {/* <DropDownPrueba /> */}
      <Box
        sx={{
          marginTop: "35px",
        }}
      >
        <DropDownPrueba2 />
      </Box>
    </Box>
  );
};

export default CardContainer;
