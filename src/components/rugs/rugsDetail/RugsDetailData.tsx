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
    <div className="flexbetween gap-5 my-10">
      <div className="w-3/4 flexbetween">
        <div className="w-1/2 p-4">
          <img
            src={rugs?.image}
            alt={rugs?.name}
            className="w-full h-full"
            onError={onErrorImage}
          />
        </div>
        <div className="w-1/2 flex flex-col gap-5">
          <div className="flex items-center gap-4">
            <span className="text-2xl font-semibold">{rugs.name}</span>
            <button
              onClick={handleLike}
              disabled={isLiking || isRemovingLike}
              className="disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {rugs.isLike ? (
                <FaHeart className="size-6 cursor-pointer text-rose-500" />
              ) : (
                <FaRegHeart className="size-6 cursor-pointer" />
              )}
            </button>
            <button
              onClick={handleBookmark}
              disabled={isBookmarking || isRemovingBookmark}
              className="disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {rugs.isFavorite ? (
                <FaBookmark className="size-6 cursor-pointer text-blue-300" />
              ) : (
                <FaRegBookmark className="size-6 cursor-pointer" />
              )}
            </button>
          </div>
          <div className="flex gap-8">
            <span className="text-lg">اندازه فرش:</span>
            <span className="text-lg">{rugs.size}</span>
          </div>
          <span className="text-lg">ویژگی ها</span>
          <div className="flex flex-wrap w-full max-w-md gap-4 mb-3">
            <div className="w-[48%] bg-gray-100 p-3 rounded-lg">
              <p className="text-sm text-gray-500">رنگ زمینه</p>
              <span className="font-semibold text-base">{rugs.color}</span>
            </div>
            <div className="w-[48%] bg-gray-100 p-3 rounded-lg">
              <p className="text-sm text-gray-500">کیفیت فرش</p>
              <span className="font-semibold text-base">{rugs.quality}</span>
            </div>
            <div className="w-[48%] bg-gray-100 p-3 rounded-lg">
              <p className="text-sm text-gray-500">جنس نخ پود</p>
              <span className="font-semibold text-base">ناب</span>
            </div>
            <div className="w-[48%] bg-gray-100 p-3 rounded-lg">
              <p className="text-sm text-gray-500">شکل</p>
              <span className="font-semibold text-base">{rugs.shape}</span>
            </div>
            <div className="w-[48%] bg-gray-100 p-3 rounded-lg">
              <p className="text-sm text-gray-500">جنس نخ خاب</p>
              <span className="font-semibold text-base">ناب</span>
            </div>
            <div className="w-[48%] bg-gray-100 p-3 rounded-lg">
              <p className="text-sm text-gray-500">جنس نخ تار</p>
              <span className="font-semibold text-base">ناب</span>
            </div>
          </div>
          <Button
            variant="danger"
            className="p-2 w-[180px] m-auto hover:bg-rose-700 hover:text-white"
          >
            مشاهده همه ویژگی ها
          </Button>
        </div>
      </div>
      <div className="border w-1/4 h-[350px] basicborder flex flex-col justify-between p-3">
        <span className="text-lg font-bold">فروشنده</span>
        <div className="flex items-center gap-2">
          <AiOutlineShop className="size-6" />
          <span className="text-lg">{rugs.seller}</span>
        </div>
        <div className="flex gap-1">
          <span>عملکرد</span>
          <span className="text-green-700">عالی</span>
        </div>
        <div className="flex gap-1">
          <FaRegStar className="text-yellow-500 size-5" />
          <span className="text-lg">{rugs.rating}</span>
        </div>
        <hr />
        <div className="flexbetween text-lg">
          <span>قیمت:</span>
          <span>{rugs.price.toLocaleString("fa-IR")} تومان</span>
        </div>
        <Button variant="danger" className="hover:bg-rose-700 hover:text-white">
          افزودن به سبد خرید
        </Button>
      </div>
    </div>
  );
};

export default RugsDetailData;
