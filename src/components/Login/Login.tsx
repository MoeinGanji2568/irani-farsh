import { SubmitHandler, useForm } from "react-hook-form";
import loginCarpetImg from "../../assets/images/login carpet.svg";

const Login = () => {
  interface LoginFormInputs {
    phone: string;
    password: string;
  }

  const { register, handleSubmit } = useForm<LoginFormInputs>();

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    console.log("اطلاعات فرم:", data);
  };

  return (
    <div className="holder w-fill h-screen flex justify-center items-center gap-10">
      <div className="w-2/4 h-5/6 flex flex-col justify-center items-center">
        <span className="text-[#CB1B1B] text-3xl font-bold">ایرانی فرش</span>
        <span className="text-[#9E1515] text-2xl font-bold block mt-3">
          ورود
        </span>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-full h-auto px-16 gap-3 mt-5"
          action=""
        >
          {/* <label className="text-lg text-[#CB1B1B] font-semibold">شماره همراه</label> */}
          <input
            {...register("phone")}
            className="border border-[#CB1B1B] h-14 rounded-xl px-3"
            type="text"
            placeholder="شماره همراه"
          />
          {/* <label className="text-lg text-[#CB1B1B] font-semibold">رمزعبور</label> */}
          <input
            {...register("password")}
            className="border border-[#CB1B1B] h-14 rounded-xl px-3"
            type="password"
            placeholder="رمز عبور"
          />
          <button className="bg-[#CB1B1B] h-14 rounded-xl text-white text-lg font-semibold">
            ورود
          </button>
        </form>
        <span className="text-[##121212] text-xl font-medium mt-5">
          ثبت نام نکرده اید؟همین حالا عضو شوید
        </span>
      </div>
      <img src={loginCarpetImg} alt="carpetPic" className="w-1/3 h-5/6" />
    </div>
  );
};

export default Login;
