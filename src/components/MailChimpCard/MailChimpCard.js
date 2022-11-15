import React from "react";
import CardContainer from "../CardContainer/CardContainer";
import Iconchimp from "../../assets/gmail/Iconchimp.jpg";

const MailChimpCard = ({
  dropdowndata,
  handleContactSelection,
  handleDisplay,
}) => {
  return (
    <CardContainer
      title="Mailchimp"
      description="These Mailchimp contacts will
      sync to Gmail"
      imgUrl={Iconchimp}
      alt="Iconchimp"
      dropdowndata={dropdowndata}
      handleContactSelection={handleContactSelection}
      appName="Mailchimp"
      handleDisplay={handleDisplay}
    />
  );
};

export default MailChimpCard;
