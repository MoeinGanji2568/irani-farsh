import { SubmitHandler, useForm } from "react-hook-form";
import loginCarpetImg from "../../assets/images/login carpet.svg";
import { useLogin } from "../../hooks/useLogin";

const Login = () => {
  interface LoginFormInputs {
    email: string;
    password: string;
  }

  const { register, handleSubmit } = useForm<LoginFormInputs>();
  const { mutate: login } = useLogin();

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    login(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
        {/* Login Form Section */}
        <div className="w-full max-w-md lg:max-w-lg">
          <div className="bg-white rounded-2xl shadow-2xl p-8 lg:p-10">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-[#CB1B1B] text-4xl lg:text-5xl font-bold mb-2">
                ایرانی فرش
              </h1>
              <p className="text-gray-600 text-sm lg:text-base">
                به پلتفرم خرید فرش ایرانی خوش آمدید
              </p>
            </div>

            {/* Login Title */}
            <div className="text-center mb-8">
              <h2 className="text-[#9E1515] text-2xl lg:text-3xl font-bold">
                ورود به حساب کاربری
              </h2>
              <p className="text-gray-500 text-sm mt-2">
                لطفا اطلاعات خود را وارد کنید
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Email Input */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700"
                >
                  ایمیل
                </label>
                <input
                  {...register("email")}
                  id="email"
                  className="w-full h-12 lg:h-14 px-4 border-2 border-gray-200 rounded-xl focus:border-[#CB1B1B] focus:ring-2 focus:ring-red-100 transition-all duration-300 outline-none placeholder-gray-400"
                  type="email"
                  placeholder="example@email.com"
                />
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-700"
                >
                  رمز عبور
                </label>
                <input
                  {...register("password")}
                  id="password"
                  className="w-full h-12 lg:h-14 px-4 border-2 border-gray-200 rounded-xl focus:border-[#CB1B1B] focus:ring-2 focus:ring-red-100 transition-all duration-300 outline-none placeholder-gray-400"
                  type="password"
                  placeholder="رمز عبور خود را وارد کنید"
                />
              </div>

              {/* Forgot Password */}
              <div className="text-left">
                <a
                  href="#"
                  className="text-sm text-[#CB1B1B] hover:text-[#9E1515] transition-colors duration-200"
                >
                  فراموشی رمز عبور؟
                </a>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full h-12 lg:h-14 bg-gradient-to-r from-[#CB1B1B] to-[#9E1515] hover:from-[#9E1515] hover:to-[#7A1010] text-white text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
              >
                ورود
              </button>
            </form>

            {/* Sign Up Link */}
            <div className="text-center mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-600 text-sm lg:text-base">
                ثبت نام نکرده اید؟{" "}
                <a
                  href="#"
                  className="text-[#CB1B1B] hover:text-[#9E1515] font-semibold transition-colors duration-200"
                >
                  همین حالا عضو شوید
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="hidden lg:block w-full max-w-md lg:max-w-lg order-first lg:order-last">
          <div className="relative">
            <img
              src={loginCarpetImg}
              alt="فرش ایرانی"
              className="w-full h-auto max-h-96 lg:max-h-[600px] object-contain drop-shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
