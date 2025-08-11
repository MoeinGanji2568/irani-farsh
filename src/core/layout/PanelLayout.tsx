import { Outlet } from "react-router-dom";
import Header from "../../components/panel/Header";
import SideBar from "../../components/panel/SideBar";
import MobileSideBarNavs from "../../components/panel/MobileSideBarNavs";

const PanelLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="grid grid-cols-12 h-screen">
        {/* Desktop Sidebar */}
        <aside className="col-span-12 lg:col-span-3 xl:col-span-2 hidden lg:block">
          <div className="h-full bg-white/80 backdrop-blur-sm border-r border-white/20 shadow-xl">
            <SideBar />
          </div>
        </aside>

        {/* Main Content Area */}
        <div className="col-span-12 lg:col-span-9 xl:col-span-10 h-screen flex flex-col">
          {/* Header */}
          <div className="bg-white/90 backdrop-blur-sm border-b border-white/20 shadow-sm">
            <Header />
          </div>

          {/* Main Content */}
          <main className="flex-1 overflow-hidden">
            <div className="h-full p-4 md:p-6 lg:p-8">
              <div className="h-full bg-white/60 backdrop-blur-sm rounded-3xl shadow-xl border border-white/30 overflow-hidden">
                <div className="h-full overflow-y-auto p-6 md:p-8 lg:p-10">
                  <div className="max-w-7xl mx-auto">
                    <Outlet />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>

        {/* Mobile Navigation */}
        <div className="fixed lg:hidden bottom-6 left-1/2 transform -translate-x-1/2 z-50 w-[96%]">
          <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-white/30 p-2">
            <MobileSideBarNavs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelLayout;
