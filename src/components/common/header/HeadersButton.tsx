import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import {
  ArrowLeftEndOnRectangleIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { getUserInfoApi } from "../../../services/api/auth/authService";
import { useQuery } from "@tanstack/react-query";

const HeadersButton = () => {
  const { data: userInfo, isLoading } = useQuery({
    queryKey: ["userInfo"],
    queryFn: getUserInfoApi,
  });

  return (
    <div className={`flex gap-3 ${isLoading ? "opacity-50" : ""}`}>
      <Button variant="outline">
        <ShoppingCartIcon className="size-5" />
      </Button>
      <Link to="/login">
        <Button variant="outline">
          <div className="flex items-center gap-2">
            <ArrowLeftEndOnRectangleIcon className="size-6" />
            <span className="hidden md:block">
              {userInfo?.data ? "داشبورد" : "ورود/ثبت نام"}
            </span>
          </div>
        </Button>
      </Link>
    </div>
  );
};

export default HeadersButton;
