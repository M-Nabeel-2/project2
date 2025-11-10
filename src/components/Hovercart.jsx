import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";

const Hovercart = () => {
  const { cartList } = useSelector((state) => state.cart);

  const totalPrice = cartList.reduce(
    (prev, curr) => curr.quantity * curr.price + prev,
    0
  );

  return (
    <Box
      className="rounded-l-lg"
      sx={{
        backgroundColor: "#84857eff",
        width: "120px",
        height: "80px",
        padding: 3,
        borderLeft: 4,
        position: "",
        display: "flex",
      }}
    >
      <Button
        variant="body2"
        sx={{ display: "flex", color: "#b9e91aff", justifyContent: "center" }}
      >
        <Typography>({cartList.length})</Typography>
        <ShoppingCartIcon /> Cart
        <br />
      </Button>

      {/* <Button>${totalPrice}</Button> */}
    </Box>
  );
};

export default Hovercart;
