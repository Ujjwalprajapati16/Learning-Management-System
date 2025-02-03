import { useLocation, Navigate } from "react-router-dom";
import { Fragment } from "react";

function RouteGuard({ authenticated, user, element }) {
  const location = useLocation();

  // If not authenticated and trying to access a protected route, redirect to /auth
  if (!authenticated && !location.pathname.startsWith("/auth")) {
    return <Navigate to="/auth" />;
  }

  // If authenticated but trying to access auth pages, redirect to /home
  if (authenticated && location.pathname.startsWith("/auth")) {
    return <Navigate to="/home" />;
  }

  // If authenticated and trying to access instructor routes without permission, redirect to /home
  if (
    authenticated &&
    location.pathname.startsWith("/instructor") &&
    user?.role !== "instructor"
  ) {
    return <Navigate to="/home" />;
  }

  return <Fragment>{element}</Fragment>;
}

export default RouteGuard;
