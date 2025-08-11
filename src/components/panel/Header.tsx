import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { getUserInfoApi } from "../../services/api/auth/authService";
import Button from "../ui/Button";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

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
          <Link to="/panel/cart">
            <Button>
              <ShoppingCartIcon className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
