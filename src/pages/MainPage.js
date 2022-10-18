import { Box } from "@mui/material";
import React from "react";
import Blob from "../components/Blob/Blob";
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
        // backgroundColor: "green",
        display: "flex",
        alignItems: "flex-start",
      }}
    >
      <Box sx={{ marginTop: "164px", marginLeft: "342px", zIndex: "2" }}>
        <GmailCard />
      </Box>

      <Box
        sx={{
          marginTop: "276px",
          marginLeft: "28.23px",
          marginRight: "28.71px",
          zIndex: "2",
        }}
      >
        <SyncContacts />
      </Box>

      <Box sx={{ marginTop: "164px", zIndex: "2" }}>
        <MailChimpCard handleSyncContacts={handleSyncContacts} />
      </Box>
      <Box sx={{ zIndex: "1" }}>
        <Blob />
      </Box>
    </Box>
  );
};

export default MainPage;
