import { CloudQueue } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useState } from "react";
import Blob from "../components/Blob/Blob";
//import Blob from "../assets/Blob.jpg";
import GmailCard from "../components/GmailCard/GmailCard";
import MailChimpCard from "../components/MailChimpCard/MailChimpCard";
//import Practica from "../components/Practice/Practica";
import SyncContacts from "../components/SyncContacts/SyncContacts";
import { gmailDropdownData, mailChimpDropdownData } from "./data";

const MainPage = () => {
  const [selectContacts, setSelectContacts] = useState({
    Gmail: gmailDropdownData,
    Mailchimp: mailChimpDropdownData,
  });

  const [contactsToAdd, setContactsToAdd] = useState([]);

  const [arrayGmail, setArrayGmail] = useState([...gmailDropdownData]);

  const [arrayMailchimp, setArrayMailchimp] = useState([
    ...mailChimpDropdownData,
  ]);

  const handleContactSelection = (newContact, appName) => {
    let contactsToAdd = newContact.filter(
      (contact) => contact.checked === true
    );
    setContactsToAdd(contactsToAdd);
  };

  const onClickTogle = () => {
    let newArrayGmail = [...arrayGmail];
    newArrayGmail = [...newArrayGmail, ...contactsToAdd];
    setArrayGmail(newArrayGmail);
    let newArrayMailchimp = [...arrayMailchimp];
    newArrayMailchimp = [...newArrayMailchimp, ...contactsToAdd];
    setArrayMailchimp(newArrayMailchimp);
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
          dropdowndata={arrayGmail}
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
        <SyncContacts onClickTogle={onClickTogle} />
      </Box>

      <Box sx={{ marginTop: "164px", zIndex: "2" }}>
        <MailChimpCard
          dropdowndata={arrayMailchimp}
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
