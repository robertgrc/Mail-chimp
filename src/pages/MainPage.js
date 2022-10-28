import { Box } from "@mui/material";
import { useState } from "react";
import Blob from "../components/Blob/Blob";
//import Blob from "../assets/Blob.jpg";
import GmailCard from "../components/GmailCard/GmailCard";
import MailChimpCard from "../components/MailChimpCard/MailChimpCard";
import SyncContacts from "../components/SyncContacts/SyncContacts";
//import { gmailDropdowData, mailChimpDropdownData } from "./data";

const MainPage = () => {
  // const [selectContacts, setSelectContacts] = useState({
  //   Gmail: gmailDropdowData,
  //   Mailchimp: mailChimpDropdownData,
  // });

  // console.log({ selectContacts });

  const gmailDropdownData = [
    {
      label: "Family",
      selected: "false",
      id: 1,
    },
    {
      label: "Work Friends",
      selected: "true",
      id: 2,
    },
    {
      label: "Another Label",
      selected: "true",
      id: 3,
    },
    {
      label: "Parents",
      selected: "false",
      id: 4,
    },
    {
      label: "Best Friends",
      selected: "false",
      id: 5,
    },
  ];

  const handleSyncContacts = () => {
    console.log("Sync Contacts:");
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
        <GmailCard gmailDropdownData={gmailDropdownData} />
      </Box>

      <Box
        sx={{
          marginTop: "276px",
          marginLeft: "28.23px",
          marginRight: "28.71px",
          zIndex: "2",
        }}
      >
        <SyncContacts handleSyncContacts={handleSyncContacts} />
      </Box>

      <Box sx={{ marginTop: "164px", zIndex: "2" }}>
        <MailChimpCard />
      </Box>
      <Box sx={{ zIndex: "1" }}>
        <Blob />
      </Box>
    </Box>
  );
};

export default MainPage;
