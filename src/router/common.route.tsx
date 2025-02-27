import MainLayout from "../core/layout/MainLayout";
import Landing from "../screens/landing/Landing";

export const commonRoute = [
  {
    path: "/",
    element: <MainLayout />,
    children: [{ element: <Landing />, index: true }],
  },
];
