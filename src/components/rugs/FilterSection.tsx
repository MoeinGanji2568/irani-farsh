import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { MdDeleteOutline } from "react-icons/md";

interface FilterSectionProps {
  search: string;
  onSearchChange: (value: string) => void;
  priceRange: [number, number];
  onPriceRangeChange: (value: [number, number]) => void;
  onApplyFilters: () => void;
  onClearFilters: () => void;
  isLoading: boolean;
}

const PRICE_CONFIG = {
  min: 1000000,
  max: 95000000,
  allowCross: false,
  pushable: true,
} as const;

const FilterSection = ({
  search,
  onSearchChange,
  priceRange,
  onPriceRangeChange,
  onApplyFilters,
  onClearFilters,
  isLoading,
}: FilterSectionProps) => {
  const formatPrice = (price: number) => {
    return price.toLocaleString("fa-IR");
  };

  return (
    <div className="p-6 basicborder rounded-lg mb-6">
      <div className="flex flex-col lg:flex-row gap-4 lg:items-center items-start">
        {/* Search Input */}
        <div className="flex-1 w-full">
          <label className="block text-sm font-medium mb-2">جستجوی فرش</label>
          <input
            type="text"
            placeholder="جستجوی فرش ..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full p-3 outline-none border rounded-lg"
          />
        </div>

        {/* Price Range */}
        <div className="w-full lg:w-[300px]">
          <label className="block text-sm font-medium mb-2">محدوده قیمت</label>
          <Slider
            min={PRICE_CONFIG.min}
            max={PRICE_CONFIG.max}
            range
            value={priceRange}
            onChange={(value) => onPriceRangeChange(value as [number, number])}
            allowCross={PRICE_CONFIG.allowCross}
            pushable={PRICE_CONFIG.pushable}
          />
          <div className="flex justify-between mt-2 text-sm">
            <span>تا {formatPrice(priceRange[1])} تومان</span>
            <span>از {formatPrice(priceRange[0])} تومان</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="w-full lg:w-auto flex gap-2 mt-2">
          <button
            onClick={onApplyFilters}
            disabled={isLoading}
            className="flex-1 lg:flex-none px-5 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? "در حال اعمال..." : "اعمال فیلترها"}
          </button>
          <button
            onClick={onClearFilters}
            disabled={isLoading}
            className="px-4 py-3 bg-gray-100 text-rose-700 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            title="پاک کردن فیلترها"
          >
            <MdDeleteOutline />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
