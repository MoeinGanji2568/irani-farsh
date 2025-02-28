import HeroSectionImg from "../../assets/images/heroSection.png";
import Button from "../ui/Button";
const HeroSection = () => {
  return (
    <div
      className="holder font-semibold text-center flex flex-col 
    xl:flex-row-reverse items-center justify-between"
    >
      <img
        src={HeroSectionImg}
        alt="hero section image"
        className="object-cover my-14"
      />
      <div className="flex-col justify-center items-center">
        <h2 className="text-xl sm:text-3xl lg:text-[40px] font-bold">
          خرید راحت فرش،در
          <span className="text-red font-bold">ایرانی فرش</span>
        </h2>
        <p className="text-xs sm:text-2xl mt-6">
          با ایـــرانی فرش در سریع ترین زمان ممکن فرش خودت رو سفارش بده <br />و
          از تنوع بی نظیر فرش ها لذت ببر.
        </p>
        <div className="flex items-center justify-center gap-3 my-6">
          <Button variant="outline" className="text-sm p-2 sm:text-lg">
            محصولات ویژه ایرانی فرش
          </Button>
          <Button className="text-sm p-2 sm:text-lg">
            عضویت در باشگاه مشتریان
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
