import Login from "../components/Login/Login";
import RugsDetail from "../components/rugs/rugsDetail/RugsDetail";
import MainLayout from "../core/layout/MainLayout";
import Landing from "../screens/landing/Landing";

export const commonRoute = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { element: <Landing />, index: true },
      {
        path: "/rug/:id",
        element: <RugsDetail />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
];
