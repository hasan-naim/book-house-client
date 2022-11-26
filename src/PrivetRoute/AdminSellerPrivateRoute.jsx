import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../components/Loading/Loading";
import { AuthContext } from "../Contexts/AuthProvider";

function AdminSellerPrivateRoute({ children }) {
  const { userFromData } = useContext(AuthContext);
  const location = useLocation();

  if (userFromData === null) {
    return (
      <>
        <Loading />
      </>
    );
  }

  if (userFromData?.role !== "buyer") {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
}

export default AdminSellerPrivateRoute;
