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
import ProductDetails from "./frontend/pages/productDetails/ProductDetails";
import Wishlist from "./frontend/pages/wishlist/Wishlist";
import GuestRoute from "./frontend/components/Guest";
import NotFound from "./frontend/pages/notFound/NotFound";
import Profile from "./frontend/pages/profile/Profile";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Checkout from "./frontend/pages/checkout/Checkout";
import Modal from "./frontend/components/addressModal/Modal";

function App() {
  const { pathname } = useLocation();

  const showFooter =
    pathname === "/login" || pathname === "/signup" ? false : true;

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />

        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />

        <Route
          path="/login"
          element={
            <GuestRoute>
              <Login />
            </GuestRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <GuestRoute>
              <Signup />
            </GuestRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />
        <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <Wishlist />
            </PrivateRoute>
          }
        />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {showFooter && <Footer />}
      <Modal />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
