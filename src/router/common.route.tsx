import Login from "../components/Login/Login";
import RugsDetail from "../components/rugs/rugsDetail/RugsDetail";
import MainLayout from "../core/layout/MainLayout";
import Landing from "../screens/landing/Landing";
import Carpets from "../screens/carpets";

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
      {
        path: "/rug",
        element: <Carpets />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
];
