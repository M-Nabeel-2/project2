import Box from "@mui/material/Box";
import React from "react";
import Hero1 from "../assets/img/herobg.webp";
import Typography from "@mui/material/Typography";

export const Hero = () => {
  return (
    <Box className="relative">
      <Box className="absolute  top-1/3">
        <Typography
          variant="h3"
          sx={{
            fontSize: "40px",
            lineHeight: "48px",
            fontWeight: "Thin (100)",
            ml: 20,
            color: "whitesmoke",
          }}
        >
          New Season Arrivals
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: "20px",
            fontFamily:"sans-serif",
            ml: 20,
            color: "whitesmoke",
          }}
        >
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Typography>
      </Box>
      <Box sx={{ width: "1300px", mt: 2, ml: 8, mr: 7, borderRadius: 20 }}>
        <img src={Hero1} />
      </Box>
    </Box>
  );
};
