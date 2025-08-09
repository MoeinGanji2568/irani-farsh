import { FC } from "react";
import { Carpet } from "../../../types/carpets/carpet.types";
import Button from "../../ui/Button";
import { AiOutlineShop } from "react-icons/ai";
import { FaRegStar } from "react-icons/fa";
import { onErrorImage } from "../../../hooks/OnErrorImage";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";
import { useCarpetActions } from "../../../hooks/useCarpetActions";

interface RugsDetailDataProp {
  rugs: Carpet;
}

const RugsDetailData: FC<RugsDetailDataProp> = ({ rugs }) => {
  const {
    like,
    removeLike,
    bookmark,
    removeBookmark,
    isLiking,
    isRemovingLike,
    isBookmarking,
    isRemovingBookmark,
  } = useCarpetActions();

  const handleLike = () => {
    if (rugs?.isLike) {
      removeLike(rugs.id);
    } else {
      like(rugs.id);
    }
  };

  const handleBookmark = () => {
    if (rugs?.isFavorite) {
      removeBookmark(rugs.id);
    } else {
      bookmark(rugs.id);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 my-6 lg:my-10">
      {/* Main Content Section */}
      <div className="flex-1">
        <div className="flex flex-col md:flex-row gap-6 lg:gap-8">
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                src={rugs?.image}
                alt={rugs?.name}
                className="w-full h-64 md:h-80 lg:h-96 object-cover"
                onError={onErrorImage}
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 flex flex-col gap-4 lg:gap-6">
            {/* Title and Actions */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 flex-1">
                {rugs.name}
              </h1>
              <div className="flex items-center gap-3">
                <button
                  onClick={handleLike}
                  disabled={isLiking || isRemovingLike}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {rugs.isLike ? (
                    <FaHeart className="w-6 h-6 text-rose-500" />
                  ) : (
                    <FaRegHeart className="w-6 h-6 text-gray-600 hover:text-rose-500" />
                  )}
                </button>
                <button
                  onClick={handleBookmark}
                  disabled={isBookmarking || isRemovingBookmark}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {rugs.isFavorite ? (
                    <FaBookmark className="w-6 h-6 text-blue-500" />
                  ) : (
                    <FaRegBookmark className="w-6 h-6 text-gray-600 hover:text-blue-500" />
                  )}
                </button>
              </div>
            </div>

            {/* Size Info */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                <span className="text-sm font-medium text-gray-600">
                  اندازه فرش:
                </span>
                <span className="text-lg font-semibold text-gray-800">
                  {rugs.size}
                </span>
              </div>
            </div>

            {/* Features Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-800">ویژگی ها</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
                  <p className="text-xs text-gray-500 mb-1">رنگ زمینه</p>
                  <span className="font-semibold text-sm text-gray-800">
                    {rugs.color}
                  </span>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
                  <p className="text-xs text-gray-500 mb-1">کیفیت فرش</p>
                  <span className="font-semibold text-sm text-gray-800">
                    {rugs.quality}
                  </span>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
                  <p className="text-xs text-gray-500 mb-1">جنس نخ پود</p>
                  <span className="font-semibold text-sm text-gray-800">
                    ناب
                  </span>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
                  <p className="text-xs text-gray-500 mb-1">شکل</p>
                  <span className="font-semibold text-sm text-gray-800">
                    {rugs.shape}
                  </span>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
                  <p className="text-xs text-gray-500 mb-1">جنس نخ خاب</p>
                  <span className="font-semibold text-sm text-gray-800">
                    ناب
                  </span>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors">
                  <p className="text-xs text-gray-500 mb-1">جنس نخ تار</p>
                  <span className="font-semibold text-sm text-gray-800">
                    ناب
                  </span>
                </div>
              </div>
            </div>

            {/* Show All Features Button */}
            <div className="flex justify-center md:justify-start mt-4">
              <Button
                variant="danger"
                className="px-6 py-3 text-sm font-medium hover:bg-rose-700 hover:text-white transition-colors"
              >
                مشاهده همه ویژگی ها
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Seller Sidebar */}
      <div className="w-full lg:w-80 xl:w-96">
        <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-6 sticky top-6">
          <div className="space-y-6">
            {/* Seller Header */}
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">فروشنده</h3>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <AiOutlineShop className="w-6 h-6 text-gray-600" />
                </div>
                <span className="text-lg font-medium text-gray-800">
                  {rugs.seller}
                </span>
              </div>
            </div>

            {/* Performance */}
            <div className="flex items-center justify-between py-2">
              <span className="text-gray-600">عملکرد</span>
              <span className="text-green-600 font-semibold">عالی</span>
            </div>

            {/* Rating */}
            <div className="flex items-center justify-between py-2">
              <span className="text-gray-600">امتیاز</span>
              <div className="flex items-center gap-2">
                <FaRegStar className="text-yellow-500 w-5 h-5" />
                <span className="text-lg font-semibold text-gray-800">
                  {rugs.rating}
                </span>
              </div>
            </div>

            <hr className="border-gray-200" />

            {/* Price */}
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-600">قیمت:</span>
                <span className="text-xl font-bold text-gray-800">
                  {rugs.price.toLocaleString("fa-IR")} تومان
                </span>
              </div>

              {/* Add to Cart Button */}
              <Button
                variant="danger"
                className="w-full py-3 text-base font-semibold hover:bg-rose-700 hover:text-white transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
              >
                افزودن به سبد خرید
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RugsDetailData;
