import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Grid,
} from "@mui/material";
import ProductsDetail from "./ProductsDetail";
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "../store/slices/cartStoreSlice";

const Products = (props) => {
  const dispatch = useDispatch();
  const { Products: ProductsDD } = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false);
  const [currentProductId, setcurrentProductId] = useState({});
  const [filteredProducts, setFilteredProducts] = useState(ProductsDD);
  const [activeCatg, setActiveCatg] = useState("All");

  const handleOpen = (ProductsDetails) => {
    setcurrentProductId(ProductsDetails.id);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

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
        {/* Title */}
        <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
          <Typography variant="h4" gutterBottom>
            Latest Products
          </Typography>
        </Box>
        <hr />
        {/* Category Filter Buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
            my: 7,
            bgcolor: "#fafbfc",
            borderRadius: "14px",
            boxShadow: "0 2px 8px rgba(60,72,100,0.08)",
            px: 3,
            py: 2,
          }}
        >
          <Button
            variant={activeCatg === "All" ? "contained" : "outlined"}
            sx={{
              border: "2px solid #1a1a1a",
              color: activeCatg === "All" ? "#fff" : "#1a1a1a",
              background: activeCatg === "All" ? "#1a1a1a" : "#fff",
              px: 3,
              py: 1.5,
              borderRadius: "3rem",
              fontWeight: 600,
              textTransform: "none",
              transition: "all 0.2s",
              "&:hover": {
                background: "#292929",
                color: "#fff",
                borderColor: "#292929",
              },
            }}
            onClick={() => filterByCatg("All")}
          >
            All
          </Button>

          <Button
            variant={activeCatg === "MENS Clothes" ? "contained" : "outlined"}
            sx={{
              border: "2px solid #1a1a1a",
              color: activeCatg === "MENS Clothes" ? "#fff" : "#1a1a1a",
              background: activeCatg === "MENS Clothes" ? "#1a1a1a" : "#fff",
              px: 3,
              py: 1.5,
              borderRadius: "3rem",
              fontWeight: 600,
              textTransform: "none",
              transition: "all 0.2s",
              "&:hover": {
                background: "#292929",
                color: "#fff",
                borderColor: "#292929",
              },
            }}
            onClick={() => filterByCatg("MENS Clothes")}
          >
            Men's Clothes
          </Button>

          <Button
            variant={
              activeCatg === "Women's Clothes" ? "contained" : "outlined"
            }
            sx={{
              border: "2px solid #1a1a1a",
              color: activeCatg === "Women's Clothes" ? "#fff" : "#1a1a1a",
              background: activeCatg === "Women's Clothes" ? "#1a1a1a" : "#fff",
              px: 3,
              py: 1.5,
              borderRadius: "3rem",
              fontWeight: 600,
              textTransform: "none",
              transition: "all 0.2s",
              "&:hover": {
                background: "#292929",
                color: "#fff",
                borderColor: "#292929",
              },
            }}
            onClick={() => filterByCatg("Women's Clothes")}
          >
            Women's Clothes
          </Button>

          <Button
            variant={activeCatg === "Jewelery" ? "contained" : "outlined"}
            sx={{
              border: "2px solid #1a1a1a",
              color: activeCatg === "Jewelery" ? "#fff" : "#1a1a1a",
              background: activeCatg === "Jewelery" ? "#1a1a1a" : "#fff",
              px: 3,
              py: 1.5,
              borderRadius: "3rem",
              fontWeight: 600,
              textTransform: "none",
              transition: "all 0.2s",
              "&:hover": {
                background: "#292929",
                color: "#fff",
                borderColor: "#292929",
              },
            }}
            onClick={() => filterByCatg("Jewelery")}
          >
            Jewelry
          </Button>

          <Button
            variant={activeCatg === "Electronics" ? "contained" : "outlined"}
            sx={{
              border: "2px solid #1a1a1a",
              color: activeCatg === "Electronics" ? "#fff" : "#1a1a1a",
              background: activeCatg === "Electronics" ? "#1a1a1a" : "#fff",
              px: 3,
              py: 1.5,
              borderRadius: "3rem",
              fontWeight: 600,
              textTransform: "none",
              transition: "all 0.2s",
              "&:hover": {
                background: "#292929",
                color: "#fff",
                borderColor: "#292929",
              },
            }}
            onClick={() => filterByCatg("Electronics")}
          >
            Electronics
          </Button>
        </Box>

        {/* Product Cards - Responsive 3-row layout */}
        <Box sx={{ flexGrow: 1, px: 2 }}>
          <Grid container spacing={3} justifyContent="center">
            {filteredProducts?.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    border: "1px solid #eee",
                    borderRadius: "12px",
                    maxWidth: 340,
                    padding: "16px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <CardMedia
                    sx={{
                      width: "240px",
                      height: "240px",
                      objectFit: "contain",
                      margin: "0 auto",
                      cursor: "pointer",
                    }}
                    component="img"
                    image={product?.img}
                    onClick={() => handleOpen(product)}
                  />
                  <CardContent sx={{ width: "100%" }}>
                    <Typography
                      gutterBottom
                      variant="h6"
                      align="center"
                      sx={{ fontWeight: 600 }}
                    >
                      {product?.productName}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#666",
                        textAlign: "center",
                        minHeight: "48px",
                        mb: 2,
                      }}
                    >
                      {product?.text1}
                    </Typography>
                  </CardContent>
                  <hr />
                  <Typography variant="h6" sx={{ margin: "8px 0" }}>
                    ${product?.price}
                  </Typography>
                  <hr />
                  <CardActions sx={{ justifyContent: "center", pb: 2 }}>
                    <Button
                      size="small"
                      onClick={() => handleOpen(product)}
                      sx={{
                        background: "#ffffffff",
                        color: "#000000ff",
                        borderRadius: "3rem",
                        px: 2,
                        mx: 1,
                        border: "2px solid #1a1a1a",
                        textTransform: "none",
                        transition: "all 0.2s",
                        "&:hover": {
                          background: "#000000ff",
                          color: "#ffffffff",
                          border: "2rem bold",
                        },
                      }}
                    >
                      Product Details
                    </Button>
                    <Button
                      size="small"
                      onClick={() => dispatch(addtocart(product))}
                      sx={{
                        background: "#ffffffff",
                        color: "#000000ff",
                        borderRadius: "3rem",
                        px: 2,
                        mx: 1,
                        border: "2px solid #1a1a1a",
                        textTransform: "none",
                        transition: "all 0.2s",
                        "&:hover": {
                          background: "#000000ff",
                          color: "#ffffffff",
                          border: "2rem bold",
                          borderColor: "#000000ff",
                        },
                      }}
                    >
                      Add To Cart
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      {/* Product Details Modal */}
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
