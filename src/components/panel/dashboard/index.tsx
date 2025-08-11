import { Link } from "react-router-dom";
import {
  HeartIcon,
  ShoppingCartIcon,
  UserIcon,
  PlusIcon,
  EyeIcon,
  StarIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

const Dashboard = () => {
  // Mock data - in real app this would come from API
  const stats = [
    {
      id: 1,
      title: "فرش‌های مورد علاقه",
      value: "12",
      icon: HeartIcon,
      color: "from-pink-500 to-rose-600",
      bgColor: "bg-pink-50",
      href: "/panel/favorite",
    },
    {
      id: 2,
      title: "سبد خرید",
      value: "3",
      icon: ShoppingCartIcon,
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      href: "/panel/cart",
    },
    {
      id: 3,
      title: "پروفایل",
      value: "کامل",
      icon: UserIcon,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      href: "/panel/profile",
    },
    {
      id: 4,
      title: "پست‌های ایجاد شده",
      value: "5",
      icon: PlusIcon,
      color: "from-orange-500 to-amber-600",
      bgColor: "bg-orange-50",
      href: "/panel/create-carpet-post",
    },
  ];

  const recentActivities = [
    {
      id: 1,
      type: "favorite",
      title: "فرش ماشینی کلاسیک",
      description: "به لیست علاقه‌مندی‌ها اضافه شد",
      time: "2 ساعت پیش",
      icon: HeartIcon,
      color: "text-pink-500",
    },
    {
      id: 2,
      type: "cart",
      title: "فرش دستباف اصفهان",
      description: "به سبد خرید اضافه شد",
      time: "1 روز پیش",
      icon: ShoppingCartIcon,
      color: "text-blue-500",
    },
    {
      id: 3,
      type: "view",
      title: "فرش ماشینی مدرن",
      description: "مشاهده شد",
      time: "2 روز پیش",
      icon: EyeIcon,
      color: "text-gray-500",
    },
  ];

  const quickActions = [
    {
      id: 1,
      title: "مشاهده فرش‌ها",
      description: "بررسی محصولات جدید",
      icon: EyeIcon,
      color: "from-purple-500 to-violet-600",
      href: "/rug",
    },
    {
      id: 2,
      title: "ایجاد پست",
      description: "افزودن فرش جدید",
      icon: PlusIcon,
      color: "from-teal-500 to-cyan-600",
      href: "/panel/create-carpet-post",
    },
    {
      id: 3,
      title: "پروفایل",
      description: "ویرایش اطلاعات شخصی",
      icon: UserIcon,
      color: "from-emerald-500 to-green-600",
      href: "/panel/profile",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 md:p-8 text-white">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">
              خوش آمدید به پنل کاربری! 👋
            </h1>
            <p className="text-blue-100 text-sm md:text-base">
              مدیریت حساب کاربری و مشاهده فعالیت‌های اخیر
            </p>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <ChartBarIcon className="w-6 h-6" />
            </div>
            <div className="text-right">
              <p className="text-sm text-blue-100">وضعیت حساب</p>
              <p className="font-semibold">فعال</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Link key={stat.id} to={stat.href} className="group block">
            <div
              className={`${stat.bgColor} rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 group-hover:scale-105`}
            >
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-r ${stat.color}`}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </p>
                </div>
              </div>
              <h3 className="text-gray-700 font-semibold group-hover:text-gray-900 transition-colors">
                {stat.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>

      {/* Quick Actions & Recent Activities */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Quick Actions */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-violet-600 rounded-lg flex items-center justify-center">
              <StarIcon className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">دسترسی سریع</h2>
          </div>

          <div className="space-y-4">
            {quickActions.map((action) => (
              <Link
                key={action.id}
                to={action.href}
                className="flex items-center gap-4 p-4 rounded-lg border border-gray-100 hover:bg-gray-50 hover:border-gray-200 transition-all duration-200 group"
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-r ${action.color}`}
                >
                  <action.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 group-hover:text-gray-700 transition-colors">
                    {action.title}
                  </h3>
                  <p className="text-sm text-gray-500">{action.description}</p>
                </div>
                <div className="text-gray-400 group-hover:text-gray-600 transition-colors">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Recent Activities */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
              <ChartBarIcon className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">فعالیت‌های اخیر</h2>
          </div>

          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div
                key={activity.id}
                className="flex items-start gap-4 p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-all duration-200"
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gray-100 ${activity.color}`}
                >
                  <activity.icon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 truncate">
                    {activity.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {activity.description}
                  </p>
                  <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Summary Card */}
      <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">
              خلاصه فعالیت‌ها
            </h2>
            <p className="text-gray-600">
              در این ماه {stats[0].value} فرش به علاقه‌مندی‌ها و{" "}
              {stats[1].value} محصول به سبد خرید اضافه کرده‌اید
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                <CurrencyDollarIcon className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-gray-600 mt-1">خرید موفق</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                <EyeIcon className="w-6 h-6 text-white" />
              </div>
              <p className="text-sm text-gray-600 mt-1">مشاهده</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
