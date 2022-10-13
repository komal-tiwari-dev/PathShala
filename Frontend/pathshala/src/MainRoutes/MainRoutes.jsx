import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Homepage from "../Pages/Homepage";
import Tests from "../Pages/Tests";
import RequiredAuth from "../HOC/RequriedAuth";
const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <RequiredAuth>
              <Homepage />
            </RequiredAuth>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/test/:studentID"
          element={
            <RequiredAuth>
              <Tests />
            </RequiredAuth>
          }
        />
      </Routes>
    </div>
  );
};

export default MainRoutes;
