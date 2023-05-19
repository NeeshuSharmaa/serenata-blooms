import { Route, Routes } from "react-router";
import "./App.css";

import Navbar from "./frontend/components/navbar/Navbar";
import Home from "./frontend/pages/home/Home";
import Mockman from "mockman-js";
import Footer from "./frontend/components/footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Routes>
        <Route path="/mockman" element={<Mockman />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
