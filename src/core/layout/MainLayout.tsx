import { Outlet } from "react-router-dom";
import Header from "../../components/common/header";

const MainLayout = () => {
  return (
    <div className="h-screen px-3">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
