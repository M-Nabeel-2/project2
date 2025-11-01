import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, NavLink } from "react-router";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Badge from "@mui/material/Badge";
import ProductsDD from "../components/Products";

const drawerWidth = 240;

function AppHeader(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: "bold" }}>
        <Link to="Home"> Emporium Mart</Link>
      </Typography>
      <Divider />
      <Box
        className="items-center gap-5 flex-col"
        sx={{
          display: { xs: "block" },
          display: "flex",
          color: "#000",
          justifyContent: "justify-between",
          alignItems: "center",
        }}
      >
        <NavLink
          to="/Home"
          className={({ isActive }) =>
            isActive ? "text-[#A6E22E] font-bold px-3" : "text-gray-500 px-3"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/Products"
          className={({ isActive }) =>
            isActive ? "text-[#A6E22E] font-bold px-3" : "text-gray-500 px-3"
          }
        >
          Products
        </NavLink>
        <NavLink
          to="/About"
          className={({ isActive }) =>
            isActive ? "text-[#A6E22E] font-bold px-3" : "text-gray-500 px-3"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/Contact"
          className={({ isActive }) =>
            isActive ? "text-[#A6E22E] font-bold px-3" : "text-gray-500 px-3"
          }
        >
          Contact
        </NavLink>
      </Box>
      <Box>
        <Badge
          badgeContent={ProductsDD?.length}
          color="primary"
          className="mx-4"
        >
          <AddShoppingCartIcon />
        </Badge>
        <Button className="shrink-0" sx={{ border: 2, color: "#000", m: 1 }}>
          <NavLink to="/Login"> Login</NavLink>
        </Button>
        <Button className="shrink-0" sx={{ border: 2, color: "#000", m: 1 }}>
          <NavLink to="/Register"> Register</NavLink>
        </Button>
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        elevation={0}
        sx={{ backgroundColor: "#f5f5f5ff", color: "#000" }}
      >
        <Toolbar className="flex justify-between">
          <Box className="flex items-center gap-5">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                fontWeight: "bold",
                display: { xs: "none", sm: "block" },
              }}
            >
              <Link to="Home"> Emporium Mart</Link>
            </Typography>
          </Box>
          <Box className sx={{ display: { xs: "none", sm: "block" } }}>
            <NavLink
              to="/Home"
              className={({ isActive }) =>
                isActive
                  ? "text-[#41A67E] font-bold px-3"
                  : "text-gray-500 px-3"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/Products"
              className={({ isActive }) =>
                isActive
                  ? "text-[#41A67E] font-bold px-3"
                  : "text-gray-500 px-3"
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/About"
              className={({ isActive }) =>
                isActive
                  ? "text-[#41A67E] font-bold px-3"
                  : "text-gray-500 px-3"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                isActive
                  ? "text-[#41A67E] font-bold px-3"
                  : "text-gray-500 px-3"
              }
            >
              Contact
            </NavLink>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Badge
              badgeContent={ProductsDD?.length}
              color="primary"
              className="mx-5"
            >
              <AddShoppingCartIcon />
            </Badge>
            <Button
              className="shrink-0"
              sx={{ border: 2, color: "#000", mr: 1 }}
            >
              <NavLink to="/Login"> Login</NavLink>
            </Button>
            <Button
              className="shrink-0"
              sx={{ border: 2, color: "#000", mr: 1 }}
            >
              <NavLink to="/Register"> Register</NavLink>
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default AppHeader;
