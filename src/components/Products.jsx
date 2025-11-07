import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import Grid from "@mui/material/Grid";
import ProductsDetail from "./ProductsDetail";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "../store/slices/cartStoreSlice";
import { Link } from "react-router";

const Products = (props) => {
  const dispatch = useDispatch();

  const { Products: ProductsDD } = useSelector((state) => state.cart);

  const [open, setOpen] = useState(false);
  const [currentProductId, setcurrentProductId] = useState({});

  const handleOpen = (ProductsDetails) => {
    setcurrentProductId(ProductsDetails.id);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);
  const [filteredProducts, setFilteredProducts] = useState(ProductsDD);
  const [activeCatg, setActiveCatg] = useState("All");

  const filterByCatg = (catg) => {
    setActiveCatg(catg);

    if (catg === "All") {
      setFilteredProducts(ProductsDD);
    } else {
      const filtered = ProductsDD.filter((item) => item.catg === catg);
      setFilteredProducts(filtered);
    }
  };

  return (
    <>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            marginTop: 3,
            mt: 10,
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
            sx={{ border: 2, color: "#000" }}
            onClick={() => filterByCatg("All")}
          >
            All
          </Button>

          <Button
            sx={{ border: 2, color: "#000" }}
            onClick={() => filterByCatg("MENS Clothes")}
          >
            Men's Clothes
          </Button>

          <Button
            sx={{ border: 2, color: "#000" }}
            onClick={() => filterByCatg("Women's Clothes")}
          >
            Women's Clothes
          </Button>

          <Button
            sx={{ border: 2, color: "#000" }}
            onClick={() => filterByCatg("Jewelery")}
          >
            Jewelry
          </Button>

          <Button
            sx={{ border: 2, color: "#000" }}
            onClick={() => filterByCatg("Electronics")}
          >
            Electronics
          </Button>
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={3} marginLeft={14}>
            {filteredProducts?.map((product) => {
              return (
                <Card
                  key={product.id}
                  sx={{
                    maxWidth: 300,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    m: 2,
                    display: "-ms-flexbox",
                    boxShadow: "#000",
                  }}
                  className="shrink-0"
                >
                  <CardMedia
                    sx={{
                      width: 280,
                      display: "flex",
                      justifyContent: "center",
                      alignContent: "center",
                      padding: 2,
                      m: 3,
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
                    ${product?.price}
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
                      onClick={() => handleOpen(product)}
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
                      onClick={() => dispatch(addtocart(product))}
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
