import Box from "@mui/material/Box";
import React from "react";
import Products from "./Products.jsx";
import { Hero } from "./Hero";
import Hovercart from "./Hovercart";
import { Contact } from "./Contact";

export const Home = () => {
  return (
    
    <Box className="relative">
      <Hero />
      <Products />

      <Box className="absolute right-0 top-1/2">
        <Hovercart />
      </Box>
      <Contact />
    </Box>
  );
};
