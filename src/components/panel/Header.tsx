import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { useQuery } from "@tanstack/react-query";
import { getUserInfoApi } from "../../services/api/auth/authService";

const Header = () => {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: getUserInfoApi,
  });
  return (
    <header
      className={`bg-slate-300 ${isLoading ? "bg-opacity-30 blur-md" : ""}`}
    >
      <div className="flex items-center justify-between py-5 px-4 lg:px-8">
        <div className="flex items-center gap-x-3">
          <div className="flex flex-col lg:flex-row justify-start lg:items-center gap-x-2">
            <span className="text-sm lg:text-lg font-bold text-secondary-700">
              سلام؛ {user?.data?.firstName} {user?.data?.lastName}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-x-3">
          <Link to="/">
            <Button
              color="outline"
              className={`border-slate-200 rounded-2xl flex cursor-pointer items-center`}
            >
              {/* <Avatar src={user?.avatarUrl} /> */}avatar
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
