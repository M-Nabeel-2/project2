import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Jac1 from "../assets/img/jacket1.webp";

const womens = () => {
  return (
    <>
      <Box>
        <Card sx={{ maxWidth: 360, ml: 4, boxShadow: "#000" }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="80"
            padding="40px"
            image={Jac1}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{
                padding: 2,
                display: "center",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              BIYLACLESEN ...
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                padding: 2,
                display: "center",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              Note:The Jackets is US standard size, Please choose size as your
              usual wear Material: 100%...
            </Typography>
          </CardContent>
          <hr />
          <Box
            variant="body2"
            sx={{
              padding: 1,
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            $ 56.99
          </Box>
          <hr />
          <CardActions
            sx={{
              padding: 2,
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Button
              size="small"
              sx={{
                backgroundColor: "#000",
                color: "#ffffffff",
                padding: "8px",
                borderRadius: "14px",
              }}
            >
              Buy Now
            </Button>
            <Button
              size="small"
              sx={{
                backgroundColor: "#000",
                color: "#ffffffff",
                padding: "8px",
                borderRadius: "14px",
              }}
            >
              Add To Cart
            </Button>
          </CardActions>
        </Card>
      </Box>
    </>
  );
};

export default womens;
