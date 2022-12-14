import React from "react";
import CardContainer from "../CardContainer/CardContainer";
import IconGmail from "../../assets/gmail/IconGmail.jpg";

const GmailCard = ({
  handleContactSelection,
  dropDownOptions,
  dropdowndata,
  selectContacts,
  handleDisplay,
  openCollapse,
  setOpenCollapse,
  handleClickOpenCollapseGmail,
  disableButtonCollapse,
}) => {
  //console.log(gmailDropdownData);

  return (
    <CardContainer
      handleContactSelection={handleContactSelection}
      options={dropDownOptions}
      title="Gmail"
      description="These Gmail contacts will
      sync to MailChimp"
      imgUrl={IconGmail}
      alt="Iconchimp"
      dropdowndata={dropdowndata}
      selectContacts={selectContacts}
      appName="Gmail"
      handleDisplay={handleDisplay}
      openCollapse={openCollapse}
      setOpenCollapse={setOpenCollapse}
      handleClickOpenCollapseGmail={handleClickOpenCollapseGmail}
      disableButtonCollapse={disableButtonCollapse}
    />
  );
};

export default GmailCard;
