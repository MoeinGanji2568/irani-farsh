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
      <div className="holder">
        <div className="text-center text-red-500 my-10">
          خطا در بارگذاری اطلاعات
        </div>
      </div>
    );
  }

  return (
    <div className="holder">
      <h1 className="text-2xl font-bold text-center my-10">لیست فرش ها</h1>

      <FilterSection
        search={search}
        onSearchChange={setSearch}
        priceRange={priceRange}
        onPriceRangeChange={setPriceRange}
        onApplyFilters={handleApplyFilters}
        onClearFilters={handleClearFilters}
        isLoading={isLoading}
      />

      <ResultsSection
        rugs={rugs}
        isLoading={isLoading}
        hasActiveFilters={hasActiveFilters()}
      />
    </div>
  );
};

export default Rug;
