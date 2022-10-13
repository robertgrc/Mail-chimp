import { Avatar, Stack, Typography } from "@mui/material";
import React from "react";

const CardInformation = ({ title, description, imgUrl }) => {
  return (
    <Stack sx={{ backgroundColor: "yellow" }}>
      <Avatar src={imgUrl} sx={{ width: "66.13", height: "66.13" }} />
      <Typography>{title}</Typography>
      <Typography>{description}</Typography>
    </Stack>
  );
};

export default CardInformation;
