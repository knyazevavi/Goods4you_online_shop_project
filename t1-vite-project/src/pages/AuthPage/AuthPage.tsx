import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { Header } from "../../widgets";
import { Auth } from "../../features";
import { RootState } from "../../app/store/store";
import { setAuthInfo } from "../../features/Auth/model/authSlice";
import { useGetCurrentUserQuery } from "../../features/Auth/api/authApi";

const AuthPage: React.FC = () => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const { currentData: currentUser } = useGetCurrentUserQuery(undefined, {
    skip: !token,
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(
        setAuthInfo({
          accessToken: token,
          user: currentUser,
          isAuthenticated: true,
        })
      );
    }
  }, [dispatch]);

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  useEffect(() => {
    document.title = "Sign in | Goods4you";
  }, []);
  return (
    <>
      <Header />
      <Auth />
    </>
  );
};
export default AuthPage;
