import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRouter = ({ children }: any) => {
  const loading = false;
  const user = true;
  if (loading) return <h1>Loading....</h1>;

  if (!user) return <Navigate to={"/login"} />;

  return <>{children}</>;
};

export default PrivateRouter;
