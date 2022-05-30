import React from "react";
import { Navigate } from "react-router-dom";

// Layout Types
import DashboardLayout from "./layouts/Dashboard";

// Route Views
import Home from "./views/dashboard/Home";
import Error from "./views/dashboard/Error";

const routes = [
  {
    path: "*",
    exact: true,
    layout: DashboardLayout,
    component: Error,
  },
  {
    path: "/",
    exact: true,
    layout: DashboardLayout,
    component: () => <Navigate to="/home" />,
  },
  {
    path: "/home",
    exact: true,
    layout: DashboardLayout,
    component: Home,
  },
];

export default routes;
