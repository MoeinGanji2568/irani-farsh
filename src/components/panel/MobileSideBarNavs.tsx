import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import {
  HeartIcon,
  RectangleGroupIcon,
  UserIcon,
  LockClosedIcon,
  PlusIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

const sidebarNavs: {
  id: number;
  title: string;
  icon: React.ReactNode;
  href: string;
  color: string;
  bgColor: string;
}[] = [
  {
    id: 1,
    title: "داشبورد",
    icon: <RectangleGroupIcon className="w-5 h-5" />,
    href: "/panel",
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
  },
  {
    id: 2,
    title: "مورد علاقه",
    icon: <HeartIcon className="w-5 h-5" />,
    href: "/panel/favorite",
    color: "from-pink-500 to-rose-600",
    bgColor: "bg-pink-50",
  },
  {
    id: 3,
    title: "پروفایل",
    icon: <UserIcon className="w-5 h-5" />,
    href: "/panel/profile",
    color: "from-green-500 to-emerald-600",
    bgColor: "bg-green-50",
  },
  {
    id: 4,
    title: "امنیت",
    icon: <LockClosedIcon className="w-5 h-5" />,
    href: "/panel/security",
    color: "from-purple-500 to-violet-600",
    bgColor: "bg-purple-50",
  },
  {
    id: 5,
    title: "ایجاد پست",
    icon: <PlusIcon className="w-5 h-5" />,
    href: "/panel/create-carpet-post",
    color: "from-orange-500 to-amber-600",
    bgColor: "bg-orange-50",
  },
  {
    id: 6,
    title: "سبد خرید",
    icon: <ShoppingCartIcon className="w-5 h-5" />,
    href: "/panel/cart",
    color: "from-teal-500 to-cyan-600",
    bgColor: "bg-teal-50",
  },
];

const MobileSideBarNavs = () => {
  const location = useLocation();

  return (
    <div className="flex justify-between items-center px-2">
      {sidebarNavs.map((nav) => {
        const isActive = location.pathname === nav.href;

        return (
          <Link
            key={nav.id}
            to={nav.href}
            className={classNames(
              "flex flex-col items-center gap-1 rounded-xl font-medium transition-all duration-300 py-3 px-2 relative group",
              {
                "text-gray-800 shadow-sm border border-gray-200": isActive,
                "text-gray-600 hover:text-gray-800": !isActive,
              },
              isActive ? nav.bgColor : ""
            )}
          >
            {/* Icon */}
            <div
              className={classNames(
                "w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 relative z-10",
                {
                  "bg-white shadow-sm": isActive,
                  "bg-gray-100 group-hover:bg-gray-200": !isActive,
                }
              )}
              style={
                isActive
                  ? {
                      background: `linear-gradient(135deg, ${
                        nav.color.split(" ")[1]
                      }, ${nav.color.split(" ")[3]})`,
                      color: "gray",
                    }
                  : {}
              }
            >
              {nav.icon}
            </div>

            {/* Text */}
            <span className="text-xs font-medium relative z-10 text-center leading-tight">
              {nav.title}
            </span>

            {/* Active indicator */}
            {isActive && (
              <div
                className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full"
                style={{
                  background: `linear-gradient(135deg, ${
                    nav.color.split(" ")[1]
                  }, ${nav.color.split(" ")[3]})`,
                }}
              />
            )}
          </Link>
        );
      })}
    </div>
  );
};

export default MobileSideBarNavs;
