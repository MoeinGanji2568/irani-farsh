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
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
      <div className="flex flex-col space-y-6">
        {/* Filter Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z"
              />
            </svg>
            فیلترهای جستجو
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          {/* Search Input */}
          <div className="lg:col-span-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              جستجوی فرش
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="نام فرش، رنگ، جنس..."
                value={search}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full p-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors outline-none"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Price Range */}
          <div className="lg:col-span-5">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              محدوده قیمت (تومان)
            </label>
            <div className="bg-gray-50 rounded-lg p-4">
              <Slider
                min={PRICE_CONFIG.min}
                max={PRICE_CONFIG.max}
                range
                value={priceRange}
                onChange={(value) =>
                  onPriceRangeChange(value as [number, number])
                }
                allowCross={PRICE_CONFIG.allowCross}
                pushable={PRICE_CONFIG.pushable}
                trackStyle={[{ backgroundColor: "#3B82F6", height: 6 }]}
                railStyle={{ backgroundColor: "#E5E7EB", height: 6 }}
                handleStyle={[
                  {
                    backgroundColor: "#3B82F6",
                    borderColor: "#3B82F6",
                    height: 20,
                    width: 20,
                    marginTop: -7,
                  },
                  {
                    backgroundColor: "#3B82F6",
                    borderColor: "#3B82F6",
                    height: 20,
                    width: 20,
                    marginTop: -7,
                  },
                ]}
              />
              <div className="flex justify-between mt-3 text-sm text-gray-600">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md font-medium">
                  {formatPrice(priceRange[0])}
                </span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md font-medium">
                  {formatPrice(priceRange[1])}
                </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="lg:col-span-2 flex gap-2">
            <button
              onClick={onApplyFilters}
              disabled={isLoading}
              className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg"
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span className="text-sm">اعمال...</span>
                </div>
              ) : (
                <span className="text-sm">اعمال فیلتر</span>
              )}
            </button>

            <button
              onClick={onClearFilters}
              disabled={isLoading}
              className="p-3 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              title="پاک کردن فیلترها"
            >
              <MdDeleteOutline className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSection;
