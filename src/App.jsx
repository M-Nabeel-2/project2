import { useState } from "react";
import AppHeader from "./components/AppHeader";
import { Hero } from "./components/Hero";
import { Contact } from "./components/Contact";
import Hovercart from "./components/Hovercart";
import Box from "@mui/material/Box";
import Products from "./components/Products";
import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";




function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
