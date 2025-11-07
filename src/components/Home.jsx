import React from "react";
import Box from "@mui/material/Box";
import Products from "./Products.jsx";
import { Hero } from "./Hero";
import Hovercart from "./Hovercart";
import Cartlist from "./CartList/Cartlist.jsx";
import { useState } from "react";

export const Home = () => {
  const [OpenCartlist, setOpenCartlist] = useState(false);
  const [CartProducts, setCartProducits] = useState([]);

  const toggleDrawer = (newOpen) => () => {
    setOpenCartlist(newOpen);
  };
  return (
    <>
      <Box className="relative">
        <Hero />
        <Products setCartProducits={setCartProducits} />

        <Box onClick={toggleDrawer(true)} className="absolute right-0 top-1/9">
          <Hovercart />
        </Box>
      </Box>
      <Cartlist OpenCartlist={OpenCartlist} toggleDrawer={toggleDrawer} />
    </>
  );
};
