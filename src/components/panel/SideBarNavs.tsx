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
}[] = [
  {
    id: 1,
    title: "داشبورد",
    icon: <RectangleGroupIcon className="w-5 h-5" />,
    href: "/panel",
  },
  {
    id: 2,
    title: "فرش های مورد علاقه",
    icon: <HeartIcon className="w-5 h-5" />,
    href: "/panel/favorite",
  },
  {
    id: 3,
    title: "پروفایل",
    icon: <UserIcon className="w-5 h-5" />,
    href: "/panel/profile",
  },
  {
    id: 4,
    title: "امنیت",
    icon: <LockClosedIcon className="w-5 h-5" />,
    href: "/panel/security",
  },
  {
    id: 5,
    title: "ایجاد پست فرش",
    icon: <PlusIcon className="w-5 h-5" />,
    href: "/panel/create-carpet-post",
  },
  {
    id: 6,
    title: "سبد خرید",
    icon: <ShoppingCartIcon className="w-5 h-5" />,
    href: "/panel/cart",
  },
];

const SideBarNavs = () => {
  const location = useLocation();

  return (
    <ul className="space-y-2">
      {sidebarNavs.map((nav) => {
        return (
          <li key={nav.id}>
            <Link
              to={nav.href}
              className={classNames(
                "flex items-center gap-x-2 rounded-2xl font-medium hover:text-primary-900 transition-all duration-200 text-secondary-700 py-3 px-4",
                {
                  "bg-primary-100/40 !font-bold text-primary-900":
                    location.pathname === nav.href,
                }
              )}
            >
              {nav.icon}
              {nav.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SideBarNavs;
