import {
  ArrowLeftStartOnRectangleIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import SideBarNavs from "./SideBarNavs";

const SideBar = () => {
  return (
    <div className="flex flex-col h-full">
      {/* Brand Header */}
      <div className="p-6 border-b border-gray-200/50">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
            <SparklesIcon className="w-7 h-7 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
              ایرانی فرش
            </span>
            <span className="text-xs text-gray-500">پنل کاربری</span>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto p-4">
        <SideBarNavs />
      </div>

      {/* Logout Section */}
      <div className="p-4 border-t border-gray-200/50">
        <button
          // onClick={logoutHandler}
          className="w-full flex items-center gap-3 rounded-xl font-medium transition-all duration-300 text-gray-700 py-4 px-4 hover:bg-red-50 hover:text-red-600 cursor-pointer group"
        >
          <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300">
            <ArrowLeftStartOnRectangleIcon className="w-5 h-5 text-white" />
          </div>
          <span className="font-semibold">خروج از حساب</span>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
