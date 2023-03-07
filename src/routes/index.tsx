import React from "react";

import { Navigate, useRoutes } from "react-router-dom";

import Protected from "../components/auth/protected";

import DashboardLayout from "../layouts";

const Dashboard = React.lazy(() => import("../pages/dashboard"));

const NotFound = () => (
  <div className="p-5 my-5 tect-center">Page not found.</div>
);

const useCustomRoutes = () => {
  return useRoutes([
    {
      element: <DashboardLayout />,
      children: [
        {
          path: "/",
          element: <Navigate to="dashboard" />,
        },
        {
          path: "/dashboard",
          element: (
            <Protected isAuthenticated={true}>
              <Dashboard />
            </Protected>
          ),
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
};

export default useCustomRoutes;
