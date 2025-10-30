import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

export default function CartList(props) {
  const { openCartlist, toggleDrawer } = props;

  return (
    <div>
      <Drawer open={openCartlist} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: 300 }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <h1>Products</h1>
        </Box>
      </Drawer>
    </div>
  );
}
