const SkeletonCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-pulse">
      {/* Image Skeleton */}
      <div className="w-full h-48 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer"></div>

      <div className="p-4 space-y-4">
        {/* Title Skeleton */}
        <div className="space-y-2">
          <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded w-3/4"></div>
          <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded w-1/2"></div>
        </div>

        {/* Features Skeleton */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <div className="h-3 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded w-16"></div>
            <div className="h-3 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded w-12"></div>
          </div>
          <div className="flex justify-between items-center">
            <div className="h-3 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded w-20"></div>
            <div className="h-3 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded w-16"></div>
          </div>
        </div>

        {/* Price and Actions Skeleton */}
        <div className="pt-4 border-t border-gray-100 space-y-3">
          <div className="flex justify-between items-center">
            <div className="h-5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded w-24"></div>
            <div className="flex gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-full"></div>
              <div className="w-8 h-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-full"></div>
            </div>
          </div>
          <div className="h-10 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded-lg w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
