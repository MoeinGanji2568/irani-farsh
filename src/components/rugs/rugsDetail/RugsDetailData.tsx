import { FC } from "react";
import { Rug } from "../../../data/dataTypes";
import Button from "../../ui/Button";
import { AiOutlineShop } from "react-icons/ai";
import { FaRegStar } from "react-icons/fa";

interface RugsDetailDataProp {
  rugs: Rug;
}

const RugsDetailData: FC<RugsDetailDataProp> = ({ rugs }) => {
  return (
    <div className="flexbetween gap-5 my-10">
      <div className="w-3/4 flexbetween">
        <div className="w-1/2">
          <img
            src={`/${rugs.image}`}
            alt={rugs.title}
            className="w-full h-full"
          />
        </div>
        <div className="w-1/2 flex flex-col gap-5">
          <span className="text-2xl font-semibold">{rugs.title}</span>
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
              <span className="font-semibold text-base">
                {rugs.warpMaterial}
              </span>
            </div>
            <div className="w-[48%] bg-gray-100 p-3 rounded-lg">
              <p className="text-sm text-gray-500">شکل</p>
              <span className="font-semibold text-base">{rugs.shape}</span>
            </div>
            <div className="w-[48%] bg-gray-100 p-3 rounded-lg">
              <p className="text-sm text-gray-500">جنس نخ خاب</p>
              <span className="font-semibold text-base">
                {rugs.weftMaterial}
              </span>
            </div>
            <div className="w-[48%] bg-gray-100 p-3 rounded-lg">
              <p className="text-sm text-gray-500">جنس نخ تار</p>
              <span className="font-semibold text-base">
                {rugs.pileMaterial}
              </span>
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
          <span>{rugs.price}</span>
        </div>
        <Button variant="danger" className="hover:bg-rose-700 hover:text-white">
          افزودن به سبد خرید
        </Button>
      </div>
    </div>
  );
};

export default RugsDetailData;
