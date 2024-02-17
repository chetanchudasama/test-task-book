import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

const NotFound = () => {
  return <h1>NotFound</h1>;
};

const Welcome = () => {
  return <h1>Welcome</h1>;
};

const routes = [
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export const router = createBrowserRouter(routes);
