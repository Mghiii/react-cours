import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import SingleProduct from "./components/pages/SingleProduct";
import Navbar from "./components/Navbar";
import products from "./data";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home products={products} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/product/:id"
          element={<SingleProduct products={products} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
