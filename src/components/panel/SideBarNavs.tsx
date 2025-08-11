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
    title: "فرش های مورد علاقه",
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
    title: "ایجاد پست فرش",
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

const SideBarNavs = () => {
  const location = useLocation();

  return (
    <div className="space-y-2">
      {sidebarNavs.map((nav) => {
        const isActive = location.pathname === nav.href;

        return (
          <Link
            key={nav.id}
            to={nav.href}
            className={classNames(
              "group flex items-center gap-3 rounded-xl font-medium transition-all duration-300 py-3 px-4 relative overflow-hidden",
              {
                "text-gray-800 shadow-md border border-gray-200": isActive,
                "text-gray-600 hover:text-gray-800 hover:bg-gray-50": !isActive,
              },
              isActive ? nav.bgColor : ""
            )}
          >
            {/* Icon */}
            <div
              className={classNames(
                "w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 relative z-10",
                {
                  "bg-white shadow-sm": isActive,
                  "bg-gray-100 text-gray-600 group-hover:bg-gray-200":
                    !isActive,
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
            <span className="font-semibold relative z-10">{nav.title}</span>

            {/* Active indicator */}
            {isActive && (
              <div
                className="absolute left-0 top-1/2 transform -translate-y-1/2 w-1 h-8 rounded-r-full"
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

export default SideBarNavs;
