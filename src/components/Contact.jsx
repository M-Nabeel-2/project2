import React from "react";
import Card from "@mui/material/Card";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import TextareaAutosize from "@mui/material/TextareaAutosize";

export const Contact = () => {
  return (
    <>
      <Card
        sx={{
          mt: 10,
          width: 500,
          height: 450,
          justifySelf: "center",
          alignContent: "center",
          boxShadow: "#000000ff",
          border: 2,
        }}
      >
        <div className="flex justify-center  text-3xl font-black mt-10">
          <p>Contact Us</p>
        </div>
        <br />
        <form>
          <div>
            <div className="flex justify-center">
              <div>
                <label>Name</label> <br />
                <TextField id="fullWidth" />
              </div>
            </div>

            <div className="flex justify-center">
              <div>
                <label>Email Address</label> <br />
                <TextField id="fullWidth" />
              </div>
            </div>

            <div className="flex justify-center">
              <div>
                <label>Message</label> <br />
                <TextareaAutosize
                  aria-label="minimum height"
                  maxRows={3}
                  minLength={3}
                  placeholder="Your Message"
                  style={{ width: 210 }}
                />
              </div>
            </div>
            <div className="text-center mt-4">
              <Button
                className="shrink-0"
                sx={{ border: 2, color: "#000", background: "#878787ff" }}
              >
                Send
              </Button>
            </div>
          </div>
        </form>
      </Card>
    </>
  );
};
