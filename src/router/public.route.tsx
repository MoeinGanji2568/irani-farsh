import { createBrowserRouter } from "react-router-dom";
import { commonRoute } from "./common.route";
import MainLayout from "../core/layout/MainLayout";

export const publicRoutes = createBrowserRouter([
  ...commonRoute,
  {
    element: <MainLayout />,
    children: [],
  },
]);
