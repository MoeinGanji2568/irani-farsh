import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getUserInfoApi } from "../../services/api/auth/authService";
import Button from "../ui/Button";
import {
  ShoppingCartIcon,
  BellIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUserInfoApi,
  });

  return (
    <header className="relative">
      <div className="flex items-center justify-between py-4 md:py-6 px-4 md:px-6 lg:px-8">
        {/* User Welcome Section */}
        <div className="flex items-center gap-2 md:gap-4 min-w-0 flex-1">
          <div className="flex items-center gap-2 md:gap-3 min-w-0">
            <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
              <UserCircleIcon className="w-4 h-4 md:w-8 md:h-8 text-white" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-sm md:text-lg font-bold text-gray-800 truncate">
                سلام، {user?.data?.firstName} {user?.data?.lastName} 👋
              </span>
              <span className="text-xs md:text-sm text-gray-500 hidden sm:block">
                به پنل کاربری خوش آمدید
              </span>
            </div>
          </div>
        </div>

        {/* Actions Section */}
        <div className="flex items-center gap-1 md:gap-3 flex-shrink-0">
          {/* Notifications - Hidden on small screens */}
          <button className="hidden sm:block relative p-2 md:p-3 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-xl transition-all duration-200 group">
            <BellIcon className="w-5 h-5 md:w-6 md:h-6" />
            <span className="absolute -top-1 -right-1 w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full animate-pulse"></span>
            <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              اعلان‌های جدید
            </div>
          </button>

          {/* Cart */}
          <Link to="/panel/cart">
            <button className="relative p-2 md:p-3 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-xl transition-all duration-200 group">
              <ShoppingCartIcon className="w-5 h-5 md:w-6 md:h-6" />
              <span className="absolute -top-1 -right-1 w-2 h-2 md:w-3 md:h-3 bg-blue-500 rounded-full animate-pulse"></span>
              <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                سبد خرید
              </div>
            </button>
          </Link>

          {/* User Menu */}
          <div className="flex items-center gap-2 md:gap-3 pl-2 md:pl-4 border-l border-gray-200">
            <div className="hidden md:flex flex-col items-end">
              <span className="text-xs md:text-sm font-medium text-gray-700 truncate max-w-32">
                {user?.data?.email || "کاربر"}
              </span>
              <span className="text-xs text-gray-500">
                {user?.data?.role || "کاربر عادی"}
              </span>
            </div>
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-200 flex-shrink-0">
              <span className="text-white font-bold text-xs md:text-sm">
                {user?.data?.firstName?.charAt(0) || "U"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Loading Overlay */}
      {isLoading && (
        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm flex items-center justify-center">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
            <span className="text-gray-600">در حال بارگذاری...</span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
