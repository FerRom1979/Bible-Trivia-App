import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../template/Home";
import PrivateRouter from "../PrivateRouter/PrivateRouter.routes";
import Register from "../../template/Register/Register";
import Dashboard from "../../template/Dashboard";
import Quiz from "../../template/Quiz/quiz";
import CardQuestions from "../../components/CardQuestions";
import CardResult from "../../components/CardResult";
import ConfigQuestions from "../../components/ConfigQuestions";
import DashboardAdmin from "../../template/DashboardAdmin";

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
        <Route
          path="/config-questions"
          element={
            <PrivateRouter>
              <ConfigQuestions />
            </PrivateRouter>
          }
        />
        <Route
          path="/card-questions"
          element={
            <PrivateRouter>
              <CardQuestions />
            </PrivateRouter>
          }
        />
        <Route
          path="/card-results"
          element={
            <PrivateRouter>
              <CardResult />
            </PrivateRouter>
          }
        />
        <Route
          path="/dashboard-admin"
          element={
            <PrivateRouter>
              <DashboardAdmin />
            </PrivateRouter>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRouter>
              <Dashboard />
            </PrivateRouter>
          }
        />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
