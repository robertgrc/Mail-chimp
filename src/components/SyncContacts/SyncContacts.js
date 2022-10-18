import { Avatar, Box, Typography } from "@mui/material";
import React, { useState } from "react";
// import redArrow from "../../assets/syncImgs/redArrow.png";
// import blackArrow from "../../assets/syncImgs/blackArrow.jpg";

import SyncButton from "../../assets/syncImgs/SyncButton.jpg";

const SyncContacts = () => {
  const [syncContacts, setSyncContacts] = useState(false);
  const toggleSync = () => {
    setSyncContacts(!syncContacts);
  };
  console.log(syncContacts);

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
        }}
      />
      <Box>
        {toggleSync ? (
          <Typography
            sx={{
              fontFamily: "Noto Sans",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "25px",
              textAlign: "center",
              color: " #374A5E",
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
