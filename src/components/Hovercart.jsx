import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { createNodeImportMeta } from "vite/module-runner";

const Hovercart = (props) => {
  const { open, handleClose } = props;
  return (
    <Box
      className="rounded-l-lg"
      sx={{
        backgroundColor: "#84857eff",
        width: "100px",
        height: "70px",
        padding: 3,
        borderLeft: 4,
        position: "sticky",
        display: "flex",
      }}
    >
      <Typography
        variant="body2"
        sx={{ display: "flex", color: "#b9e91aff", justifyContent: "center" }}
      >
        <ShoppingCartIcon /> Cart
      </Typography>
    </Box>
  );
};

export default Hovercart;
