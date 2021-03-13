import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import DashboardLayout from "./layouts/Dashboard";

// Route Views
import Home from "./views/dashboard/Home";

const routes = [
	{
		path: "/",
		exact: true,
		layout: DashboardLayout,
		component: () => <Redirect to="/home" />
	},
	{
		path: "/home",
		exact: true,
		layout: DashboardLayout,
		component: Home
	}
]

export default routes