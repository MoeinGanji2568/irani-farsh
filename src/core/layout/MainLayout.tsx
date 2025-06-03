import { Outlet } from "react-router-dom";
import Header from "../../components/common/header";
import Footer from "../../components/common/footer";

const MainLayout = () => {
  return (
    <>
      <div className="px-3">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
