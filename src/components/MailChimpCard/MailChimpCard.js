import React from "react";
import CardContainer from "../CardContainer/CardContainer";
import Iconchimp from "../../assets/gmail/Iconchimp.jpg";

const MailChimpCard = () => {
  return (
    <CardContainer
      title="Gmail"
      description="These Mailchimp contacts will
      sync to Gmail"
      imgUrl={Iconchimp}
      alt="Iconchimp"
    />
  );
};

export default MailChimpCard;
