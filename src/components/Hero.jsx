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
            fontSize: "1.8rem",
            lineHeight: "48px",
            fontWeight: "bold",
            ml: 20,
            color: "whitesmoke",
            width:"50%"
          }}
        >
          New Season Arrivals
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: "1rem",
            fontFamily: "sans-serif",
            ml: 20,
            color: "whitesmoke",
            display: { xs: "none", md: "flex" },
          }}
        >
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Typography>
      </Box>
      <Box
        sx={{
          width: "90%",
          m: 13,
          borderRadius: 30,
        }}
      >
        <img src={Hero1} />
      </Box>
    </Box>
  );
};
