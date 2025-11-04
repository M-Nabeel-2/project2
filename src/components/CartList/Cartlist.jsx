import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { useDispatch, useSelector } from "react-redux";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { useColorScheme } from "@mui/material/styles";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { addtocart, romvefromCart } from "../../store/slices/cartStoreSlice";
import { Link } from "react-router";

export default function Cartlist(props) {
  const { OpenCartlist, toggleDrawer } = props;
  const { cartList } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const totalPrice = cartList.reduce(
    (prev, curr) => curr.quantity * curr.price + prev,
    0
  );

  // console.log(totalPrice);

  return (
    <div>
      <Drawer open={OpenCartlist} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 250 }} role="presentation">
          {cartList?.length ? (
            <div>
              {cartList.map((product) => {
                return (
                  <>
                    <div className="flex gap-10 m-2 items-center">
                      <img
                        className="w-[50px]  "
                        src={product?.img}
                        alt="Product Image"
                      />

                      <div>
                        {product?.productName}
                        <ButtonGroup
                          variant="outlined"
                          aria-label="Basic button group"
                          sx={{ color: "#000" }}
                        >
                          <Button
                            size="small"
                            onClick={() => dispatch(romvefromCart(product))}
                          >
                            <RemoveIcon />
                          </Button>
                          <Button size="small">{product?.quantity}</Button>
                          <Button
                            size="small"
                            onClick={() => dispatch(addtocart(product))}
                          >
                            <AddIcon />
                          </Button>
                        </ButtonGroup>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          ) : (
            <h1>No prodcuts</h1>
          )}
          {cartList?.length ? (
            <Button
              fullwidth
              sx={{ border: 2, color: "#000", m: 3, borderRadius: 4 }}
            >
              Total Price ${totalPrice}
            </Button>
          ) : (
            <Link to="/Products">
              <Button sx={{ border: 2, color: "#000", m: 3, borderRadius: 4 }}>
                Add Items To Cart
              </Button>
            </Link>
          )}
        </Box>
      </Drawer>
    </div>
  );
}
