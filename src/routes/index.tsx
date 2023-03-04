import React from "react";

import { useRoutes } from "react-router-dom";

import Protected from "../components/auth/protected";

import DashboardLayout from "../layouts";

const Dashboard = React.lazy(() => import("../pages/dashboard"));

const NotFound = () => <div>Page not found.</div>;

const useCustomRoutes = () => {
  return useRoutes([
    {
      element: <DashboardLayout />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
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
