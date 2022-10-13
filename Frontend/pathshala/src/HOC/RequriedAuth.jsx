// todo
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { getItem } from "../Utils/localStorage";

const RequireAuth = ({ children }) => {
  const { isAuth } = useSelector((store) => store.AuthReducer);
  return isAuth ? children : <Navigate to="/login" />;
};

export default RequireAuth;