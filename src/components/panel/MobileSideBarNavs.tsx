import { Link, useLocation } from "react-router-dom";
import classNames from "classnames";
import {
  HeartIcon,
  RectangleGroupIcon,
  UserIcon,
  LockClosedIcon,
  PlusIcon,
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
    title: "مورد علاقه",
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
    title: "ایجاد پست",
    icon: <PlusIcon className="w-5 h-5" />,
    href: "/panel/create-carpet-post",
  },
];

const MobileSideBarNavs = () => {
  const location = useLocation();

  return (
    <ul className="flex justify-between items-center">
      {sidebarNavs.map((nav) => {
        return (
          <li key={nav.id}>
            <Link
              to={nav.href}
              className={classNames(
                "flex flex-col items-center gap-x-2 rounded-2xl font-medium hover:text-primary-900 transition-all duration-200 text-secondary-700 py-2 px-3",
                {
                  "bg-primary-100/40 !font-bold text-primary-900":
                    location.pathname === nav.href,
                }
              )}
            >
              <span className="text-sm">{nav.icon}</span>
              <p className="text-xs text-center">{nav.title}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MobileSideBarNavs;
