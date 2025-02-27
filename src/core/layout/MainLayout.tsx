import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="h-screen">
      <Outlet />
    </div>
  );
};

export default MainLayout;
