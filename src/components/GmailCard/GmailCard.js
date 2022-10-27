import React from "react";
import CardContainer from "../CardContainer/CardContainer";
import IconGmail from "../../assets/gmail/IconGmail.jpg";

const GmailCard = ({ handleContactSelection, dropDownOptions }) => {
  return (
    <CardContainer
      handleContactSelection={handleContactSelection}
      title="Gmail"
      description="These Gmail contacts will
      sync to MailChimp"
      imgUrl={IconGmail}
      alt="Iconchimp"
    />
  );
};

export default GmailCard;
