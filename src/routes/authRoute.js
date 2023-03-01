import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { getLocalStorage } from "utils/localStorageUtils";

const AuthRoute = () => {
  const token = getLocalStorage("token");

  if (token) {
    return <Outlet />;
  } else {
    return <Navigate to="/reset" />;
  }
};

export default AuthRoute;
