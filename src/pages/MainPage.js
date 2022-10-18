import { Box } from "@mui/material";
import React from "react";
//import Blob from "../assets/Blob.jpg";
import GmailCard from "../components/GmailCard/GmailCard";
import MailChimpCard from "../components/MailChimpCard/MailChimpCard";
import SyncContacts from "../components/SyncContacts/SyncContacts";

const MainPage = () => {
  const handleSyncContacts = () => {
    console.log("contacto seleccionado");
  };

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

      <SyncContacts />

      <Box sx={{}}>
        <MailChimpCard handleSyncContacts={handleSyncContacts} />
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
