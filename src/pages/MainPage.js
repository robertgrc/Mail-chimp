import { Box } from "@mui/material";
import React from "react";
//import Blob from "../assets/Blob.jpg";
import GmailCard from "../components/GmailCard/GmailCard";
import MailChimpCard from "../components/MailChimpCard/MailChimpCard";

const MainPage = () => {
  return (
    <Box
      sx={{
        width: "1440px",
        height: "1024px",
        backgroundColor: "tomato",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Box sx={{}}>
        <GmailCard />
      </Box>
      <Box sx={{}}>
        <MailChimpCard />
      </Box>
      {/* <Avatar
        src={Blob}
        alt="imgBlob"
        sx={{ width: "522px", height: "539px" }}
      /> */}
    </Box>
  );
};

export default MainPage;
