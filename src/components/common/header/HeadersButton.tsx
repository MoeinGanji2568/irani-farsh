import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import {
  ArrowLeftEndOnRectangleIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

const HeadersButton = () => {
  return (
    <div className="flex gap-3">
      <Button variant="outline">
        <ShoppingCartIcon className="size-5" />
      </Button>
      <Link to="/login">
        <Button variant="outline">
          <div className="flex items-center gap-2">
            <ArrowLeftEndOnRectangleIcon className="size-6" />
            <span className="hidden md:block"> ورود/ثبت نام</span>
          </div>
        </Button>
      </Link>
    </div>
  );
};

export default HeadersButton;
