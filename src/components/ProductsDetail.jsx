import React from "react";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import styleproductDetail from "../assets/style";
import ProductsD from "../utils/DummyData";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/Star";
import Button from "@mui/material/Button";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch } from "react-redux";
import { addtocart } from "../store/slices/cartStoreSlice";
import Products from "./Products";

const ProductsDetail = (props) => {
  const { open, handleClose, currentProductId } = props;

  const selectedProduct = ProductsD.find(
    (product) => product.id === currentProductId
  );
  console.log(selectedProduct);
  const dispatch = useDispatch();

  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box fontStyle={styleproductDetail}>
            {selectedProduct ? (
              <Box
                sx={{
                  flexGrow: 1,
                  width: "800px",
                  display: "-ms-flexbox",
                  height: "500px",
                }}
              >
                <Grid container spacing={0}>
                  <Grid size={6} item xs={12} md={6}>
                    <Swiper
                      navigation={true}
                      modules={[Navigation]}
                      className="mySwiper p-10"
                    >
                      <SwiperSlide>
                        <img
                          className="w-50 m-28"
                          src={selectedProduct.img}
                          alt="1st Image"
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        <img
                          className="w-50 m-28"
                          src={selectedProduct.img2}
                          alt="2nd Image"
                        />
                      </SwiperSlide>
                    </Swiper>
                  </Grid>
                  <Grid size={6} item xs={12} md={6}>
                    <Typography
                      sx={{ mt: 4, fontSize: "18px" }}
                      variant="subtitle1"
                    >
                      {selectedProduct.catg}
                    </Typography>
                    <Typography variant="h4" sx={{ mt: 1 }}>
                      {selectedProduct.Fullname}
                    </Typography>
                    <Typography variant="subtitle2">
                      {selectedProduct.productRat}
                      <StarIcon sx={{ color: "#d8c517ff" }} />
                    </Typography>
                    <Typography variant="h4" sx={{ mt: 1 }}>
                      ${selectedProduct.price}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ mt: 1 }}>
                      {selectedProduct.text}
                    </Typography>
                    <Button
                      sx={{
                        border: 1,
                        borderColor: "#000",
                        color: "#FFF",
                        backgroundColor: "#000",
                        padding: 2,
                        borderRadius: 40,
                        justifyContent: "center",
                        alignContent: "center",
                        m: 3,
                      }}
                      onClick={() => dispatch(addtocart(Products))}
                    >
                      Add To Cart
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            ) : (
              <Box className="p-20 flex justify-center">
                <CircularProgress />
              </Box>
            )}
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default ProductsDetail;
