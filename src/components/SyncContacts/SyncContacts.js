import { Avatar } from "@mui/material";
import React from "react";
import redArrow from "../../assets/syncImgs/redArrow.png";
import blackArrow from "../../assets/syncImgs/blackArrow.jpg";

const SyncContacts = () => {
  return (
    <Avatar sx={{ width: 132, height: 133, background: "" }}>
      <img src={blackArrow} alt="blackArrowImg" />
      <img src={redArrow} alt="redArrowImg" />
    </Avatar>
  );
};

export default SyncContacts;
