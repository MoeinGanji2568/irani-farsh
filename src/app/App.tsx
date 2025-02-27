import { RouterProvider } from "react-router-dom";
import { publicRoutes } from "../router/public.route";

function App() {
  return (
    <>
      <RouterProvider router={publicRoutes} />
    </>
  );
}

export default App;
