import { Avatar, Box } from "@mui/material";
import React from "react";
import BlobTwo from "../../assets/BlobTwo.svg";
const Blob = () => {
  return (
    <Box>
      <Avatar
        src={BlobTwo}
        sx={{
          position: "absolute",
          left: "488.63px",
          top: "88px",
          width: "522px",
          height: "539px",
          // background: "#E5F5F8",
          // border: "1px solid #E5F5F8",
          zIndex: "1",
        }}
      />
    </Box>
  );
};

export default Blob;
