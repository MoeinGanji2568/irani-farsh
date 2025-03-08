import ClubImage from "../../assets/images/clubImage.png";
import Button from "../ui/Button";
const ClubSection = () => {
  return (
    <div
      className="grid items-center gap-5 lg:gap-32 min-w-[330px] max-w-[1016px] mx-auto
     justify-center lg:grid-cols-[1fr_auto] my-40"
    >
      <div className="grid justify-items-start items-center gap-6 text-center min-w-[438px]">
        <h2 className="text-[44px]">
          عضویت در باشگاه مشتریان <br />
          <span className="text-red">ایرانی فرش</span>
        </h2>
        <p className="text-[20px] w-[428px]">
          با عضویت در باشگاه مشتریان ایرانــی فرش زودتر از تخفیفات با خبر شوید و
          از امکان تحویل رایگان فرش های خود بهره مند شوید.
        </p>
        <Button variant="outline" className="w-full">
          ایجاد عضویت
        </Button>
      </div>
      <div className="overflow-hidden">
        <img src={ClubImage} alt="club carpet image" />
      </div>
    </div>
  );
};

export default ClubSection;
