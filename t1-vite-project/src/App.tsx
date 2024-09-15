import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Home, Product, Cart, NotFound } from "./pages";

import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/12" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
