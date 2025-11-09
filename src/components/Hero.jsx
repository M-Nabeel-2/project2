import Box from "@mui/material/Box";
import React from "react";
import Hero1 from "../assets/img/herobg.webp";
import Typography from "@mui/material/Typography";

export const Hero = () => {
  return (
    <Box className="relative">
      <Box
        className="absolute  top-1/3"
        sx={{
          top: "50%",
          transform: "translateY(-50%)",
          px: { xs: 2, md: 6 },
          py: { xs: 2, md: 3 },
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          left: { xs: "20%", md: "12%" },
          width: { xs: "70%", md: "70%" },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "1.4rem", md: "2.2rem" },
            lineHeight: "1.15",
            fontWeight: "bold",
            mb: 2,
            color: "#f6f6f6",
            letterSpacing: "0.03em",
          }}
        >
          New Season Arrivals
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontSize: { xs: "0.95rem", md: "1.2rem" },
            color: "#e4e4e4",
            mb: 1,
            display: { xs: "none", md: "block" },
            fontFamily: "inherit",
          }}
        >
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Typography>
      </Box>
      <Box
        sx={{
          minHeight: { xs: 220, md: 400 },
          width: "80%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          my: 10,
          mx: 6,
        }}
      >
        <img src={Hero1} />
      </Box>
    </Box>
  );
};
