import { Outlet } from "react-router-dom";
import Header from "../../components/panel/Header";
import SideBar from "../../components/panel/SideBar";

const PanelLayout = () => {
  return (
    <div className="bg-slate-300">
      <div className="grid grid-cols-12 h-screen">
        <aside className="col-span-12 lg:col-span-3 xl:col-span-2 hidden lg:block">
          <SideBar />
        </aside>
        <div className="col-span-12 lg:col-span-9 xl:col-span-10 h-screen flex flex-col">
          <Header />
          <main className="bg-slate-200 rounded-tr-3xl p-4 md:p-6 lg:p-10 flex-1 overflow-y-auto">
            <div className="xl:max-w-screen-xl">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default PanelLayout;
