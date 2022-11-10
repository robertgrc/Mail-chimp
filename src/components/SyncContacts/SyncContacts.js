import { Avatar, Box, Typography } from "@mui/material";
import React, { useState } from "react";

import SyncButton from "../../assets/syncImgs/SyncButton.jpg";

const SyncContacts = ({ onClickTogle }) => {
  const [syncContacts, setSyncContacts] = useState(true);
  const toggleSync = () => {
    setSyncContacts(!syncContacts);
    syncContacts && onClickTogle();
  };
  //console.log(syncContacts);

  return (
    <Box>
      <Avatar
        src={SyncButton}
        alt="SyncButton"
        onClick={toggleSync}
        sx={{
          width: "132px",
          height: "133px",
          cursor: "pointer",
          zIndex: "2",
          // webkitTransform: "rotate(180deg)",
          // mozTransform: "rotate(180deg)",
          // oTransform: "rotate(180deg)",
          // msTransform: "rotate(180deg)",
          //transform: "rotate(180deg)",
          //transform: `rotate(${syncContacts ? "0" : "-180"}deg)`,
          transitionDuration: "0.2s",
          transform: `rotate(${syncContacts ? "0" : "-180"}deg)`,
        }}
      />
      <Box>
        {syncContacts ? (
          <Typography
            sx={{
              fontFamily: "Noto Sans",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "25px",
              textAlign: "center",
              color: " #374A5E",
              marginTop: "9px",
            }}
          >
            Sync Contacts
          </Typography>
        ) : (
          <Typography
            sx={{
              fontFamily: "Noto Sans",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "25px",
              textAlign: "center",
              color: " #374A5E",
              marginTop: "9px",
            }}
          >
            All done!
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default SyncContacts;
