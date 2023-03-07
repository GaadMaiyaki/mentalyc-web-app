import React from "react";

import { Navigate } from "react-router-dom";

const Protected = ({
  isAuthenticated,
  children,
}: {
  isAuthenticated: boolean;
  children: JSX.Element;
}) => {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default Protected;
