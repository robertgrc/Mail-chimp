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
          marginTop: "67px",
          marginLeft: "109px",
        }}
      />
      <Box sx={{ width: "177.27px", height: "78.91px", marginLeft: "60px" }}>
        <Box
          sx={{
            width: "153.93px",
            height: "23.34px",
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
          }}
        >
          <Typography
            sx={{
              fontSize: "15px",
              marginTop: "14px",
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
      </Box>
    </Stack>
  );
};

export default CardInformation;
