import React from "react";
import Box from "@mui/material/Box";
import { useState } from "react";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import styleproductDetails from "../assets/style";
import Bag from "../assets/img/Bag.webp";
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

const ProductsDetail = (props) => {
  const { open, handleClose, currentProductId } = props;

  const selectedProduct = ProductsD.find(
    (product) => product.id === currentProductId
  );
  console.log(selectedProduct);

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
          <Box fontStyle={styleproductDetails}>
            {selectedProduct ? (
              <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={0}>
                  <Grid size={6}>
                    <Swiper
                      navigation={true}
                      modules={[Navigation]}
                      className="mySwiper"
                    >
                      <SwiperSlide>
                        <img
                          className="w-58 m-30"
                          src={selectedProduct.img}
                          alt=""
                        />
                      </SwiperSlide>
                      <SwiperSlide>
                        {" "}
                        <img
                          className="w-58 m-30"
                          src={selectedProduct.img2}
                          alt=""
                        />
                      </SwiperSlide>
                    </Swiper>
                  </Grid>
                  <Grid size={6}>
                    <Typography sx={{ mt: 10 }} variant="subtitle1">
                      Mens Cloths
                    </Typography>
                    <Typography variant="h4" sx={{ mt: 1 }}>
                      {selectedProduct.Fullname}
                    </Typography>
                    <Typography variant="subtitle1">
                      {selectedProduct.productRat}
                      <StarIcon />
                    </Typography>
                    <Typography variant="h4" sx={{ mt: 4 }}>
                      {selectedProduct.price}
                    </Typography>
                    <Typography variant="subtitle2" sx={{ mt: 3 }}>
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
                        mt: 4,
                        m: 1,
                      }}
                    >
                      Add To Cart
                    </Button>
                    <Button
                      sx={{
                        border: 1,
                        borderColor: "#000",
                        color: "#FFF",
                        backgroundColor: "#000",
                        padding: 2,
                        borderRadius: 40,
                        mt: 4,
                        m: 1,
                      }}
                    >
                      Go To Cart
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
