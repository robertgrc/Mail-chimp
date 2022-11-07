import { Box } from "@mui/material";
import { useState } from "react";
import Blob from "../components/Blob/Blob";
//import Blob from "../assets/Blob.jpg";
import GmailCard from "../components/GmailCard/GmailCard";
import MailChimpCard from "../components/MailChimpCard/MailChimpCard";
import Practica from "../components/Practice/Practica";
import SyncContacts from "../components/SyncContacts/SyncContacts";
import { gmailDropdownData, mailChimpDropdownData } from "./data";

const MainPage = () => {
  const [selectContacts, setSelectContacts] = useState({
    Gmail: gmailDropdownData,
    Mailchimp: mailChimpDropdownData,
  });

  const handleContactSelection = (newContact) => {
    let contactsToAdd = newContact.filter(
      (contact) => contact.checked === true
    );
    console.log(contactsToAdd);
  };

  //const [addSyncContacts, setAddSyncContacts] = useState(selectContacts);

  // const [addSyncContacts, setAddSyncContacts] = useState(selectContacts);
  // console.log(addSyncContacts);

  // const newContactsToAdd = addSyncContacts.Gmail.filter(
  //   (nuevoContacto) => nuevoContacto === true
  // );
  // console.log(newContactsToAdd);

  // const newContactsToAdd = addSyncContacts.filter(
  //   (nuevoContacto) => nuevoContacto === true
  // );
  // setAddSyncContacts([...addSyncContacts, newContactsToAdd]);
  // console.log(setAddSyncContacts);

  const handleSyncContacts = () => {
    console.log("Sync Contacts:");
  };

  return (
    <Box
      sx={{
        width: "1440px",
        height: "1024px",
        display: "flex",
        alignItems: "flex-start",
      }}
    >
      <Box sx={{ marginTop: "164px", marginLeft: "342px", zIndex: "2" }}>
        <GmailCard
          dropdowndata={gmailDropdownData}
          handleContactSelection={handleContactSelection}
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
          dropdowndata={mailChimpDropdownData}
          handleContactSelection={handleContactSelection}
        />
      </Box>
      <Box sx={{ zIndex: "1" }}>
        <Blob />
      </Box>
      {/* <Practica /> */}
    </Box>
  );
};

export default MainPage;
