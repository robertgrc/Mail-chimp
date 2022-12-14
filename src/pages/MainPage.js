import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import Blob from "../components/Blob/Blob";
import GmailCard from "../components/GmailCard/GmailCard";
import MailChimpCard from "../components/MailChimpCard/MailChimpCard";
import SyncContacts from "../components/SyncContacts/SyncContacts";
import { gmailDropdownData, mailChimpDropdownData } from "./data";

const MainPage = () => {
  const [selectContacts, setSelectContacts] = useState({
    Gmail: gmailDropdownData,
    Mailchimp: mailChimpDropdownData,
  });

  const [openCollapse, setOpenCollapse] = useState(false);

  const [openCollapseChimp, setOpenCollapseChimp] = useState(false);

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
    let addMailChimp = contactsToAdd.filter(
      (toAddMailchimp) => toAddMailchimp.appName === "Gmail"
    );
    let addGmail = contactsToAdd.filter(
      (toAddGmail) => toAddGmail.appName === "Mailchimp"
    );

    let newArrayGmail = [...arrayGmail];
    newArrayGmail = [...newArrayGmail, ...addGmail];
    newArrayGmail.forEach((contact) => {
      contact.checked = false;
    });
    setArrayGmail(newArrayGmail);
    let newArrayMailchimp = [...arrayMailchimp];
    newArrayMailchimp = [...newArrayMailchimp, ...addMailChimp];
    newArrayMailchimp.forEach((contact) => {
      contact.checked = false;
    });
    setArrayMailchimp(newArrayMailchimp);
  };

  const handleClickOpenCollapseGmail = () => {
    setOpenCollapse(!openCollapse);
    console.log(openCollapse);
  };

  const handleClickOpenCollapseChimp = () => {
    setOpenCollapseChimp(!openCollapseChimp);
  };

  useEffect(() => {
    console.log("openCollapseGmail", openCollapse);
    console.log("openCollapseChimp", openCollapseChimp);
  }, [openCollapseChimp, openCollapse]);

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
          openCollapse={openCollapse}
          setOpenCollapse={setOpenCollapse}
          handleClickOpenCollapseGmail={handleClickOpenCollapseGmail}
          disableButtonCollapse={openCollapseChimp}
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
          openCollapse={openCollapseChimp}
          setOpenCollapse={setOpenCollapseChimp}
          handleClickOpenCollapseChimp={handleClickOpenCollapseChimp}
          disableButtonCollapse={openCollapse}
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
