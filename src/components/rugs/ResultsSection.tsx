import Cards from "../common/Cards/Cards";
import { Carpet } from "../../types/carpets/carpet.types";

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
    <div className="text-center text-gray-500 my-10">
      هیچ فرشی با این فیلترها یافت نشد
    </div>
  );

  const renderLoading = () => (
    <div className="text-center text-gray-500 my-10">در حال بارگذاری...</div>
  );

  const renderResults = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
      {rugs.map((rug: Carpet) => (
        <Cards key={rug.id} rug={rug} />
      ))}
    </div>
  );

  return (
    <>
      {renderResults()}

      {rugs.length === 0 && hasActiveFilters && !isLoading && renderNoResults()}

      {isLoading && rugs.length === 0 && renderLoading()}
    </>
  );
};

export default ResultsSection;
