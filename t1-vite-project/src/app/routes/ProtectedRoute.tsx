import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../store/store";
import { useGetCurrentUserQuery } from "../../features/Auth/api/authApi";
import { logout, setAuthInfo } from "../../features/Auth/model/authSlice";
import { Loading } from "../../shared";

const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const dispatch = useDispatch();

  const token = localStorage.getItem("token");
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const {
    data: currentUser,
    error,
    isLoading,
  } = useGetCurrentUserQuery(undefined, {
    skip: !token,
  });

  useEffect(() => {
    if (token && currentUser && !error) {
      dispatch(
        setAuthInfo({
          accessToken: token,
          user: currentUser,
          isAuthenticated: true,
        })
      );
    }
  }, [token, currentUser, error, dispatch]);

  useEffect(() => {
    if ((!token || error) && isAuthenticated) {
      dispatch(logout());
    }
  }, [token, error, isAuthenticated, dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  if (!isAuthenticated && !token) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
