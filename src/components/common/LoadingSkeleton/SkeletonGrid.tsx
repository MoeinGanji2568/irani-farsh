import SkeletonCard from "./SkeletonCard";

interface SkeletonGridProps {
  count?: number;
}

const SkeletonGrid = ({ count = 6 }: SkeletonGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {Array.from({ length: count }, (_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
};

export default SkeletonGrid;
