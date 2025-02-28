import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { FC } from "react";

interface HeaderSearchInputProps {
  extraClass?: string;
}

const HeaderSearchInput: FC<HeaderSearchInputProps> = ({ extraClass = "" }) => {
  return (
    <div className={`${extraClass} relative text-secondary-500`}>
      <MagnifyingGlassIcon className="size-5 absolute right-3 top-3" />
      <input
        type="search"
        placeholder="جستجوی فرش"
        className="w-full md:min-w-[400px] lg:min-w-[432px] p-3 rounded-lg bg-secondary-200 indent-7"
      />
    </div>
  );
};

export default HeaderSearchInput;
