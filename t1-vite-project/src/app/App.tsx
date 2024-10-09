import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";

import ProtectedRoute from "./routes/ProtectedRoute";
import {
  HomePage,
  ProductPage,
  CartPage,
  NotFoundPage,
  AuthPage,
} from "../pages";
import { RootState } from "./store/store";
import { useFetchCartItems } from "../shared";

import "../app/styles/App.css";

const App: React.FC = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const userInfo = useSelector((state: RootState) => state.auth.user);
  useFetchCartItems(userInfo?.id);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/product/:id"
          element={
            <ProtectedRoute>
              <ProductPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/login"
          element={isAuthenticated ? <Navigate to="/" replace /> : <AuthPage />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default App;
