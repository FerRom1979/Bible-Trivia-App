import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../template/Home";
import PrivateRouter from "../PrivateRouter/PrivateRouter.routes";
import Register from "../../template/Register/Register";
//import Dashboard from "../../template/Dashboard";
import Quiz from "../../template/Quiz/quiz";

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
        <Route
          path="/quiz"
          element={
            <PrivateRouter>
              <Quiz />
            </PrivateRouter>
          }
        />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
