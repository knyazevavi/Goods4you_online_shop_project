import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { HomePage, ProductPage, CartPage, NotFoundPage } from "../pages";

import "../app/styles/App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/12" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
