import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, replace, useLocation } from "react-router-dom";

const ProtectRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading)
    return <span className="loading loading-spinner text-error"></span>;
  if (user) return children;
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default ProtectRoute;
