import React from "react";
import { useNavigate } from "react-router-dom";

function PrivateRoutes({ children }) {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  return <>{token ? { children } : navigate("/signin")}</>;
}

export default PrivateRoutes;
