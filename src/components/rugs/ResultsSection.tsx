import Cards from "../common/Cards/Cards";
import { Carpet } from "../../types/carpets/carpet.types";
import { SkeletonGrid } from "../common/LoadingSkeleton";

interface ResultsSectionProps {
  rugs: Carpet[];
  isLoading: boolean;
  hasActiveFilters: boolean;
}

const ResultsSection = ({
  rugs,
  isLoading,
  hasActiveFilters,
}: ResultsSectionProps) => {
  const renderNoResults = () => (
    <div className="text-center py-16">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-6">
        <svg
          className="w-10 h-10 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.562M15 6.5a7.966 7.966 0 00-6 0m6 0V3.5a.5.5 0 00-.5-.5h-3a.5.5 0 00-.5.5v3M9 6.5V3.5a.5.5 0 01.5-.5h3a.5.5 0 01.5.5v3"
          />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        هیچ فرشی یافت نشد
      </h3>
      <p className="text-gray-600 mb-6 max-w-md mx-auto">
        با فیلترهای انتخاب شده فرشی یافت نشد. لطفا فیلترها را تغییر دهید.
      </p>
      <div className="flex justify-center gap-4">
        <button className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
          تغییر فیلترها
        </button>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          مشاهده همه فرش‌ها
        </button>
      </div>
    </div>
  );

  const renderLoading = () => (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          <span className="text-gray-600 font-medium">
            در حال بارگذاری فرش‌ها...
          </span>
        </div>
        <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
          لطفا منتظر بمانید
        </div>
      </div>
      <SkeletonGrid count={8} />
    </div>
  );

  const renderResults = () => (
    <div className="space-y-6">
      {/* Results Header */}
      <div className="flex items-center justify-between bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
            <svg
              className="w-5 h-5 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">
              {rugs.length} فرش یافت شد
            </h3>
            <p className="text-sm text-gray-600">
              بهترین فرش‌های منطبق با جستجوی شما
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <select className="text-sm border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none">
            <option>مرتب‌سازی بر اساس</option>
            <option>جدیدترین</option>
            <option>قیمت: کم به زیاد</option>
            <option>قیمت: زیاد به کم</option>
            <option>محبوب‌ترین</option>
          </select>
        </div>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {rugs.map((rug: Carpet) => (
          <Cards key={rug.id} rug={rug} />
        ))}
      </div>

      {/* Load More Button */}
      {rugs.length > 0 && (
        <div className="text-center pt-8">
          <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg">
            نمایش فرش‌های بیشتر
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div>
      {/* Loading State */}
      {isLoading && renderLoading()}

      {/* No Results State */}
      {!isLoading && rugs.length === 0 && hasActiveFilters && renderNoResults()}

      {/* Results State */}
      {!isLoading && rugs.length > 0 && renderResults()}
    </div>
  );
};

export default ResultsSection;
