import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Home from "../Pages/Home";
import PrivateRoute from "../Componenets/PrivateRoute";
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        ></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
