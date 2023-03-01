import React from "react";
import { Navigate } from "react-router-dom";

const RoleBaseRouting = ({ shouldRedirect, redirectPath }) => {
  if (shouldRedirect) {
    return <Navigate to={redirectPath} />;
  } else if (false) {
    return " <Spinner />";
  } else {
    return "<Outlet />";
  }
};
export default RoleBaseRouting;
