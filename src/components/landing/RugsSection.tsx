import { useQuery } from "@tanstack/react-query";
import { FaArrowLeftLong } from "react-icons/fa6";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { getCarpet } from "../../services/api/carpets";
import Cards from "../common/Cards/Cards";
import Button from "../ui/Button";

const RugsSection = () => {
  const { data: rugs } = useQuery({
    queryKey: ["carpets"],
    queryFn: () => getCarpet(1, 4),
  });
  return (
    <div className="my-16 max-w-[1200px] mx-auto overflow-hidden px-4">
      <div className="flex justify-between items-center mt-4">
        <span className="text-xl font-bold">فرش‌های دستبافت</span>
        <Button
          variant="danger"
          className="flex items-center gap-3 p-2 w-[145px] hover:bg-rose-700 hover:text-white group"
        >
          مشاهده همه
          <FaArrowLeftLong className="size-5 text-current transition-colors duration-300 group-hover:text-white" />
        </Button>
      </div>

      <div className="block lg:hidden mt-8">
        <Swiper spaceBetween={16} slidesPerView={1.2}>
          {rugs?.map((rug) => (
            <SwiperSlide key={rug.id}>
              <div className="w-full max-w-[260px]">
                <Cards rug={rug} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden lg:grid grid-cols-4 gap-6 mt-8">
        {rugs?.map((rug) => (
          <Cards key={rug.id} rug={rug} />
        ))}
      </div>
    </div>
  );
};

export default RugsSection;
