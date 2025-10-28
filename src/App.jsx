import { useState } from "react";
import AppHeader from "./components/AppHeader";
import { Hero } from "./components/Hero";
import { Products } from "./components/Products";
import { Contact } from "./components/Contact";
import Hovercart from "./components/Hovercart";
import Box from "@mui/material/Box";
function App() {
  const [count, setCount] = useState(0);

  return (
    <Box className="relative">
      <AppHeader />
      <Hero />
      <Products />
      
      <Box className="absolute right-0 top-1/2">
        
        <Hovercart />
        </Box> 
      <Contact />
      
    </Box>
  );
}

export default App;
