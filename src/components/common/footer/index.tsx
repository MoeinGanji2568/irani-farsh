import NamadIcon from "../../../assets/images/namadIcon.png";
import InstagramIcon from "../../../assets/images/instagram.png";
import TelegramIcon from "../../../assets/images/telegram.png";
import LinkedinIcon from "../../../assets/images/Vector.png";

const Footer = () => {
  return (
    <div className="bg-secondary-100">
      <div className="holder flex flex-wrap justify-center lg:justify-between py-5">
        <div className="grid gap-8 mb-10">
          <h4 className="text-red font-bold text-2xl">ایرانی فرش</h4>
          <p className="max-w-[494px] text-secondary-600">
            با ایرانی فرش همراه باشید و از زیبایی و شگفتی های فرش های متنوع و با
            کیفیت ما لذت ببرید. خرید آسان، تحویل سریع و خدمات پس از فروش حرفه
            ای، تنها چندی از ویژگی های خرید از ماست. با ایرانی فرش یک خرید آسان
            و لذت بخش را تجربه کنید.
          </p>
          <div className="flex justify-between">
            <div className="text-secondary-600 grid gap-3">
              <span>تلفن پشتیبانی: 09900521873 </span>
              <div className="flex gap-4">
                <img
                  className="w-[24px] h-[24px]"
                  src={LinkedinIcon}
                  alt="Linkedin icon"
                />
                <img
                  className="w-[24px] h-[24px]"
                  src={TelegramIcon}
                  alt="Telegram icon"
                />
                <img
                  className="w-[24px] h-[24px]"
                  src={InstagramIcon}
                  alt="Instagram icon"
                />
              </div>
            </div>
            <div>
              <img src={NamadIcon} alt="Namad Icon" />
            </div>
          </div>
        </div>
        <div className="flex gap-x-5 md:gap-x-16 px-10">
          <div>
            <h6 className="font-bold text-secondary-600 mb-5">
              فرش های دست بافت
            </h6>
            <div className="text-secondary-650 grid gap-4">
              <span>لوکس</span>
              <span>قدیمی</span>
              <span>مدرن</span>
            </div>
          </div>
          <div>
            <h6 className="font-bold text-secondary-600 mb-5">
              فرش های ماشینی{" "}
            </h6>
            <div className="text-secondary-650 grid gap-4">
              <span>لوکس</span>
              <span>قدیمی</span>
              <span>مدرن</span>
            </div>
          </div>
          <div>
            <h6 className="font-bold text-secondary-600 mb-5">سایر فرش ها</h6>
            <div className="text-secondary-650 grid gap-4">
              <span>لوکس</span>
              <span>قدیمی</span>
              <span>مدرن</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
