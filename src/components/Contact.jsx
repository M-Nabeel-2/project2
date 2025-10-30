import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Controller } from "react-hook-form";

export const Contact = () => {
  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center", m: 3 }}>
        <Typography variant="h3">Contact Us</Typography>
      </Box>
      <hr />
      <Card>
        <form>
          <div className="flex justify-center align-center my-4">
            <label >Name</label>

            <TextField label="Name" sx={{mt:4}}/>
          </div>
        </form>
      </Card>
    </Box>
  );
};
