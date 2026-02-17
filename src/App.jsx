import { Contact } from "./components/Contact";
import { BrowserRouter, Route, Routes } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Register } from "./components/auth/Register";
import About from "./components/About";
import Products from "./components/Products";
import { Login } from "./components/auth/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/"
              element={
                <h1>
                  <Home />
                </h1>
              }
            ></Route>
            <Route
              path="/Home"
              element={
                <h1>
                  <Home />
                </h1>
              }
            ></Route>
            <Route
              path="/Products"
              element={
                <h1>
                  <Products />
                </h1>
              }
            ></Route>
            <Route
              path="/About"
              element={
                <h1>
                  <About />
                </h1>
              }
            ></Route>
            <Route
              path="/Contact"
              element={
                <h1>
                  <Contact />
                </h1>
              }
            ></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/Login" element={<Login />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
