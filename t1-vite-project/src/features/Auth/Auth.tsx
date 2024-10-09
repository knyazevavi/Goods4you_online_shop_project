import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

import { setAuthInfo } from "./model/authSlice";
import AuthInput from "./ui/AuthInput/AuthInput";
import ButtonAuth from "../../shared/ui/ButtonAuth/ButtonAuth";
import { useLoginMutation } from "./api/authApi";
import { Loading, Warning } from "../../shared";
import { ErrorObj } from "../../shared";

import styles from "./Auth.module.css";

const Auth: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginUser, { isLoading, isError, error }] = useLoginMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const result = await loginUser({ username, password });
      if (result && result.data) {
        const { accessToken, ...userData } = result.data;
        localStorage.setItem("token", accessToken);
        dispatch(
          setAuthInfo({ accessToken, user: userData, isAuthenticated: true })
        );
        navigate("/");
      }
    } catch (error) {
      toast.error("Login failed");
    }
  };

  useEffect(() => {
    if (isError && error && "status" in error) {
      const err = error as ErrorObj;
      const errorMsg = err.data?.message || "Error authorization";
      toast.error(errorMsg);
    }
  }, [isError, error]);

  return (
    <div className={styles.content}>
      {isError ? (
        <Warning name="Error authorization" />
      ) : (
        <>
          <h1 className={styles.title}>Sign in</h1>
          <form className={styles.form}>
            {isLoading ? (
              <Loading />
            ) : (
              <>
                <AuthInput
                  placeholder="Login"
                  value={username}
                  handleChange={(e) => setUsername(e.target.value)}
                />
                <AuthInput
                  placeholder="Password"
                  value={password}
                  handleChange={(e) => setPassword(e.target.value)}
                />
                <ButtonAuth onClick={handleLogin} name="Sign In" />{" "}
              </>
            )}
          </form>
        </>
      )}
      <ToastContainer />
    </div>
  );
};
export default Auth;
