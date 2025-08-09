import { useQuery } from "@tanstack/react-query";
import { useState, useCallback } from "react";
import { getCarpet } from "../../services/api/carpets";
import FilterSection from "./FilterSection";
import ResultsSection from "./ResultsSection";

interface AppliedFilters {
  search: string;
  minPrice: number;
  maxPrice: number;
}

const DEFAULT_PRICE_RANGE: [number, number] = [1000000, 95000000];
const DEFAULT_FILTERS: AppliedFilters = {
  search: "",
  minPrice: 0,
  maxPrice: 0,
};

const Rug = () => {
  const [search, setSearch] = useState("");
  const [priceRange, setPriceRange] =
    useState<[number, number]>(DEFAULT_PRICE_RANGE);
  const [appliedFilters, setAppliedFilters] =
    useState<AppliedFilters>(DEFAULT_FILTERS);

  const {
    data: rugs = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["carpets", appliedFilters],
    queryFn: () =>
      getCarpet(
        1,
        10,
        appliedFilters.search,
        appliedFilters.minPrice,
        appliedFilters.maxPrice
      ),
  });

  const handleApplyFilters = useCallback(() => {
    setAppliedFilters({
      search,
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
    });
  }, [search, priceRange]);

  const handleClearFilters = useCallback(() => {
    setSearch("");
    setPriceRange(DEFAULT_PRICE_RANGE);
    setAppliedFilters(DEFAULT_FILTERS);
  }, []);

  const hasActiveFilters = useCallback(() => {
    return (
      Boolean(appliedFilters.search) ||
      appliedFilters.minPrice > 0 ||
      appliedFilters.maxPrice > 0
    );
  }, [appliedFilters]);

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
              <svg
                className="w-8 h-8 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              خطا در بارگذاری اطلاعات
            </h3>
            <p className="text-gray-600 mb-6">
              متأسفانه مشکلی در دریافت اطلاعات فرش‌ها پیش آمده است.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center px-4 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
            >
              تلاش مجدد
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            مجموعه فرش‌های ایرانی
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            از میان بهترین فرش‌های دستباف ایرانی انتخاب کنید
          </p>
        </div>

        {/* Filter Section */}
        <div className="mb-8">
          <FilterSection
            search={search}
            onSearchChange={setSearch}
            priceRange={priceRange}
            onPriceRangeChange={setPriceRange}
            onApplyFilters={handleApplyFilters}
            onClearFilters={handleClearFilters}
            isLoading={isLoading}
          />
        </div>

        {/* Results Section */}
        <ResultsSection
          rugs={rugs}
          isLoading={isLoading}
          hasActiveFilters={hasActiveFilters()}
        />
      </div>
    </div>
  );
};

export default Rug;
