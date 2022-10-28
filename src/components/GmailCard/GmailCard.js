import React from "react";
import CardContainer from "../CardContainer/CardContainer";
import IconGmail from "../../assets/gmail/IconGmail.jpg";

const GmailCard = ({
  handleContactSelection,
  dropDownOptions,
  gmailDropdownData,
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
      gmailDropdownData={gmailDropdownData}
    />
  );
};

export default GmailCard;
