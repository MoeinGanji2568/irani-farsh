import Login from "../components/Login/Login";
import RugsDetail from "../components/rugs/rugsDetail/RugsDetail";
import MainLayout from "../core/layout/MainLayout";
import Landing from "../screens/landing/Landing";

export const commonRoute = [
  {
    path: "/",
    element: <MainLayout />,
    children: [{ element: <Landing />, index: true }],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/rug/:id",
    element: <RugsDetail />,
  },
];
