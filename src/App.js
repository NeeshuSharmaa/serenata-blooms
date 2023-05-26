import { Route, Routes, useLocation } from "react-router";
import "./App.css";

import Navbar from "./frontend/components/navbar/Navbar";
import Home from "./frontend/pages/home/Home";
import Mockman from "mockman-js";
import Footer from "./frontend/components/footer/Footer";
import Store from "./frontend/pages/store/Store";
import Login from "./frontend/pages/loginSignup/Login";
import Signup from "./frontend/pages/loginSignup/Signup";
import Cart from "./frontend/pages/cart/Cart";
import PrivateRoute from "./frontend/components/PrivateRoute";

function App() {
  const { pathname } = useLocation();

  const showFooter =
    pathname === "/login" || pathname === "/signup" ? false : true;
  console.log(showFooter);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
      {showFooter && <Footer />}
    </div>
  );
}

export default App;
