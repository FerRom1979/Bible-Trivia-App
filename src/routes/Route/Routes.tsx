import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../template/Home";
import Login from "../../template/Login/Login";
import PrivateRouter from "../PrivateRouter/PrivateRouter.routes";

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
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
