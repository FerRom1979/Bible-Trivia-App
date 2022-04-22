import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../template/Home";
import Login from "../../template/Login/Login";
import PrivateRouter from "../PrivateRouter/PrivateRouter.routes";
import Register from "../../template/Register/Register";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRouter>
              <Home />
            </PrivateRouter>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
