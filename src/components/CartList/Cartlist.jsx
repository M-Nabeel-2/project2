import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

import { useSelector } from "react-redux";

export default function Cartlist(props) {
  const { OpenCartlist, toggleDrawer } = props;
  const cartList = useSelector((state) => state.cart);

  console.log(cartList, "Addtocart");

  return (
    <div>
      <Drawer open={OpenCartlist} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          {cartList?.length ? (
            <div>
              {cartList.map(() => {
                return (
                  <>
                    <div>
                      <img src={product?.img} alt="Product Image" />
                    </div>
                    <div>{product?.productName}</div>
                  </>
                );
              })}
            </div>
          ) : (
            <h1>No prodcuts</h1>
          )}
        </Box>
      </Drawer>
    </div>
  );
}
