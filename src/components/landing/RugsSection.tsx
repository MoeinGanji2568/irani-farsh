import Cards from "../common/Cards/Cards";
import Button from "../ui/Button";
import { FaArrowLeftLong } from "react-icons/fa6";

const RugsSection = () => {
  return (
    <div className="my-16 max-w-[1200px] h-[500px] m-auto">
      <div className="flexbetween mt-4">
        <span className="text-xl font-bold">فرش های دستبافت</span>
        <Button
          variant="danger"
          className="basicflex gap-3 p-2 w-[145px] hover:bg-rose-700 hover:text-white group"
        >
          مشاهده همه
          <FaArrowLeftLong className="size-5 text-current transition-colors duration-300 group-hover:text-white" />
        </Button>
      </div>
      <div className="w-full mt-8 h-full basicflex gap-8">
        <Cards />
      </div>
    </div>
  );
};

export default RugsSection;
