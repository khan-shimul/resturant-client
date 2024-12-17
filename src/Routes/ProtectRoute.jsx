import { Navigate, replace, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading)
    return <span className="loading loading-spinner text-error"></span>;
  if (user) return children;
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default ProtectRoute;
