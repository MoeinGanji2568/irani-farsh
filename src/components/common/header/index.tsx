import { Bars3Icon } from "@heroicons/react/24/outline";
import HeadersButton from "./HeadersButton";
import HeaderSearchInput from "./HeaderSearchInput";
import NavigationSection, { CustomLink } from "./NavigationSection";
import Button from "../../ui/Button";
import { useState } from "react";
import Drawer from "../../ui/Drawer";

const Header = () => {
  const [isOpenDrawer, setIsOpenDrawer] = useState<boolean>(false);
  return (
    <div className="holder">
      <div className="flex items-center justify-between py-5">
        <div className="flex items-center gap-5">
          <Button
            variant="secondary"
            className="block md:hidden"
            onClick={() => setIsOpenDrawer(true)}
          >
            <Bars3Icon className="size-5" />
          </Button>
          <h1 className="text-red text-lg md:text-2xl font-bold">ایرانی فرش</h1>
          <HeaderSearchInput extraClass="hidden md:block" />
        </div>
        <HeadersButton />
      </div>
      <NavigationSection />
      <HeaderSearchInput extraClass="block md:hidden mx-auto" />
      <Drawer open={isOpenDrawer} onClose={() => setIsOpenDrawer(false)}>
        <CustomLink />
      </Drawer>
    </div>
  );
};

export default Header;
