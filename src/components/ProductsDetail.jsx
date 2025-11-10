import React from "react";
import Box from "@mui/material/Box";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import ProductsD from "../utils/DummyData";
import Grid from "@mui/material/Grid";
import StarIcon from "@mui/icons-material/Star";
import Button from "@mui/material/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import CircularProgress from "@mui/material/CircularProgress";
import { useDispatch } from "react-redux";
import { addtocart } from "../store/slices/cartStoreSlice";

const ProductsDetail = (props) => {
  const { open, handleClose, currentProductId } = props;

  const selectedProduct = ProductsD.find(
    (product) => product.id === currentProductId
  );
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
          <div
            className="absolute top-1/2 left-1/2 bg-white 
          shadow-lg rounded-xl outline-none max-w-[95vw] w-[90vw] 
          md:w-[800px] max-h-[90vh] transform -translate-x-1/2
           -translate-y-1/2 flex flex-col overflow-y-auto"
          >
            {selectedProduct ? (
              <div className="flex flex-col md:flex-row w-full">
                {/* Images Section */}
                <div className="flex items-center justify-center p-4 md:p-8 md:border-r border-gray-200 w-full md:w-1/2 min-h-[240px]">
                  <Swiper navigation modules={[Navigation]} className="w-full">
                    <SwiperSlide>
                      <img
                        src={selectedProduct.img}
                        alt="1st Image"
                        className="w-full md:w-4/5 object-contain mx-auto"
                      />
                    </SwiperSlide>
                    <SwiperSlide>
                      <img
                        src={selectedProduct.img2}
                        alt="2nd Image"
                        className="w-full md:w-4/5 object-contain mx-auto"
                      />
                    </SwiperSlide>
                  </Swiper>
                </div>
                {/* Details Section */}
                <div className="flex flex-col justify-between gap-3 p-4 md:p-8 w-full md:w-1/2">
                  <div>
                    <Typography
                      variant="subtitle1"
                      className="mt-2 text-sm md:text-lg"
                    >
                      {selectedProduct.catg}
                    </Typography>
                    <Typography
                      variant="h5"
                      className="mt-1 text-lg md:text-2xl font-bold"
                    >
                      {selectedProduct.Fullname}
                    </Typography>
                    <div className="flex items-center gap-2">
                      <Typography
                        variant="subtitle2"
                        className="text-xs md:text-base"
                      >
                        {selectedProduct.productRat}
                      </Typography>
                      <StarIcon className="text-yellow-500 text-base md:text-lg" />
                    </div>
                    <Typography
                      variant="h5"
                      className="mt-2 text-xl md:text-2xl"
                    >
                      ${selectedProduct.price}
                    </Typography>
                    <Typography
                      variant="body2"
                      className="mt-2 text-xs md:text-base text-gray-400"
                    >
                      {selectedProduct.text}
                    </Typography>
                  </div>
                  <Button
                    fullWidth
                    sx={{
                      background: "#ffffffff",
                      color: "#000000ff",
                      width: "8rem",
                      paddingLeft: "6px",
                      paddingRight: "6px",
                      paddingBottom: "2px",
                      paddingtop: "2px",
                      borderRadius: "3rem",
                      marginTop: "2rem",
                      textTransform: "none",
                      transition: "all 0.2s",
                      border: "2px solid #1a1a1a",
                      "&:hover": {
                        background: "#000000ff",
                        color: "#ffffffff",
                        border: "2rem bold",
                      },
                    }}
                    onClick={() => dispatch(addtocart(selectedProduct))}
                  >
                    Add To Cart
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex justify-center items-center p-10">
                <CircularProgress />
              </div>
            )}
          </div>
        </Fade>
      </Modal>
    </>
  );
};

export default ProductsDetail;
