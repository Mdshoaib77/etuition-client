import useAuth from "../Hooks/useAuth";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (user?.role === "admin") {
    return children;
  }

  return <Navigate to="/" replace />;
};

export default AdminRoute;
