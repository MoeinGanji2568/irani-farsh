import ClubImage from "../../assets/images/clubImage.png";
import Button from "../ui/Button";
const ClubSection = () => {
  return (
    <div className="px-4 sm:px-6 my-16 lg:grid lg:items-center  lg:gap-32 lg:min-w-[330px] lg:max-w-[1016px] lg:mx-auto lg:justify-center lg:grid-cols-[1fr_auto] lg:my-40">
      <div className="space-y-6 text-center lg:grid lg:justify-items-start lg:items-center lg:gap-6 lg:text-center lg:min-w-[438px]">
        <h2 className="text-2xl sm:text-3xl font-bold lg:text-[44px]">
          عضویت در باشگاه مشتریان <br />
          <span className="text-red block mt-3">ایرانی فرش</span>
        </h2>
        <p className="text-sm sm:text-base leading-relaxed px-4 lg:text-[20px] lg:w-[428px] lg:px-0">
          با عضویت در باشگاه مشتریان ایرانــی فرش زودتر از تخفیفات با خبر شوید و
          از امکان تحویل رایگان فرش های خود بهره مند شوید.
        </p>
        <Button variant="outline" className="w-full lg:w-full">
          ایجاد عضویت
        </Button>
      </div>
      <div className="mt-8 flex justify-center lg:mt-0 lg:overflow-hidden lg:block">
        <img
          src={ClubImage}
          alt="club carpet image"
          className="w-full max-w-xs sm:max-w-sm lg:max-w-none lg:w-auto"
        />
      </div>
    </div>
  );
};

export default ClubSection;
