import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const HeaderSearchInput = () => {
  return (
    <div className="relative text-secondary-500">
      <MagnifyingGlassIcon className="size-5 absolute right-3 top-3" />
      <input
        type="search"
        placeholder="جستجوی فرش"
        className="min-w-[432px] p-3 rounded-lg bg-secondary-200 indent-7"
      />
    </div>
  );
};

export default HeaderSearchInput;
