import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const [isAuthenticated, setISAuthenticated] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    setISAuthenticated(!!token);
  });
  if (isAuthenticated == null) return null;
  return isAuthenticated ? <Outlet /> : <Navigate to="/signin" replace />;
};

export default ProtectedRoute;
