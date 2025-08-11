import { createBrowserRouter } from "react-router-dom";
import PanelLayout from "../core/layout/PanelLayout";
import PanelPage from "../screens/panel";
import { commonRoute } from "./common.route";
import { FavoritePage } from "../components/panel/favorite";
import { ProfilePage } from "../components/panel/profile";
import Security from "../components/panel/security";
import CreateCarpetPost from "../components/panel/carpet/createCarpetPost";
import Cart from "../components/panel/cart";

export const publicRoutes = createBrowserRouter([
  ...commonRoute,
  {
    element: <PanelLayout />,
    children: [
      {
        path: "/panel",
        element: <PanelPage />,
      },
      {
        path: "/panel/favorite",
        element: <FavoritePage />,
      },
      {
        path: "/panel/cart",
        element: <Cart />,
      },
      {
        path: "/panel/profile",
        element: <ProfilePage />,
      },
      {
        path: "/panel/security",
        element: <Security />,
      },
      {
        path: "/panel/create-carpet-post",
        element: <CreateCarpetPost />,
      },
    ],
  },
]);
