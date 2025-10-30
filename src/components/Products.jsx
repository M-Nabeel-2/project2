import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import ProductsD from "../utils/DummyData";
import Grid from "@mui/material/Grid";
import ProductsDetail from "./ProductsDetail";
import { useState } from "react";

const Products = () => {
  const [open, setOpen] = useState(false);
  const [currentProductId, setcurrentProductId] = useState({});

  const handleOpen = (ProductsDetails) => {
    // console.log(ProductsDetails);
    setcurrentProductId(ProductsDetails.id);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            marginTop: 3,
            mt: 7,
          }}
        >
          <Typography variant="h4">Latest Products</Typography>
        </Box>
        <hr />
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            marginTop: 7,
            marginBottom: 7,
            gap: 2,
          }}
        >
          <Button
            className="shrink-0"
            sx={{ border: 2, color: "#000" }}
            onClick={open}
          >
            All
          </Button>
          <Button className="shrink-0" sx={{ border: 2, color: "#000" }}>
            Men's Clothes
          </Button>
          <Button className="shrink-0" sx={{ border: 2, color: "#000" }}>
            Women's Clothes
          </Button>
          <Button className="shrink-0" sx={{ border: 2, color: "#000" }}>
            Jewelry
          </Button>
          <Button className="shrink-0" sx={{ border: 2, color: "#000" }}>
            Electronics
          </Button>
        </Box>
        <Box sx={{ flexGrow: 2 }}>
          <Grid container spacing={4} marginLeft={10}>
            {ProductsD?.map((product) => {
              return (
                <Card
                  key={product.id}
                  sx={{
                    maxWidth: 280,
                    ml: 8,
                    mt: 3,
                    display: "-ms-flexbox",
                    boxShadow: "#000",
                  }}
                  className="shrink-0"
                >
                  <CardMedia
                    sx={{
                      width: 180,
                      display: "flex",
                      justifyContent: "center",
                      alignContent: "center",
                      ml: 8,
                      mt: 3,
                    }}
                    onClick={() => handleOpen(product)}
                    className="cursor-pointer"
                    component="img"
                    alt="green iguana"
                    height="80"
                    padding="40px"
                    image={product?.img}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{
                        padding: 3,
                        display: "center",
                        justifyContent: "center",
                        alignContent: "center",
                      }}
                    >
                      {product?.productName}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "text.secondary",
                        padding: 2,
                        display: "center",
                        justifyContent: "center",
                      }}
                    >
                      {product?.text}
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
                    {product?.price}
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
                      onClick={handleOpen}
                      sx={{
                        backgroundColor: "#000",
                        color: "#ffffffff",
                        padding: "8px",
                        borderRadius: "14px",
                      }}
                    >
                      Product Details
                    </Button>
                    <Button
                      size="small"
                      sx={{
                        backgroundColor: "#000",
                        color: "#ffffffff",
                        padding: "7px",
                        borderRadius: "14px",
                      }}
                    >
                      Add To Cart
                    </Button>
                  </CardActions>
                </Card>
              );
            })}
          </Grid>
        </Box>
      </Box>

      {open && (
        <ProductsDetail
          open={open}
          handleClose={handleClose}
          currentProductId={currentProductId}
        />
      )}
    </>
  );
};

export default Products;
