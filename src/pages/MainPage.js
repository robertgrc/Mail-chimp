import { Box } from "@mui/material";
import { useState } from "react";
import Blob from "../components/Blob/Blob";
import EnviarProps from "../components/EnviarProps/EnviarProps";
//import Blob from "../assets/Blob.jpg";
import GmailCard from "../components/GmailCard/GmailCard";
import MailChimpCard from "../components/MailChimpCard/MailChimpCard";
import SyncContacts from "../components/SyncContacts/SyncContacts";
import { gmailDropdowData, mailChimpDropdownData } from "./data";

const MainPage = () => {
  const [selectContacts, setSelectContacts] = useState({
    Gmail: gmailDropdowData,
    Mailchimp: mailChimpDropdownData,
  });

  const handleContactSelection = (contacts) => {
    const { platform, selected } = contacts;
    const newSelection = JSON.parse(JSON.stringify(selectContacts));
    newSelection[platform] = selected;
    setSelectContacts(newSelection);
  };

  const handleSyncContacts = () => {
    console.log("Sync Contacts:", selectContacts);
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
        <GmailCard
          handleContactSelection={handleContactSelection}
          dropDownOptions={gmailDropdowData}
        />
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
        <MailChimpCard
          handleContactSelection={handleContactSelection}
          dropDownOptions={mailChimpDropdownData}
        />
      </Box>
      <Box sx={{ zIndex: "1" }}>
        <Blob />
      </Box>
      <EnviarProps />
    </Box>
  );
};

export default MainPage;
