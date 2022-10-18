import { Avatar, Box, Stack, Typography } from "@mui/material";
import React from "react";

const CardInformation = ({ title, description, imgUrl }) => {
  return (
    // <Stack sx={{ backgroundColor: "yellow" }}>
    <Stack>
      <Avatar
        src={imgUrl}
        sx={{
          width: "66.13px",
          height: "66.13px",
          marginTop: "66.68px",
          marginLeft: "109.47px",
        }}
      />

      <Box
        sx={{
          width: "153.93px",
          height: "23.34px",
          marginLeft: "60px",
        }}
      >
        <Typography
          sx={{
            marginTop: "7px",
            marginLeft: "10px",
            fontSize: "18px",
            fontFamily: "Noto Sans",
            fontStyle: "normal",
            fontWeight: "500",
            lineHeight: "25px",
            textAlign: "center",
            color: "#374A5E",
          }}
        >
          {title}
        </Typography>
      </Box>
      <Box
        sx={{
          width: "177.27px",
          height: "41.12px",
          marginLeft: "50.57px",
        }}
      >
        <Typography
          sx={{
            fontSize: "14px",
            marginTop: "14.45px",
            fontFamily: "Noto Sans",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "20px",
            textAlign: "center",
            color: "#33475B",
          }}
        >
          {description}
        </Typography>
      </Box>
    </Stack>
  );
};

export default CardInformation;
