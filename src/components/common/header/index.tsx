import {
  ArrowLeftEndOnRectangleIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import Button from "../../ui/Button";
import HeaderSearchInput from "./HeaderSearchInput";
import NavigationSection from "./NavigationSection";

const Header = () => {
  return (
    <div className="holder">
      <div className="flex items-center justify-between py-5">
        <div className="flex items-center gap-5">
          <h1 className="text-red text-2xl font-bold">ایرانی فرش</h1>
          <HeaderSearchInput />
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <ShoppingCartIcon className="size-5" />
          </Button>
          <Button variant="outline">
            <div className="flex items-center gap-2">
              <ArrowLeftEndOnRectangleIcon className="size-6" />
              <span> ورود/ثبت نام</span>
            </div>
          </Button>
        </div>
      </div>
      <NavigationSection />
    </div>
  );
};

export default Header;
